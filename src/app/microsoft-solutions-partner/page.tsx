import { Icon } from "@iconify/react";
import {
  MicrosoftPartnersHero,
  MicrosoftPlansSection,
  MicrosoftCopilotSection,
} from "@/components/sections";
import type { MicrosoftPlanItem } from "@/components/sections";

export const metadata = {
  title: "Microsoft Solutions Partner | Conia",
  description:
    "Partners oficiales de Microsoft. Licencias Microsoft 365, Copilot y soluciones en la nube.",
};

const pymePlans: MicrosoftPlanItem[] = [
  {
    title: "Microsoft 365 Empresa Básico",
    tagline: "Aplicaciones web y móviles ligeras para impulsar tu negocio.",
    ctaHref: "/cotizar",
    ctaLabel: "Cotizar",
    featuresHeading: "Información destacada del plan:",
    features: [
      "Microsoft 365 para la web y dispositivos móviles.",
      "Correo profesional con Outlook (50 GB).",
      "Almacenamiento en la nube con OneDrive (1 TB por usuario).",
      "Teams para reuniones, chat y colaboración.",
      "Seguridad y protección de datos integrada.",
    ],
  },
  {
    title: "Microsoft 365 Empresa Estándar",
    tagline:
      "Aplicaciones de escritorio y servicios en la nube para equipos que necesitan más.",
    ctaHref: "/cotizar",
    ctaLabel: "Cotizar",
    featuresHeading: "Todo lo que incluye la versión Empresa Básico, y además:",
    features: [
      "Aplicaciones de escritorio: Word, Excel, PowerPoint, Outlook.",
      "Exchange, OneDrive, Teams y SharePoint.",
      "Administración y seguridad avanzada.",
      "Soporte técnico por chat y teléfono.",
    ],
  },
  {
    title: "Microsoft 365 Empresa Premium",
    tagline:
      "La solución más completa con seguridad avanzada y gestión de dispositivos.",
    ctaHref: "/cotizar",
    ctaLabel: "Cotizar",
    featuresHeading:
      "Todo lo que incluye la versión Empresa Estándar, y además:",
    features: [
      "Microsoft Defender y protección contra amenazas.",
      "Gestión de dispositivos (MDM) y políticas de acceso.",
      "Acceso condicional y autenticación multifactor.",
      "Informes y análisis de seguridad.",
    ],
  },
];

const enterprisePlans: MicrosoftPlanItem[] = [
  {
    title: "Microsoft 365 E3",
    tagline:
      "Potentes aplicaciones de productividad con capacidades mejoradas de seguridad y cumplimiento.",
    ctaHref: "/cotizar",
    ctaLabel: "Cotizar",
    featuresHeading: "Información destacada del plan:",
    features: [
      "Administración de identidad y acceso diseñada para un número ilimitado de usuarios.",
      "Versiones web, móviles y de escritorio de Word, Excel, PowerPoint, Outlook y otras aplicaciones.",
      "Chat, llamadas y videoconferencias con Microsoft Teams.",
      "De 1 a más de 5 TB de almacenamiento en la nube por usuario.",
      "Windows para la empresa.",
      "Antivirus y antimalware.",
      "Administración unificada de punto de conexión, protección y seguridad.",
      "Capacidades de Shadow IT Discovery.",
      "Experiencia de chat con tecnología de IA con base web, asistencia en redacción, análisis de datos y acceso a agentes.",
      "Soporte ininterrumpido por teléfono y a través de la Web.",
    ],
  },
  {
    title: "Microsoft 365 E5",
    tagline:
      "Las mejores aplicaciones de productividad con tecnología de IA de su clase, con funciones avanzadas de seguridad, cumplimiento, análisis y preparación para la IA.",
    ctaHref: "/cotizar",
    ctaLabel: "Cotizar",
    featuresHeading: "Todo lo que tiene Microsoft 365 E3, más:",
    features: [
      "Administración avanzada de identidad, seguridad y acceso con privilegios mínimos para un número ilimitado de usuarios.",
      "Sistema telefónico basado en la nube con Teléfono Microsoft Teams.",
      "Análisis de negocios escalable con Power BI.",
      "Detección y respuesta extendidas (XDR).",
      "Seguridad de correo electrónico y colaboración con protección mejorada contra la suplantación de identidad.",
      "Seguridad y cumplimiento de datos para mayor riesgo de datos y regulaciones.",
      "Protección de identidad híbrida (ITDR).",
      "Detección y respuesta de puntos de conexión con protección contra ransomware.",
      "Seguridad integral para SaaS con protección contra aplicaciones OAuth maliciosas.",
    ],
  },
  {
    title: "Microsoft 365 F3",
    tagline:
      "Experiencias conectadas diseñadas específicamente, automatización de flujos de trabajo y seguridad mejorada para los trabajadores de primera línea.",
    ctaHref: "/cotizar",
    ctaLabel: "Cotizar",
    featuresHeading: "Información destacada del plan:",
    features: [
      "Administración de identidad y acceso diseñada para un número ilimitado de usuarios.",
      "Versiones web y móviles de Word, Excel y PowerPoint.",
      "2 GB de almacenamiento en la nube por usuario.",
      "Chat, llamadas y videoconferencias con Microsoft Teams.",
      "Centro de conectividad centralizado para la colaboración y la productividad.",
      "Aplicaciones personalizadas que automatizan tareas y transforman procesos empresariales.",
      "Seguridad mejorada para proteger los recursos de la empresa.",
      "Experiencia de chat con tecnología de IA con base web, asistencia en redacción, análisis de datos y acceso a agentes.",
      "Soporte ininterrumpido por teléfono y a través de la Web.",
    ],
  },
];

export default function MicrosoftSolutionsPartnerPage() {
  return (
    <>
      <MicrosoftPartnersHero
        title={
          <>
            Partners <span className="text-primary">oficiales</span> de
            Microsoft
          </>
        }
        image={{
          src: "/images/woman.png",
          alt: "Equipo Conia, soluciones Microsoft",
        }}
        calloutText="¡Facturamos todos los servicios!"
        primaryCta={{ label: "Contáctanos", href: "/contacto" }}
        secondaryCta={{
          label: "Cotizar",
          href: "/cotizar",
          icon: (
            <Icon icon="fluent:cursor-click-24-filled" width={24} height={24} />
          ),
        }}
      />
      <MicrosoftPlansSection
        sectionTitle="Microsoft 365 Empresa (PYME)"
        plans={pymePlans}
      />
      <MicrosoftPlansSection
        sectionTitle="EMPRESARIAL"
        plans={enterprisePlans}
      />
      <MicrosoftCopilotSection />
    </>
  );
}
