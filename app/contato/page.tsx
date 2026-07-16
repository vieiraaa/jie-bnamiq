import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { atiUnits } from "@/lib/content";
import Image from "next/image";
import atibrasilCenter from "@/lib/atibrasil_center.webp";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a equipe técnica JIE BNAMIQ / A.T.I. BRASIL e solicite seu orçamento.",
};

const sede = atiUnits[0];

export default async function ContatoPage({
  searchParams,
}: {
  searchParams?: Promise<{ produto?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const produtoParam = resolvedSearchParams?.produto ?? "";

  return (
    <div className="pt-28 md:pt-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)]">
            Contato
          </span>
          <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-6xl leading-[1.05] tracking-tight mt-5 max-w-2xl mb-16">
            Fale com a engenharia.
          </h1>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
          {/* Left: map + info */}
          <Reveal>
            <div className="rounded-[var(--radius-panel)] bg-[var(--color-ink)] aspect-[4/3] relative overflow-hidden mb-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(224,39,44,0.35),transparent_60%)]" />
              <Image
                src={atibrasilCenter}
                alt="Sede BNAMIQ & A.T.I. BRASIL"
                className="object-cover w-full h-full"
                fill
              />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-[var(--color-accent)]" />
                  <span className="font-[family-name:var(--font-display)] font-bold">
                    Sede — Curitiba, PR.
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-[var(--color-accent)]" />
                {sede.phone}
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-[var(--color-accent)]" />
                {sede.email}
              </div>
            </div>

            <h2 className="font-[family-name:var(--font-display)] font-bold text-sm uppercase tracking-wide text-[var(--color-muted)] mb-3">
              Unidades distribuidoras BNAMIQ
            </h2>
            <div className="nameplate text-[13px] space-y-1">
              {atiUnits.slice(1).map((u) => (
                <div key={u.city} className="nameplate-row">
                  <span>{u.city}</span>
                  <span className="text-[var(--color-muted)]">{u.phone}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="rounded-[var(--radius-panel)] border border-[var(--color-hairline)] p-6 md:p-10">
              <ContactForm produtoParam={produtoParam} />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
