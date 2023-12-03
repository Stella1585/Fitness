import {
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableHead,
    TableHeadCell,
  } from "flowbite-react";
  import { auth } from "auth";
  import { Session } from "next-auth";
  
  export default async function ClientWorkoutSpecific({ workoutId }: any) {
    const session: Session | null = await auth();
    if (!workoutId || !isFinite(workoutId))
      return <div>Not authenticated</div>;
    const url = `https://afefitness2023.azurewebsites.net/api/WorkoutPrograms/${workoutId}`;
    //@ts-ignore
    const jwt = session?.user?.jwt_external;
    if (!jwt) return <div>Not authenticated</div>;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      cache: "no-cache",
    });
  
    const workoutData = await res.json();
  
    if (!workoutData)
      return <div>No workout program found with the id {workoutId}</div>;
    return (
      <div>
        <h2 className="text-2xl font-bold mb-2 text-teal-600">{workoutData?.name}</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHead>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Description</TableHeadCell>
              <TableHeadCell>Sets</TableHeadCell>
              <TableHeadCell>Reps/time</TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              {workoutData?.exercises?.map((exercise: any) => (
                <TableRow
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={exercise.exerciseId}
                >
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {exercise?.name}
                  </TableCell>
                  <TableCell>{exercise?.description}</TableCell>
                  <TableCell>{exercise?.sets}</TableCell>
                  <TableCell>
                    {exercise?.repetitions}{" "}
                    {exercise?.time ? `/ ${exercise?.time}` : ""}{" "}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
  