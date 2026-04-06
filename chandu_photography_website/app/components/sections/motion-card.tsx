"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const easeOut = [0.22, 1, 0.36, 1] as const;

type MotionCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function MotionCard({ children, className = "", delay = 0 }: MotionCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="h-full md:[perspective:1200px]">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, delay, ease: easeOut }}
        whileHover={
          reduceMotion
            ? undefined
            : { y: -8, rotateX: 7, rotateY: -7, scale: 1.015, transition: { duration: 0.25 } }
        }
        whileTap={reduceMotion ? undefined : { scale: 0.99 }}
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        className={`h-full rounded-[1.75rem] border border-white/70 bg-white/70 shadow-[0_16px_40px_rgba(72,53,38,0.08)] backdrop-blur-sm ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
