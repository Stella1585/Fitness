import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={`flex flex-col w-full px-4 mx-0 my-4 space-y-1 text-sm md:max-w-3xl md:my-12 md:mx-auto sm:px-6 md:h-5 md:items-center md:space-y-0 md:space-x-4 md:flex-row ${styles.footer}`}>
      <Link href={"/"} passHref>
        <p className="underline text-blue-500 hover:text-blue-700">Webpage of Vercel</p>
      </Link>
      <Link href={"/terms"} passHref>
        <p className="underline text-blue-500 hover:text-blue-700">Terms of Service</p>
      </Link>
    </footer>
  );
}