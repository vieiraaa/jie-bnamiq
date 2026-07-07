// Institutional content extracted from the official JIE BNAMIQ folder.
// Fields not present in the source material are left as clearly-marked
// placeholders rather than invented.

export function segmentSlug(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export const segments = [
  "Mineração",
  "Siderurgia",
  "Agronegócio",
  "Logística",
  "Portos",
  "Papel e Celulose",
  "Alimentos e Bebidas",
  "Metalurgia",
  "Automação",
  "Química",
  "Madeireiras",
  "Cosméticos e Perfumaria",
];

export const differentiators = [
  {
    title: "Distribuição Oficial",
    description: "O grupo A.T.I. BRASIL é distribuidor oficial JIE BNAMIQ, com presença nacional.",
  },
  {
    title: "Engenharia Especializada",
    description: "Suporte técnico dedicado para especificação e aplicação de cada solução.",
  },
  {
    title: "Suporte Técnico",
    description: "Equipe técnica preparada para atender do pré ao pós-venda.",
  },
  {
    title: "Entrega Nacional",
    description: "Estrutura logística própria para atender todo o território brasileiro.",
  },
  {
    title: "Produtos Premium",
    description: "Linha completa desenvolvida com a capacidade produtiva da JIE JDRIVE.",
  },
  {
    title: "Alta Eficiência",
    description: "Soluções projetadas para maximizar desempenho e reduzir consumo.",
  },
  {
    title: "Confiabilidade",
    description: "Produtos testados para operação contínua em ambientes industriais severos.",
  },
  {
    title: "Baixa Manutenção",
    description: "Engenharia robusta que reduz paradas e custos de manutenção.",
  },
];

export const globalUnits = [
  {
    name: "JIE BRASIL",
    role: "Unidade Brasil",
    address: "Rod. B116, 26010, KM 119,5 - Campo de Santana, Curitiba - PR",
    phone: "+55 (41) 3302-3400",
    email: "vendas@atibrasil.com.br",
    web: "www.atibrasil.com.br",
    lat: -25.5787665,
    lng: -49.3160397,
  },
  {
    name: "JIE CANADA",
    role: "Unidade Canadá",
    address: "130 Rue de l'Émissaire, Drummondville, Québec J2E 1S4",
    phone: "+1 819 850 9886",
    email: "info@jie-drives.com",
    web: "www.jie-drive.com",
    lat: 45.8833,
    lng: -72.4833,
  },
  {
    name: "JIE JDRIVE",
    role: "Hangzhou, China",
    address: "No.1, JIE Road, Hangzhou, Zhejiang, China",
    phone: "+86 571 8299 1111",
    email: "jie@jie.com.cn",
    web: "www.jiedrive.com",
    lat: 30.2741,
    lng: 120.1551,
  },
  {
    name: "JIE USA",
    role: "Unidade Estados Unidos",
    address: "279 Madsen Drive Ste 101, Bloomingdale IL 60108",
    phone: "+1 630 580 9986",
    email: "info@jie-drives.com",
    web: "www.jiedrive.com",
    lat: 41.9494,
    lng: -88.0837,
  },
  {
    name: "JIE EURONORM",
    role: "Unidade Europa",
    address: "Hub van Doorneweg 8, 2171 KZ Sassenheim, Holanda",
    phone: "+31 252 228850",
    email: "info@jie-euronorm.com",
    web: "www.jie-euronorm.com",
    lat: 52.2261,
    lng: 4.5389,
  },
];

export const atiUnits = [
  {
    city: "Curitiba - PR",
    role: "Matriz",
    phone: "+55 (41) 3302-3400",
    email: "vendas@atibrasil.com.br",
  },
  { city: "Caxias do Sul - RS", phone: "+55 (54) 2018-1201", email: "vendas.rs@atibrasil.com.br" },
  { city: "Maringá - PR", phone: "+55 (44) 3112-0550", email: "vendas.maringa@atibrasil.com.br" },
  { city: "Jundiaí - SP", phone: "+55 (11) 3577-5300", email: "vendas.sp@atibrasil.com.br" },
  { city: "Joinville - SC", phone: "+55 (47) 3433-1823", email: "vendas.joi@atibrasil.com.br" },
  { city: "Fortaleza - CE", phone: "+55 (85) 3099-1500", email: "vendas.for@atibrasil.com.br" },
  { city: "Chapecó - SC", phone: "+55 (49) 3331-7000", email: "vendas.chapeco@atibrasil.com.br" },
  {
    city: "Belo Horizonte - MG",
    phone: "+55 (31) 2516-6974",
    email: "vendas.bh@atibrasil.com.br",
  },
  { city: "Serra - ES", phone: "+55 (27) 3328-0028", email: "vendas.es@atibrasil.com.br" },
];

// Numbers with a verified source are marked verified: true.
// Everything else is left as a placeholder for the client to confirm —
// per the brief, technical/institutional data is never fabricated.
export const stats = [
  { label: "Anos de atuação da JIE", value: 38, suffix: "+", verified: true },
  { label: "Famílias de produtos no catálogo", value: 21, suffix: "+", verified: true },
  { label: "Unidades de distribuição no Brasil", value: 9, suffix: "", verified: true },
  { label: "Unidades globais JIE BNAMIQ", value: 4, suffix: "", verified: true },
];
