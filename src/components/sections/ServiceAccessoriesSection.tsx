"use client";

import { Icon } from "@iconify/react";

export interface ServiceAccessoriesSectionProps {
  heading?: string;
  description?: string;
  optionsHeading?: string;
  options?: React.ReactNode[];
  className?: string;
}

const defaultHeading = "Accesorios para crecer con tu oficina";
const defaultDescription =
  "Cada empresa es distinta, y tus necesidades pueden cambiar con el tiempo. Por eso, nuestros equipos SAI son compatibles con accesorios que te permiten aumentar capacidad, comodidad y productividad cuando lo necesites.";
const defaultOptionsHeading = "Opciones disponibles";
const defaultOptions: React.ReactNode[] = [
  <>
    <span className="font-semibold text-primary">
      Charolas adicionales de papel
    </span>
    para ampliar la capacidad y evitar interrupciones.
  </>,
  <>
    <span className="font-semibold text-primary">Muebles de piso (stand)</span>
    para convertir tu multifuncional en una estación independiente.
  </>,
  <>
    <span className="font-semibold text-primary">Bandejas multiuso</span> para
    diferentes tipos y tamaños de papel.
  </>,
  <>
    <span className="font-semibold text-primary">
      Opciones avanzadas de seguridad y conectividad
    </span>{" "}
    (según modelo).
  </>,
];

export function ServiceAccessoriesSection({
  heading = defaultHeading,
  description = defaultDescription,
  optionsHeading = defaultOptionsHeading,
  options = defaultOptions,
  className = "",
}: ServiceAccessoriesSectionProps) {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${className}`.trim()}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div>
            <h2 className="text-2xl font-semibold leading-tight text-foreground sm:text-4xl max-w-96">
              {heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              {description}
            </p>
          </div>
          <div className="rounded-2xl border border-outline/25 bg-white/40 p-6 shadow-sm backdrop-blur-lg sm:p-8">
            <h3 className="text-2xl font-semibold text-foreground">
              {optionsHeading}
            </h3>
            <ul className="mt-5 list-none space-y-3">
              {options.map((option, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-foreground/85 [&_strong]:font-semibold [&_strong]:text-foreground"
                >
                  <span className="mt-0.5 shrink-0 text-primary">
                    <Icon icon="mdi:check-circle" width={20} height={20} />
                  </span>
                  <div>{option}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
