import { auth } from "auth";

export default async function ClientPage() {
  const session = await auth();

  if (session && session?.user?.role === "Manager") {
    return <p>You are an Manager, welcome!</p>;
  }

  return <p>You are not authorized to view this page!</p>;
}
