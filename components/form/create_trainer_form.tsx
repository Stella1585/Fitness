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

import { createPersonalTrainerAction } from "@/actions/form_actions";
export default function CreateTrainerForm() {
  return (
    <form
      className="flex max-w-md flex-col gap-4"
      action={createPersonalTrainerAction}
      onSubmit={() => {
        console.log("hello");
      }}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="firstName" value="Trainer Firstname" />
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
          <Label htmlFor="lastName" value="Trainer Lastname" />
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
          <Label htmlFor="email" value="Trainer Email" />
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
          <Label htmlFor="password" value="Trainer Password" />
        </div>
        <TextInput
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
