"use client";

import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/Button";

export interface ContactoSectionProps {
  title?: string;
  phone?: string;
  email?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  className?: string;
}

const defaultPhone = "55 5291 8048";
const defaultEmail = "ventas@conia.com.mx";
const linkTextClass = "link-text";
const defaultFacebookUrl = "https://facebook.com";
const defaultInstagramUrl = "https://instagram.com";

const inputBase =
  "w-full rounded-xl border border-outline bg-white px-4 py-3 text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

export function ContactoSection({
  title = "Contáctanos",
  phone = defaultPhone,
  email = defaultEmail,
  facebookUrl = defaultFacebookUrl,
  instagramUrl = defaultInstagramUrl,
  className = "",
}: ContactoSectionProps) {
  return (
    <section
      id="contacto"
      className={`relative py-16 sm:py-20 ${className}`.trim()}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-medium text-foreground sm:text-4xl">
          {title}
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
          <div className="flex flex-col gap-4">
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className={`flex items-center gap-1 ${linkTextClass}`}
            >
              <span className="flex h-10 shrink-0 items-center justify-center text-primary">
                <Icon icon="fluent:call-24-filled" width={24} height={24} />
              </span>
              <span>{phone}</span>
            </a>
            <a
              href={`mailto:${email}`}
              className={`flex items-center gap-1 ${linkTextClass}`}
            >
              <span className="flex h-10 shrink-0 items-center justify-center text-primary">
                <Icon icon="fluent:mail-24-filled" width={24} height={24} />
              </span>
              <span>{email}</span>
            </a>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-primary text-primary transition-opacity hover:opacity-85"
                aria-label="Facebook"
              >
                <Icon icon="ri:facebook-fill" width={22} height={22} />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-md border-2 border-primary text-primary transition-opacity hover:opacity-85"
                aria-label="Instagram"
              >
                <Icon icon="ri:instagram-line" width={22} height={22} />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-outline/30 bg-white p-8 shadow-sm">
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  className={inputBase}
                  aria-label="Nombre"
                />
                <input
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  className={inputBase}
                  aria-label="Apellido"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className={inputBase}
                aria-label="Correo electrónico"
              />
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                className={inputBase}
                aria-label="Teléfono"
              />
              <div className="mt-2">
                <Button
                  type="submit"
                  variant="primary"
                  className="rounded-full shadow-sm"
                >
                  Enviar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
