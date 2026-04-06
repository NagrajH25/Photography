import { Container } from "../components/common/container";
import { GallerySections } from "../components/gallery/gallery-sections";
import { Navbar } from "../components/navbar/navbar";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <Container className="py-4">
        <Navbar />
        <section className="px-0 py-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.38em] text-[#8d5b35]">
              Portfolio
            </p>
            <h1 className="mt-4 font-sans text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#201915] sm:text-[2.35rem] lg:text-[2.8rem]">
              Our best work, chosen for you.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5e6a73] sm:text-base">
              A curated selection of moments we love to capture and share.
            </p>
          </div>
          <div className="mt-10">
            <GallerySections />
          </div>
        </section>
      </Container>
    </main>
  );
}
