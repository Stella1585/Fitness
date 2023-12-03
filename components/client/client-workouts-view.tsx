import { auth } from "auth";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableHeadCell,
} from "flowbite-react";
import { Session } from "next-auth";
import ClientWorkoutSpecific from "./client-exercises-view-singular";
export default async function ClientWorkoutsView() {
  const session: Session | null = await auth();
  if (!session) return <div>Not authenticated!</div>;
  //@ts-ignore
  const jwt = session?.user?.jwt_external;
  const userId = session?.user?.id;
  console.log(jwt);
  console.log(userId);
  console.log((!jwt || !userId));
  

  // if (!jwt || !userId) return <div>Not authenticated</div>;

  const res = await fetch(
    `https://afefitness2023.azurewebsites.net/api/WorkoutPrograms/client/${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      cache: "no-cache",
      next: {
        tags: ["workoutProgramsClient"],
      },
    }
  );
  const workouts = await res.json();

  if (!workouts) return <div>Loading ...</div>;

    console.log(workouts);
    

  if (workouts.length === 0) return <p>No workout programs</p>

  if (workouts.length > 1)
  return (

    <Table>
    <TableHead>
      <TableHeadCell>Program Name</TableHeadCell>
      <TableHeadCell>Description</TableHeadCell>
      <TableHeadCell></TableHeadCell>
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
          <TableCell>
            <Link
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href={{pathname: `/protected/client/workout/${workout.workoutProgramId}`} }
            >
              View
            </Link>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table> 

  )

  return (
    <ClientWorkoutSpecific workoutId={workouts[0]?.workoutProgramId} />
  );
}
