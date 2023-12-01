"use server"
import { ClientFormData, PersonalTrainerFormData } from "@/typings";
import { Session } from "next-auth";
import { auth } from "auth";
import { revalidateTag } from "next/cache";
import { StringifyOptions } from "querystring";

//* Create User

export async function createClientAction(e: FormData) {
    const session: Session | null = await auth();

    //@ts-ignore
    if (!session || !session.user?.jwt_external) return;

    const firstName = e.get("firstName")?.toString();
    const lastName = e.get("lastName")?.toString();
    const email = e.get("email")?.toString();
    const password = e.get("password")?.toString();
    //@ts-ignore
    const personalTrainerId = session.user?.id;

    if (!firstName || !lastName || !email || !password || !personalTrainerId) return;

    //const newClient: ClientFormData
    const newClient: any = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        personalTrainerId: parseInt(personalTrainerId),
        accountType: "Client"
    }

    //? Post request for create a client

    const res = await fetch("https://afefitness2023.azurewebsites.net/api/Users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //@ts-ignore
            "Authorization": `Bearer ${session.user?.jwt_external}`
        },
        body: JSON.stringify(newClient),

    })


    console.log(await res.json());

    revalidateTag("personalTrainerClients")
}

export async function createPersonalTrainerAction(e: FormData) {
    const session: Session | null = await auth();
    //@ts-ignore
    if (!session || !session.user?.jwt_external) return;
    const firstName = e.get("firstName")?.toString();
    const lastName = e.get("lastName")?.toString();
    const email = e.get("email")?.toString();
    const password = e.get("password")?.toString();

    if (!firstName || !lastName || !email || !password) return;


    const newPersonalTrainer: PersonalTrainerFormData = {
        firstName,
        lastName,
        email,
        password,
        accountType: "PersonalTrainer"
    }

    console.log(newPersonalTrainer);

    const res = await fetch("https://afefitness2023.azurewebsites.net/api/Users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //@ts-ignore
            "Authorization": `Bearer ${session.user?.jwt_external}`
        },
        body: JSON.stringify(newPersonalTrainer),

    })
    console.log(await res.json());

    revalidateTag("personalTrainers")

}

//* Create Workout Program

export async function createWorkoutProgramAction(e: FormData) {
    const session: Session | null = await auth();
    //@ts-ignore
    if (!session || !session.user?.jwt_external) return;
    const name = e.get("name")?.toString();
    const description = e.get("description")?.toString();
    //@ts-ignore
    const trainerId = session.user?.id;
    const clientId = e.get("clientId")?.toString();

    if (!name || !description || !trainerId || !clientId) return;

    const newWorkoutProgram: any = {
        name,
        description,
        exercises: [],
        personalTrainerId: parseInt(trainerId),
        clientId: parseInt(clientId)
    }

    console.log(newWorkoutProgram);

    const res = await fetch("https://afefitness2023.azurewebsites.net/api/WorkoutPrograms", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //@ts-ignore
            "Authorization": `Bearer ${session.user?.jwt_external}`
        },
        body: JSON.stringify(newWorkoutProgram),
    })
    console.log(await res.json());

    revalidateTag("workoutProgramsTrainer")
}
//* Create Exercise

export async function createExerciseAction(e: FormData) {
    const session: Session | null = await auth();
    //@ts-ignore
    if (!session || !session.user?.jwt_external) return;
    const name = e.get("name")?.toString();
    const description = e.get("description")?.toString();
    const sets: any = e.get("sets")?.toString();
    const reps = e.get("reps")?.toString();
    const time = e.get("time")?.toString();
    //@ts-ignore
    const trainerId = session.user?.id;
    const workoutProgramId: any = e.get("programId")?.toString();

    if (!name || !description || !sets || !trainerId || !workoutProgramId) return;

    const newExercise: any = {
        name: name,
        description: description,
        sets: parseInt(sets),
        repetitions: reps ? parseInt(reps) : null,
        time: time?.length !== 0 ? time : null,
        //personalTrainerId: parseInt(trainerId),
        //workoutProgramId: parseInt(workoutProgramId)
    }
    console.log(newExercise);
    const url = `https://afefitness2023.azurewebsites.net/api/Exercises/Program/${workoutProgramId}`
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //@ts-ignore
            "Authorization": `Bearer ${session.user?.jwt_external}`
        },
        body: JSON.stringify(newExercise),

    })
    console.log(await res.json());

    revalidateTag("exerciseTrainer")

}
