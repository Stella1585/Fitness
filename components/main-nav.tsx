"use client";
import Link from "next/link";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export function MainNav() {
  return (
    <Navbar fluid rounded>
      {/* <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div> */}
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="/protected/manager">ManagerView</NavbarLink>
        <NavbarLink href="/protected/client">ClientView</NavbarLink>
        <NavbarLink href="/protected/trainer">TrainerView</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
