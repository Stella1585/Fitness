import { auth } from "auth";
import ClientTabs from "@/components/client/client-tabs";
import { redirect } from "next/navigation";

export default async function ClientPage() {
  // const session = await auth();

  //@ts-ignore
  // if (session?.user?.role != "Client") redirect("/");
  //@ts-ignore
  // if (session?.user?.role != "Client")
  //   return <p>You are not authorized to view this page!</p>;

  return <ClientTabs />;
}
