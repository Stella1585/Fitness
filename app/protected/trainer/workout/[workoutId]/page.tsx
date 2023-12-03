import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableHeadCell,
} from "flowbite-react";
import Link from "next/link";
import { auth } from "auth";
import { Session } from "next-auth";
import AddExerciseWorkoutProgramForm from "@/components/form/add_exercise_workout_program_form";

export default async function SpecificWorkout({ params }: any) {
  const session: Session | null = await auth();
  if (!params.workoutId || !isFinite(params.workoutId))
    return <div>Not authenticated</div>;
  const url = `https://afefitness2023.azurewebsites.net/api/WorkoutPrograms/${params.workoutId}`;
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

  const workoutData = await res.json();

  if (!workoutData)
    return <div>No workout program found with the id {params.workoutId}</div>;
  return (
    <div className="container mx-auto p-8">
      <Link 
        className="inline-block px-4 py-2 text-lg font-medium text-white bg-teal-600 dark:bg-teal-400 hover:bg-teal-700 dark:hover:bg-teal-500 rounded"
        href="/protected/trainer">
          Back
      </Link>
      <div className="mb-8">
        <h1 className="text-5xl font-bold mt-6 mb-4">List of Exercises</h1>
        <div className="overflow-x-auto mt-4">
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
                    {exercise?.repetitions} {exercise?.time ? `/ ${exercise?.time}` : ""}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div>
        <h1 className="text-5xl font-bold mt-6 mb-4">Add Exercise</h1>
        <AddExerciseWorkoutProgramForm workoutId={params.workoutId} />
      </div>
    </div>
  );
}
