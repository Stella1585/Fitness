import { auth } from "auth";
import { Session } from "next-auth";
import ManagerTabs from "@/components/manager/manager-tabs";

export default async function ManagerPage() {
  const session: Session | null = await auth();

  //@ts-ignore
  // if ((!session || !session?.user) && session?.user?.role !== "Manager")
  //   return <p>You are not authorized to view this page!</p>;

  return (
    <div>
      <p className="mb-10">You are an Manager, welcome!</p>
      <ManagerTabs></ManagerTabs>
    </div>
  );
}
