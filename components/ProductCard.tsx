"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { products } from "@/lib/products";
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

export default function ProductCard({ product }: { product: Product }) {
  const href = `/produtos/${product.slug}`;

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
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative group rounded-[var(--radius-card)] bg-[var(--color-surface)] border border-[var(--color-hairline)] overflow-hidden hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.18)] transition-shadow duration-500"
    >
      <Link href={href} className="absolute inset-0 z-10">
        <span className="sr-only">Ver {product.name}</span>
      </Link>

      <div className="relative aspect-[4/3] bg-[var(--color-surface-2)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(170,170,170,0.2),transparent_65%)]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-40 w-40 md:h-52 md:w-52 rounded-full bg-[radial-gradient(circle,rgba(224,39,44,0.24),transparent_75%)] blur-3xl opacity-70" />
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src={img}
            alt={`${product.name} label`}
            width={176}
            height={176}
            className="object-contain w-36 h-36 md:w-44 md:h-44 opacity-95 transition-transform duration-500 group-hover:scale-110 filter contrast-80 saturate-110 brightness-105"
          />
        </div>
        <span className="absolute top-3 left-3 text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider text-[var(--color-muted)] bg-white/80 backdrop-blur px-2 py-1 rounded-full border border-[var(--color-hairline)]">
          {product.category}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="rivet" />
              <span className="font-[family-name:var(--font-mono)] text-xs font-semibold text-[var(--color-accent)] tracking-wide">
                {product.code}
              </span>
            </div>
            <h3 className="font-[family-name:var(--font-display)] font-bold text-[15px] leading-snug">
              {product.name}
            </h3>
          </div>
        </div>

        <div className="nameplate text-[11.5px] text-[var(--color-ink-soft)] mb-4">
          {product.specs.slice(0, 3).map((s) => (
            <div key={s.label} className="nameplate-row">
              <span className="text-[var(--color-muted)]">{s.label}</span>
              <span className="font-medium">{s.value}</span>
            </div>
          ))}
        </div>

        <div className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
          Saiba mais
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.div>
  );
}
