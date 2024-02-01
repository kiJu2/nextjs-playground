import { generateImageUrl } from "@/app/utills";

export type PostSchema = {
  id: number;
  title: string;
  body: string;
  image: string;
};

export const Posts: PostSchema[] = [
  {
    id: 1,
    title: "Post 1",
    body: "Post 1 body",
    image: generateImageUrl(),
  },
  {
    id: 2,
    title: "Post 2",
    body: "Post 2 body",
    image: generateImageUrl(),
  },
  {
    id: 3,
    title: "Post 3",
    body: "Post 3 body",
    image: generateImageUrl(),
  },
  {
    id: 4,
    title: "Post 4",
    body: "Post 4 body",
    image: generateImageUrl(),
  },
  {
    id: 5,
    title: "Post 5",
    body: "Post 5 body",
    image: generateImageUrl(),
  },
  {
    id: 6,
    title: "Post 6",
    body: "Post 6 body",
    image: generateImageUrl(),
  },
  {
    id: 7,
    title: "Post 7",
    body: "Post 7 body",
    image: generateImageUrl(),
  },
  {
    id: 8,
    title: "Post 8",
    body: "Post 8 body",
    image: generateImageUrl(),
  },
  {
    id: 9,
    title: "Post 9",
    body: "Post 9 body",
    image: generateImageUrl(),
  },
  {
    id: 10,
    title: "Post 10",
    body: "Post 10 body",
    image: generateImageUrl(),
  },
  {
    id: 11,
    title: "Post 11",
    body: "Post 11 body",
    image: generateImageUrl(),
  },
  {
    id: 12,
    title: "Post 12",
    body: "Post 12 body",
    image: generateImageUrl(),
  },
  {
    id: 13,
    title: "Post 13",
    body: "Post 13 body",
    image: generateImageUrl(),
  },
  {
    id: 14,
    title: "Post 14",
    body: "Post 14 body",
    image: generateImageUrl(),
  },
  {
    id: 15,
    title: "Post 15",
    body: "Post 15 body",
    image: generateImageUrl(),
  },
  {
    id: 16,
    title: "Post 16",
    body: "Post 16 body",
    image: generateImageUrl(),
  },
  {
    id: 17,
    title: "Post 17",
    body: "Post 17 body",
    image: generateImageUrl(),
  },
];
