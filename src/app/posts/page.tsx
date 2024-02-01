import Card from "@/components/card";
import { Posts } from "@/models/post.model";
import Image from "next/image";

export default function PostsPage({}) {
  return (
    <main className="">
      <div className="grid grid-cols-3 gap-4">
        {Posts.map((post) => (
          <Card key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
}
