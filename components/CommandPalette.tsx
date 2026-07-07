"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { segments, segmentSlug } from "@/lib/content";

interface Entry {
  label: string;
  hint: string;
  href: string;
}

export default function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const entries: Entry[] = useMemo(() => {
    const pages: Entry[] = [
      { label: "Início", hint: "Página", href: "/" },
      { label: "Sobre a JIE BNAMIQ", hint: "Página", href: "/sobre" },
      { label: "Todos os produtos", hint: "Página", href: "/produtos" },
      { label: "Segmentos atendidos", hint: "Página", href: "/segmentos" },
      { label: "Contato / Orçamento", hint: "Página", href: "/contato" },
    ];
    const productEntries: Entry[] = products.map((p) => ({
      label: `${p.code} — ${p.name}`,
      hint: p.category,
      href: `/produtos/${p.slug}`,
    }));
    const segmentEntries: Entry[] = segments.map((s) => ({
      label: s,
      hint: "Segmento",
      href: `/segmentos#${segmentSlug(s)}`,
    }));
    return [...pages, ...productEntries, ...segmentEntries];
  }, []);

  const filtered = entries
    .filter((e) => e.label.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 8);

  function go(href: string) {
    router.push(href);
    setQuery("");
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-start justify-center pt-[14vh] px-4 bg-black/30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel w-full max-w-lg rounded-[var(--radius-panel)] overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--color-hairline)] dark:border-[var(--color-hairline-dark)]">
              <Search size={18} className="text-[var(--color-muted)]" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar produtos, segmentos, páginas..."
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-[var(--color-muted)]"
              />
              <kbd className="text-[10px] font-[family-name:var(--font-mono)] px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10">
                ESC
              </kbd>
            </div>
            <ul className="max-h-80 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <li className="px-5 py-4 text-sm text-[var(--color-muted)]">
                  Nenhum resultado para &ldquo;{query}&rdquo;.
                </li>
              )}
              {filtered.map((entry) => (
                <li key={entry.href}>
                  <button
                    onClick={() => go(entry.href)}
                    className="w-full flex items-center justify-between gap-3 px-5 py-2.5 text-left hover:bg-black/5 dark:hover:bg-white/5 transition"
                  >
                    <span className="text-sm">{entry.label}</span>
                    <span className="flex items-center gap-2 text-[11px] text-[var(--color-muted)] font-[family-name:var(--font-mono)]">
                      {entry.hint}
                      <ArrowRight size={12} />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
