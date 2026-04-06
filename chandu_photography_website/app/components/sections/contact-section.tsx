"use client";

import { motion, useReducedMotion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ContactSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="contact"
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="scroll-mt-28 border-t border-[#dfc8b3] py-10"
    >
      <div className="rounded-[2rem] bg-[#2d1f19] px-6 py-10 text-[#fff7ef] shadow-[0_24px_70px_rgba(33,22,17,0.2)] sm:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#e8c39e]">
              Contact
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
              Let&apos;s create something beautiful together.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#e7d8cb]">
              Reach out for photography, video, or portrait sessions. We can connect
              the buttons to WhatsApp, email, or a full booking flow later.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hello@chanduphotography.com"
              className="inline-flex items-center justify-center rounded-full bg-[#f7ede0] px-6 py-3 text-sm font-semibold text-[#2d1f19] transition hover:bg-white"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/919620037343?text=Hi%20Chandu,%20I%20want%20to%20book%20a%20shoot."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-[#fff7ef] transition hover:bg-white/15"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
