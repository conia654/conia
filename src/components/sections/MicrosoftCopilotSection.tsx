"use client";

import Image from "next/image";

export interface MicrosoftCopilotSectionProps {
  /** Optional: custom logo node (e.g. Copilot swirl graphic) */
  logo?: React.ReactNode;
  /** Main heading next to logo, e.g. "Copilot" */
  heading?: string;
  /** Blue subtitle, e.g. "Conoce Microsoft 365 Copilot" */
  subtitle?: string;
  /** Main description paragraph */
  description?: string;
  /** Bold blue closing sentence */
  closingSentence?: string;
  /** Right card title */
  cardTitle?: string;
  /** Intro line in the card */
  cardIntro?: string;
  /** Integration methods: { title, description }[] */
  integrationMethods?: { title: string; description: string }[];
  className?: string;
}

const defaultHeading = "Copilot";
const defaultSubtitle = "Conoce Microsoft 365 Copilot";
const defaultDescription =
  "Microsoft 365 Copilot es tu asistente de IA diseñado para transformar la manera en que trabajas. Combina modelos de lenguaje avanzados con tus datos en Microsoft Graph — como calendario, correos, chats, documentos y reuniones— e integra todo esto dentro de las aplicaciones que ya usas para convertir tus palabras en una poderosa herramienta de productividad, sin comprometer la seguridad ni la privacidad empresarial.";
const defaultClosingSentence =
  "Menos tareas repetitivas, más tiempo para crear, decidir e innovar.";
const defaultCardTitle = "¿Cómo se integra Copilot?";
const defaultCardIntro = "Copilot se integra con Microsoft 365 de dos maneras:";
const defaultIntegrationMethods = [
  {
    title: "Dentro de tus aplicaciones diarias",
    description:
      "Word, Excel, PowerPoint, Outlook y Teams se potencian con IA para ayudarte a crear contenido, analizar información, comunicarte mejor y trabajar con mayor eficiencia.",
  },
  {
    title: "Con Business Chat",
    description:
      "Una experiencia totalmente nueva que conecta tu información de diversas fuentes. Te permite obtener respuestas, generar contenido y ejecutar acciones que antes requerían múltiples pasos, todo desde un solo lugar.",
  },
];

export function MicrosoftCopilotSection({
  logo,
  heading = defaultHeading,
  subtitle = defaultSubtitle,
  description = defaultDescription,
  closingSentence = defaultClosingSentence,
  cardTitle = defaultCardTitle,
  cardIntro = defaultCardIntro,
  integrationMethods = defaultIntegrationMethods,
  className = "",
}: MicrosoftCopilotSectionProps) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`.trim()}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          {/* Left: intro */}
          <div>
            <div className="flex items-center gap-3">
              {logo ?? (
                <Image
                  src="/images/copilot.svg"
                  alt="Copilot"
                  width={56}
                  height={56}
                  className="h-12 w-auto shrink-0 sm:h-14"
                />
              )}
            </div>
            <h3 className="mt-6 text-xl font-bold text-primary sm:text-2xl">
              {subtitle}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-foreground/90">
              {description}
            </p>
            <p className="mt-6 text-lg font-bold text-primary">
              {closingSentence}
            </p>
          </div>

          {/* Right: integration card */}
          <div className="rounded-2xl border border-outline/20 bg-white/60 backdrop-blur-lg p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-primary sm:text-2xl">
              {cardTitle}
            </h3>
            <p className="mt-3 text-base text-foreground/90">{cardIntro}</p>
            <ul className="mt-6 list-none space-y-6">
              {integrationMethods.map((item, i) => (
                <li key={i}>
                  <h4 className="font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
