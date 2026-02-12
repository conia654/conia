"use client";

import { BackgroundShapes } from "@/components/ui/BackgroundShapes";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
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
const CTA = { label: "Contacto", href: "/contacto" };

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SmoothScroll />
      <BackgroundShapes />
      <Navbar links={NAV_LINKS} cta={CTA} />
      <main className="relative z-10 flex-1 pt-16">{children}</main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
