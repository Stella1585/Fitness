import { auth } from "auth";
import { Session } from "next-auth";
export default async function ShortRoleInfo() {
  const session: Session | null = await auth();
  if (session) {
    //@ts-ignore
    const role = session?.user?.role;
    const email = session?.user?.email;
    return (
      <div>
        <div>{role}</div>
        <div>{email}</div>
      </div>
    );
  }
  return <></>;
}
