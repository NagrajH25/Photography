import type { ReactNode } from "react";

type SectionWrapperProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`scroll-mt-28 border-t border-[#dfc8b3] py-10 ${className}`}>
      {(eyebrow || title || description) && (
        <div className="mb-8 max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8d5b35]">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#221915] sm:text-5xl">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5e4d42] sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      )}
      {children}
    </section>
  );
}
