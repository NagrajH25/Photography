import { Navbar } from "../components/navbar/navbar";
import { Container } from "../components/common/container";
import { Heading } from "../components/common/heading";
import { ContactForm } from "../components/contact/contact-form";
import { SocialLinksRow } from "../components/contact/social-links-row";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Container className="py-4">
        <Navbar />
        <section className="py-10">
          <Heading
            eyebrow="Contact"
            title="Send a message or open one of the social links."
            description="This is a static contact area with placeholders you can connect later if needed."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <ContactForm />
            <div className="rounded-[1.75rem] border border-white/70 bg-white/75 p-6 shadow-[0_16px_40px_rgba(72,53,38,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8d5b35]">
                Social
              </p>
              <p className="mt-4 text-base leading-7 text-[#5e4d42]">
                Follow Chandu Photography on Instagram or Facebook, or message on WhatsApp.
              </p>
              <div className="mt-8">
                <SocialLinksRow />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
