import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full px-4 mx-0 my-4 space-y-1 text-sm md:max-w-3xl md:my-12 md:mx-auto sm:px-6 md:h-5 md:items-center md:space-y-0 md:space-x-4 md:flex-row mt-8">
      <Link href={"/"} passHref>
        <p className="underline text-blue-500 hover:text-blue-700 cursor-pointer">Webpage of Vercel</p>
      </Link>
      <Link href={"/terms"} passHref>
        <p className="underline text-blue-500 hover:text-blue-700 cursor-pointer">Terms of Service</p>
      </Link>
    </footer>
  );
}
