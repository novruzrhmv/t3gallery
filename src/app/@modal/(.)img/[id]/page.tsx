import { Modal } from "./modal";
import FullPageImageView from "~/common/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: number };
}) {
  return (
    <Modal>
      <FullPageImageView id={photoId} />
    </Modal>
  );
}
