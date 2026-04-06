type ProjectStoryProps = {
  story: string;
};

export function ProjectStory({ story }: ProjectStoryProps) {
  return (
    <section className="rounded-[1.75rem] border border-white/70 bg-white/75 p-8 shadow-[0_16px_40px_rgba(72,53,38,0.08)]">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8d5b35]">
        Story
      </p>
      <p className="mt-4 max-w-3xl text-base leading-7 text-[#5e4d42]">{story}</p>
    </section>
  );
}
