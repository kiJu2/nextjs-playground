import { PostSchema } from "@/models/post.model";
import Image from "next/image";
import Link from "next/link";

export default function Card({ title, image, id }: PostSchema) {
  return (
    <Link href={`/posts/${id}`} scroll={false}>
      <div className="flex flex-col justify-center items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:shadow-lg transition-shadow">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="rounded-lg"
        />
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}
