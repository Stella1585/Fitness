import { Table } from "flowbite-react";
import { useRouter } from "next/navigation";
export default function TrainerWorkoutsView({ workouts }: { workouts: any }) {
  // console.log(workouts);
  const router = useRouter();

  if (!workouts || workouts.length === 0)
    return <div>No workouts found ...</div>;

  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Client_Name</Table.HeadCell>
          <Table.HeadCell>Reps/time</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {workouts.map((workout: any) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={workout.workoutProgramId}
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {workout?.name}
              </Table.Cell>
              <Table.Cell>{workout?.name}</Table.Cell>
              <Table.Cell>{workout?.clientId}</Table.Cell>
              <Table.Cell
                onClick={() => {
                  router.push(
                    `/protected/trainer/workout/${workout.workoutProgramId}`
                  );
                  // console.log("test click");
                }}
              >
                <a
                  //href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  View
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
