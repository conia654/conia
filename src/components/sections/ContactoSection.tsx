"use client";

import { useState } from "react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [formStatus, setFormStatus] = useState<"success" | "error" | null>(
    null,
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage("");
    setFormStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      nombre: String(formData.get("nombre") || "").trim(),
      apellido: String(formData.get("apellido") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      telefono: String(formData.get("telefono") || "").trim(),
    };

    if (!payload.nombre || !payload.apellido || !payload.email) {
      setFormMessage(
        "Por favor completa nombre, apellido y correo electrónico.",
      );
      setFormStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "No se pudo enviar el formulario.");
      }

      setFormMessage("Mensaje enviado correctamente.");
      setFormStatus("success");
      form.reset();
    } catch (error) {
      const rawMessage =
        error instanceof Error ? error.message : "Error al enviar el formulario.";
      const friendlyMessage =
        process.env.NODE_ENV !== "production"
          ? rawMessage
          : "Hubo un error al enviar el formulario. Inténtalo de nuevo más tarde.";

      setFormMessage(friendlyMessage);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  className={inputBase}
                  aria-label="Nombre"
                  required
                />
                <input
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  className={inputBase}
                  aria-label="Apellido"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className={inputBase}
                aria-label="Correo electrónico"
                required
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
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </Button>
              </div>

              {formMessage && formStatus && (
                <div
                  className={`mt-2 flex items-start gap-2 rounded-lg border px-3 py-2 text-sm ${
                    formStatus === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                      : "border-red-200 bg-red-50 text-red-800"
                  }`}
                  role={formStatus === "error" ? "alert" : "status"}
                >
                  <span className="mt-0.5">
                    <Icon
                      icon={
                        formStatus === "success"
                          ? "mdi:check-circle"
                          : "mdi:alert-circle"
                      }
                      width={18}
                      height={18}
                      className={
                        formStatus === "success"
                          ? "text-emerald-500"
                          : "text-red-500"
                      }
                    />
                  </span>
                  <span>{formMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
