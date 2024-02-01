import { Posts } from "@/models/post.model";

export default function findPostById(id: number) {
  return Posts.find((post) => post.id === id);
}
