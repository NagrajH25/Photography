import { Navbar } from "../components/navbar/navbar";
import { Container } from "../components/common/container";
import { Heading } from "../components/common/heading";
import { ProfileSection } from "../components/about/profile-section";
import { TextBlock } from "../components/about/text-block";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Container className="py-4">
        <Navbar />
        <section className="py-10">
          <Heading
            eyebrow="About"
            title="A photography style built around calm direction and premium visuals."
            description="This page gives a short intro to the person behind the camera and the creative approach."
          />
          <div className="mt-10 grid gap-6">
            <ProfileSection />
            <TextBlock
              title="Style and experience"
              body="The studio approach blends natural light, soft color grading, and careful composition to create images that feel elevated but still honest."
            />
          </div>
        </section>
      </Container>
    </main>
  );
}
