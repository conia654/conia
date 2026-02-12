"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  /** Icon as React node (inline SVG or img). Use iconPosition to place left or right. */
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  /** When set, renders as Next.js Link instead of button. */
  href?: string;
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
  ...props
}: ButtonProps) {
  const styles = variantStyles[variant];
  const classNames = `${base} ${styles} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classNames}>
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
