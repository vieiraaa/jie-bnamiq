import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nome, empresa, telefone, email, cidade, estado, produto, mensagem } = body || {};

    const toEnv = process.env.TO_ADDRS || process.env.TO || "";
    const to = toEnv.split(",").map((s) => s.trim()).filter(Boolean);

    if (!to.length) {
      return NextResponse.json({ ok: false, error: "No recipient configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_USE_SSL === "true", // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = `JIE-LEAD - Solicitação de contato - ${produto || "Site"}`;

    const textLines = [
      `Nome: ${nome || ""}`,
      `Empresa: ${empresa || ""}`,
      `Telefone: ${telefone || ""}`,
      `Email: ${email || ""}`,
      `Cidade: ${cidade || ""}`,
      `Estado: ${estado || ""}`,
      `Produto: ${produto || ""}`,
      "",
      "Mensagem:",
      `${mensagem || ""}`,
    ];

    const text = textLines.join("\n");

    await transporter.sendMail({
      from: process.env.FROM_ADDR || process.env.SMTP_USER,
      to: to.join(", "),
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
  console.error("========== SMTP ERROR ==========");
  console.error(err);
  console.error(err?.message);
  console.error(err?.response);
  console.error(err?.responseCode);

  return NextResponse.json(
    {
      ok: false,
      error: err?.message,
      response: err?.response,
      code: err?.responseCode,
    },
    { status: 500 }
  );
}