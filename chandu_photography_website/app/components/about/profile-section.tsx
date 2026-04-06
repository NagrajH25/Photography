import { ImageCard } from "../common/image-card";

export function ProfileSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <ImageCard title="Chandu" subtitle="Profile" tone="sand" className="min-h-[30rem]" />
      <div className="flex flex-col justify-center rounded-[1.75rem] border border-white/70 bg-white/75 p-8 shadow-[0_16px_40px_rgba(72,53,38,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8d5b35]">
          About Chandu
        </p>
        <h2 className="mt-4 font-serif text-4xl font-semibold text-[#221915] sm:text-5xl">
          A photographer who prefers quiet direction and elegant results.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#5e4d42]">
          The style blends warm color, soft light, and a premium editorial finish.
          It&apos;s a process that keeps clients comfortable while creating images that
          still feel polished and special.
        </p>
      </div>
    </div>
  );
}
