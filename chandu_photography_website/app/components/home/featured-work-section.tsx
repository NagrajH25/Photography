"use client";

import { motion } from "framer-motion";
import { featuredWork } from "../../data/site-data";
import { ImageCard } from "../common/image-card";
import { SectionWrapper } from "../common/section-wrapper";

export function FeaturedWorkSection() {
  return (
    <SectionWrapper
      id="gallery"
      eyebrow="Gallery"
      title="Selected frames from weddings, portraits, events, and motion."
      description="A clean visual grid that keeps the focus on the image story."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {featuredWork.map((item, index) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <ImageCard
              title={item.title}
              subtitle={item.category}
              description={item.description}
              tone={index % 2 === 0 ? "rose" : "stone"}
              className="min-h-[22rem]"
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
