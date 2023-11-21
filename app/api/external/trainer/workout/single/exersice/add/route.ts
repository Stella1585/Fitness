import { auth } from "auth"


interface IExersice {
    exerciseId: number
    name: string,
    description: string,
    sets: number,
    repetitions: number,
    time: string,
    workoutProgramId: number,
    personalTrainerId: number
}

export const config = {
    api: {
        bodyParser: true,
    },
}

// auth
export const PUT = auth(async (req) => {
    if (req.auth) {
        //TODO: console.log() should be deleted in production
        // console.log("user data", req.auth.user);
        // console.log(req.body);
        //@ts-ignore
        let jwt = req.auth?.user?.jwt_external;
        if (!jwt || jwt === undefined) {
            return Response.json({ message: "Not authenticated" }, { status: 401 })
        }

        let body = null;
        try {
            body = await req.json()
            if (!body) throw Error("req body is empty");
        } catch (error) {
            //TODO: other error code / maybe client error
            return Response.json({ message: "Not authenticated" }, { status: 401 })
        }

        //TODO: should be deleted in production
        console.log("bla: ", body);

        let url = "https://afefitness2023.azurewebsites.net/api/WorkoutPrograms"

        try {


            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Include authentication token if required:
                    'Authorization': `Bearer ${jwt}`,
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            // const data = await response.json();

            // return Response.json(data)

        } catch (error) {
            //TODO: change the error code and message / should be client error and maybe create workout failed
            if (error) return Response.json({ message: "Not authenticated" }, { status: 401 })
        }

        return Response.json({ data: "Protected data" })
    }

    return Response.json({ message: "Not authenticated" }, { status: 401 })
}) as any // TODO: Fix `auth()` return type

