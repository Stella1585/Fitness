import { auth } from "auth"

//@ts-ignore
export const GET = auth(async (req, { params }) => {
    // const { id } = req.query;
    console.log(params);

    // console.log("ID: ", id);

    if (!params?.id) {
        return Response.json({ message: "No Access" }, { status: 403 })

    }


    if (req.auth) {
        if (req.auth.user?.role !== "PersonalTrainer") return Response.json({ message: "Not authenticated" }, { status: 401 })
        let workout_id = params.id; //TODO: is hardcoded
        let url = `https://afefitness2023.azurewebsites.net/api/WorkoutPrograms/${workout_id}`;
        let jwt_token = req?.auth?.user?.jwt_external;

        if (!jwt_token || jwt_token === undefined) {
            //TODO: error client
            return Response.json({ message: "Not authenticated" }, { status: 401 })
        }

        try {
            const response: any = await fetch(url, {
                method: 'GET',
                headers: {
                    // Include authentication token if required:
                    'Authorization': `Bearer ${jwt_token}`,
                    "Content-Type": "application/json",
                }
            })

            const data = await response.json();
            // console.log("data: ", data);

            return Response.json(data)

        } catch (error) {
            if (error) return Response.json({ message: "Not authenticated" }, { status: 401 })
        }

        return Response.json({ data: "Protected data" })
    }

    return Response.json({ message: "Not authenticated" }, { status: 401 })
}) as any;

