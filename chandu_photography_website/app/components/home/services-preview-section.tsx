"use client";

import { motion } from "framer-motion";
import { services } from "../../data/site-data";
import { ButtonLink } from "../common/button";
import { Heading } from "../common/heading";
import { ImageCard } from "../common/image-card";
import { SectionWrapper } from "../common/section-wrapper";

export function ServicesPreviewSection() {
  return (
    <SectionWrapper id="services-preview">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <Heading
            eyebrow="Services"
            title="Photography and video packages built for modern clients."
            description="Flexible options for weddings, portraits, events, and brand content."
          />
          <div className="mt-8">
            <ButtonLink href="/services" variant="secondary">
              View Services
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <ImageCard
                title={service.title}
                description={service.description}
                tone={index === 1 ? "rose" : "stone"}
                className="min-h-[20rem]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
