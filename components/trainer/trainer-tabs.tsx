import { Tabs, TabItem } from "flowbite-react";
import ClientView from "./lists-clients";
import TrainerWorkoutsView from "./trainer-workouts-view";
import CreateClientForm from "../form/create_client_form";
import CreateWorkoutProgramForm from "../form/create_workout_program_form";
export default function TrainerTabs() {
  return (
    <Tabs aria-label="Pills" style="pills">
      <TabItem active title="Create Client">
        <CreateClientForm />
      </TabItem>
      <TabItem title="Create Workout Program Client">
        <CreateWorkoutProgramForm />
      </TabItem>
      <TabItem title="Workout Programs">
        <TrainerWorkoutsView/>
      </TabItem>
      <TabItem title="Client">
        <ClientView />
      </TabItem>
    </Tabs>
  );
}
