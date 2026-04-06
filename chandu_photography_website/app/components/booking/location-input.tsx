type LocationInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function LocationInput({ value, onChange }: LocationInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="City, venue, or studio location"
      className="w-full rounded-2xl border border-[#d8c0a4] bg-white px-4 py-3 text-sm text-[#2d1f19] outline-none"
    />
  );
}
