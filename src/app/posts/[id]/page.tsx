import findPostById from "@/servies/post.service";
import Image from "next/image";

export default function PostsIdPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const post = findPostById(+id);

  // TODO: Add ErrorBoundary
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="">
      <h1 className="font-semibold text-2xl mb-2">{post.title}</h1>
      <p className="text-lg mb-4">{post.body}</p>
      <Image
        src={post.image}
        alt={post.title}
        width={300}
        height={300}
        className="rounded-lg"
      />
    </main>
  );
}
