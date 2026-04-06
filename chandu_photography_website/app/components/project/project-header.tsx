type ProjectHeaderProps = {
  title: string;
  meta: string;
};

export function ProjectHeader({ title, meta }: ProjectHeaderProps) {
  return (
    <header className="rounded-[2rem] border border-white/70 bg-white/75 p-8 shadow-[0_16px_40px_rgba(72,53,38,0.08)]">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8d5b35]">
        Project Detail
      </p>
      <h1 className="mt-3 font-serif text-5xl font-semibold text-[#221915] sm:text-6xl">
        {title}
      </h1>
      <p className="mt-4 text-sm font-medium text-[#6d5c51]">{meta}</p>
    </header>
  );
}
