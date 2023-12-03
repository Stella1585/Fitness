import { Tabs, TabItem } from "flowbite-react";
import ClientWorkoutsView from "./client-workouts-view";
import UserProfile from '../profile';
export default function ClientTabs({ clients, workouts }: any) {
  return (
    <Tabs aria-label="Pills" style="pills">
    <TabItem active title="Profile">
      <div className="text-sm text-gray-500 dark:text-gray-400">
          <UserProfile />
        </div>
      </TabItem>
      <TabItem title="Workout Programs">
        <ClientWorkoutsView />
      </TabItem>
      
    </Tabs>
  );
}



