import ManagerTabs from "@/components/manager/manager-tabs";

export default async function ManagerPage() {
  return (
    <div>
      <p className="mb-10">You are a Manager, welcome!</p>
      <ManagerTabs></ManagerTabs>
    </div>
  );
}
