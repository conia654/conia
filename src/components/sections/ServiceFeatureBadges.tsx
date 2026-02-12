"use client";

import { Icon } from "@iconify/react";

export interface ServiceFeatureBadgeItem {
  icon: string;
  /** Content can include <br /> and <span className="text-lg font-bold"> for highlights */
  content: React.ReactNode;
}

export interface ServiceFeatureBadgesProps {
  badges?: ServiceFeatureBadgeItem[];
  className?: string;
}

const defaultBadges: ServiceFeatureBadgeItem[] = [
  {
    icon: "mdi:map-marker",
    content: (
      <>
        Cobertura a nivel
        <br />
        nacional
      </>
    ),
  },
  {
    icon: "mdi:check-circle",
    content: (
      <>
        <span className="text-lg font-bold">100%</span> deducible
        <br />
        de impuestos
      </>
    ),
  },
  {
    icon: "mdi:file-document-outline",
    content: (
      <>
        Cotizaciones en
        <br />
        <span className="text-lg font-bold">15 minutos</span>
      </>
    ),
  },
  {
    icon: "mdi:leaf",
    content: (
      <>
        Empresa carbono
        <br />
        neutral
      </>
    ),
  },
];

export function ServiceFeatureBadges({
  badges = defaultBadges,
  className = "",
}: ServiceFeatureBadgesProps) {
  return (
    <section
      className={`bg-slate-100 py-10 sm:py-12 lg:py-14 ${className}`.trim()}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl px-5 py-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center text-primary">
                <Icon icon={badge.icon} width={28} height={28} />
              </span>
              <div className="min-w-0 text-sm font-medium leading-snug text-foreground [&_strong]:font-bold">
                {badge.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
