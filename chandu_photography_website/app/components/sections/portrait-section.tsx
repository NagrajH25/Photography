"use client";

import { motion, useReducedMotion } from "framer-motion";
import { portraitHighlights } from "../../data/site-data";
import { MotionCard } from "./motion-card";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function PortraitSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="portraits"
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="scroll-mt-28 border-t border-[#dfc8b3] py-10"
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8d5b35]">
            Portraits
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#221915] sm:text-5xl">
            Portraits with character, warmth, and a refined visual mood.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#5e4d42] sm:text-lg">
            Portrait sessions are designed to feel personal and modern, with enough
            motion and depth to keep the images feeling alive.
          </p>

          <MotionCard className="mt-8 overflow-hidden bg-[#f6eadf] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8d5b35]">
              Style notes
            </p>
            <p className="mt-3 font-serif text-3xl font-semibold text-[#221915]">
              Editorial, candid, and softly dramatic.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#655246]">
              Great for individuals, couples, and families who want images that feel
              classy but still relaxed.
            </p>
          </MotionCard>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {portraitHighlights.map((item, index) => (
            <MotionCard key={item.title} delay={index * 0.08} className="overflow-hidden">
              <div className="flex min-h-52 flex-col justify-between bg-[linear-gradient(180deg,#fff7ef_0%,#e8c39e_45%,#624336_100%)] p-5 text-[#fffaf4]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#ffe2c5]">
                    Portrait {index + 1}
                  </p>
                  <h3 className="mt-4 font-serif text-3xl font-semibold">{item.title}</h3>
                </div>
                <p className="max-w-xs text-sm leading-6 text-[#fff2e5]">
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
