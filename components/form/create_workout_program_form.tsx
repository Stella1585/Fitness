import {
  Button,
  Label,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import { auth } from "auth";

import { createWorkoutProgramAction } from "@/actions/form_actions";
export default async function CreateWorkoutProgramForm() {
  const session = await auth();
  let url = "https://afefitness2023.azurewebsites.net/api/Users/Clients";
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
    <form
      className="flex max-w-md flex-col gap-4"
      action={createWorkoutProgramAction}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="client" value="Client" />
        </div>
        <Select id="client" name="clientId" required>
          {clients.length === 0 ? (
            <option value={undefined}>
              No clients available, a client must be created first!
            </option>
          ) : (
            <>
              {clients.map((client: any) => (
                <option key={client.userId} value={client.userId}>
                  {client.firstName} {client.lastName} | {client.email}
                </option>
              ))}
            </>
          )}
        </Select>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Workout Program Name" />
        </div>
        <TextInput
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Workout Program Description" />
        </div>
        <Textarea
          id="description"
          name="description"
          //type="text"
          placeholder="Description"
          required
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
