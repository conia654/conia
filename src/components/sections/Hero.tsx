"use client";

import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export interface HeroProps {
  /** Main headline */
  title?: string;
  /** Primary CTA button (scrollToId: smooth-scroll to section when on same page) */
  primaryCta?: { label: string; href: string; scrollToId?: string };
  /** Secondary CTA button (optional icon shown by default for "Cotizar") */
  secondaryCta?: { label: string; href: string; icon?: React.ReactNode };
  /** Optional extra class for the section */
  className?: string;
}

const defaultTitle =
  "Impulsamos tu negocio con soluciones tecnológicas integrales.";

export function Hero({
  title = defaultTitle,
  primaryCta = { label: "Contáctanos", href: "/#contacto", scrollToId: "contacto" },
  secondaryCta = {
    label: "Cotizar",
    href: "/cotizar",
    icon: <Icon icon="fluent:cursor-click-24-filled" width={24} height={24} />,
  },
  className = "",
}: HeroProps) {
  const headlineRef = useRef<HTMLDivElement>(null);
  const words = title.split(/\s+/);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;

    const innerSpans = el.querySelectorAll<HTMLElement>("[data-char] .char-inner");
    if (innerSpans.length === 0) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      innerSpans,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: { each: 0.025 },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [title]);

  return (
    <section
      className={`relative flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8 ${className}`.trim()}
    >
      {/* Semantic H1 for SEO and screen readers; visually hidden */}
      <h1 className="sr-only">{title}</h1>
      {/* Animated visual headline; decorative only */}
      <div
        ref={headlineRef}
        aria-hidden="true"
        className="max-w-4xl text-4xl font-medium leading-tight text-foreground sm:text-5xl"
        role="presentation"
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {wordIndex > 0 && "\u00A0"}
            {word.split("").map((char, i) => (
              <span
                key={i}
                data-char
                className="inline-block overflow-hidden align-bottom leading-tight"
                style={{ verticalAlign: "bottom" }}
              >
                <span className="inline-block char-inner">{char}</span>
              </span>
            ))}
          </span>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button variant="primary" href={primaryCta.href} scrollToId={primaryCta.scrollToId}>
          {primaryCta.label}
        </Button>
        <Button
          variant="secondary"
          icon={secondaryCta.icon}
          iconPosition="left"
          href={secondaryCta.href}
        >
          {secondaryCta.label}
        </Button>
      </div>
    </section>
  );
}
