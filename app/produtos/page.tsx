import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProductsCatalog from "@/components/ProductsCatalog";

export const metadata: Metadata = {
  title: "Linha de Produtos",
  description:
    "Motorredutores, redutores, planetários, hipóides, motores IEC e mais — a linha completa JIE BNAMIQ.",
};

export default function ProdutosPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <span className="font-[monsserat:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-[var(--color-accent)]">
            Linha de produtos
          </span>
          <h1 className="font-[monsserat:var(--font-display)] font-extrabold text-4xl md:text-6xl leading-[1.05] tracking-tight mt-5 max-w-3xl mb-4">
            Soluções completas em acionamentos.
          </h1>
          <p className="text-[var(--color-ink-soft)] text-lg max-w-2xl mb-16 leading-relaxed">
            A linha de produtos JIE, em parceria com a BNAMIQ, oferece soluções
            completas em acionamentos desenvolvidos para garantir eficiência, confiabilidade e
            alto desempenho em diferentes aplicações.
          </p>
        </Reveal>
        <ProductsCatalog />
      </div>
    </div>
  );
}
