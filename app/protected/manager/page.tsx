import { auth } from "auth";
import { Session } from "next-auth";
import ManagerTabs from "@/components/manager/manager-tabs";

export default async function ManagerPage() {
  return (
    <div>
      <p className="mb-10">You are an Manager, welcome!</p>
      <ManagerTabs></ManagerTabs>
    </div>
  );
}
