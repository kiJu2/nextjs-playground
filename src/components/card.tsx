import { PostSchema } from "@/models/post.model";
import Image from "next/image";

export default function Card({ title, image }: PostSchema) {
  return (
    <div className="flex flex-col">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="rounded-lg"
      />
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}
