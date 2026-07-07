import type { Metadata } from "next";

export const metadata: Metadata = { title: "Termos de Uso" };

export default function TermosPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24 max-w-3xl mx-auto px-6 md:px-12">
      <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl mb-8">
        Termos de Uso
      </h1>
      <p className="text-[var(--color-ink-soft)] leading-relaxed mb-4">
        Nosso compromisso é respeitar sua privacidade e garantir o sigilo 
        de todas as informações que você nos fornece. Todos os dados cadastrados em nosso site são utilizados apenas para melhorar sua experiência de compra e mantê-lo atualizado sobre nossas promoções e vantagens oferecidas por empresas parceiras.
      </p>
      <p className="text-[var(--color-muted)] text-sm">
       Para seu cadastro, solicitamos informações como: nome, endereço, e-mail e telefones para contato, para facilitar suas compras no site.
      </p>
    </div>
  );
}
