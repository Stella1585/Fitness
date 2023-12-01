import { auth } from "auth";
import ClientTabs from "@/components/client/client-tabs";
import { redirect } from "next/navigation";

export default async function ClientPage() {
  return <ClientTabs />;
}
