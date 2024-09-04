import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/ccbc6c54-5528-4a21-936d-b7b062794707-2edbfo.jpg",
  "https://utfs.io/f/79a94335-337d-4d7b-b435-ed6a8bd45d21-t9mh04.jpg.jpg",
  "https://utfs.io/f/f0b2434e-99bf-4b53-b2b2-8329b861283b-n176si.jpeg",
  "https://utfs.io/f/4b4e9390-88ad-4ae2-b614-99fff90d614e-t9md2m.jpg",
  "https://utfs.io/f/ae981528-0188-4330-a950-07813241db95-t9mh04.webp",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={index} className="w-48">
            <Image src={image.url} width={350} height={400} alt={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
