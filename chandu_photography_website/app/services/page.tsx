import { Navbar } from "../components/navbar/navbar";
import { Container } from "../components/common/container";
import { Heading } from "../components/common/heading";
import { ButtonLink } from "../components/common/button";
import { ServiceList } from "../components/services/service-list";
import { PricingCard } from "../components/services/pricing-card";
import { pricingPlans } from "../data/site-data";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Container className="py-4">
        <Navbar />
        <section className="py-10">
          <Heading
            eyebrow="Services"
            title="Flexible photography and video packages for every kind of story."
            description="Choose a package that fits your session, then tailor it to your needs."
          />
          <div className="mt-10">
            <ServiceList />
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/booking">Book Now</ButtonLink>
          </div>
        </section>
      </Container>
    </main>
  );
}
