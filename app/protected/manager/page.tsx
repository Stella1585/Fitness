import { auth } from "auth";
import ManagerTabs from "@/components/view/manager-tabs";

export default async function ManagerPage() {
  const session = await auth();

  //@ts-ignore
  if (!session && session?.user?.role !== "Manager")
    return <p>You are not authorized to view this page!</p>;

  return (
    <div>
      <p className="mb-10">You are an Manager, welcome!</p>
      <ManagerTabs></ManagerTabs>
    </div>
  );
}
