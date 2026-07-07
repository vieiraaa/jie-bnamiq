import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Download, FileText } from "lucide-react";
import { products, getProductBySlug } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import label01 from "@/lib/1.png";
import label02 from "@/lib/2.png";
import label03 from "@/lib/3.png";
import label04 from "@/lib/4.png";
import label05 from "@/lib/5.png";
import label06 from "@/lib/6.png";
import label07 from "@/lib/7.png";
import label08 from "@/lib/8.png";
import label09 from "@/lib/9.png";
import label10 from "@/lib/10.png";
import label11 from "@/lib/11.png";
import label12 from "@/lib/12.png";
import label13 from "@/lib/13.png";
import label14 from "@/lib/14.png";
import label15 from "@/lib/15.png";
import label16 from "@/lib/16.png";
import label17 from "@/lib/17.png";
import label18 from "@/lib/18.png";
import label19 from "@/lib/19.png";
import label20 from "@/lib/20.png";
import label21 from "@/lib/21.png";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.code} — ${product.name}`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="pt-28 md:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link
          href="/produtos"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Voltar ao catálogo
        </Link>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16">
          {/* Image / gallery zone */}
          <Reveal>
            <div className="aspect-square rounded-[var(--radius-panel)] bg-[var(--color-surface-2)] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(224,39,44,0.12),transparent_65%)]" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="h-48 w-48 md:h-56 md:w-56 rounded-full bg-[radial-gradient(circle,rgba(224,39,44,0.24),transparent_80%)] blur-3xl opacity-80" />
                </div>
                {(() => {
                  const labelImages = [
                    label01,
                    label02,
                    label03,
                    label04,
                    label05,
                    label06,
                    label07,
                    label08,
                    label09,
                    label10,
                    label11,
                    label12,
                    label13,
                    label14,
                    label15,
                    label16,
                    label17,
                    label18,
                    label19,
                    label20,
                    label21,
                  ];
                  const idx = products.findIndex((p) => p.slug === product.slug);
                  const img = idx >= 0 && idx < labelImages.length ? labelImages[idx] : label01;
                  return (
                    <div className="flex items-center justify-center">
                      <Image
                        src={img}
                        alt={`${product.name} label`}
                        width={440}
                        height={440}
                        className="object-contain w-3/4 h-3/4 md:w-4/5 md:h-4/5 opacity-90 transition-transform duration-500"
                      />
                    </div>
                  );
                })()}
                <span className="absolute top-5 left-5 text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider text-[var(--color-muted)] bg-white/80 backdrop-blur px-2.5 py-1 rounded-full border border-[var(--color-hairline)]">
                  {product.category}
                </span>
              </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 mb-3">
              <span className="rivet" />
              <span className="font-[family-name:var(--font-mono)] text-sm font-semibold text-[var(--color-accent)] tracking-wide">
                {product.code}
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-display)] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-5">
              {product.name}
            </h1>
            <p className="text-[var(--color-ink-soft)] leading-relaxed mb-8 max-w-md">
              {product.description}
            </p>

            {/* Spec nameplate */}
            <div className="rounded-[var(--radius-card)] border border-[var(--color-hairline)] p-6 mb-8">
              <h2 className="font-[family-name:var(--font-display)] font-bold text-sm uppercase tracking-wide text-[var(--color-muted)] mb-3">
                Especificações técnicas
              </h2>
              <div className="nameplate text-sm">
                {product.specs.map((s) => (
                  <div key={s.label} className="nameplate-row">
                    <span className="text-[var(--color-muted)]">{s.label}</span>
                    <span className="font-medium">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                href={`/contato?produto=${encodeURIComponent(product.code)}`}
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:brightness-110 transition"
              >
                Solicitar orçamento
                <ArrowUpRight size={16} />
              </Link>
              <button className="inline-flex items-center gap-2 border border-[var(--color-hairline)] px-6 py-3.5 rounded-full text-sm font-medium hover:border-[var(--color-accent)] transition">
                <Download size={16} />
                Datasheet (PDF)
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
              <FileText size={14} />
              Especificações técnicas detalhadas e desenhos CAD serão disponibilizados na área de
              downloads.
            </div>
          </Reveal>
        </div>

        {/* Applications placeholder */}
        <Reveal className="mt-24">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-xl mb-4">Aplicações</h2>
          <p className="text-[var(--color-muted)] max-w-2xl leading-relaxed">
            Indicado para linhas de acionamento industrial em geral. Consulte nossa equipe
            técnica para validar a aplicação específica do seu processo.
          </p>
        </Reveal>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-24">
            <Reveal>
              <h2 className="font-[family-name:var(--font-display)] font-bold text-xl mb-8">
                Produtos relacionados
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
