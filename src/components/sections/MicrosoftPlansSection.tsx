"use client";

import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/Button";

export interface MicrosoftPlanApp {
  name: string;
  icon: string;
}

export interface MicrosoftPlanItem {
  title: string;
  tagline: string;
  ctaHref?: string;
  ctaLabel?: string;
  /** e.g. "Información destacada del plan:" or "Todo lo que incluye..." */
  featuresHeading?: string;
  features: string[];
  /** Apps to show in the bottom grid (name + iconify icon name) */
  apps?: MicrosoftPlanApp[];
}

export interface MicrosoftPlansSectionProps {
  /** Section title, e.g. "PYME" or "EMPRESARIAL" */
  sectionTitle?: string;
  /** Optional id for the section (e.g. for scroll-to from hero cards) */
  id?: string;
  plans: MicrosoftPlanItem[];
  /** Optional CTA shown below the plans grid (e.g. "Cotizar" with icon) */
  sectionCta?: { label: string; href: string; icon?: React.ReactNode };
  className?: string;
}

const defaultSectionCta = {
  label: "Cotizar",
  href: "/cotizar",
  icon: <Icon icon="fluent:cursor-click-24-filled" width={24} height={24} />,
};

const defaultApps: MicrosoftPlanApp[] = [
  { name: "Word", icon: "mdi:microsoft-word" },
  { name: "Excel", icon: "mdi:microsoft-excel" },
  { name: "PowerPoint", icon: "mdi:microsoft-powerpoint" },
  { name: "Outlook", icon: "mdi:microsoft-outlook" },
  { name: "Teams", icon: "mdi:microsoft-teams" },
  { name: "OneDrive", icon: "mdi:microsoft-onedrive" },
];

/** Same card style as MicrosoftPartnersHero solution cards */
const cardClass =
  "flex flex-col rounded-2xl border border-outline/25 bg-white/60 py-6 shadow-sm backdrop-blur-md";

export function MicrosoftPlansSection({
  sectionTitle = "PYME",
  id,
  plans,
  sectionCta = defaultSectionCta,
  className = "",
}: MicrosoftPlansSectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`.trim()}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {sectionTitle && (
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl">
            {sectionTitle}
          </h2>
        )}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.title} className={cardClass}>
              <h3 className="text-xl font-bold text-foreground sm:text-2xl px-6">
                {plan.title}
              </h3>
              <div className="mt-3 bg-[#8492AF] px-6 py-3">
                <p className="text-sm font-medium text-white">{plan.tagline}</p>
              </div>
              <div className="mt-4 flex justify-center px-6">
                <Button
                  variant="secondary"
                  href={plan.ctaHref ?? "/cotizar"}
                  className="rounded-full w-full"
                >
                  {plan.ctaLabel ?? "Cotizar"}
                </Button>
              </div>
              {(plan.featuresHeading || plan.features.length > 0) && (
                <div className="mt-6 px-6">
                  {plan.featuresHeading && (
                    <p className="mb-3 text-sm font-semibold text-foreground">
                      {plan.featuresHeading}
                    </p>
                  )}
                  <ul className="list-none space-y-2">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm leading-snug text-foreground/80"
                      >
                        <span className="mt-0.5 shrink-0 text-primary">
                          <Icon
                            icon="mdi:check-circle"
                            width={20}
                            height={20}
                          />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-8 border-t border-outline/20 pt-6 px-6">
                <p className="mb-4 text-sm font-semibold text-foreground">
                  Aplicaciones y servicios populares incluidos:
                </p>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {(plan.apps ?? defaultApps).map((app) => (
                    <div
                      key={app.name}
                      className="flex flex-col items-center gap-1 text-center"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 text-primary shadow-sm">
                        <Icon icon={app.icon} width={24} height={24} />
                      </span>
                      <span className="text-xs font-medium text-foreground/80">
                        {app.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {sectionCta && (
          <div className="mt-12 flex justify-center">
            <Button
              variant="secondary"
              href={sectionCta.href}
              icon={sectionCta.icon}
              iconPosition="left"
              className="min-w-[12rem] rounded-full px-8 sm:px-10"
            >
              {sectionCta.label}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
