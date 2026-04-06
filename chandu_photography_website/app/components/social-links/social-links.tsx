"use client";

import { motion, useReducedMotion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    background: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5H17V4.6c-.4-.1-1.7-.2-3.1-.2-2.9 0-4.9 1.8-4.9 5v1.5H6v3.1h3V22h4.5Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/chanduphotography._?igsh=Znc5OG16NHp0YTRu",
    background: "linear-gradient(135deg, #f58529 0%, #dd2a7b 55%, #8134af 100%)",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm9.7 1.7a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919620037343",
    background: "#25D366",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M12 2a10 10 0 0 0-8.7 15l-1.1 4.1 4.2-1.1A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4-1.1l-.3-.2-2.5.7.7-2.4-.2-.3A8 8 0 1 1 12 20Zm4.6-5.7c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1-.2.2-.7.7-.9.9-.2.2-.3.2-.6.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.4-1.9-.1-.3 0-.4.1-.6.1-.1.2-.3.3-.5.1-.2.1-.3 0-.5l-.6-1.5c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.8-.9 2s.9 2.4 1 2.6c.1.2 1.7 2.7 4.2 3.8.6.3 1.1.4 1.5.5.6.2 1.2.1 1.6.1.5-.1 1.2-.5 1.4-1 .2-.4.2-.9.1-1-.1-.1-.3-.2-.6-.3Z" />
      </svg>
    ),
  },
];

export function SocialLinks() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: easeOut, delay: 0.15 }}
      className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3"
      aria-label="Social links"
    >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            title={link.label}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 0.45 + index * 0.08 }}
            style={{ background: link.background, color: "#fff" }}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/30 shadow-[0_10px_30px_rgba(45,31,25,0.12)] backdrop-blur-md transition hover:-translate-y-1 hover:brightness-110"
          >
            {link.icon}
          </motion.a>
        ))}
    </motion.div>
  );
}
