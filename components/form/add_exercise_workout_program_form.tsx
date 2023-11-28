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

import { createClientAction } from "@/actions/form_actions"; //TODO: should be replaced
export default function AddExerciseWorkoutProgramForm() {
  return (
    <form
      className="flex max-w-md flex-col gap-4"
      action={createClientAction}
      onSubmit={() => {
        console.log("hello");
      }}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Exercise Name" />
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
          <Label htmlFor="description" value="Exercise Description" />
        </div>
        <TextInput
          id="description"
          name="description"
          type="text"
          placeholder="Description"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="sets" value="Exercise Sets" />
        </div>
        <TextInput
          id="sets"
          name="sets"
          type="number"
          placeholder="Sets"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="reps" value="Exercise Reps" />
        </div>
        <TextInput
          id="reps"
          name="reps"
          type="number"
          placeholder="Reps"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="time" value="Exercise Time" />
        </div>
        <TextInput
          id="time"
          name="time"
          type="text"
          placeholder="Time"
          required
        />
      </div>
      {/* <input name="personalTrainerId" defaultValue={10} hidden /> */}
      <Button type="submit">Submit</Button>
    </form>
  );
}
