import React from "react";
import { NextPage } from "next";
import packageJSON from "../package.json";

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto p-8">
        <section className="mb-8">
          <h1 className="text-4xl font-bold text-teal-600 mb-4">Welcome to FitSphere</h1>
          <p className="text-lg text-gray-600">
            Elevate your fitness journey with FitSphere – your personalized platform for achieving health and wellness goals. Whether you are a manager, personal trainer, or client, our app offers tailored features to meet your specific needs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-teal-600">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Effortless user login for a seamless experience.</li>
            <li>Managers can easily create users, specifically personal trainers.</li>
            <li>Personal trainers have the ability to create clients, design workout programs, and add exercises with detailed information.</li>
            <li>Clients can view their personalized workout programs, with the flexibility to choose from multiple programs if available.</li>
            <li>Explore and manage workout programs and clients with ease.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-teal-600">Get Started</h2>
          <p className="text-gray-600">
            Ready to achieve your fitness goals? Sign up or log in now to experience the full potential of FitSphere.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;

