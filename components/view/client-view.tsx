import { ListGroup } from "flowbite-react";

export default function ClientView({ clients }: any) {
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
