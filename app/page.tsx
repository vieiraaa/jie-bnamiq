import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Hero from "@/components/Hero";
import Numeros from "@/components/Numeros";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { segments, differentiators, segmentSlug } from "@/lib/content";

const featured = products.filter((p) =>
  ["jrtr", "jrp-standard", "jrph", "jcmb", "jrp-rv", "jrtg"].includes(p.slug)
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <Numeros />

      {/* Sobre preview */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-15 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <span className="font-[monsseratr:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)] justify-center md:justify-start">
            Sobre a marca
          </span>
          <h2 className="font-[monsseratr:var(--font-display)] font-extrabold text-3xl md:text-[2.6rem] leading-tight mt-4 max-w-lg justify-center md:justify-start text-center md:text-left text-justify">
            Uma joint venture entre engenharia global e distribuição local.
          </h2>
          <p className="text-[var(--color-ink-soft)] mt-5 max-w-md leading-relaxed text-justify">
            A JIE BNAMIQ combina a expertise, qualidade e capacidade produtiva da JIE JDRIVE
            com o conhecimento e a distribuição nacional da BNAMIQ — mais de 26 anos de mercado
            e presença em todo o território nacional.
          </p>
          <Link
            href="/sobre"
            className="inline-flex items-center gap-1.5 mt-7 text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
          >
            Conheça nossa história
            <ArrowUpRight size={14} />
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="aspect-[4/3] rounded-[var(--radius-panel)] relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="JIE BNAMIQ"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(224,39,44,0.35),transparent_60%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-[monsseratr:var(--font-display)] font-extrabold text-white/90 text-2xl z-10">
                JIE <span className="text-[var(--color-accent)]">×</span> BNAMIQ
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Produtos preview */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-2 md:py-2">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="font-[monsseratr:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)]">
              Linha de produtos
            </span>
            <h2 className="font-[monsseratr:var(--font-display)] font-extrabold text-3xl md:text-[2.6rem] leading-tight mt-4">
              Feita para cada ponto da sua planta.
            </h2>
          </div>
          <Link
            href="/produtos"
            className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-[var(--color-accent)] transition-colors shrink-0"
          >
            Ver catálogo completo
            <ArrowUpRight size={14} />
          </Link>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Segmentos preview */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-2">
        <Reveal>
          <span className="font-[monsseratr:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)]">
            Segmentos
          </span>
          <h2 className="font-[monsseratr:var(--font-display)] font-extrabold text-3xl md:text-[2.6rem] leading-tight mt-4 mb-12 max-w-lg">
            Presente nos setores que movem o Brasil.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {segments.map((s, i) => (
            <Reveal key={s} delay={i * 0.03}>
              <Link
                href={`/segmentos#${segmentSlug(s)}`}
                className="group flex items-center justify-between rounded-[var(--radius-card)] border border-[var(--color-hairline)] bg-[var(--color-surface)] px-6 py-6 hover:border-[var(--color-accent)] transition-colors"
              >
                <span className="font-[monsseratr:var(--font-display)] font-semibold">{s}</span>
                <ArrowUpRight
                  size={16}
                  className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py">
        <Reveal>
          <span className="font-[monsseratr:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)]">
            Diferenciais
          </span>
          <h2 className="font-[monsseratr:var(--font-display)] font-extrabold text-3xl md:text-[3.1rem] leading-tight mt-4 mb-12 max-w-lg">
            Engenharia que se prova na operação.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-stretch justi">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.04}>
              <div className=" justify-items-stretch rounded-[var(--radius-card)] border border-[var(--color-hairline)] p-6 h-full">
                <div className="w-9 h-9 rounded-full justify-center bg-[var(--color-accent-tint)] flex items-center justify-center mb-5">
                  <span className="w-2 h-2 rounded-full justify-center bg-[var(--color-accent)]" />
                </div>
                <h3 className="font-[monsseratr:var(--font-display)] justify-items-stretch font-bold text-[15px] mb-2">
                  {d.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)] justify-items-stretch leading-relaxed">{d.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-2">
        <Reveal className="rounded-[var(--radius-panel)] bg-[var(--color-ink)] px-8 md:px-16 py-16 md:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(224,39,44,0.25),transparent_60%)]" />
          <h2 className="font-[monsseratr:var(--font-display)] font-extrabold text-white text-3xl md:text-4xl relative z-10 max-w-xl mx-auto">
            Pronto para especificar o acionamento certo?
          </h2>
          <p className="text-white/60 mt-4 relative z-10">
            Nossa equipe técnica responde com orçamento e especificação em até 1 dia útil.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 mt-8 bg-[var(--color-accent)] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:brightness-110 transition relative z-10"
          >
            Solicitar orçamento
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
