"use client";
import { auth } from "auth";
import { useEffect, useState } from "react";
import ClientView from "@/components/view/client-view";
import TrainerTabs from "@/components/view/trainer-tabs";

export default function TrainerPage() {
  // const session = await auth();

  const [clients, setClients]: any = useState([]);
  const [workouts, setWorkouts]: any = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/external/trainer/client/multiple/get");
      const json = await res.json();

      const resWorkouts = await fetch(
        "/api/external/trainer/workout/multiple/get"
      );
      const jsonWorkouts = await resWorkouts.json();

      console.log(json[0]);

      setWorkouts(jsonWorkouts);

      setClients(json);
    })();
  }, []);

  //@ts-ignore

  // if ("use server" && session && session?.user?.role === "PersonalTrainer") {
  if (!clients) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <TrainerTabs clients={clients} workouts={workouts} />
    </div>
  );
}
