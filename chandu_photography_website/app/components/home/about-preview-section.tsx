"use client";

import { motion } from "framer-motion";
import { aboutPreview } from "../../data/site-data";
import { ButtonLink } from "../common/button";
import { ImageCard } from "../common/image-card";
import { SectionWrapper } from "../common/section-wrapper";

export function AboutPreviewSection() {
  return (
    <SectionWrapper
      id="about-preview"
      eyebrow="About"
      title="A calm, guided experience from start to finish."
      description="The work focuses on soft tones, natural expressions, and thoughtful direction."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <ImageCard title="Chandu" subtitle="Photographer" tone="sand" className="min-h-[28rem]" />
        </motion.div>

        <div className="flex flex-col justify-center rounded-[1.75rem] border border-white/70 bg-white/75 p-8 shadow-[0_16px_40px_rgba(72,53,38,0.08)]">
          <h3 className="font-serif text-3xl font-semibold text-[#221915]">{aboutPreview.title}</h3>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#5e4d42]">
            {aboutPreview.description}
          </p>
          <div className="mt-8">
            <ButtonLink href="/about">Read More</ButtonLink>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
