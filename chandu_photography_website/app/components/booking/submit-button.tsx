type SubmitButtonProps = {
  disabled?: boolean;
};

export function SubmitButton({ disabled }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="inline-flex items-center justify-center rounded-full bg-[#2d1f19] px-6 py-3 text-sm font-semibold text-[#fff8f0] transition hover:bg-[#3a291f] disabled:cursor-not-allowed disabled:opacity-60"
    >
      Send Enquiry
    </button>
  );
}
