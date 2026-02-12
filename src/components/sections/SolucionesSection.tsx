"use client";

import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

/** Icon is an Iconify icon name (e.g. "bi:chat-dots", "fluent:shield-person-24-filled"). */
export interface SolucionItem {
  title: string;
  description: string;
  icon: string;
  iconSize?: number;
}

const DEFAULT_ICON_SIZE = 40;

export interface SolucionesSectionProps {
  title?: string;
  subtitle?: string;
  intro?: string;
  ctaHref?: string;
  ctaLabel?: string;
  items?: SolucionItem[];
  className?: string;
}

const defaultItems: SolucionItem[] = [
  {
    title: "Soporte especializado",
    description:
      "Soporte técnico especializado y personalizado y certificado para resolver tus necesidades de TI.",
    icon: "solar:chat-round-dots-bold",
  },
  {
    title: "Administración de licencias",
    description:
      "Gestionamos tus licencias de Microsoft de forma centralizada y eficiente para mantener tus herramientas siempre actualizadas.",
    icon: "ri:shield-user-fill",
  },
  {
    title: "Soluciones personalizadas",
    description:
      "Desarrollamos soluciones personalizadas adaptadas a las necesidades específicas de tu empresa.",
    icon: "mingcute:cube-fill",
  },
];

const defaultIntro =
  "Brindamos respaldo integral para tus necesidades tecnológicas, cubriendo tanto aspectos técnicos como operacionales. Nuestro servicio abarca desde la atención de equipos informáticos y sistemas de servidores, hasta el mantenimiento y gestión de software empresarial.";

