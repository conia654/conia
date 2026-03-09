"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/Button";

export interface MicrosoftSolutionCard {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** When set, CTA smooth-scrolls to this id (e.g. "pyme", "empresarial") */
  scrollToId?: string;
}

export interface MicrosoftPartnersHeroProps {
  /** Main headline; use a fragment to wrap "oficiales" in primary color */
  title?: React.ReactNode;
  /** Hero image (e.g. person with laptop) */
  image: { src: string; alt: string };
  /** Speech bubble / callout text */
  calloutText?: string;
  primaryCta?: { label: string; href: string; scrollToId?: string };
  secondaryCta?: { label: string; href: string; icon?: React.ReactNode };
  /** Two cards below hero: PYME and Empresarial (optional override) */
  solutionCards?: MicrosoftSolutionCard[];
  className?: string;
}

const defaultTitle = (
  <>
    Partners <span className="text-primary">oficiales</span> de Microsoft
  </>
);
const defaultPrimaryCta = { label: "Contáctanos", href: "/#contacto", scrollToId: "contacto" };
const defaultSecondaryCta = {
  label: "Cotizar",
  href: "https://wa.me/525545686108",
  icon: <Icon icon="fluent:cursor-click-24-filled" width={24} height={24} />,
};
const defaultCalloutText = "¡Facturamos todos los servicios!";

const defaultSolutionCards: MicrosoftSolutionCard[] = [
  {
    title: "PYME",
    description:
      "Impulsa tu negocio con soluciones de Microsoft diseñadas para pequeñas y medianas empresas. Aumenta la productividad, mejora la colaboración y protege tus datos con herramientas que te permiten centrarte en crecer.",
    ctaLabel: "Ver más",
    ctaHref: "#pyme",
    scrollToId: "pyme",
  },
  {
    title: "Empresarial",
    description:
      "Optimiza tus procesos y alcanza tus metas con soluciones de Microsoft para grandes empresas. Ofrecemos seguridad robusta, escalabilidad y las herramientas que necesitas para tomar decisiones informadas.",
    ctaLabel: "Ver más",
    ctaHref: "#empresarial",
    scrollToId: "empresarial",
  },
];

export function MicrosoftPartnersHero({
  title = defaultTitle,
  image,
  calloutText = defaultCalloutText,
  primaryCta = defaultPrimaryCta,
  secondaryCta = defaultSecondaryCta,
  solutionCards = defaultSolutionCards,
  className = "",
}: MicrosoftPartnersHeroProps) {
  return (
    <section
      className={`relative overflow-hidden pt-12 sm:pt-16 ${className}`.trim()}
    >
      {/* Top: two-column hero */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8">
        {/* Left: title, logo, CTAs */}
        <div className="max-w-xl">
          <h1 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-[2.25rem] break-keep">
            {title}
          </h1>
          <div className="mt-5">
            <Image
              src="/images/servicios-2.png"
              alt="Microsoft Partner"
              width={200}
              height={80}
              className="h-auto w-auto max-w-[200px] object-contain"
            />
          </div>
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

        {/* Right: image + speech bubble */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full ">
            <Image
              src={image.src}
              alt={image.alt}
              width={480}
              height={400}
              className="h-auto w-full object-contain object-bottom"
              priority
            />
            <div
              className="absolute right-0 top-[50%] max-w-48 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-md sm:right-4 sm:top-[50%] sm:max-w-56 sm:px-5 sm:py-3.5 sm:text-base"
              aria-hidden
            >
              {calloutText}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: two solution cards on light blue */}
      <div className="relative z-10 px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
        <div className="mx-auto grid max-w-7xl gap-6 sm:gap-8 md:grid-cols-2">
          {solutionCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-2xl border border-outline/25 bg-white/60 p-6 shadow-sm backdrop-blur-md sm:p-8"
            >
              <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
                {card.title}
              </h2>
              <p className="mt-4 flex-1 text-center text-sm leading-relaxed text-foreground/80 sm:text-base">
                {card.description}
              </p>
              <div className="mt-6 flex justify-center">
                <Button
                  variant="secondary"
                  href={card.ctaHref ?? "#"}
                  scrollToId={card.scrollToId}
                  className="rounded-full"
                >
                  {card.ctaLabel ?? "Ver más"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
