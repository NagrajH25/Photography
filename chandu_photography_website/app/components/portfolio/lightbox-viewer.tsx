"use client";

import { Modal } from "../common/modal";

type LightboxViewerProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  category: string;
  description: string;
};

export function LightboxViewer({ open, onClose, title, category, description }: LightboxViewerProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="min-h-[28rem] rounded-[1.5rem] bg-[linear-gradient(180deg,#fff6ef_0%,#e8c39e_45%,#7c5946_100%)]" />
        <div className="flex flex-col justify-between p-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8d5b35]">
              {category}
            </p>
            <h3 className="mt-3 font-serif text-4xl font-semibold text-[#221915]">{title}</h3>
            <p className="mt-4 text-base leading-7 text-[#5e4d42]">{description}</p>
          </div>
          <button
            onClick={onClose}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#2d1f19] px-6 py-3 text-sm font-semibold text-[#fff8f0]"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}
