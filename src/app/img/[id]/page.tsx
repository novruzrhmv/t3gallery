import FullPageImageView from "~/common/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  return <FullPageImageView id={idAsNumber} />;
}
