"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/Button";

export interface ServicePageHeroBadge {
  /** Badge content (use <span className="text-lg font-bold"> for highlighted parts) */
  content: React.ReactNode;
  variant?: "primary" | "muted";
}

export interface ServicePageHeroProps {
  /** Main headline (can be string or use fragment for line breaks) */
  title: React.ReactNode;
  /** Primary CTA (scrollToId: smooth-scroll to section when on same page) */
  primaryCta?: { label: string; href: string; scrollToId?: string };
  /** Secondary CTA (e.g. Cotizar with icon) */
  secondaryCta?: { label: string; href: string; icon?: React.ReactNode };
  /** Hero image (e.g. product photo) */
  image: { src: string; alt: string };
  /** Floating badges next to the image */
  badges?: ServicePageHeroBadge[];
  className?: string;
}

const defaultPrimaryCta = { label: "Contáctanos", href: "/#contacto", scrollToId: "contacto" };
const defaultSecondaryCta = {
  label: "Cotizar",
  href: "/cotizar",
  icon: <Icon icon="fluent:cursor-click-24-filled" width={24} height={24} />,
};

export function ServicePageHero({
  title,
  primaryCta = defaultPrimaryCta,
  secondaryCta = defaultSecondaryCta,
  image,
  badges = [],
  className = "",
}: ServicePageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden pb-24 pt-12 sm:pb-16 ${className}`.trim()}
    >
      <div className="relative z-10 mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8">
        {/* Left: title + CTAs */}
        <div className="max-w-xl">
          <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-[2.25rem]">
            {title}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" href={primaryCta.href} scrollToId={primaryCta.scrollToId}>
              {primaryCta.label}
            </Button>
            <Button
              variant="secondary"
              href={secondaryCta.href}
              icon={secondaryCta.icon}
              iconPosition="left"
            >
              {secondaryCta.label}
            </Button>
          </div>
        </div>

        {/* Right: image + floating badges */}
        <div className="relative flex min-h-[280px] justify-center sm:min-h-[320px] lg:justify-end">
          <div className="relative w-full max-w-md">
            <Image
              src={image.src}
              alt={image.alt}
              width={480}
              height={360}
              className="h-auto w-full object-contain"
              priority
            />
            {badges.map((badge, i) => (
              <div
                key={i}
                className={`absolute rounded-xl px-4 py-2 text-base font-semibold text-white shadow-md w-48 text-center ${
                  badge.variant === "muted" ? "bg-secondary-blue" : "bg-primary"
                }`}
                style={
                  i === 0
                    ? { top: "12%", right: "-4%", minWidth: "10rem" }
                    : { top: "32%", right: "-4%", minWidth: "10rem" }
                }
              >
                {badge.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
