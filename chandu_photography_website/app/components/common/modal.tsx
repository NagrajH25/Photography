"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal({ open, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, open]);

  if (!open || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <button aria-label="Close modal" className="absolute inset-0" onClick={onClose} />
      <div className="relative z-10 w-full max-w-5xl rounded-[2rem] bg-[#fffaf4] p-4 shadow-[0_24px_80px_rgba(33,22,17,0.25)] sm:p-6">
        {children}
      </div>
    </div>,
    document.body,
  );
}
