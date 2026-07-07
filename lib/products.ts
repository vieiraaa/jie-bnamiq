// Data extracted directly from the official JIE BNAMIQ product folder.
// Do not invent specs — if a field is missing in the source material it is
// simply omitted here rather than fabricated.

export type ProductCategory =
  | "Motorredutores"
  | "Redutores"
  | "Planetários"
  | "Precisão"
  | "Rosca sem-fim"
  | "Hipóides"
  | "IEC"
  | "Inversores"
  | "Talhas"
  | "Macacos mecânicos"
  | "Caixas de transmissão";

export interface Product {
  slug: string;
  code: string;
  name: string;
  category: ProductCategory;
  description: string;
  specs: { label: string; value: string }[];
}

export const categories: ProductCategory[] = [
  "Motorredutores",
  "Redutores",
  "Planetários",
  "Precisão",
  "Rosca sem-fim",
  "Hipóides",
  "IEC",
  "Inversores",
  "Talhas",
  "Macacos mecânicos",
  "Caixas de transmissão",
];

export const products: Product[] = [
  {
    slug: "jrtr",
    code: "JRTR",
    name: "Motorredutores helicoidais coaxiais",
    category: "Motorredutores",
    description:
      "Linha coaxial de alto rendimento para acionamentos que exigem compacidade e alinhamento direto entre entrada e saída.",
    specs: [
      { label: "Tamanho", value: "09–189" },
      { label: "Relação", value: "3.37–289.74" },
      { label: "Potência de entrada", value: "0,12–250 kW" },
      { label: "Torque de saída", value: "2,4–56494 N·m" },
    ],
  },
  {
    slug: "jrtf",
    code: "JRTF",
    name: "Motorredutores helicoidais de eixos paralelos",
    category: "Motorredutores",
    description:
      "Configuração de eixos paralelos indicada para aplicações que exigem torque elevado em espaço reduzido.",
    specs: [
      { label: "Tamanho", value: "29–169" },
      { label: "Relação", value: "3.77–281.71" },
      { label: "Potência de entrada", value: "0,12–250 kW" },
      { label: "Torque de saída", value: "3,5–37125 N·m" },
    ],
  },
  {
    slug: "jrtk",
    code: "JRTK",
    name: "Motorredutores cônicos helicoidais",
    category: "Motorredutores",
    description:
      "Solução cônico-helicoidal para transmissão em ângulo reto com alta capacidade de torque.",
    specs: [
      { label: "Tamanho", value: "39–189" },
      { label: "Relação", value: "3.98–197.37" },
      { label: "Potência de entrada", value: "0,12–200 kW" },
      { label: "Torque de saída", value: "10–62800 N·m" },
    ],
  },
  {
    slug: "jrtw",
    code: "JRTW",
    name: "Motorredutores híbridos ortogonais",
    category: "Motorredutores",
    description:
      "Combinação híbrida ortogonal voltada a aplicações compactas de baixa a média potência.",
    specs: [
      { label: "Tamanho", value: "10–30" },
      { label: "Relação", value: "6.57–75" },
      { label: "Potência de entrada", value: "0.09–1.1 kW" },
      { label: "Torque de saída", value: "25–70 N·m" },
    ],
  },
  {
    slug: "jrts",
    code: "JRTS",
    name: "Motorredutores helicoidais com rosca sem-fim",
    category: "Motorredutores",
    description:
      "Estágio helicoidal combinado a rosca sem-fim, equilibrando relação de redução e suavidade de operação.",
    specs: [
      { label: "Tamanho", value: "39–99" },
      { label: "Relação", value: "6.8–288" },
      { label: "Potência de entrada", value: "0.12–22 kW" },
      { label: "Torque de saída", value: "10–4900 N·m" },
    ],
  },
  {
    slug: "jrhh",
    code: "JRHH",
    name: "Redutores de eixos paralelos",
    category: "Redutores",
    description:
      "Redutores industriais de eixos paralelos preparados para cargas severas e operação contínua.",
    specs: [
      { label: "Tamanho", value: "3–28" },
      { label: "Relação", value: "1.25–450" },
      { label: "Potência de entrada", value: "4.3–10515 kW" },
      { label: "Torque de saída", value: "2300–1400000 N·m" },
    ],
  },
  {
    slug: "jrhb",
    code: "JRHB",
    name: "Redutores cônicos helicoidais",
    category: "Redutores",
    description:
      "Redutores cônico-helicoidais de grande porte para aplicações industriais de alta exigência.",
    specs: [
      { label: "Tamanho", value: "4–28" },
      { label: "Relação", value: "5–400" },
      { label: "Potência de entrada", value: "2.8–4908 kW" },
      { label: "Torque de saída", value: "5500–1400000 N·m" },
    ],
  },
  {
    slug: "jrp-standard",
    code: "JRP",
    name: "Redutores planetários",
    category: "Planetários",
    description:
      "Linha planetária de alta capacidade, indicada para torques extremos em envelope compacto.",
    specs: [
      { label: "Tamanho", value: "9–36" },
      { label: "Relação", value: "25–4000" },
      { label: "Potência de entrada", value: "0.4–12.934 kW" },
      { label: "Torque de saída", value: "22000–2600000 N·m" },
    ],
  },
  {
    slug: "jrp-compact",
    code: "JRP",
    name: "Redutores planetários",
    category: "Planetários",
    description:
      "Variante planetária de menor porte para aplicações de precisão e torque moderado.",
    specs: [
      { label: "Tamanho", value: "01–8" },
      { label: "Relação", value: "3.08–3460" },
      { label: "Potência de entrada", value: "0.02–192 kW" },
      { label: "Torque de saída", value: "1000–13000 N·m" },
    ],
  },
  {
    slug: "jrph",
    code: "JRPH",
    name: "Redutores planetários rotativos",
    category: "Planetários",
    description:
      "Redutores planetários rotativos voltados a grandes máquinas de movimentação e giro.",
    specs: [
      { label: "Tamanho", value: "08–100" },
      { label: "Relação", value: "3.4–2000" },
      { label: "Potência de entrada", value: "75–250 kW" },
      { label: "Torque de saída", value: "8000–100000 N·m" },
    ],
  },
  {
    slug: "jrp-rv",
    code: "JRP RV",
    name: "Redutores planetários de precisão coaxiais",
    category: "Precisão",
    description:
      "Redutores de precisão coaxiais com baixa folga angular, indicados para automação de alta exatidão.",
    specs: [
      { label: "Relação", value: "3–100" },
      { label: "Folga (Backlash)", value: "1–3 / 3–5 / 5–7 arc-min" },
      { label: "Torque", value: "6–3300 N·m" },
    ],
  },
  {
    slug: "jrp-re",
    code: "JRP RE",
    name: "Redutores planetários de precisão ortogonais",
    category: "Precisão",
    description:
      "Versão ortogonal da linha de precisão, para integração em ângulo reto com baixa folga.",
    specs: [
      { label: "Relação", value: "3–100" },
      { label: "Folga (Backlash)", value: "4–9 / 6–11 arc-min" },
      { label: "Torque", value: "12–1920 N·m" },
    ],
  },
  {
    slug: "jbw",
    code: "JBW",
    name: "Redutores de rosca sem-fim IEC",
    category: "Rosca sem-fim",
    description: "Redutores de rosca sem-fim com flange padrão IEC para fácil motorização.",
    specs: [
      { label: "Tamanho", value: "25–150" },
      { label: "Relação", value: "5–100" },
      { label: "Potência de entrada", value: "0.06–15 kW" },
      { label: "Torque de saída", value: "2.6–1760 N·m" },
    ],
  },
  {
    slug: "jbkm",
    code: "JBKM",
    name: "Redutores hipoides",
    category: "Hipóides",
    description: "Redutores hipoides de alta eficiência e operação silenciosa.",
    specs: [
      { label: "Tamanho", value: "28–68" },
      { label: "Relação", value: "7.5–300" },
      { label: "Potência de entrada", value: "0.07–11.1 kW" },
      { label: "Torque de saída", value: "12–886 N·m" },
    ],
  },
  {
    slug: "jd-iec",
    code: "JD-IEC",
    name: "Motores padrão IEC",
    category: "IEC",
    description: "Motores elétricos padrão IEC de alta eficiência para uso industrial geral.",
    specs: [
      { label: "Tamanho", value: "63–315" },
      { label: "Potência", value: "0.12–200 kW" },
      { label: "Eficiência", value: "IE3" },
    ],
  },
  {
    slug: "jcmb",
    code: "JCMB",
    name: "Motorredutores com inversor de frequência",
    category: "Inversores",
    description:
      "Motorredutor integrado a inversor de frequência com comunicação industrial nativa.",
    specs: [
      { label: "Tamanho", value: "175–255" },
      { label: "Potência", value: "0.75–5.5 kW" },
      { label: "Alimentação de entrada", value: "3AC 380–440 V" },
      { label: "Frequência de saída", value: "0–200 Hz" },
      { label: "Comunicação", value: "Modbus RTU · Profinet · ASi" },
    ],
  },
  {
    slug: "jrtg",
    code: "JRTG",
    name: "Motorredutor para talhas de elevação",
    category: "Talhas",
    description: "Motorredutor dedicado a talhas de elevação, com classes de trabalho ISO.",
    specs: [
      { label: "Potência", value: "2,6–40 kW" },
      { label: "Capacidade de talha", value: "3,2–40 ton" },
      { label: "Classe de trabalho (ISO)", value: "M4–M7" },
    ],
  },
  {
    slug: "jres",
    code: "JRES (R, K)",
    name: "Motorredutores helicoidais em aço inoxidável",
    category: "Motorredutores",
    description:
      "Versão em aço inoxidável da linha helicoidal, para setores de alta exigência sanitária.",
    specs: [
      { label: "Tamanho", value: "37–67" },
      { label: "Relação", value: "3.41–199.81" },
      { label: "Potência de entrada", value: "0.18–7.5 kW" },
      { label: "Torque de saída", value: "12–910 N·m" },
    ],
  },
{
    slug: "jress",
    code: "JRESS",
    name: "Motorredutores de rosca sem-fim em aço inoxidável",
    category: "Rosca sem-fim",
    description:
      "Versão em aço inoxidável indicada para ambientes de lavagem intensa, alimentos e bebidas.",
    specs: [
      { label: "Tamanho", value: "37–90" },
      { label: "Relação", value: "5–100" },
      { label: "Potência de entrada", value: "0.09–4 kW" },
      { label: "Torque de saída", value: "19–458 N·m" },
    ],
  },
  {
    slug: "jrss",
    code: "JRSS",
    name: "Macacos mecânicos",
    category: "Macacos mecânicos",
    description: "Macacos mecânicos de elevação para sistemas de posicionamento e nivelamento.",
    specs: [
      { label: "Tamanho", value: "35–150" },
      { label: "Relação", value: "5–40" },
      { label: "Potência de entrada", value: "0.19–16.3 kW" },
      { label: "Capacidade de elevação", value: "500–26050 kg" },
    ],
  },
  {
    slug: "jrtm",
    code: "JRTM",
    name: "Caixas de transmissão angular",
    category: "Caixas de transmissão",
    description: "Caixas de transmissão angular para desvio e distribuição de movimento.",
    specs: [
      { label: "Tamanho", value: "2–25" },
      { label: "Relação", value: "1–5" },
      { label: "Potência de entrada", value: "0.014–335 kW" },
      { label: "Velocidade de entrada", value: "10–1450 r/min" },
    ],
  },
];

export function getProductsByCategory(category: ProductCategory) {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
