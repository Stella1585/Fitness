import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { auth } from "auth";
import { SignIn, SignOut } from "../components/auth-components";

export default async function UserButton() {
  const session = await auth();
  // console.log("session:", session);

  if (!session?.user) return <SignIn />;
  return <SignOut />;
}
