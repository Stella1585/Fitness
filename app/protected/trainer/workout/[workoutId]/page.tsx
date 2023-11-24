"use client";
import { Table } from "flowbite-react";
// import { auth } from "auth";
import { useEffect, useState } from "react";

export default function SpecificWorkout({ params }: any) {
  const [workoutData, setWorkoutData] = useState([]);
  // const session = await auth();
  // console.log("ses: ", session);

  useEffect(() => {
    (async () => {
      //TODO: must be checked
      if (params.workoutId || isFinite(params.workoutId)) {
      }
      const res = await fetch(
        `/api/external/trainer/workout/single/get/${params.workoutId}`
      );

      if (!res.ok) return;

      const json = await res.json();

      console.log(json);

      setWorkoutData(json);
    })();
  }, []);

  return (
    <div>
      <h1 className="pb-5 font-bold text-6xl">Workout Exercises View</h1>
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Sets</Table.HeadCell>
            <Table.HeadCell>Reps/time</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {workoutData?.exercises?.map((exercise: any) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={exercise.exerciseId}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {exercise?.name}
                </Table.Cell>
                <Table.Cell>{exercise?.description}</Table.Cell>
                <Table.Cell>{exercise?.sets}</Table.Cell>
                <Table.Cell>
                  {exercise?.repetitions}{" "}
                  {exercise?.time ? `/ ${exercise?.time}` : ""}{" "}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
