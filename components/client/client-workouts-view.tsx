import { auth } from "auth";
export default async function ClientWorkoutsView() {
  const session = await auth();
  if (!session) return <div>Not authenticated!</div>;
  //@ts-ignore
  const jwt = session.user?.jwt_external;
  const res = await fetch(
    "https://afefitness2023.azurewebsites.net/api/WorkoutPrograms",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
  const workouts = await res.json();

  if (!workouts) return <div>Loading ...</div>;

  return (
    <div>
      {workouts.map((workout: any) => (
        <div key={workout?.workoutProgramId}>
          <div>{workout?.name}</div>
        </div>
      ))}
    </div>
  );
}
