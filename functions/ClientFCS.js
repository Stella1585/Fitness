async function getPersonalWorkoutPrograms(client_id) {
    const personalWorkoutPrograms = await fetch(`https://afefitness2023.azurewebsites.net/api/WorkoutPrograms/client/${client_id}`);
    if (!personalWorkoutPrograms) {
        throw Error("Error get Personal Workout Program");
    }
    else return personalWorkoutPrograms;
}



export { getPersonalWorkoutPrograms }