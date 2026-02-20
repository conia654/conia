"use client";

import { BackgroundShapes } from "@/components/ui/BackgroundShapes";
import { LenisProvider } from "@/components/ui/SmoothScroll";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios/renta-impresoras", label: "SAI" },
  {
    href: "/microsoft-solutions-partner",
    label: "Microsoft Solutions Partner",
  },
];
const CTA = { label: "Contacto", href: "/#contacto", scrollToId: "contacto" as const };

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <div className="relative flex min-h-screen flex-col">
        <BackgroundShapes />
      <Navbar links={NAV_LINKS} cta={CTA} />
      <main className="relative z-10 flex-1 pt-16">{children}</main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
    </LenisProvider>
  );
}
