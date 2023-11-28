import { auth } from "auth"

// auth

export const POST = auth(async (req) => {
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


    let url = "https://afefitness2023.azurewebsites.net/api/Users";


    try {
      const response: any = await fetch(url, {
        method: 'POST',
        headers: {
          // Include authentication token if required:
          'Authorization': `Bearer ${jwt}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      })

      //   const data = await response.json();
      //   // console.log(data);

      //   return Response.json(data)

    } catch (error) {
      if (error) return Response.json({ message: "Not authenticated" }, { status: 401 })
    }

    return Response.json({ data: "Protected data" })
  }

  return Response.json({ message: "Not authenticated" }, { status: 401 })
}) as any // TODO: Fix `auth()` return type

