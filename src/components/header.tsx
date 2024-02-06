import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="font-bold text-2xl">Next.js</h1>
      <nav className="flex">
        <Link href="/" className="mr-4">
          Home
        </Link>
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  );
}
