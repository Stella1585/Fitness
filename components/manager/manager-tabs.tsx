"use client";
import { Tabs } from "flowbite-react";
import CreateTrainerForm from "../form/create_trainer_form";
export default function ManagerTabs({}: any) {
  return (
    <Tabs aria-label="Pills" style="pills">
      <Tabs.Item active title="Profile">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Profile Data (Seperate Component)
        </p>
      </Tabs.Item>
      <Tabs.Item title="Create Personal Trainer">
        <CreateTrainerForm></CreateTrainerForm>
      </Tabs.Item>
    </Tabs>
  );
}
