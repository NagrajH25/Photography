import { AboutPreviewSection } from "./components/home/about-preview-section";
import { CtaSection } from "./components/home/cta-section";
import { FeaturedWorkSection } from "./components/home/featured-work-section";
import { HeroSection } from "./components/home/hero-section";
import { ServicesPreviewSection } from "./components/home/services-preview-section";
import { TestimonialsSection } from "./components/home/testimonials-section";
import { Navbar } from "./components/navbar/navbar";
import { SocialLinks } from "./components/social-links/social-links";
import { Container } from "./components/common/container";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Container className="py-4">
        <FeaturedWorkSection />
        <AboutPreviewSection />
        <ServicesPreviewSection />
        <TestimonialsSection />
        <CtaSection />
      </Container>
      <SocialLinks />
    </main>
  );
}