export function SolucionesSection({
  title = "Soluciones MSP",
  subtitle = "Soporte especializado incluido",
  intro = defaultIntro,
  ctaHref = "/cotizar",
  ctaLabel = "Cotizar",
  items = defaultItems,
  className = "",
}: SolucionesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleChars = title.split("");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const titleInnerSpans = section.querySelectorAll<HTMLElement>(
      "[data-soluciones-title] .char-inner",
    );
    const subtitleEl = section.querySelector<HTMLElement>(
      "[data-soluciones-subtitle]",
    );
    const introEl = section.querySelector<HTMLElement>(
      "[data-soluciones-intro]",
    );
    const columns = section.querySelectorAll<HTMLElement>(
      "[data-soluciones-column]",
    );

    // --- Animation timing (edit these to change when title/columns overlap) ---
    const TITLE_CHAR_STAGGER = 0.02;
    const TITLE_CHAR_DURATION = 0.45;
    const COL_ICON_DURATION = 0.45;
    const COL_OVERLAP_ICON_HEADING = 0.18; // heading starts this many seconds before icon ends
    const COL_OVERLAP_HEADING_TEXT = 0.18; // text starts this many seconds before heading ends
    const COL_PROGRESS_WHEN_NEXT_COL_STARTS = 0.5; // next column starts when previous is this far through (0.5 = midway)
    const TITLE_PROGRESS_WHEN_SUBTITLE_STARTS = 0.35; // subtitle starts when title is this far through (0.35 = during title)
    const GAP_SUBTITLE_TO_INTRO = 0.1; // seconds before intro starts (after subtitle starts)
    const SUB_INTRO_DURATION = 0.5; // duration of subtitle and intro animations
    const BODY_PROGRESS_WHEN_FIRST_COL_STARTS = 0.5; // first column starts when body (intro) is this far through (0.5 = midway)
    // -------------------------------------------------

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        once: true,
        toggleActions: "play none none none",
      },
    });

    // Heading: character-by-character from bottom to top (starts at time 0)
    const titleDuration =
      titleInnerSpans.length > 0
        ? (titleInnerSpans.length - 1) * TITLE_CHAR_STAGGER +
          TITLE_CHAR_DURATION
        : 0;

    if (titleInnerSpans.length) {
      tl.fromTo(
        titleInnerSpans,
        { yPercent: 100, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: TITLE_CHAR_DURATION,
          ease: "power2.out",
          stagger: { each: TITLE_CHAR_STAGGER },
        },
      );
    }

    // Subtitle and intro: start while title is still animating
    const subtitleStart = titleDuration * TITLE_PROGRESS_WHEN_SUBTITLE_STARTS;
    const introStart = subtitleStart + GAP_SUBTITLE_TO_INTRO;

    const subFrom = { y: 24, opacity: 0 };
    const subTo = {
      y: 0,
      opacity: 1,
      duration: SUB_INTRO_DURATION,
      ease: "power2.out",
    };
    if (subtitleEl) tl.fromTo(subtitleEl, subFrom, { ...subTo }, subtitleStart);
    if (introEl) tl.fromTo(introEl, subFrom, { ...subTo }, introStart);

    // First column starts when body (intro) is halfway through
    const firstColStart =
      introStart + SUB_INTRO_DURATION * BODY_PROGRESS_WHEN_FIRST_COL_STARTS;

    // Column block: from icon start to text end; next column starts at previous column's midway
    const colBlockDuration =
      COL_ICON_DURATION +
      (COL_ICON_DURATION - COL_OVERLAP_ICON_HEADING) +
      (COL_ICON_DURATION - COL_OVERLAP_HEADING_TEXT);
    const colMidOffset = colBlockDuration * COL_PROGRESS_WHEN_NEXT_COL_STARTS;

    const from = { y: 24, opacity: 0 };
    const to = {
      y: 0,
      opacity: 1,
      duration: COL_ICON_DURATION,
      ease: "power2.out",
    };

    columns.forEach((col, i) => {
      const icon = col.querySelector<HTMLElement>("[data-sol-icon]");
      const heading = col.querySelector<HTMLElement>("[data-sol-heading]");
      const text = col.querySelector<HTMLElement>("[data-sol-text]");
      const colStart = firstColStart + i * colMidOffset;
      const headingStart =
        colStart + COL_ICON_DURATION - COL_OVERLAP_ICON_HEADING;
      const textStart =
        headingStart + COL_ICON_DURATION - COL_OVERLAP_HEADING_TEXT;
      if (icon) tl.fromTo(icon, from, { ...to }, colStart);
      if (heading) tl.fromTo(heading, from, { ...to }, headingStart);
      if (text) tl.fromTo(text, from, { ...to }, textStart);
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, [title, items.length]);

  return (
    <section ref={sectionRef} className={`py-16 sm:py-20 ${className}`.trim()}>
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="sr-only">{title}</h2>
        <div
          data-soluciones-title
          aria-hidden="true"
          className="text-3xl font-medium text-foreground sm:text-4xl"
          role="presentation"
        >
          {titleChars.map((char, i) => (
            <span
              key={i}
              data-char
              className="inline-block overflow-hidden align-bottom leading-tight"
              style={{ verticalAlign: "bottom" }}
            >
              <span className="inline-block char-inner">
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          ))}
        </div>
        <p
          data-soluciones-subtitle
          className="mt-2 text-xl text-secondary-blue"
        >
          {subtitle}
        </p>
        <p data-soluciones-intro className="mt-4 text-foreground/80">
          {intro}
        </p>
        <div className="mt-8">
          <Button
            variant="secondary"
            href={ctaHref}
            icon={
              <Icon
                icon="fluent:cursor-click-24-filled"
                width={24}
                height={24}
              />
            }
            iconPosition="left"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              data-soluciones-column
              className="flex flex-row"
            >
              <div
                data-sol-icon
                className="mt-4 flex h-14 w-14 shrink-0 items-center justify-center text-primary"
              >
                <Icon
                  icon={item.icon}
                  width={item.iconSize ?? DEFAULT_ICON_SIZE}
                  height={item.iconSize ?? DEFAULT_ICON_SIZE}
                />
              </div>
              <div>
                <h3
                  data-sol-heading
                  className="mt-4 text-lg font-medium text-foreground"
                >
                  {item.title}
                </h3>
                <p data-sol-text className="mt-2 text-foreground/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
