type PhotoSelectionCardProps = {
  title: string;
  selected: boolean;
  onToggle: () => void;
};

export function PhotoSelectionCard({ title, selected, onToggle }: PhotoSelectionCardProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`rounded-[1.75rem] border p-4 text-left shadow-[0_16px_40px_rgba(72,53,38,0.08)] transition ${
        selected ? "border-[#8d5b35] bg-[#f6eadf]" : "border-white/70 bg-white/75"
      }`}
    >
      <div className="min-h-44 rounded-[1.25rem] bg-[linear-gradient(180deg,#fff7ef_0%,#e2c4a1_50%,#8b5e44_100%)]" />
      <p className="mt-4 font-serif text-2xl font-semibold text-[#221915]">{title}</p>
      <p className="mt-2 text-sm text-[#6d5c51]">{selected ? "Selected" : "Tap to favorite"}</p>
    </button>
  );
}
