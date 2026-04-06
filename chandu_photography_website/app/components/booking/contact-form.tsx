type ContactFormProps = {
  name: string;
  email: string;
  phone: string;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
};

export function ContactForm({
  name,
  email,
  phone,
  onNameChange,
  onEmailChange,
  onPhoneChange,
}: ContactFormProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <input
        value={name}
        onChange={(event) => onNameChange(event.target.value)}
        placeholder="Name"
        className="rounded-2xl border border-[#d8c0a4] bg-white px-4 py-3 text-sm text-[#2d1f19] outline-none"
      />
      <input
        value={email}
        onChange={(event) => onEmailChange(event.target.value)}
        placeholder="Email"
        type="email"
        className="rounded-2xl border border-[#d8c0a4] bg-white px-4 py-3 text-sm text-[#2d1f19] outline-none"
      />
      <input
        value={phone}
        onChange={(event) => onPhoneChange(event.target.value)}
        placeholder="Phone"
        className="rounded-2xl border border-[#d8c0a4] bg-white px-4 py-3 text-sm text-[#2d1f19] outline-none"
      />
    </div>
  );
}
