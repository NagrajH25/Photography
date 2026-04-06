"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { gallerySections } from "../../data/site-data";

type GalleryItem = {
  title: string;
  category: string;
  description: string;
  src?: string;
};

type GallerySection = {
  key: string;
  title: string;
  description: string;
  accent: "warm" | "stone" | "rose" | "sand";
  items: GalleryItem[];
};

const accentStyles = {
  warm: "from-[#fbfcfd] via-[#eef3f7] to-[#dbe6ee]",
  stone: "from-[#fbfcfd] via-[#eef3f7] to-[#dbe6ee]",
  rose: "from-[#fbfcfd] via-[#eef3f7] to-[#dbe6ee]",
  sand: "from-[#fbfcfd] via-[#eef3f7] to-[#dbe6ee]",
};

function GalleryShowcaseSection({ section, index }: { section: GallerySection; index: number }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = section.items[activeIndex];
  const isWedding = section.key === "wedding";

  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className="overflow-hidden rounded-[2rem] border border-[#d9e3ea] bg-white shadow-[0_18px_40px_rgba(72,53,38,0.04)]"
    >
      <div className="grid min-h-[22rem] gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-8">
          <div className="max-w-2xl">
            <h3 className="font-serif text-3xl font-semibold leading-tight text-[#5f7480] sm:text-4xl">
              {section.title}
            </h3>
            {isWedding ? (
              <div className="mt-6 space-y-4 text-[#6f8190]">
                <p className="font-serif text-[1rem] leading-7 text-[#5e7483] sm:text-[1.08rem]">
                  Timeless stories, captured with intention.
                </p>
                <p className="text-sm leading-6 sm:text-[0.92rem]">
                  From the quiet, intimate rituals to the vibrant energy of the celebration, every
                  moment is documented with care, emotion, and attention to detail.
                </p>
                <p className="text-sm leading-6 sm:text-[0.92rem]">
                  We focus on more than just the obvious highlights. We look for the in-between
                  moments: the nervous smiles before the ceremony, the reassuring glances, the
                  laughter shared with loved ones, and the emotions that can&apos;t be staged.
                </p>
                <p className="text-sm leading-6 sm:text-[0.92rem]">
                  Our approach is natural and unobtrusive, allowing your day to unfold freely
                  while we preserve it as it truly happens. Honest, elegant, and deeply personal.
                </p>
                <p className="text-sm leading-6 sm:text-[0.92rem]">
                  Because years from now, these won&apos;t just be photographs you scroll through,
                  they&apos;ll be the moments that take you back, make you pause, and remind you
                  exactly how it all felt.
                </p>
                <p className="text-sm leading-7 sm:text-[0.96rem]">
                  This is more than wedding photography. It&apos;s your story, carefully captured
                  and beautifully remembered for a lifetime.
                </p>
              </div>
            ) : (
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#6f8190] sm:text-[1.02rem]">
                {section.description}
              </p>
            )}
          </div>
        </div>

        <div className="relative min-h-[20rem] lg:min-h-full">
          <div className={`absolute inset-0 bg-gradient-to-br ${accentStyles[section.accent]}`} />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.title}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.45 }}
              className="absolute inset-0"
            >
              {activeItem.src ? (
                <Image
                  src={activeItem.src}
                  alt={activeItem.title}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1280px) 55vw, (min-width: 1024px) 52vw, 100vw"
                  quality={78}
                  priority={index === 0 && activeIndex === 0}
                />
              ) : (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.48),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(116,142,156,0.12)_100%)]" />
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(116,142,156,0.12)_100%)]" />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 px-4">
            {section.items.map((item, itemIndex) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(itemIndex)}
                className={`h-2.5 rounded-full transition-all ${
                  itemIndex === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/55 hover:bg-white/85"
                }`}
                aria-label={`Show ${section.title} frame ${itemIndex + 1}`}
              />
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center pl-4">
            <button
              type="button"
              onClick={() =>
                setActiveIndex((current) => (current - 1 + section.items.length) % section.items.length)
              }
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d9e3ea] bg-white/85 text-[#5f7480] backdrop-blur-md transition hover:bg-[#f4f8fa]"
              aria-label={`Previous ${section.title} image`}
            >
              <span aria-hidden="true">{"\u2039"}</span>
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <button
              type="button"
              onClick={() => setActiveIndex((current) => (current + 1) % section.items.length)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d9e3ea] bg-white/85 text-[#5f7480] backdrop-blur-md transition hover:bg-[#f4f8fa]"
              aria-label={`Next ${section.title} image`}
            >
              <span aria-hidden="true">{"\u203A"}</span>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export function GallerySections() {
  const sections = gallerySections as GallerySection[];

  return (
    <div className="space-y-6">
      {sections.map((section, index) => (
        <GalleryShowcaseSection key={section.key} section={section} index={index} />
      ))}
    </div>
  );
}
