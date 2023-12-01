import { auth } from "auth";
import { Session } from "next-auth";

export default async function ListTrainers() {
  const session: Session | null = await auth();
  //@ts-ignore
  const jwt_external = session?.user?.jwt_external;
  if (!jwt_external) return <div>Not authenticated</div>;
  const res = await fetch(
    "https://afefitness2023.azurewebsites.net/api/Users",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt_external}`,
      },
      cache: "no-cache",
      next: {
        tags: ["personalTrainers"],
      },
    }
  );

  const trainers = await res.json();

  return (
    <div className="overflow-y-scroll max-h-96 pl-10">
      {trainers
        ?.slice(0)
        .reverse()
        .map((trainer: any) => (
          <div key={trainer.userId}>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {trainer.email}
            </p>
          </div>
        ))}
    </div>
  );
}
