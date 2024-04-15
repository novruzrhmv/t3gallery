import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/937155d4-5cb6-4312-98dc-e1ddb7b3327c-g11jl5.jpeg",
  "https://utfs.io/f/30a64a38-5f09-4c77-8e5c-8c95b046ba90-a5tj0u.jpg",
  "https://utfs.io/f/6521a14e-3ec4-4714-83ff-dc2e26091b75-mwb42t.jpg",
  "https://utfs.io/f/9d942d34-8e92-4d2d-a7a4-ddb4016a5de9-g3w5q2.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" className="w-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
