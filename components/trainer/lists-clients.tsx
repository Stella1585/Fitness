import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableHeadCell,
} from "flowbite-react";
import { auth } from "auth";
import { Session } from "next-auth";

export default async function ListClients() {
  let url = "https://afefitness2023.azurewebsites.net/api/Users/Clients";
  const session: Session | null = await auth();
  //@ts-ignore
  const jwt_external = session?.user?.jwt_external;
  if (!jwt_external) return <p>You are not authorized to view this page!</p>;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt_external}`,
    },
    cache: "no-cache",
    next: {
      tags: ["personalTrainerClients"],
    },
  });

  const clients = await res.json();

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Id</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {clients.map((client: any) => (
            <TableRow
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={client.userId}
            >
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {client?.firstName} {client?.lastName}
              </TableCell>
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {client?.userId}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
