"use client";

import { useState } from "react";
import { Button } from "../common/button";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <form
      className="grid gap-4 rounded-[1.75rem] border border-white/70 bg-white/75 p-6 shadow-[0_16px_40px_rgba(72,53,38,0.08)]"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        value={form.name}
        onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
        placeholder="Name"
        className="rounded-2xl border border-[#d8c0a4] bg-white px-4 py-3 text-sm text-[#2d1f19] outline-none"
      />
      <input
        value={form.email}
        onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
        placeholder="Email"
        type="email"
        className="rounded-2xl border border-[#d8c0a4] bg-white px-4 py-3 text-sm text-[#2d1f19] outline-none"
      />
      <textarea
        value={form.message}
        onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
        placeholder="Message"
        rows={5}
        className="rounded-2xl border border-[#d8c0a4] bg-white px-4 py-3 text-sm text-[#2d1f19] outline-none"
      />
      <div>
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  );
}
