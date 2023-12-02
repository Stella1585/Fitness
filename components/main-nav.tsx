import Link from "next/link";
import { auth } from "auth";
import {Session} from "next-auth";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export async function MainNav() {
  const session: Session | null = await auth();
  let userRole: string | undefined;
  if (session) {
    //@ts-ignore
    userRole = session?.user?.role;
  }
  return (
    <Navbar fluid rounded>
      <NavbarCollapse>
        <NavbarLink href="/" active>
          <span className="text-lg" style={{ whiteSpace: "nowrap" }}>
            Home
          </span>
        </NavbarLink>
        {userRole === "Manager" && (
          <NavbarLink href="/protected/manager">
            <span className="text-lg" style={{ whiteSpace: "nowrap" }}>
              Manage Trainers
            </span>
          </NavbarLink>
        )}
        {userRole === "Client" && (
          <NavbarLink href="/protected/client">
            <span className="text-lg" style={{ whiteSpace: "nowrap" }}>
              View Workout Programs
            </span>
          </NavbarLink>
        )}
        {userRole === "PersonalTrainer" && (
          <NavbarLink href="/protected/trainer">
            <span className="text-lg" style={{ whiteSpace: "nowrap" }}>
              Manage Client
            </span>
          </NavbarLink>
        )}
      </NavbarCollapse>
    </Navbar>
  );
}