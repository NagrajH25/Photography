import { ImageCard } from "../common/image-card";

type ImageGalleryProps = {
  items: string[];
};

export function ImageGallery({ items }: ImageGalleryProps) {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <ImageCard key={item} title={item} subtitle={`0${index + 1}`} tone={index % 2 === 0 ? "warm" : "rose"} className="min-h-[20rem]" />
      ))}
    </section>
  );
}
