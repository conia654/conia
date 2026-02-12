import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { PageShell } from "@/components/layout";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conia",
  description: "Built with Next.js, Tailwind and GSAP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="font-sans antialiased">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
