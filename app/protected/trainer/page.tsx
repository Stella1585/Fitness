import { auth } from "auth";

export default async function ClientPage() {
  const session = await auth();

  if (session && session?.user?.role === "PersonalTrainer") {
    return <p>You are an Personal Trainer, welcome!</p>;
  }

  return <p>You are not authorized to view this page!</p>;
}
