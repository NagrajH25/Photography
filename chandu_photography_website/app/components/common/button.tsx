import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const styles = {
  primary: "bg-[#2d1f19] text-[#fff8f0] hover:bg-[#3a291f]",
  secondary: "border border-[#d4b99a] bg-white/80 text-[#4e3b30] hover:bg-white",
  ghost: "border border-white/20 bg-white/10 text-[#fff7ef] hover:bg-white/15",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
