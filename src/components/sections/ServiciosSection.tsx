"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export interface ServicioItem {
  title: string;
  description: string;
  href: string;
  image?: { src: string; alt: string };
}

export interface ServiciosSectionProps {
  title?: string;
  services?: ServicioItem[];
  className?: string;
}

// Expects public/images/servicios-1.jpg and public/images/servicios-2.jpg (or .png)
const defaultServices: ServicioItem[] = [
  {
    title: "Renta de impresoras, copiadoras y multifuncionales",
    description:
      "Renta de impresoras, copiadoras y multifuncionales Lexmark (ahora Xerox) especializados para oficina, negocio o empresa. Todo corre por nuestra cuenta: instalación y configuración, servicio, mantenimiento, refacciones y tóner.",
    href: "/servicios/renta-impresoras",
    image: {
      src: "/images/servicios-1.png",
      alt: "Impresora multifuncional Lexmark",
    },
  },
  {
    title: "Microsoft Solutions Partner",
    description:
      "Las licencias de Microsoft 365 ofrecen una plataforma integral con herramientas de productividad e IA como Microsoft Copilot. Impulsa a tus equipos a trabajar de forma más eficiente y segura. Además, protege tu información al almacenarla de manera confiable en la nube de Microsoft.",
    href: "/microsoft-solutions-partner",
    image: {
      src: "/images/servicios-2.png",
      alt: "Microsoft Partner",
    },
  },
];

function ServiceCard({ item }: { item: ServicioItem }) {
  const [imgError, setImgError] = React.useState(false);
  const showImage = item.image && !imgError;

  return (
    <Card className="overflow-hidden p-0">
      <div className="relative flex h-44 w-full items-center justify-center overflow-hidden px-6 py-6 sm:h-52">
        {showImage ? (
          <Image
            src={item.image!.src}
            alt={item.image!.alt}
            width={280}
            height={160}
            className="h-auto max-h-full w-auto max-w-full object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-sm text-foreground/40">
            Imagen próximamente
          </span>
        )}
      </div>
      <div className="flex flex-col px-6 pb-6 pt-5 text-center">
        <h3 className="text-xl font-medium text-primary">{item.title}</h3>
        <p className="mt-3 flex-1 text-foreground/80">{item.description}</p>
        <div className="mt-6">
          <Button variant="secondary" href={item.href}>
            Ver más
          </Button>
        </div>
      </div>
    </Card>
  );
}

export function ServiciosSection({
  title = "Servicios",
  services = defaultServices,
  className = "",
}: ServiciosSectionProps) {
  return (
    <section
      className={`relative pt-0 sm:pt-0 pb-16 sm:pb-24 ${className}`.trim()}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
          {services.map((item) => (
            <div key={item.title}>
              <ServiceCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
