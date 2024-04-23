import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full min-w-0 items-center justify-center space-x-2">
      <div className="flex flex-shrink">
        <img src={image.url} className="flex-shrink object-contain" />
      </div>
      <div className="flex w-96 flex-col">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
