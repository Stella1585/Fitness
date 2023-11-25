import { auth } from "auth";
import { SignIn, SignOut } from "../components/auth-components";

export default async function UserButton() {
  const session = await auth();

  if (!session?.user) return <SignIn />;
  return <SignOut />;
}
