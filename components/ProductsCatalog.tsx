"use client";

import { useState } from "react";
import { products, categories, type ProductCategory } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

export default function ProductsCatalog() {
  const [active, setActive] = useState<ProductCategory | "Todos">("Todos");

  const filtered =
    active === "Todos" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-12">
        {(["Todos", ...categories] as const).map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`text-sm px-4 py-2 rounded-full border transition-all duration-300 ${
              active === c
                ? "bg-[var(--color-ink)] text-white border-[var(--color-ink)]"
                : "border-[var(--color-hairline)] text-[var(--color-ink-soft)] hover:border-[var(--color-accent)]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 6) * 0.05}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-[var(--color-muted)] text-sm">Nenhum produto nesta categoria ainda.</p>
      )}
    </div>
  );
}
