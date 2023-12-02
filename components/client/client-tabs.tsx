import { Tabs, TabItem } from "flowbite-react";
import ClientWorkoutsView from "./client-workouts-view";
export default function ClientTabs({ clients, workouts }: any) {
  return (
    <Tabs aria-label="Pills" style="pills">
      <TabItem title="Workout Programs">
        <ClientWorkoutsView />
      </TabItem>
    </Tabs>
  );
}
