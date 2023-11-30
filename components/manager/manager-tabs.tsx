import { Tabs, TabItem } from "flowbite-react";
import CreateTrainerForm from "../form/create_trainer_form";
import ListTrainers from "./list-trainers";
export default async function ManagerTabs({}: any) {
  return (
    <Tabs aria-label="Pills" style="pills">
      <TabItem active title="Profile">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Profile Data (Seperate Component)
        </p>
      </TabItem>
      <TabItem title="Create Personal Trainer">
        <div className="flex content-center w-600">
          <CreateTrainerForm></CreateTrainerForm>
          <ListTrainers />
        </div>
      </TabItem>
    </Tabs>
  );
}
