type BudgetSliderProps = {
  value: number;
  onChange: (value: number) => void;
};

export function BudgetSlider({ value, onChange }: BudgetSliderProps) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-sm text-[#6d5c51]">
        <span>Budget</span>
        <span>${value}</span>
      </div>
      <input
        type="range"
        min="100"
        max="5000"
        step="50"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full accent-[#8d5b35]"
      />
    </div>
  );
}
