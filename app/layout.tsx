import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FitSphere",
  description:
    "FitSphere is a dynamic platform designed to bridge the gap between clients, personal trainers, and studio managers. Our intuitive web app offers a suite of tools tailored for the unique needs of the fitness world. Clients can effortlessly book sessions, track progress, and connect with trainers. For trainers, FitSphere provides a robust scheduling system, client management, and progress tracking to ensure personalized guidance. Managers gain access to administrative tools for studio oversight, resource allocation, and analytics to drive growth. Join FitSphere, where fitness goals and management efficiency coalesce into one seamless experience.",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col justify-between w-full h-full min-h-screen">
          <Header />
          <main className="flex-auto w-full max-w-3xl px-4 py-4 mx-auto sm:px-6 md:py-6">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
