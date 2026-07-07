# JIE BNAMIQ — Website Institucional

Frontend do site oficial da JIE BNAMIQ (joint venture JIE JDRIVE × A.T.I. BRASIL),
construído em Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

## O que está incluído neste pacote

- **Design system** completo em `app/globals.css` (`@theme`): cores light/dark,
  tipografia (Manrope / Inter / JetBrains Mono), raios, sombra de vidro.
- **Sidebar fixa estilo Finder** (`components/Sidebar.tsx`): glassmorphism, blur,
  modo recolhido/expandido, drawer mobile.
- **Command Palette** (⌘K / Ctrl+K) com busca por produtos, segmentos e páginas.
- **Loading screen** com logo e fade/blur.
- **Smooth scroll** via Lenis.
- **5 páginas completas**: Início, Sobre, Produtos (catálogo filtrável + página
  individual por produto), Segmentos, Contato — mais 404, Privacidade e Termos
  (stubs prontos para conteúdo jurídico).
- **Catálogo de 21 famílias de produto** extraído fielmente do folder oficial
  (`lib/products.ts`) — nenhuma especificação foi inventada.
- **SEO**: metadata por página, OpenGraph, Twitter Cards, `sitemap.ts`, `robots.ts`.
- **Acessibilidade**: foco visível, `prefers-reduced-motion` respeitado, HTML semântico.

## O que NÃO está incluído (por escolha nesta primeira entrega)

Esta entrega é **apenas o frontend**, sem backend ativo:

- Sem PostgreSQL / Prisma / persistência real.
- Sem painel administrativo (CRUD, JWT).
- O formulário de contato (`components/ContactForm.tsx`) é funcional na
  interface, mas **não envia dados a lugar nenhum ainda** — há um comentário
  no código marcando onde plugar `/api/contato` quando o backend existir.
- Modelo 3D (Three.js / React Three Fiber) não implementado — a seção de
  produto tem um espaço reservado para isso.
- Imagens reais de produto: os cards usam uma ilustração vetorial placeholder
  (engrenagem estilizada) em vez de fotos, já que o folder fornecido é PDF, não
  uma biblioteca de imagens em alta resolução. Basta trocar o bloco `<svg>` em
  `components/ProductCard.tsx` e `app/produtos/[slug]/page.tsx` por
  `next/image` apontando para os arquivos reais.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Próximos passos sugeridos

1. Substituir as ilustrações placeholder por fotografia real dos produtos.
2. Implementar `/api/contato` (Route Handler) + Prisma + PostgreSQL para
   persistir os leads do formulário e disparar e-mail.
3. Construir o painel administrativo (auth JWT + CRUD de produtos, categorias,
   downloads e banners).
4. Adicionar a seção de visualização 3D com React Three Fiber na página de
   produto.
5. Popular a área de Downloads (catálogos, manuais, datasheets em PDF).
6. Internacionalização (PT/EN/ES) quando o conteúdo em outros idiomas estiver
   pronto.

## Estrutura

```
app/
  layout.tsx          # shell: sidebar + loading + footer
  page.tsx             # Início
  sobre/page.tsx
  produtos/page.tsx
  produtos/[slug]/page.tsx
  segmentos/page.tsx
  contato/page.tsx
  privacidade/page.tsx
  termos/page.tsx
  not-found.tsx
  sitemap.ts
  robots.ts
components/            # Sidebar, CommandPalette, Hero, ProductCard, etc.
lib/
  products.ts           # catálogo (fonte: folder oficial)
  content.ts             # segmentos, diferenciais, unidades, stats
```
