async function createUserPersonalTrainer() {
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
        console.log('Personal Trainer created:', data);
        // Handle success (e.g., show a success message or redirect)
    } catch (error) {
        console.error('Failed to create Personal Trainer:', error);
        throw Error("Failed to create Personal Trainer");
        // Handle error (e.g., show an error message)
    }
}

export { createUserPersonalTrainer }