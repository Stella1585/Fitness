"use client";
import CustomLink from "@/components/custom-link";
import packageJSON from "../package.json";

export default function Index() {
  async function postUser() {
    let bodyContent = JSON.stringify({
      email: "boss@fitness.moon",
      role: "Manager",
      jwt_external:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiTWFuYWdlciIsIlJvbGUiOiJNYW5hZ2VyIiwiVXNlcklkIjoiMSIsIm5iZiI6IjE3MDA1NzA4NDkiLCJleHAiOiIxNzAwNjU3MjQ5In0.c8u1xa8-q5d7O9u65xzIfw43u0p42jpZE86KZvuyPnk",
    });

    let response = await fetch(
      "/api/extern/manager/trainer/create",
      {
        method: "POST",
        body: bodyContent,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let data = await response.text();
    console.log(data);
  }
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">NextAuth.js Example</h1>
      <p>
        This is an example site to demonstrate how to use{" "}
        <CustomLink href="https://nextjs.authjs.dev">NextAuth.js</CustomLink>{" "}
        for authentication. Check out the{" "}
        <CustomLink href="/server-example" className="underline">
          Server
        </CustomLink>{" "}
        and the{" "}
        <CustomLink href="/client-example" className="underline">
          Client
        </CustomLink>{" "}
        examples to see how to secure pages and get session data.
      </p>
      <p>
        Current{" "}
        <CustomLink href="https://nextjs.authjs.dev">NextAuth.js</CustomLink>{" "}
        version: <em>next-auth@{packageJSON.dependencies["next-auth"]}</em>
      </p>
      <button className="bg-slate-400" onClick={postUser}>
        post User
      </button>
    </div>
  );
}
