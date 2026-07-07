import { stats } from "@/lib/content";
import Counter from "@/components/Counter";

export default function Numeros() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {stats.map((s) => (
          <div key={s.label} className="border-l-2 border-[var(--color-accent)] pl-5">
            <div className="font-[family-name:var(--font-display)] font-extrabold text-4xl md:text-5xl tracking-tight">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <p className="text-sm text-[var(--color-muted)] mt-2 leading-snug max-w-[16ch]">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
