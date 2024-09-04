import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4 px-4">
        {images.map((image, index) => (
          <div key={index} className="w-48">
            <Image
              src={image.url}
              width={350}
              height={400}
              alt={image.url}
              className="h-full w-full object-cover"
            />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
