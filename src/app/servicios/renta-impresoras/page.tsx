import Image from "next/image";
import { Icon } from "@iconify/react";
import {
  ServicePageHero,
  PrinterRentalCards,
  ServiceFeatureBadges,
  ServiceAccessoriesSection,
  ServiceConfigureCta,
  ContactoSection,
} from "@/components/sections";

export const metadata = {
  title: "Renta de impresoras | Conia",
  description:
    "Renta de impresoras, copiadoras y multifuncionales Lexmark (Xerox).",
};

const printerCards = [
  {
    image: {
      src: "/images/servicios-1.png",
      alt: "Lexmark MX331adn multifuncional",
    },
    modelName: "Lexmark MX331adn",
    rentAmount: "$400 MXN al mes",
    impressions: "1,000 impresiones",
    description:
      "Ofrece tamaño compacto, buena velocidad y uso sencillo para impulsar la productividad en oficina. Su diseño eficiente permite imprimir, copiar, escanear y faxear con gran rendimiento en cualquier entorno de trabajo.",
    ctaHref: "/cotizar",
    ctaLabel: "Cotizar",
    specs: [
      <span key="spec-1-1">
        Velocidad de impresión: hasta <strong>40 ppm.</strong>
      </span>,
      <span key="spec-1-2">
        Primera página en: <strong>6.2 segundos.</strong>
      </span>,
      "Escaneo automático a una cara (ADF).",
      "Funciones integradas: impresión, copiado, escaneo y fax.",
      "Pantalla táctil intuitiva.",
      "Conectividad: USB y Ethernet.",
      "Capacidad estándar: 250 hojas.",
      "Tamaño compacto, ideal para oficinas con poco espacio.",
      "Diseñada para entornos corporativos con seguridad integrada.",
    ],
  },
  {
    image: {
      src: "/images/servicios-1.png",
      alt: "Lexmark MX532adwe multifuncional",
    },
    modelName: "Lexmark MX532adwe",
    rentAmount: "$830 MXN al mes",
    impressions: "3,500 impresiones",
    description:
      "Ofrece un desempeño superior y un diseño seguro que impulsa la productividad de cualquier oficina. Con alta velocidad de impresión, gran capacidad de tóner y funciones avanzadas, es una solución robusta para volúmenes de trabajo exigentes.",
    ctaHref: "/cotizar",
    ctaLabel: "Cotizar",
    specs: [
      <span key="spec-2-1">
        Velocidad de impresión: hasta <strong>46 ppm.</strong>
      </span>,
      <span key="spec-2-2">
        Primera página en: <strong>6 segundos.</strong>
      </span>,
      "Escaneo automático a una cara (ADF).",
      "Funciones integradas: impresión, copiado, escaneo y fax.",
      "Pantalla táctil intuitiva.",
      "Tiempo rápido de primera impresión para flujos de trabajo intensivos.",
      "Certificaciones ambientales y gestión avanzada de energía.",
      "Conectividad: USB y Ethernet.",
      "Ideal para oficinas medianas o con demanda constante.",
    ],
  },
  {
    image: {
      src: "/images/servicios-1.png",
      alt: "Lexmark CX532adwe multifuncional a color",
    },
    modelName: "Lexmark CX532adwe",
    rentAmount: "$920 MXN al mes",
    impressions: "1,500 b/n y 2,000 color",
    description:
      "Multifuncional a color diseñada para ofrecer velocidad, versatilidad y calidad de impresión superior. Ideal para oficinas que necesitan documentos profesionales en color sin sacrificar eficiencia, seguridad ni rendimiento.",
    ctaHref: "/cotizar",
    ctaLabel: "Cotizar",
    badge: (
      <div className="absolute -right-4 top-4 z-10 flex flex-col items-center gap-1.5 rounded-md bg-primary p-2 text-md font-semibold text-white shadow-sm ring-1 ring-outline/20">
        <Image
          src="/images/chromecolor.png"
          alt="Impresora a color"
          width={100}
          height={100}
          className="w-20 h-20 absolute -top-18"
        />
        Impresora a color
      </div>
    ),
    specs: [
      <span key="spec-3-1">
        Velocidad de impresión: hasta <strong>35 ppm</strong> (color y mono).
      </span>,
      <span key="spec-3-2">
        Primera página en: <strong>7.2 s (mono) / 7.5 s (color).</strong>
      </span>,
      "Funciones integradas: impresión, copiado, escaneo y fax.",
      "Pantalla táctil intuitiva.",
      "Alta calidad de impresión a color.",
      "Tiempo rápido de primera impresión para flujos de trabajo intensivos.",
      "Certificaciones ambientales y gestión avanzada de energía.",
      "Conectividad: USB y Ethernet.",
    ],
  },
];

export default function RentaImpresorasPage() {
  return (
    <>
      <ServicePageHero
        title={
          <>
            Impresoras desde $400
            <br />
            pesos al mes
          </>
        }
        primaryCta={{ label: "Contáctanos", href: "/contacto" }}
        secondaryCta={{
          label: "Cotizar",
          href: "/cotizar",
          icon: (
            <Icon icon="fluent:cursor-click-24-filled" width={24} height={24} />
          ),
        }}
        image={{
          src: "/images/servicios-1.png",
          alt: "Impresora multifuncional Lexmark",
        }}
        badges={[
          {
            content: (
              <>
                Cotizamos en
                <br />
                <span className="text-lg font-bold">15 min.</span>
              </>
            ),
            variant: "primary",
          },
          {
            content: (
              <>
                <span className="text-lg font-bold">100%</span>
                <br />
                Deducible
              </>
            ),
            variant: "muted",
          },
        ]}
      />
      <PrinterRentalCards cards={printerCards} />
      <ServiceFeatureBadges />
      <ServiceAccessoriesSection />
      <ServiceConfigureCta />
      <ContactoSection />
    </>
  );
}
