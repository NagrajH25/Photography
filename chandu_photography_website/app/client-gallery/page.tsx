import { Navbar } from "../components/navbar/navbar";
import { Container } from "../components/common/container";
import { Heading } from "../components/common/heading";
import { ClientGalleryPage } from "../components/client/client-gallery-page";

export default function ClientGalleryRoutePage() {
  return (
    <main className="min-h-screen">
      <Container className="py-4">
        <Navbar />
        <section className="py-10">
          <Heading
            eyebrow="Client Gallery"
            title="Private delivery area for approved photo selections."
            description="This is a static demo gallery for now, with a simple access token preview."
          />
          <div className="mt-10">
            <ClientGalleryPage />
          </div>
        </section>
      </Container>
    </main>
  );
}
