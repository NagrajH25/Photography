type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="rounded-[1.75rem] border border-white/70 bg-white/75 p-6 shadow-[0_16px_40px_rgba(72,53,38,0.08)]">
      <h3 className="font-serif text-2xl font-semibold text-[#221915]">{title}</h3>
      <p className="mt-3 text-base leading-7 text-[#5e4d42]">{description}</p>
    </div>
  );
}
