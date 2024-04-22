import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              width={192}
              height={192}
              style={{ objectFit: "contain" }}
              alt={image.name}
            />
          </Link>
          <div className="break-words">{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in to see the content
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
