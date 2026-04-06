"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { navLinks } from "../../data/site-data";

const easeOut = [0.22, 1, 0.36, 1] as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.45,
      ease: easeOut,
    },
  }),
};

export function Navbar() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-3 z-40"
    >
      <div className="mx-auto mt-4 flex w-[min(100%-1rem,80rem)] items-center justify-between rounded-full border border-white/35 bg-[rgba(248,251,255,0.26)] px-5 py-3 backdrop-blur-2xl shadow-[0_10px_30px_rgba(117,133,151,0.08)]">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <div className="text-center leading-tight">
            <p className="text-[1.15rem] leading-none tracking-wide sm:text-[1.45rem]">
              <span style={{ color: "#16202c", fontFamily: "var(--font-brand)" }}>
                Chandu Photography
              </span>
            </p>
          </div>
        </Link>

        <nav aria-label="Primary" className="flex flex-wrap items-center justify-end gap-1">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.label}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link
                href={link.href}
                className="rounded-full px-2.5 py-1.5 text-sm font-medium text-[#263041] transition hover:bg-white/28 hover:text-[#101723]"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
