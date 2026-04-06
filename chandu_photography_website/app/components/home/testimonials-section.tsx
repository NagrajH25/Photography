"use client";

import { motion } from "framer-motion";
import { testimonials } from "../../data/site-data";
import { SectionWrapper } from "../common/section-wrapper";

export function TestimonialsSection() {
  return (
    <SectionWrapper
      id="testimonials"
      eyebrow="Testimonials"
      title="What clients say after the shoot."
      description="A simple testimonial strip using static demo quotes for the current build."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.blockquote
            key={item.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="rounded-[1.75rem] border border-white/70 bg-white/75 p-6 shadow-[0_16px_40px_rgba(72,53,38,0.08)]"
          >
            <p className="text-base leading-7 text-[#5e4d42]">“{item.quote}”</p>
            <footer className="mt-5 font-semibold text-[#221915]">- {item.name}</footer>
          </motion.blockquote>
        ))}
      </div>
    </SectionWrapper>
  );
}
