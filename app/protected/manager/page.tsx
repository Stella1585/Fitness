import { auth } from "auth";

export default async function ManagerPage() {
  const session = await auth();

  //@ts-ignore
  if (session && session?.user?.role === "Manager") {
    return (
      <div>
        <p>You are an Manager, welcome!</p>
        </div>
    );
  }

  return <p>You are not authorized to view this page!</p>;
}
