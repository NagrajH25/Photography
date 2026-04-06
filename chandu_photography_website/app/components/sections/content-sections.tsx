import { ContactSection } from "./contact-section";
import { PhotoSection } from "./photo-section";
import { PortraitSection } from "./portrait-section";
import { VideoSection } from "./video-section";

export function ContentSections() {
  return (
    <>
      <PhotoSection />
      <VideoSection />
      <PortraitSection />
      <ContactSection />
    </>
  );
}
