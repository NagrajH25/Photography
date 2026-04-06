import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative mb-10 h-screen w-full overflow-hidden">
      <Image
        src="/hero/y3.jpg"
        alt="Couple on a yacht for the hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,233,0.08)_0%,rgba(244,228,195,0.18)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_34%)]"
      />
    </section>
  );
}
