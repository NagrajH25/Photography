type ClientLoginProps = {
  token: string;
  onTokenChange: (value: string) => void;
  onSubmit: () => void;
};

export function ClientLogin({ token, onTokenChange, onSubmit }: ClientLoginProps) {
  return (
    <div className="rounded-[1.75rem] border border-white/70 bg-white/75 p-6 shadow-[0_16px_40px_rgba(72,53,38,0.08)]">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8d5b35]">
        Client Login
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          value={token}
          onChange={(event) => onTokenChange(event.target.value)}
          placeholder="Enter access token"
          className="flex-1 rounded-2xl border border-[#d8c0a4] bg-white px-4 py-3 text-sm text-[#2d1f19] outline-none"
        />
        <button
          type="button"
          onClick={onSubmit}
          className="rounded-full bg-[#2d1f19] px-6 py-3 text-sm font-semibold text-[#fff8f0]"
        >
          Unlock Gallery
        </button>
      </div>
    </div>
  );
}
