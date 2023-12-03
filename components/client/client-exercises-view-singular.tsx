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
  import { useRouter } from "next/router";
  
  export default async function ClientWorkoutSpecific({ params }: any) {
    const session: Session | null = await auth();
    if (!params.workoutId || !isFinite(params.workoutId))
      return <div>Not authenticated</div>;
    const url = `https://afefitness2023.azurewebsites.net/api/WorkoutPrograms/${params.workoutId}`;
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
      return <div>No workout program found with the id {params.workoutId}</div>;
    return (
      <div>
        <h1 className="pb-5 font-bold text-6xl mt-6">Workout Exercises View</h1>
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
  