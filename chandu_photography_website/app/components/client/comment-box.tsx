type CommentBoxProps = {
  value: string;
  onChange: (value: string) => void;
};

export function CommentBox({ value, onChange }: CommentBoxProps) {
  return (
    <textarea
      value={value}
      onChange={(event) => onChange(event.target.value)}
      rows={4}
      placeholder="Add a note for your gallery..."
      className="w-full rounded-[1.5rem] border border-[#d8c0a4] bg-white px-4 py-3 text-sm text-[#2d1f19] outline-none"
    />
  );
}
