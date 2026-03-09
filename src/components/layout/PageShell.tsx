"use client";

import { Icon } from "@iconify/react";
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
const CTA = {
  label: "Contacto",
  href: "/#contacto",
  scrollToId: "contacto" as const,
};

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

        {/* Floating WhatsApp button */}
        <a
          href="https://wa.me/525545686108"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chatear por WhatsApp"
          className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition duration-200 hover:scale-105 hover:shadow-xl">
            <Icon icon="mdi:whatsapp" width={28} height={28} />
          </span>
        </a>
      </div>
    </LenisProvider>
  );
}
