"use client";

import { motion, useReducedMotion } from "framer-motion";
import { videoHighlights } from "../../data/site-data";
import { MotionCard } from "./motion-card";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function VideoSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="videos"
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="scroll-mt-28 border-t border-[#dfc8b3] py-10"
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="order-2 grid gap-4 sm:grid-cols-3 lg:order-1 lg:grid-cols-1">
          {videoHighlights.map((item, index) => (
            <MotionCard key={item.title} delay={index * 0.08} className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8d5b35]">
                Video {index + 1}
              </p>
              <p className="mt-3 font-serif text-2xl font-semibold text-[#221915]">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#5e4d42]">{item.description}</p>
            </MotionCard>
          ))}
        </div>

        <div className="order-1 max-w-xl lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8d5b35]">
            Videos
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#221915] sm:text-5xl">
            Motion stories with a cinematic, elegant finish.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#5e4d42] sm:text-lg">
            Video work adds energy to the portfolio with smooth transitions, clean
            pacing, and a premium visual rhythm that feels alive on every screen.
          </p>

          <MotionCard className="mt-8 overflow-hidden bg-[#1f1713] p-5 text-white">
            <div className="grid min-h-72 gap-4 rounded-[1.5rem] bg-[linear-gradient(135deg,#3d2a23_0%,#9b6948_40%,#f2c39a_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] md:grid-cols-[1.15fr_0.85fr]">
              <div className="flex flex-col justify-between">
                <p className="text-sm uppercase tracking-[0.35em] text-[#fff0df]">
                  Reel preview
                </p>
                <div>
                  <h3 className="font-serif text-4xl font-semibold">Cinematic edits</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#fff4ea]">
                    Smooth color, graceful pacing, and a story-first edit style for
                    weddings, events, and brand films.
                  </p>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <div className="rounded-[1.5rem] border border-white/20 bg-black/20 px-4 py-3 text-right backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#f4d5b5]">
                    Delivery
                  </p>
                  <p className="mt-2 font-serif text-2xl">4K, vertical, reel-ready</p>
                </div>
              </div>
            </div>
          </MotionCard>
        </div>
      </div>
    </motion.section>
  );
}
