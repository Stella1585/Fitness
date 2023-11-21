async function createClient(formData) {
    let url = "https://afefitness2023.azurewebsites.net/api/Users"
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Include authentication token if required:
                'Authorization': `Bearer ${session.accessToken}`,
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        //TODO: console.log() should be deleted in production
        console.log('Trainer created:', data);
        // Handle success (e.g., show a success message or redirect)
    } catch (error) {
        console.error('Failed to create trainer:', error);
        throw Error("Failed to create trainer");
        // Handle error (e.g., show an error message)
    }
}

async function createWorkoutProgram() {
    let url = "https://afefitness2023.azurewebsites.net/api/WorkoutPrograms"
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Include authentication token if required:
                'Authorization': `Bearer ${session.accessToken}`,
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        //TODO: console.log() should be deleted in production
        console.log('Workout Program created:', data);
        // Handle success (e.g., show a success message or redirect)
    } catch (error) {
        console.error('Failed to create Workout Program:', error);
        throw Error("Failed to create Workout Program");
        // Handle error (e.g., show an error message)
    }
}

async function addExerciseToWorkoutProgram(programId, newExercise) {
    // Step 1: Retrieve the current workout program
    const programResponse = await fetch(`https://afefitness2023.azurewebsites.net/api/workoutPrograms/${programId}`, { method: 'GET' });
    const programData = await programResponse.json();

    // Step 2: Add the new exercise to the program
    programData.exercises.push(newExercise);

    // Step 3: Send the updated program back
    const updateResponse = await fetch(`https://afefitness2023.azurewebsites.net/api/workoutPrograms/${programId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            // Include authorization header if required
            'Authorization': `Bearer ${yourAuthToken}`,
        },
        body: JSON.stringify(programData),
    });

    if (!updateResponse.ok) {
        throw new Error('Failed to update workout program');
    }

    return updateResponse.json();
}

//! something is missing here
async function getListOfWorkoutPrograms() {
    const listWorkoutProgramsTrainer = await fetch("https://afefitness2023.azurewebsites.net/api/WorkoutPrograms/trainer");
    if (!listWorkoutProgramsTrainer) {
        throw Error("Error get Workout Program List Trainer");
    }
    else return listWorkoutProgramsTrainer;
}

async function getSpecificWorkoutProgram(id) {
    const specificWorkoutProgram = await fetch(`https://afefitness2023.azurewebsites.net/api/WorkoutPrograms/${id}`);
    if (!listWorkoutProgramsTrainer) {
        throw Error("Error get specific Workout Program");
    }
    else return specificWorkoutProgram;
}

function getListOfClients() { }


export {
    createClient,
    createWorkoutProgram,
    addExerciseToWorkoutProgram,
    getListOfWorkoutPrograms,
    getSpecificWorkoutProgram,
    getListOfClients

}