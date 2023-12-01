import { auth } from "auth";
import { Session } from "next-auth";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableHeadCell,
} from "flowbite-react";
export default async function TrainerWorkoutsView() {
  const session: Session | null = await auth();
  const url =
    "https://afefitness2023.azurewebsites.net/api/WorkoutPrograms/trainer";
  //@ts-ignore
  const jwt_external = session?.user?.jwt_external;
  if (!jwt_external) return <div>Not authenticated</div>;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt_external}`,
    },
    cache: "no-cache",
    next: {
      tags: ["workoutProgramsTrainer"],
    },
  });
  const workouts = await res.json();
  // const router = useRouter();

  if (!res.ok || !workouts || workouts.length === 0)
    return <div>No workouts found ...</div>;

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Description</TableHeadCell>
          <TableHeadCell>Client_Name</TableHeadCell>
          <TableHeadCell></TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {workouts.map((workout: any) => (
            <TableRow
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={workout.workoutProgramId}
            >
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {workout?.name}
              </TableCell>
              <TableCell>{workout?.description}</TableCell>
              <TableCell>{workout?.clientId}</TableCell>

              <TableCell>
                <Link
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href={`/protected/trainer/workout/${workout.workoutProgramId}`}
                >
                  View
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
