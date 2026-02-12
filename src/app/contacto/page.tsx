import { Button } from "@/components/ui";

export const metadata = {
  title: "Contacto | Conia",
  description: "Contáctanos para soluciones tecnológicas a la medida.",
};

export default function ContactoPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-medium text-foreground">Contacto</h1>
      <p className="mt-4 text-foreground/80">
        Próximamente: formulario o datos de contacto.
      </p>
      <div className="mt-8">
        <Button variant="primary" href="/">
          Volver al inicio
        </Button>
      </div>
    </section>
  );
}
