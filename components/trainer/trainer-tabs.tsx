import { Tabs } from "flowbite-react";
import ClientView from "./client-view";
import TrainerWorkoutsView from "./trainer-workouts-view";
import CreateClientForm from "../form/create_client_form";
export default function TrainerTabs({ clients, workouts }: any) {
  return (
    <Tabs aria-label="Pills" style="pills">
      <Tabs.Item active title="Create Client">
        <CreateClientForm />
      </Tabs.Item>
      <Tabs.Item title="Modify Client">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 2</p>
      </Tabs.Item>
      <Tabs.Item title="Workout Programs">
        <TrainerWorkoutsView workouts={workouts}></TrainerWorkoutsView>
      </Tabs.Item>
      <Tabs.Item title="Client">
        <ClientView clients={clients}></ClientView>
      </Tabs.Item>
    </Tabs>
  );
}
