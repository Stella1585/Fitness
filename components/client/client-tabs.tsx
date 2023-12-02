import { Tabs, TabItem } from "flowbite-react";
import ClientWorkoutsView from "./client-workouts-view";
export default function ClientTabs({ clients, workouts }: any) {
  return (
    <Tabs aria-label="Pills" style="pills">
      <TabItem active title="Profile">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Profile Data (Seperate Component)
        </p>
      </TabItem>
      <TabItem title="Workout Programs">
        <ClientWorkoutsView />
      </TabItem>
    </Tabs>
  );
}
