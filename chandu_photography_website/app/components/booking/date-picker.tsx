type DatePickerProps = {
  value: string;
  onChange: (value: string) => void;
};

export function DatePicker({ value, onChange }: DatePickerProps) {
  return (
    <input
      type="date"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full rounded-2xl border border-[#d8c0a4] bg-white px-4 py-3 text-sm text-[#2d1f19] outline-none"
    />
  );
}
