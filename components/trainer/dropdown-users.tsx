import { Dropdown } from "flowbite-react";

interface DropdownProps {
  users: any;
}

export default async function DropdownUsers({ users }: DropdownProps) {
  return (
    <Dropdown label="Dropdown">
      {users.map((user: any) => (
        <Dropdown.Item onClick={() => alert("Dashboard!")} key={user?.userId}>
          {user?.firstName} {users?.lastName}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
}
