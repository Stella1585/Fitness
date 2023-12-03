import { auth } from 'auth';
import { Session } from 'next-auth';

export default async function UserProfile() {
  const session: Session | null = await auth();
  let userRole: string | undefined;
  if (session) {
    //@ts-ignore
    userRole = session?.user?.role;
  }
  //@ts-ignore
  const jwt_external = session?.user?.jwt_external;
  if (!jwt_external) return <div>Not authenticated</div>;

  const userId = session?.user?.id;

  if (!userId) return <div>User ID not available</div>;

  const url = `https://afefitness2023.azurewebsites.net/api/Users/${userId}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt_external}`,
    },
    cache: 'no-cache',
  });

  if (!response.ok) {
    console.error('Failed to fetch user details:', response.statusText);
    return <div>Error fetching user details</div>;
  }

  const userDetails = await response.json();

  return (
    <div className="border p-4 mb-4">
      <h2 className="text-2xl font-bold mb-2 text-teal-600">User Profile</h2>
      <p className="text-lg text-teal-600 dark:text-teal-400">
        <strong>First Name:</strong> {userDetails?.firstName}
      </p>
      <p className="text-lg text-teal-600 dark:text-teal-400">
        <strong>Last Name:</strong> {userDetails?.lastName}
      </p>
      <p className="text-lg text-teal-600 dark:text-teal-400">
        <strong>Email:</strong> {userDetails?.email}
      </p>
      {userRole === "Client" && (
        <p className="text-lg text-teal-600 dark:text-teal-400">
          <strong>Personal Trainer ID:</strong> {userDetails?.personalTrainerId}
        </p>
      )}
    </div>
  );
}
