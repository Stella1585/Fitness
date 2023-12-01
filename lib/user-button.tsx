import { auth } from "auth";
import { Session } from "next-auth";
import { SignIn, SignOut } from "../components/auth-components";

export default async function UserButton() {
  const session: Session | null = await auth();

  if (!session?.user) return <SignIn />;
  return <SignOut />;
}
