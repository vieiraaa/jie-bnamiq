import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Linha de Produtos",
  description:
    "Motorredutores, redutores, planetários, hipóides, motores IEC e mais — a linha completa JIE BNAMIQ.",
};

export default function ProdutosPage() {
  return (
    <div className="pt-28 md:pt-75 pb-5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <span className="font-[monsserat:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)]">
            Monte o seu projeto com a JIE BNAMIQ
          </span>
          <h1 className="font-[monsserat:var(--font-display)] font-extrabold text-4xl md:text-6xl leading-[1.05] tracking-tight mt-5 max-w-6xl mb-4">
            Página em desenvolvimento.
          </h1>
          <p className="text-[var(--color-ink-soft)] text-lg max-w-6xl mb-16 leading-relaxed">
            Em breve, você poderá explorar a linha completa de produtos JIE BNAMIQ, incluindo motorredutores, redutores, planetários, hipóides, motores IEC e muito mais. Fique atento para atualizações e novidades!
          </p>
        </Reveal>
      </div>
    </div>
  );
}
