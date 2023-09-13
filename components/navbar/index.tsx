import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <ul className="flex space-x-10 justify-center">
        <li className="text-2xl font-semibold">
          <Link href="/">Post</Link>
        </li>
        <li className="text-2xl font-semibold">
          <Link href="/aboutMe">AboutMe</Link>
        </li>
      </ul>
    </nav>
  );
}