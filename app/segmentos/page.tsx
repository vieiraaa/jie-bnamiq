import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { segments, segmentSlug } from "@/lib/content";

const segmentImages: Record<string, string> = {
  "Mineração": "https://images.unsplash.com/photo-1582280871722-424e91cbee8b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1516117172878-fd2c41f4a759?auto=format&fit=crop&w=900&q=80",
  "Siderurgia": "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Agronegócio": "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Logística": "https://images.unsplash.com/photo-1644352442473-57f4cd0873c3?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Portos": "https://images.unsplash.com/photo-1582658170611-ef7975c4f0ff?q=80&w=981&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Papel e Celulose": "https://images.unsplash.com/photo-1742967422150-df4a56b1d198?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Alimentos e Bebidas": "https://images.unsplash.com/photo-1661200970641-3658f9592689?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Metalurgia": "https://images.unsplash.com/photo-1738593892001-ffc50b177eb9?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Automação": "https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Química": "https://images.unsplash.com/photo-1660448059127-c332105d7a29?q=80&w=1181&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Madeireiras": "https://images.unsplash.com/photo-1617615181070-ab4788da6d03?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Cosméticos e Perfumaria": "https://images.unsplash.com/photo-1658387575558-b36be686c2cb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 };

export const metadata: Metadata = {
  title: "Segmentos",
  description: "Conheça os segmentos industriais atendidos pela linha JIE BNAMIQ.",
};



export default function SegmentosPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <span className="font-[monsseratr:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)]">
            Segmentos atendidos
          </span>
          <h1 className="font-[monsseratr:var(--font-display)] font-extrabold text-4xl md:text-6xl leading-[1.05] tracking-tight mt-5 max-w-3xl mb-4">
            Onde a indústria precisa de precisão.
          </h1>
          <p className="text-[var(--color-ink-soft)] text-lg max-w-2xl mb-16 leading-relaxed">
            Da extração à logística, nossas soluções de acionamento operam nos pontos mais
            críticos da cadeia produtiva brasileira.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {segments.map((s, i) => (
            <Reveal key={s} delay={i * 0.04}>
              <div
                id={segmentSlug(s)}
                className="group scroll-mt-32 relative aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-ink)] flex items-end p-6"
              >
                <Image
                  src={segmentImages[s] ?? "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80"}
                  alt={s}
                  fill
                  className="absolute inset-0 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="relative z-10 flex items-center justify-between w-full">
                  <h2 className="font-[monsseratr:var(--font-display)] font-bold text-white text-xl">
                    {s}
                  </h2>
                  <ArrowUpRight
                    size={18}
                    className="text-white/70 group-hover:text-white transition-all"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 rounded-[var(--radius-panel)] border border-[var(--color-hairline)] p-10 md:p-14 text-center">
          <h2 className="font-[monsseratr:var(--font-display)] font-extrabold text-2xl md:text-3xl mb-4 max-w-xl mx-auto">
            Não encontrou seu segmento?
          </h2>
          <p className="text-[var(--color-muted)] mb-8 max-w-md mx-auto">
            Nossa engenharia especializada avalia aplicações fora da lista padrão. Fale com um
            especialista.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:brightness-110 transition"
          >
            Falar com especialista
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
