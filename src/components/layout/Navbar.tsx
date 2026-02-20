"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export interface NavLink {
  href: string;
  label: string;
}

export interface NavbarProps {
  logo?: React.ReactNode;
  links?: NavLink[];
  cta?: { label: string; href: string; scrollToId?: string };
}

const defaultLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/sai", label: "SAI" },
  {
    href: "/microsoft-solutions-p artner",
    label: "Microsoft Solutions Partner",
  },
];

export function Navbar({ logo, links = defaultLinks, cta }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-outline/30 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2" onClick={close}>
            {logo ?? (
              <Image
                src="/images/logo-conia.png"
                alt="Conia"
                width={120}
                height={40}
                className="h-16 w-auto"
                priority
              />
            )}
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {cta && (
              cta.scrollToId ? (
                <Button href={cta.href} scrollToId={cta.scrollToId} variant="primary">
                  {cta.label}
                </Button>
              ) : (
                <Link href={cta.href}>
                  <Button variant="primary">{cta.label}</Button>
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-outline md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <svg
                className="size-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="size-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Offcanvas overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden
      />

      {/* Offcanvas panel */}
      <aside
        className={`fixed top-0 right-0 z-40 h-full w-full max-w-sm border-l border-outline/30 bg-background shadow-xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-modal="true"
        aria-label="Mobile menu"
        role="dialog"
      >
        <div className="flex h-16 items-center justify-between border-b border-outline/30 px-4">
          <span className="font-semibold">Menu</span>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-outline"
            onClick={close}
            aria-label="Close menu"
          >
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-1 p-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={close}
                className="block rounded-lg px-4 py-3 text-foreground hover:bg-outline/10"
              >
                {link.label}
              </Link>
            </li>
          ))}
          {cta && (
            <li className="mt-4 border-t border-outline/30 pt-4">
              {cta.scrollToId ? (
                <Button
                  href={cta.href}
                  scrollToId={cta.scrollToId}
                  variant="primary"
                  className="w-full"
                  onClick={close}
                >
                  {cta.label}
                </Button>
              ) : (
                <Link href={cta.href} onClick={close} className="block">
                  <Button variant="primary" className="w-full">
                    {cta.label}
                  </Button>
                </Link>
              )}
            </li>
          )}
        </ul>
      </aside>
    </>
  );
}
