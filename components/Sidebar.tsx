"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Cog,
  LayoutGrid,
  Mail,
  Search,
  Layers,
  Boxes,
  Globe,
  MessageCircle,
  Instagram,
  Linkedin,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import CommandPalette from "@/components/CommandPalette";

const links = [
  { href: "/", label: "Início", icon: Home },
  { href: "/sobre", label: "Sobre", icon: Building2 },
  { href: "/produtos", label: "Produtos", icon: Layers },
  { href: "/configurator", label: "Configurator", icon: Cog },
  { href: "/segmentos", label: "Segmentos", icon: LayoutGrid },
  { href: "/contato", label: "Contato", icon: Mail },
];

const socialLinks = [
  {
    href: "https://loja.atibrasil.com.br/",
    label: "Site",
    icon: Globe,
  },
  {
    href: "https://wa.me/554133023400?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20JIE%20BNAMIQ.",
    label: "WhatsApp",
    icon: MessageCircle,
  },
  {
    href: "https://www.instagram.com/jiebnamiq/",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.linkedin.com/company/atibrasil/",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const pathname = usePathname();

  const isExpanded = expanded || hovered;

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Mobile top bar */}
      <div className="glass-panel md:hidden fixed top-3 left-3 right-3 z-40 flex items-center justify-between rounded-[var(--radius-panel)] px-4 py-3">
        <Link href="/" className="font-[family-name:var(--font-display)] font-extrabold tracking-tight text-[var(--color-accent)]">
          JIE <span className="text-black">BNAMIQ</span>
        </Link>
        <button
          aria-label="Buscar"
          onClick={() => setPaletteOpen(true)}
          className="p-2 rounded-full hover:bg-black/5 transition"
        >
          <Search size={18} />
        </button>
      </div>

      {/* Desktop sidebar */}
      <motion.aside
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ width: isExpanded ? 232 : 76 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel hidden md:flex fixed top-4 left-4 bottom-4 z-[70] pointer-events-auto flex-col rounded-[var(--radius-panel)] py-5 px-3 overflow-visible items-center"
      >
        <div className="flex items-center justify-center gap-2 px-2 mb-8 min-h-8 w-full">
          <div className="w-8 h-8 shrink-0 rounded-[10px] bg-[var(--color-accent)] flex items-center justify-center text-white font-[family-name:var(--font-display)] font-extrabold text-xs">
            JIE
          </div>
          {isExpanded && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="font-[family-name:var(--font-display)] font-bold text-sm whitespace-nowrap text-black"
            >
              BNAMIQ
            </motion.span>
          )}
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          {links.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative flex items-center gap-3 rounded-[var(--radius-control)] px-3 py-3 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  active
                    ? "bg-[var(--color-accent)] text-white shadow-[0_6px_16px_-6px_rgba(224,39,44,0.6)]"
                    : "text-[var(--color-ink-soft)] hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                <Icon size={18} className="shrink-0" />
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm font-medium whitespace-nowrap "
                  >
                    {link.label}
                  </motion.span>
                )}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setPaletteOpen(true)}
          className="flex items-center gap-3 rounded-[var(--radius-control)] px-2.5 py-2.5 mb-1 text-[var(--color-ink-soft)] hover:bg-black/5 dark:hover:bg-white/5 transition"
        >
          <Search size={18} className="shrink-0" />
          {isExpanded && (
            <span className="text-sm font-medium flex-1 text-left whitespace-nowrap">Buscar</span>
          )}
          
        </button>

        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-3 rounded-[var(--radius-control)] px-2.5 py-2.5 text-[var(--color-ink-soft)] hover:bg-black/5 dark:hover:bg-white/5 transition"
          aria-label={expanded ? "Recolher menu" : "Expandir menu"}
        >
          {expanded ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
          {isExpanded && (
            <span className="text-sm font-medium whitespace-nowrap">{expanded ? "Recolher" : "Expandir"}</span>
          )}
        </button>
      </motion.aside>

      <div
        className="glass-panel hidden md:flex fixed bottom-4 z-[70] items-center gap-3 rounded-[var(--radius-panel)] px-3 py-3 bg-[var(--color-surface)]/95 text-[var(--color-ink)] shadow-[0_30px_80px_-50px_rgba(0,0,0,0.6)] backdrop-blur-md dark:bg-[var(--color-surface-dark)]/95 dark:text-[var(--color-ink-dark)]"
        style={{ right: expanded ? 236 : 10 }}
      >
        <div className="flex items-center gap-2">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--color-ink)] transition hover:bg-[var(--color-accent)] hover:text-white dark:bg-[var(--color-surface-dark-2)] dark:text-[var(--color-ink-dark)] dark:hover:bg-[var(--color-accent)]"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile social bar */}
<div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
  <div className="glass-panel flex items-center gap-3 rounded-full px-4 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)]">
    {socialLinks.map((item) => {
      const Icon = item.icon;

      return (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--color-ink)] transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-white active:scale-95"
        >
          <Icon size={20} />
        </a>
      );
    })}
  </div>
</div>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}
