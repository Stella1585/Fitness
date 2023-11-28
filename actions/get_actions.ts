"use server"
import { auth } from "auth";



export async function getWorkoutProgramsClient() {

    const session = await auth();
    //@ts-ignore
    if (!session ||!session.user?.jwt_external) return;
    const res = await fetch("https://afefitness2023.azurewebsites.net/api/WorkoutPrograms", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            //@ts-ignore
            "Authorization": `Bearer ${session.user?.jwt_external}`
        }
    })
    return await res.json();
}