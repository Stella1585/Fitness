"use client";
import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";

import { createClientAction } from "@/actions/actions";
export default function CreateClientForm() {
  return (
    <form className="flex max-w-md flex-col gap-4" action={createClientAction} onSubmit={() => {console.log("hello")
    }}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="firstName" value="Client Firstname" />
        </div>
        <TextInput
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Firstname"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="lastName" value="Client Lastname" />
        </div>
        <TextInput
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Lastname"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Client Email" />
        </div>
        <TextInput
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Client Password" />
        </div>
        <TextInput
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </div>
      <input name="personalTrainerId" defaultValue={10} hidden/>
      <Button type="submit">Submit</Button>
    </form>
  );
}
