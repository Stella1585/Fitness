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

    let response = await fetch("/api/extern/manager/trainer/create", {
      method: "POST",
      body: bodyContent,
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.text();
    console.log(data);
  }
  return (
    <div className="space-y-2">
      <h1 className="text-8xl font-bold">Home Page</h1>
    </div>
  );
}
