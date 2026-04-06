import { clientGalleryImages } from "../../data/site-data";
import { PhotoSelectionCard } from "./photo-selection-card";

type ClientGalleryGridProps = {
  selectedTitles: string[];
  onToggle: (title: string) => void;
};

export function ClientGalleryGrid({ selectedTitles, onToggle }: ClientGalleryGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {clientGalleryImages.map((item) => (
        <PhotoSelectionCard
          key={item.title}
          title={item.title}
          selected={selectedTitles.includes(item.title)}
          onToggle={() => onToggle(item.title)}
        />
      ))}
    </div>
  );
}
