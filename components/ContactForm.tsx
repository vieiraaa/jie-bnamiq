"use client";

import { motion } from "framer-motion";
import { useCallback, useState } from "react";

const fields = [
  { name: "nome", label: "Nome", type: "text", required: true },
  { name: "empresa", label: "Empresa", type: "text", required: true },
  { name: "telefone", label: "Telefone", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "cidade", label: "Cidade", type: "text", required: false },
  { name: "estado", label: "Estado", type: "text", required: false },
] as const;

export default function ContactForm({ produtoParam = "" }: { produtoParam?: string }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      nome: data.get("nome") || "",
      empresa: data.get("empresa") || "",
      telefone: data.get("telefone") || "",
      email: data.get("email") || "",
      cidade: data.get("cidade") || "",
      estado: data.get("estado") || "",
      produto: data.get("produto") || "",
      mensagem: data.get("mensagem") || "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        alert("Solicitação enviada com sucesso.");
        form.reset();
      } else {
        console.error(json);
        alert("Erro ao enviar. Tente novamente mais tarde.");
      }
    } catch (err) {
      console.error(err);
      alert("Erro de rede. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-5">
          {fields.map((f) => (
            <div key={f.name}>
              <label htmlFor={f.name} className="block text-xs font-medium text-[var(--color-muted)] mb-1.5">
                {f.label} {f.required && <span className="text-[var(--color-accent)]">*</span>}
              </label>
              <input
                id={f.name}
                name={f.name}
                type={f.type}
                required={f.required}
                className="w-full text-sm px-3.5 py-2.5 rounded-[var(--radius-control)] border border-[var(--color-hairline)] outline-none focus-visible:border-[var(--color-accent)] bg-white"
              />
            </div>
          ))}
        </div>

        <div>
          <label htmlFor="produto" className="block text-xs font-medium text-[var(--color-muted)] mb-1.5">
            Produto de interesse
          </label>
          <input
            id="produto"
            name="produto"
            type="text"
            defaultValue={produtoParam}
            placeholder="Ex.: JRTR — Motorredutores helicoidais coaxiais"
            className="w-full text-sm px-3.5 py-2.5 rounded-[var(--radius-control)] border border-[var(--color-hairline)] outline-none focus-visible:border-[var(--color-accent)] bg-white"
          />
        </div>

        <div>
          <label htmlFor="mensagem" className="block text-xs font-medium text-[var(--color-muted)] mb-1.5">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            className="w-full text-sm px-3.5 py-2.5 rounded-[var(--radius-control)] border border-[var(--color-hairline)] outline-none focus-visible:border-[var(--color-accent)] bg-white resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:brightness-110 transition disabled:opacity-60"
        >
          {loading ? "Enviando..." : "Enviar solicitação"}
        </button>
      </form>
    </motion.div>
  );
}
