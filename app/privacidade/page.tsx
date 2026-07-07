import type { Metadata } from "next";

export const metadata: Metadata = { title: "Política de Privacidade" };

export default function PrivacidadePage() {
  return (
    <div className="pt-28 md:pt-36 pb-24 max-w-3xl mx-auto px-6 md:px-12">
      <h1 className="font-[family-name:var(--font-display)] font-extrabold text-4xl mb-8">
        Política de Privacidade
      </h1>
      <p className="text-[var(--color-ink-soft)] leading-relaxed mb-4 text-justify">
      A JIE BNAMIQ, em parceria com a A.T.I. BRASIL, valoriza a privacidade e a proteção dos
      dados pessoais de seus clientes, parceiros e visitantes. As informações fornecidas por
      meio deste site são tratadas de forma responsável, em conformidade com a legislação
      aplicável, sendo utilizadas exclusivamente para atender solicitações, prestar suporte,
        enviar informações relacionadas aos nossos produtos e serviços e aprimorar a experiência
        dos usuários.
        </p>
        <p className="text-[var(--color-muted)] text-justify text-sm">
          Os dados coletados podem incluir informações de identificação, contato e demais dados
    necessários para o atendimento das solicitações realizadas pelos usuários. A empresa
    adota medidas técnicas e administrativas para proteger essas informações contra acessos
    não autorizados, alterações, divulgação ou destruição indevida.
      </p>
    </div>
  );
}
