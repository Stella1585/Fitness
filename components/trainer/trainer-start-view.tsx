"use client";
import { useEffect, useState } from "react";
import TrainerTabs from "@/components/trainer/trainer-tabs";

export default function TrainerStartView() {
  const [clients, setClients]: any = useState();
  const [workouts, setWorkouts]: any = useState();
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/external/trainer/client/multiple/get");
      const json = await res.json();

      const resWorkouts = await fetch(
        "/api/external/trainer/workout/multiple/get"
      );
      const jsonWorkouts = await resWorkouts.json();

      if (res.ok && resWorkouts.ok) {
        setClients(json);
        setWorkouts(jsonWorkouts);
      }
    })();
  }, []);

  if (!workouts) return <div>Loading ...</div>;

  if (!clients) return <div>Loading ...</div>;

  return (
    <div>
      <TrainerTabs clients={clients} workouts={workouts} />
    </div>
  );
}
