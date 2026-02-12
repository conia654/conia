"use client";

import Image from "next/image";

export interface ExperienciaSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  stats?: { label: string }[];
  image?: { src: string; alt: string };
  chatBubbleText?: string;
  className?: string;
}

const defaultTitle =
  "Más de 30 años de experiencia respaldan nuestra excelencia tecnológica.";
const defaultSubtitle = "Por qué elegir CONIA";
const defaultDescription =
  "CONIA es un aliado tecnológico con más de 30 años de experiencia apoyando a empresas en México. Ofrecemos soporte especializado, service desk, administración de licencias y soluciones personalizadas. Nuestro enfoque práctico garantiza operación segura, escalable y productiva, brindando atención directa, rapidez y la capacidad de ejecutar proyectos de alto impacto con confianza.";
const defaultStats = [
  { label: "+ 30 años de experiencia" },
  { label: "+ 350 clientes atendidos" },
];
const defaultImage = {
  src: "/images/experiencia-1.png",
  alt: "Experiencia y soluciones tecnológicas CONIA",
};
const defaultChatBubbleText =
  "Soluciones tecnológicas confiables, soporte experto, atención cercana.";

export function ExperienciaSection({
  title = defaultTitle,
  subtitle = defaultSubtitle,
  description = defaultDescription,
  stats = defaultStats,
  image = defaultImage,
  chatBubbleText = defaultChatBubbleText,
  className = "",
}: ExperienciaSectionProps) {
  return (
    <section className={`bg-outline/5 py-20 sm:py-24 ${className}`.trim()}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-4xl text-center text-3xl font-medium leading-tight text-foreground sm:text-4xl">
          {title}
        </h2>

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="rounded-2xl p-8 sm:p-10">
            <h3 className="text-2xl font-medium text-foreground sm:text-3xl">
              {subtitle
                .split(/(CONIA)/i)
                .map((part, i) =>
                  part.toUpperCase() === "CONIA" ? (
                    <strong key={i}>{part}</strong>
                  ) : (
                    part
                  ),
                )}
            </h3>
            <p className="mt-5 leading-relaxed text-foreground/80">
              {description}
            </p>
            <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              {stats.map((stat) => (
                <li
                  key={stat.label}
                  className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-base font-semibold text-primary"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {stat.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative aspect-4/5 w-full max-h-[500px] max-w-lg rounded-2xl bg-outline/20 shadow-md ring-1 ring-outline/10">
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-right"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute max-w-88 rounded-2xl border border-outline/20 bg-white/95 p-5 shadow-xl backdrop-blur sm:-left-24 bottom-16 ">
                <p className="text-primary text-sm font-semibold leading-snug sm:text-base">
                  {chatBubbleText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
