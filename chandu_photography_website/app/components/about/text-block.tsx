type TextBlockProps = {
  title: string;
  body: string;
};

export function TextBlock({ title, body }: TextBlockProps) {
  return (
    <section className="rounded-[1.75rem] border border-white/70 bg-white/75 p-8 shadow-[0_16px_40px_rgba(72,53,38,0.08)]">
      <h3 className="font-serif text-3xl font-semibold text-[#221915]">{title}</h3>
      <p className="mt-4 text-base leading-7 text-[#5e4d42]">{body}</p>
    </section>
  );
}
