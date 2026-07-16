import type { Metadata } from "next";
import Image from "next/image";
import assemblyCenter from "@/lib/assembly_center.png";
import automaticware from "@/lib/automaticWare.png";
import atibrasilCenter from "@/lib/atibrasil_center.webp";
import Reveal from "@/components/Reveal";
import { globalUnits, atiUnits } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheaça a joint venture entre JIE JDRIVE e BNAMIQ e a rede global de unidades JIE BNAMIQ.",
};

const timeline = [
  {
    year: "JIE BNAMIQ",
    title: "Matriz produtiva na China",
    text: "Capacidade produtiva e engenharia de acionamentos com escala global, sediada em Hangzhou.",
  },
  {
    year: "+38 anos",
    title: "JIE BNAMIQ",
    text: "Especializada em transmissão de potência industrial, com sede em Curitiba e 9 unidades no país.",
  },
  {
    year: "Joint Venture",
    title: "Nasce a JIE BNAMIQ",
    text: "União da expertise produtiva JIE com o conhecimento e a distribuição local da BNAMIQ.",
  },
  {
    year: "Hoje",
    title: "Distribuição nacional",
    text: "Linha completa de motorredutores, redutores e soluções de acionamento à disposição da indústria brasileira.",
  },
];

export default function SobrePage() {
  return (
    <div className="pt-28 md:pt-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <span className="font-[monsserat:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)]">
            Sobre a JIE BNAMIQ
          </span>
          <h1 className="font-[montsserat:var(--font-display)] font-extrabold text-4xl md:text-6xl leading-[1.05] tracking-tight mt-5 max-w-3xl">
            Engenharia global. Confiança local.
          </h1>
          <p className="text-[var(--color-ink-soft)] text-lg mt-6 max-w-6xl leading-relaxed centered md:text-justify">
            A JIE BNAMIQ é uma marca joint venture que combina a expertise, qualidade e
            capacidade produtiva da JIE JDRIVE com o conhecimento, experiência e distribuição
            nacional da BNAMIQ, distribuidora oficial há mais de 26 anos no mercado
            brasileiro de transmissão de potência industrial.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="mt-24 grid md:grid-cols-4 gap-6">
          {timeline.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <div className="border-t-2 border-[var(--color-accent)] pt-5 h-full">
                <span className="font-[monsserat:var(--font-mono)] text-xs text-[var(--color-accent)]">
                  {t.year}
                </span>
                <h3 className="font-[monsserat:var(--font-display)] font-bold text-lg mt-2 mb-2">
                  {t.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* JIE facilities */}
        <div className="mt-16">
          <Reveal>
            <h2 className="font-[monsserat:var(--font-display)] font-extrabold text-2xl md:text-3xl mb-3">
              Centro de inovação e produção — JIE BNAMIQ
            </h2>
            <p className="text-[var(--color-muted)] max-w-1xl mb-16">
              Complexo industrial com centro de montagem, armazém automatizado e estoque
              dedicado, preparado para atender demanda global.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                label: "Centro de montagem",
                img: assemblyCenter,
              },
              {
                label: "Armazém & Estoque",
                img: automaticware,
              },
              {
                label: "Centro de Distribuição",
                img: atibrasilCenter,
              },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.06}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface-2)]">
                  {typeof item.img === "string" ? (
                    <img
                      src={item.img}
                      alt={item.label}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={item.img}
                      alt={item.label}
                      fill
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="text-sm font-medium text-white">{item.label}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Global presence */}
        <div className="mt-10">
          <Reveal>
            <span className="font-[monsserat:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)]">
              Presença mundial
            </span>
            <h2 className="font-[monsserat:var(--font-display)] font-extrabold text-2xl md:text-3xl mt-4 mb-16">
              Quatro continentes, um objetivo.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {globalUnits.map((u, i) => (
              <Reveal key={u.name} delay={i * 0.06}>
                <div className="rounded-[var(--radius-card)] border border-[var(--color-hairline)] p-6 h-full">
                  <h3 className="font-[monsserat:var(--font-display)] font-bold mb-1">{u.name}</h3>
                  <p className="text-xs text-[var(--color-muted)] mb-4">{u.role}</p>
                  <div className="nameplate text-[11.5px] text-[var(--color-ink-soft)] space-y-1">
                    <p>{u.address}</p>
                    <p>{u.phone}</p>
                    <p>{u.web}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ATI Brasil network */}
        <div className="mt-10">
          <Reveal>
            <span className="font-[monsserat:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)]">
              Distribuição nacional
            </span>
            <h2 className="font-[monsserat:var(--font-display)] font-extrabold text-2xl md:text-3xl mt-4 mb-16">
             JIE BNAMIQ de norte a sul.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {atiUnits.map((u, i) => (
              <Reveal key={u.city} delay={i * 0.04}>
                <div className="rounded-[var(--radius-card)] bg-[var(--color-surface)] border border-[var(--color-hairline)] p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="rivet" />
                    <h3 className="font-semibold text-sm">{u.city}</h3>
                    {u.role && (
                      <span className="text-[10px] font-[monsserat:var(--font-mono)] uppercase text-[var(--color-accent)]">
                        {u.role}
                      </span>
                    )}
                  </div>
                  <div className="nameplate text-[11px] text-[var(--color-muted)]">
                    <p>{u.phone}</p>
                    <p>{u.email}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
