"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import logo10 from "@/lib/logo_jie2.png";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-4, 4]);
  const glowX = useTransform(sx, [-0.5, 0.5], ["30%", "70%"]);
  const glowY = useTransform(sy, [-0.5, 0.5], ["30%", "70%"]);
  const { scrollY } = useScroll();

// Velocidade da rotação.
// A cada pixel rolado ele gira 0.15°.
const rotate = useTransform(scrollY, (value) => value * 0.15);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMove}
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-[var(--color-ink)] md:-ml-[76px] md:w-[calc(100%+76px)]"
    >
      {/* Dynamic light */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(600px circle at ${glowX} ${glowY}, rgba(224,39,44,0.28), transparent 60%)`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Product silhouette, mouse-tracked depth */}
      <motion.div
        style={{
          rotate,
          rotateX,
          rotateY,
        }}
        className="pointer-events-none absolute right-[-6%] top-[10%] w-[65%] max-w-[720px] aspect-square [transform-style:preserve-3d]"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-accent)]/25 to-transparent blur-3xl" />
        <svg viewBox="0 0 400 400" className="w-full h-full opacity-90">
          <defs>
            <linearGradient id="gearGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e0272c" />
              <stop offset="100%" stopColor="#7a1519" />
            </linearGradient>
          </defs>
          <g transform="translate(200,200)">
            <circle r="150" fill="none" stroke="url(#gearGrad)" strokeWidth="26" strokeDasharray="14 10" opacity="0.85" />
            <circle r="98" fill="none" stroke="#2a2b30" strokeWidth="3" opacity="0.6" />
            <circle r="60" fill="url(#gearGrad)" opacity="0.9" />
            <circle r="18" fill="#0B0B0C" />
          </g>
        </svg>
      </motion.div>

      <div className="relative z-60 max-w-7xl w-full px-6 md:px-12 md:pl-48 pb-20 md:pb-55 ml-0 mr-auto">
        <motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
  className="mb-15"
>
  <Image
    src={logo10}
    alt="JIE BNAMIQ"
    width={90}
    priority
    className="h-auto w-auto opacity-90 "
  />
</motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(montserrat-bold)] font-extrabold text-white text-[13vw] leading-[0.95] md:text-[5.4vw] max-w-5xl tracking-tight"
        >
          Movendo a indústria <br/>
          com inteligência.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/90 text-lg md:text-xl mt-6 max-w-x2"
        >
          A força da engenharia global com a confiança da distribuição local.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-5 mt-10"
        >
          <Link
            href="/produtos"
            className="group inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:brightness-110 transition"
          >
            Conheça nossos produtos
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-white/10 text-white px-10 py-3.5 rounded-full text-sm font-medium backdrop-blur-md border border-white/15 hover:bg-white/15 transition"
          >
            Solicitar orçamento!
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
