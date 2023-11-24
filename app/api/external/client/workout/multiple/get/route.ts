import { auth } from "auth"

export const GET = auth(async (req) => {
    if (req.auth) {
        //TODO: console.log() should be deleted in production
        // console.log("user data", req.auth.user);
        let url = "https://afefitness2023.azurewebsites.net/api/WorkoutPrograms";


        try {
            const response: any = await fetch(url, {
                method: 'GET',
                headers: {
                    // Include authentication token if required:
                    // @ts-ignore
                    'Authorization': `Bearer ${req?.auth?.user?.jwt_external}`,
                    "Content-Type": "application/json",
                }
            })

            const data = await response.json();
            // console.log(data);

            return Response.json(data)

        } catch (error) {
            if (error) return Response.json({ message: "Not authenticated" }, { status: 401 })
        }

        return Response.json({ data: "Protected data" })
    }

    return Response.json({ message: "Not authenticated" }, { status: 401 })
})

