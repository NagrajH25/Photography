type PricingCardProps = {
  name: string;
  price: string;
  features: string[];
};

export function PricingCard({ name, price, features }: PricingCardProps) {
  return (
    <div className="rounded-[1.75rem] border border-[#d8c0a4] bg-[#fffaf4] p-6 shadow-[0_16px_40px_rgba(72,53,38,0.08)]">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8d5b35]">{name}</p>
      <h3 className="mt-3 font-serif text-3xl font-semibold text-[#221915]">{price}</h3>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-[#5e4d42]">
        {features.map((feature) => (
          <li key={feature}>• {feature}</li>
        ))}
      </ul>
    </div>
  );
}
