import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <span className="font-[family-name:var(--font-mono)] text-[var(--color-accent)] text-sm mb-4">
        ERRO 404
      </span>
      <h1 className="font-[family-name:var(--font-display)] font-extrabold text-5xl md:text-7xl tracking-tight mb-5">
        Fora de especificação.
      </h1>
      <p className="text-[var(--color-muted)] max-w-md mb-8">
        A página que você procura não existe ou foi movida. Volte ao catálogo ou à página
        inicial.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:brightness-110 transition"
      >
        <ArrowLeft size={16} />
        Voltar ao início
      </Link>
    </div>
  );
}
