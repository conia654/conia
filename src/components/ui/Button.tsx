"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";
import { useLenisRef } from "@/components/ui/SmoothScroll";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  /** Icon as React node (inline SVG or img). Use iconPosition to place left or right. */
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  /** When set, renders as Next.js Link instead of button. */
  href?: string;
  /** When set with href, on click scrolls to this id if the element exists (smooth), else navigates. */
  scrollToId?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white border-2 border-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
  secondary:
    "bg-white text-primary border-2 border-outline hover:bg-outline/10 focus:outline-none focus:ring-2 focus:ring-outline focus:ring-offset-2",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 font-medium transition-opacity disabled:opacity-50 disabled:cursor-not-allowed";

function ButtonContent({
  icon,
  iconPosition,
  children,
}: {
  icon?: React.ReactNode;
  iconPosition: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0 [&>svg]:size-5">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="shrink-0 [&>svg]:size-5">{icon}</span>
      )}
    </>
  );
}


export function Button({
  variant = "primary",
  icon,
  iconPosition = "left",
  children,
  className = "",
  disabled,
  href,
  scrollToId,
  ...props
}: ButtonProps) {
  const lenisRef = useLenisRef();
  const styles = variantStyles[variant];
  const classNames = `${base} ${styles} ${className}`.trim();

  const handleScrollToClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!scrollToId) return;
    const el = document.getElementById(scrollToId);
    if (!el) return;
    e.preventDefault();
    if (lenisRef?.current) {
      lenisRef.current.scrollTo(el, { duration: 1.2, offset: 0 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (href) {
    return (
      <Link
        href={href}
        className={classNames}
        {...(scrollToId ? { onClick: handleScrollToClick } : {})}
      >
        <ButtonContent icon={icon} iconPosition={iconPosition}>
          {children}
        </ButtonContent>
      </Link>
    );
  }

  return (
    <button type="button" className={classNames} disabled={disabled} {...props}>
      <ButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </ButtonContent>
    </button>
  );
}
