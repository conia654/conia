import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const nombre = body.nombre?.trim() || "";
    const apellido = body.apellido?.trim() || "";
    const email = body.email?.trim() || "";
    const telefono = body.telefono?.trim() || "";

    if (!nombre || !apellido || !email) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Conia <ventas@conia.com.mx>",
      to: ["ventas@conia.com.mx"],
      replyTo: email,
      subject: `Nuevo contacto de ${nombre} ${apellido}`,
      html: `
        <h2>Nuevo contacto desde conia.com.mx</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellido:</strong> ${apellido}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || "No proporcionado"}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Ocurrió un error al enviar el formulario." },
      { status: 500 },
    );
  }
}
