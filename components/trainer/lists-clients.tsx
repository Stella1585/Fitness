import { ListGroup } from "flowbite-react";
import { auth } from "auth";

export default async function ListClients() {
  let url = "https://afefitness2023.azurewebsites.net/api/Users/Clients";
  const session = await auth();
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
    <div className="flex justify-center">
      <ListGroup className="w-48">
        {clients.map((client: any) => (
          <ListGroup.Item key={client.userId}>
            {client?.firstName} {client?.lastName}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
