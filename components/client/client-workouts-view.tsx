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
export default async function ClientWorkoutsView({}) {
  const session = await auth();
  if (!session) return <div>Not authenticated!</div>;
  //@ts-ignore
  const jwt = session.user?.jwt_external;
  const res = await fetch(
    `https://afefitness2023.azurewebsites.net/api/WorkoutPrograms`,
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

    <div className="overflow-x-auto">
        
        <Table>
        <Table.Head>
            <Table.HeadCell>Exercise</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Sets</Table.HeadCell>
            <Table.HeadCell>Reps/Time</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
            {workouts.map((workout: any) => (
            <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={workout.exercise} >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {workout?.name}
                </Table.Cell>
                <Table.Cell>{workout?.description}</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
            </Table.Row>
            ))}
        </Table.Body>
        </Table>

    </div>
  );
}
