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

  });

  const workoutData = await res.json();

  if (!workoutData)
    return <div>No workout program found with the id {params.workoutId}</div>;
  return (
    <ClientWorkoutSpecific/>
  );
}

