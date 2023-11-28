//* Form Data Types */

export interface ClientFormData {
    firstName: string | undefined
    lastName: string | undefined
    email: string | undefined
    password: string | undefined
    personalTrainerId: number | undefined
    accountType: string | undefined
}

export interface PersonalTrainerFormData {
    firstName: string | undefined
    lastName: string | undefined
    email: string | undefined
    password: string | undefined
    accountType: string | undefined
}

//* End of Form Data Types */

//* Common Types */


export interface Exercise {
    name: string
    description: string
    set?: number
    repetitions?: number
    time?: string
}

export interface WorkoutProgram {
    WorkoutProgramId: number
    name: string
    description: string
    exercises: Exercise[]
    personalTrainerId: number
    clientId: number
}

//* END OF COMMON TYPES




