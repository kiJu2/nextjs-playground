import { PostSchema, Posts } from "@/models/post.model";

export default function findPostById(id: PostSchema["id"]) {
  return Posts.find((post) => post.id === id);
}
