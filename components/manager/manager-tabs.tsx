import { Tabs, TabItem } from "flowbite-react";
import CreateTrainerForm from "../form/create_trainer_form";
import ListTrainers from "./list-trainers";
import UserProfile from '../profile';

export default async function ManagerTabs({}: any) {
  return (
    <Tabs aria-label="Pills" style="pills">
      <TabItem active title="Profile">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <UserProfile />
        </div>
      </TabItem>
      <TabItem title="Add Personal Trainer">
        <div className="flex justify-center">
          <div className="w-1/2 pr-4">
            <CreateTrainerForm />
          </div>
          <div className="w-1/2 pl-4">
            <ListTrainers />
          </div>
        </div>
      </TabItem>
    </Tabs>
  );
}
