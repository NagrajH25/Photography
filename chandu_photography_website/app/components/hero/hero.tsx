"use client";

import { motion, useReducedMotion } from "framer-motion";
import { highlights } from "../../data/site-data";

const easeOut = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid min-h-[calc(100vh-7rem)] items-center gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-16"
    >
      <div className="max-w-2xl">
        <motion.p
          variants={fadeUp}
          className="mb-5 inline-flex rounded-full border border-[#d8c0a4] bg-[#fff8f0]/80 px-4 py-2 text-sm font-medium text-[#7a5a3c] shadow-sm"
        >
          Timeless visuals with a warm cinematic feel
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-serif text-5xl font-semibold leading-tight text-[#221915] sm:text-6xl lg:text-7xl"
        >
          Moments that feel{" "}
          <span className="text-[#8d5b35]">elegant, honest, and alive</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-lg leading-8 text-[#5e4d42] sm:text-xl"
        >
          Chandu Photography creates refined portraits, wedding memories, and
          lifestyle stories with soft tones, natural light, and a polished visual
          style.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#2d1f19] px-6 py-3 text-sm font-semibold text-[#fff8f0] shadow-lg shadow-[#2d1f19]/20 transition hover:-translate-y-0.5 hover:bg-[#3a291f]"
          >
            Book a Session
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full border border-[#d4b99a] bg-white/70 px-6 py-3 text-sm font-semibold text-[#4e3b30] transition hover:border-[#b58f67] hover:bg-white"
          >
            View Portfolio
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/70 bg-white/65 p-5 shadow-[0_12px_30px_rgba(72,53,38,0.08)] backdrop-blur-sm"
            >
              <p className="font-serif text-3xl font-semibold text-[#221915]">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-[#6f5a4d]">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, ease: easeOut, delay: 0.15 }}
        className="relative"
      >
        <div className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-[#c89a71]/30 blur-2xl" />
        <div className="absolute -right-6 bottom-8 h-28 w-28 rounded-full bg-[#7d5a45]/20 blur-3xl" />

        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -10, 0] }
          }
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[#2a1d17] p-4 shadow-[0_30px_80px_rgba(36,24,18,0.25)]"
        >
          <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[28rem] overflow-hidden rounded-[1.6rem] bg-[linear-gradient(180deg,#d9b08c_0%,#8b5e44_50%,#3b2720_100%)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,245,235,0.35),transparent_35%),linear-gradient(180deg,transparent_0%,rgba(20,12,9,0.25)_100%)]" />
              <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/15 bg-black/25 p-5 text-white backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.35em] text-[#f8dcc1]">
                  Signature style
                </p>
                <p className="mt-2 font-serif text-2xl">
                  Soft light. Rich tones. Honest emotion.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.6rem] bg-[#f6eadf] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8d5b35]">
                  Featured
                </p>
                <p className="mt-3 font-serif text-3xl font-semibold text-[#221915]">
                  Portraits
                </p>
                <p className="mt-2 text-sm leading-6 text-[#655246]">
                  Editorial-inspired portraits with a calm, modern, and personal look.
                </p>
              </div>

              <div className="rounded-[1.6rem] bg-[#4a3427] p-5 text-[#fff7ef]">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e7c29d]">
                  Available for
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>Weddings and pre-weddings</li>
                  <li>Couple and family sessions</li>
                  <li>Events and brand stories</li>
                </ul>
              </div>

              <div className="rounded-[1.6rem] border border-[#e3d4c4] bg-white/75 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7a5a3c]">
                  Based in
                </p>
                <p className="mt-3 font-serif text-2xl font-semibold text-[#221915]">
                  India, available for travel
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
