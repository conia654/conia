"use client";

import Image from "next/image";
import Link from "next/link";

export interface FooterLegalLink {
  href: string;
  label: string;
}

export interface FooterProps {
  /** Optional custom brand (logo + text). Default: CONIA logo + CONIA TECNOLOGÍA */
  brand?: React.ReactNode;
  /** Office address lines. Default: Montes Urales 455, etc. */
  addressLines?: string[];
  /** Legal links. Default: Términos y condiciones, Aviso de privacidad */
  legalLinks?: FooterLegalLink[];
}

const defaultAddressLines = [
  "Montes Urales #455 piso 1,",
  "Lomas de Chapultepec,",
  "Ciudad de México",
];

const defaultLegalLinks: FooterLegalLink[] = [
  { href: "/terminos-y-condiciones", label: "Términos y condiciones" },
  { href: "/aviso-de-privacidad", label: "Aviso de privacidad simplificado" },
];

export function Footer({
  brand,
  addressLines = defaultAddressLines,
  legalLinks = defaultLegalLinks,
}: FooterProps) {
  return (
    <footer className="bg-slate-200 z-10 relative">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-start">
            {brand ?? (
              <Link href="/" className="flex items-start gap-3 no-underline">
                <Image
                  src="/images/logo-conia.png"
                  alt=""
                  width={80}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </Link>
            )}
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground">Oficinas</h3>
            <address className="mt-3 not-italic">
              {addressLines.map((line) => (
                <span key={line} className="block text-foreground/70">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground">Legal</h3>
            <ul className="mt-3 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="link-text">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
