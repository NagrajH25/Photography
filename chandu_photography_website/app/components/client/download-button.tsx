type DownloadButtonProps = {
  disabled?: boolean;
};

export function DownloadButton({ disabled }: DownloadButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className="inline-flex items-center justify-center rounded-full bg-[#2d1f19] px-6 py-3 text-sm font-semibold text-[#fff8f0] disabled:opacity-60"
    >
      Download Selected
    </button>
  );
}
