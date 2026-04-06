import Image from "next/image";
import type { ReactNode } from "react";

type ImageCardProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  src?: string;
  alt?: string;
  className?: string;
  tone?: "warm" | "rose" | "stone" | "sand";
  children?: ReactNode;
};

const toneStyles = {
  warm: "bg-[linear-gradient(180deg,#f8f2ea_0%,#e6c8a5_50%,#8b5e44_100%)]",
  rose: "bg-[linear-gradient(180deg,#fff6f2_0%,#e8c0b0_48%,#8f5f52_100%)]",
  stone: "bg-[linear-gradient(180deg,#f6f2ee_0%,#ddd1c3_52%,#7e6b5b_100%)]",
  sand: "bg-[linear-gradient(180deg,#fff8ef_0%,#ead8bc_52%,#9b7450_100%)]",
};

export function ImageCard({
  title,
  subtitle,
  description,
  src,
  alt = "",
  className = "",
  tone = "warm",
  children,
}: ImageCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-white/70 shadow-[0_16px_40px_rgba(72,53,38,0.08)] ${toneStyles[tone]} ${className}`}
    >
      {src ? (
        <div className="relative min-h-72 w-full overflow-hidden">
          <Image src={src} alt={alt} fill unoptimized className="object-cover" />
          {(title || subtitle || description) ? (
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(30,21,17,0.72)_100%)] p-4 text-[#fffaf4]">
              {subtitle ? (
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#f6d8b1]">
                  {subtitle}
                </p>
              ) : null}
              {title ? <h3 className="mt-2 font-serif text-2xl font-semibold">{title}</h3> : null}
              {description ? (
                <p className="mt-2 max-w-sm text-sm leading-6 text-[#fff2e5]">{description}</p>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : (
        <div className="flex min-h-72 flex-col justify-between p-5 text-[#fffaf4]">
          <div>
            {subtitle ? (
              <p className="text-xs uppercase tracking-[0.35em] text-[#f9ddc0]">{subtitle}</p>
            ) : null}
            {title ? <h3 className="mt-4 font-serif text-3xl font-semibold">{title}</h3> : null}
          </div>
          {description ? <p className="max-w-sm text-sm leading-6 text-[#fff2e5]">{description}</p> : null}
        </div>
      )}
      {children}
    </div>
  );
}
