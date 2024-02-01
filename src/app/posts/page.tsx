import { Posts } from "@/libs/dummies";
import Image from "next/image";

export default function PostsPage({}) {
  return (
    <main className="">
      <h1 className="">Posts</h1>
      {/* Create grid images 3 columns */}
      <div className="grid grid-cols-3 gap-4">
        {Posts.map((post) => (
          <div className="flex flex-col" key={post.id}>
            <Image
              src={post.image}
              alt="Hello"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="text-lg">{post.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}