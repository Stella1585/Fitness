"use client";
import { Tabs } from "flowbite-react";
export default function ManagerTabs({}: any) {
  return (
    <Tabs aria-label="Pills" style="pills">
      <Tabs.Item active title="Profile">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Profile Data (Seperate Component)
        </p>
      </Tabs.Item>
      <Tabs.Item title="Create Personal Trainer">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Create Personal Trainer Form (Seperate Component)
        </p>
      </Tabs.Item>
    </Tabs>
  );
}
