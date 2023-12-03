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
import ClientWorkoutSpecific from "@/components/client/client-exercises-view-singular";

export default async function SpecificWorkout({ params }: any) {
  const session: Session | null = await auth();
  if (!params.workoutProgramId || !isFinite(params.workoutProgramId))
    return <div>Not authenticated - workoutID not found</div>;
  const url = `https://afefitness2023.azurewebsites.net/api/WorkoutPrograms/${params.workoutProgramId}`;
  //@ts-ignore
  const jwt_external = session?.user?.jwt_external;
  if (!jwt_external) return <div>Not authenticated - session/user not found</div>;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt_external}`,
    },
    cache: "no-cache",
  });

  const workoutData = await res.json();

  if (!workoutData)
    return <div>No workout program found with the id {workoutData.workoutProgramId}</div>;
  return (
    <ClientWorkoutSpecific workoutId={workoutData.workoutProgramId}/>
  );
}
