"use client";

import { motion, useReducedMotion } from "framer-motion";
import { photoHighlights } from "../../data/site-data";
import { MotionCard } from "./motion-card";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function PhotoSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="photos"
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="scroll-mt-28 border-t border-[#dfc8b3] py-10"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8d5b35]">
            Photos
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#221915] sm:text-5xl">
            Still photos that feel warm, polished, and deeply human.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#5e4d42] sm:text-lg">
            From weddings to candid moments, every frame is designed to feel timeless
            while still looking modern and refined.
          </p>

          <MotionCard className="mt-8 overflow-hidden bg-[#2d1f19] p-5 text-[#fff7ef]">
            <p className="text-sm uppercase tracking-[0.3em] text-[#e8c39e]">
              Visual approach
            </p>
            <p className="mt-3 font-serif text-3xl font-semibold">
              Light, shadow, texture, and emotion.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#e7d8cb]">
              The gallery style is built around rich tones and elegant framing, with a
              soft cinematic finish that suits portraits and weddings.
            </p>
          </MotionCard>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {photoHighlights.map((item, index) => (
            <MotionCard key={item.title} delay={index * 0.08} className="p-6">
              <div className="flex min-h-56 flex-col justify-between rounded-[1.5rem] bg-[linear-gradient(180deg,#f7efe5_0%,#e2c6aa_50%,#7a5341_100%)] p-5 text-[#fff8f0] shadow-inner">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#f9ddc0]">
                    Photo set {index + 1}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl font-semibold">
                    {item.title}
                  </h3>
                </div>
                <p className="max-w-xs text-sm leading-6 text-[#fff3e8]">
                  {item.description}
                </p>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
