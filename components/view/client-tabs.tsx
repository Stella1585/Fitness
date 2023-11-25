"use client";
import { Tabs } from "flowbite-react";
import ClientView from "./client-view";
import TrainerWorkoutsView from "./trainer-workouts-view";
export default function ClientTabs({ clients, workouts }: any) {
  return (
    <Tabs aria-label="Pills" style="pills">
      <Tabs.Item active title="Profile">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Profile Data (Seperate Component)
        </p>
      </Tabs.Item>
      <Tabs.Item title="Workout Programs">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          List of Workouts (Seperate Component)
        </p>
      </Tabs.Item>
    </Tabs>
  );
}
