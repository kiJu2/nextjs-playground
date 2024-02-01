import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/" className="font-bold text-2xl">
        Next.js
      </Link>
      <nav className="flex">
        <Link href="/posts" className="mr-4">
          Posts
        </Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
