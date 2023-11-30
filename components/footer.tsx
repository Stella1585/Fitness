import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full px-4 mx-0 my-4 space-y-1 text-sm md:max-w-3xl md:my-12 md:mx-auto sm:px-6 md:h-5 md:items-center md:space-y-0 md:space-x-4 md:flex-row">
      <Link href={"/"}>Webpage of Vercel</Link>
      <Link href={"/terms"}>Terms of Service</Link>
    </footer>
  );
}
