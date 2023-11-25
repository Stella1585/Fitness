import { auth } from "auth";
import { redirect } from "next/navigation";
import TrainerStartView from "@/components/view/trainer-start-view";

export default async function TrainerPage() {
  // const session = await auth();

  //@ts-ignore
  // if (session?.user?.role != "PersonalTrainer") redirect("/");

  return <TrainerStartView />;
}
