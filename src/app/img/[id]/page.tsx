import { FullPageImageView } from "~/common/full-page-image-view";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: number };
}) {
  return <FullPageImageView id={photoId} />;
}
