"use client";

import { useState } from "react";

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  return (
    <section className="rounded-[1.75rem] border border-white/70 bg-white/75 p-6 shadow-[0_16px_40px_rgba(72,53,38,0.08)]">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8d5b35]">
        Before / After
      </p>
      <div className="relative mt-5 overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,#f8f2ea_0%,#e7d0b6_50%,#8d5b35_100%)]">
        <div className="min-h-64 bg-[linear-gradient(180deg,#ebe5dc_0%,#c3b3a2_100%)]" />
        <div
          className="absolute inset-y-0 left-0 bg-[linear-gradient(180deg,#fff6ef_0%,#e4c09a_100%)]"
          style={{ width: `${position}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <span className="rounded-full bg-black/25 px-4 py-2 text-sm font-semibold backdrop-blur-md">
            Compare retouching
          </span>
        </div>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        className="mt-4 w-full accent-[#8d5b35]"
      />
    </section>
  );
}
