"use client";

import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/Button";

export interface ServiceConfigureCtaProps {
  heading?: string;
  subtitle?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

const defaultHeading = "Configura el equipo perfecto";
const defaultSubtitle = "SAI a tu medida: paga solo por lo que necesitas.";
const defaultDescription =
  "Te ayudamos a elegir la combinación ideal según el volumen de impresión, el espacio disponible y las necesidades de cada área de tu empresa.";

export function ServiceConfigureCta({
  heading = defaultHeading,
  subtitle = defaultSubtitle,
  description = defaultDescription,
  ctaLabel = "Cotizar",
  ctaHref = "https://wa.me/525545686108",
  className = "",
}: ServiceConfigureCtaProps) {
  return (
    <section className={`py-14 sm:py-20 lg:py-24 ${className}`.trim()}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl lg:text-4xl">
          {heading}
        </h2>
        <p className="mt-3 text-lg font-medium text-primary">{subtitle}</p>
        <p className="mt-4 text-base leading-relaxed text-foreground/80">
          {description}
        </p>
        <div className="mt-8">
          <Button
            variant="secondary"
            href={ctaHref}
            icon={
              <Icon
                icon="fluent:sparkle-24-filled"
                width={22}
                height={22}
                className="text-primary"
              />
            }
            iconPosition="left"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
