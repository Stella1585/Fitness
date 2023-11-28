"use server"
import { ClientFormData, PersonalTrainerFormData } from "@/typings";

import { auth } from "auth";


export async function createClientAction(e: FormData) {
    const session = await auth();

    //@ts-ignore
    if (!session || !session.user?.jwt_external) return;

    const firstName = e.get("firstName")?.toString();
    const lastName = e.get("lastName")?.toString();
    const email = e.get("email")?.toString();
    const password = e.get("password")?.toString();
    const personalTrainerId = e.get("personalTrainerId")?.toString();

    if (!firstName || !lastName || !email || !password || !personalTrainerId) return;

    const newClient: ClientFormData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        personalTrainerId: parseInt(personalTrainerId),
        accountType: "Client"
    }

    //? Post request for create a client

    // const res = await fetch("https://afefitness2023.azurewebsites.net/api/Users", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": `Bearer ${session.user?.jwt_external}`
    //     },
    //     body: JSON.stringify(newClient),

    // })


    //console.log(await res.json());
}

export async function createPersonalTrainerAction(e: FormData) {
    // const formData = new FormData(data);
    const firstName = e.get("firstName")?.toString();
    const lastName = e.get("lastName")?.toString();
    const email = e.get("email")?.toString();
    const password = e.get("password")?.toString();

    if (!firstName || !lastName || !email || !password) return;


    const newPersonalTrainer: PersonalTrainerFormData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        accountType: "PersonalTrainer"

    }

    // const res = await fetch("https://afefitness2023.azurewebsites.net/api/Users", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": `Bearer ${jwt_external_token}`
    //     },
    //     body: JSON.stringify(newPersonalTrainer),

    // })

     //console.log(await res.json());

}