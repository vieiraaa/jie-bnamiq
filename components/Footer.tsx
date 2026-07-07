import Link from "next/link";
import { globalUnits } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-hairline)] mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid gap-16 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="font-[family-name:var(--font-display)] font-extrabold text-xl mb-4">
            JIE <span className="text-[var(--color-accent)]">BNAMIQ</span>
          </div>
          <p className="text-sm text-[var(--color-muted)] max-w-xs leading-relaxed">
            A força da engenharia global com a confiança da distribuição local.
          </p>
          <p className="text-xs text-[var(--color-muted)] mt-6 font-[family-name:var(--font-mono)]">
            Distribuição exclusiva A.T.I. BRASIL
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-4">
            Navegação
          </div>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/sobre" className="hover:text-[var(--color-accent)] transition">Sobre</Link></li>
            <li><Link href="/produtos" className="hover:text-[var(--color-accent)] transition">Produtos</Link></li>
            <li><Link href="/segmentos" className="hover:text-[var(--color-accent)] transition">Segmentos</Link></li>
            <li><Link href="/contato" className="hover:text-[var(--color-accent)] transition">Contato</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-4">
            Presença global
          </div>
          <ul className="space-y-2.5 text-sm text-[var(--color-ink-soft)]">
            {globalUnits.map((u) => (
              <li key={u.name}>{u.name}</li>
            ))}
            <li>A.T.I. BRASIL · 9 unidades</li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-4">
            Receba novidades
          </div>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              required
              placeholder="suporte.atibrasil@gmail.com"
              className="text-sm px-3.5 py-2.5 rounded-[var(--radius-control)] border border-[var(--color-hairline)] outline-none focus-visible:border-[var(--color-accent)] bg-white"
            />
            <button
              type="submit"
              className="text-sm font-medium px-3.5 py-2.5 rounded-[var(--radius-control)] bg-[var(--color-ink)] text-white hover:opacity-90 transition"
            >
              Assinar
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-[var(--color-hairline)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-[var(--color-muted)]">
          <span>© {new Date().getFullYear()} JIE BNAMIQ. Todos os direitos reservados.</span>
          <div className="flex gap-6">
            <Link href="/privacidade" className="hover:text-[var(--color-accent)] transition">Política de Privacidade</Link>
            <Link href="/termos" className="hover:text-[var(--color-accent)] transition">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
