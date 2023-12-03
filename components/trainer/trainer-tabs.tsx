import { Tabs, TabItem } from "flowbite-react";
import ClientView from "./lists-clients";
import TrainerWorkoutsView from "./trainer-workouts-view";
import CreateClientForm from "../form/create_client_form";
import CreateWorkoutProgramForm from "../form/create_workout_program_form";
import UserProfile from '../profile';

export default function TrainerTabs() {
  return (
    <Tabs aria-label="Pills" style="pills">
      <TabItem active title="Profile">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <UserProfile />
        </div>
      </TabItem>
      <TabItem title="View Clients">
        <ClientView />
      </TabItem>
      <TabItem active title="Add Client">
        <CreateClientForm />
      </TabItem>
      <TabItem title="Add Workout Program">
        <CreateWorkoutProgramForm />
      </TabItem>
      <TabItem title="View Workout Programs">
        <TrainerWorkoutsView/>
      </TabItem>
    </Tabs>
  );
}
