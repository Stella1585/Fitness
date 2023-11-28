"use client";
import { Tabs } from "flowbite-react";
import TrainerWorkoutsView from "../trainer/trainer-workouts-view";
import ClientWorkoutsView from "./client-workouts-view";
export default function ClientTabs({ clients, workouts }: any) {
  return (
    <Tabs aria-label="Pills" style="pills">
      <Tabs.Item active title="Profile">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Profile Data (Seperate Component)
        </p>
      </Tabs.Item>
      <Tabs.Item title="Workout Programs">
        <ClientWorkoutsView />
      </Tabs.Item>
    </Tabs>
  );
}
