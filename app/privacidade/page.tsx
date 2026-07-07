import type { Metadata } from "next";

export const metadata: Metadata = { title: "Política de Privacidade" };

export default function PrivacidadePage() {
  return (
    <div className="pt-28 md:pt-36 pb-24 max-w-3xl mx-auto px-6 md:px-12">
      <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl mb-8">
        Política de Privacidade
      </h1>
      <p className="text-[var(--color-ink-soft)] leading-relaxed mb-4">
        Este conteúdo é um placeholder estrutural. O texto definitivo da Política de Privacidade
        da JIE BNAMIQ / A.T.I. BRASIL — cobrindo coleta, uso e retenção de dados enviados pelo
        formulário de contato e demais canais do site — deve ser fornecido pelo jurídico da
        empresa antes da publicação.
      </p>
      <p className="text-[var(--color-muted)] text-sm">
        Página preparada para receber o conteúdo oficial via painel administrativo.
      </p>
    </div>
  );
}
