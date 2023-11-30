import { signIn, signOut } from "auth";
import { Button } from "flowbite-react";
import { redirect } from "next/navigation";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        const url = await signIn("Credentials", { redirect: false });
        redirect(url.replace("signin", "api/auth/signin"));
      }}
    >
      <Button type="submit">Sign In</Button>
    </form>
  );
}

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="w-full"
    >
      <Button type="submit">Sign Out</Button>
    </form>
  );
}
