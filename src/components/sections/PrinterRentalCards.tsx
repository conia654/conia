"use client";

import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export interface PrinterRentalCardItem {
  image: { src: string; alt: string };
  modelName: string;
  rentAmount: string;
  impressions: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
  specs: React.ReactNode[];
  /** Optional badge (e.g. "Impresora a color") shown at top-right of card */
  badge?: React.ReactNode;
}

export interface PrinterRentalCardsProps {
  cards: PrinterRentalCardItem[];
  footerNote?: string;
  className?: string;
}

const defaultFooterNote =
  "Todos los equipos incluye escaneo sin costo adicional.";

export function PrinterRentalCards({
  cards,
  footerNote = defaultFooterNote,
  className = "",
}: PrinterRentalCardsProps) {
  return (
    <section className={`pt-16 sm:pt-20 lg:pt-24 ${className}`.trim()}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Card
              key={card.modelName}
              className="flex flex-col border-outline/30 bg-white/40 backdrop-blur-lg"
            >
              <div className="relative pt-6 pb-0">
                {card.badge && <>{card.badge}</>}
                <div className="relative flex aspect-4/3 items-center justify-center p-8">
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    width={320}
                    height={240}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground px-6">
                  {card.modelName}
                </h3>
                <div className="mt-3 bg-[#8492AF] px-6 py-3">
                  <p className="text-sm text-white">
                    Renta <strong>{card.rentAmount}</strong>
                  </p>
                  <p className="mt-0.5 text-sm text-white">
                    {card.impressions}
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col px-6 py-4">
                <p className="text-sm leading-relaxed text-foreground/85">
                  {card.description}
                </p>
                <div className="mt-4 w-full">
                  <Button
                    variant="secondary"
                    href={card.ctaHref ?? "/cotizar"}
                    className="w-full"
                  >
                    {card.ctaLabel ?? "Cotizar"}
                  </Button>
                </div>
                <ul className="mt-6 list-none space-y-1.5 text-sm text-foreground/80 [&_strong]:font-semibold [&_strong]:text-foreground">
                  {card.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
                {footerNote && (
                  <p className="mt-6 pt-4 text-xs font-bold flex items-end h-full">
                    {footerNote}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="text-2xl font-semibold text-foreground px-6 text-center max-w-4xl mx-auto">
          Todos los equipos incluye escaneo sin costo adicional. Opcional:
          agregar base a piso y/o cajones de papel adicionales.
        </h3>
      </div>
    </section>
  );
}
