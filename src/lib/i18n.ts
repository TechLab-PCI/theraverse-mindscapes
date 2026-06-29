export type Lang = "pt" | "en";

export const translations = {
  nav: {
    about: { pt: "Sobre", en: "About" },
    features: { pt: "Funcionalidades", en: "Features" },
    impact: { pt: "Impacto", en: "Impact" },
    news: { pt: "Notícias", en: "News" },
    partners: { pt: "Parceiros", en: "Partners" },
  },
  hero: {
    eyebrow: { pt: "Mundos Imersivos na Saúde", en: "Immersive Worlds in Healthcare" },
    title: {
      pt: "THERAVERSE: O Futuro da Saúde Mental Digital",
      en: "THERAVERSE: The Future of Digital Mental Health",
    },
    subtitle: {
      pt: "Uma clínica imersiva potenciada por Realidade Virtual, Aumentada e Inteligência Artificial — desenhada para a geração de nativos digitais.",
      en: "An immersive clinic powered by Virtual Reality, Augmented Reality and Artificial Intelligence — designed for digital natives.",
    },
    scroll: { pt: "Descobrir", en: "Discover" },
  },
  context: {
    tag: { pt: "Contexto & Desafio", en: "Context & Challenge" },
    title: {
      pt: "Um desafio silencioso na saúde mental dos jovens",
      en: "A silent challenge in young people's mental health",
    },
    body: {
      pt: "Portugal apresenta elevadas taxas de prevalência de doenças psiquiátricas em jovens. O Theraverse responde com uma nova oferta de cuidados — imersiva, contínua e livre de estigma.",
      en: "Portugal has high prevalence rates of psychiatric conditions among young people. Theraverse responds with a new care model — immersive, continuous and free of stigma.",
    },
    metric: { pt: "39%", en: "39%" },
    metricLabel: {
      pt: "dos jovens adultos (18–34) reportam cinco ou mais sintomas de sofrimento psicológico.",
      en: "of young adults (18–34) report five or more symptoms of psychological distress.",
    },
    sources: {
      pt: "Fonte: indicadores nacionais — Lei de Saúde Mental n.º 35/2023, PNS 2030, ENESIS 2022.",
      en: "Source: national indicators — Mental Health Law 35/2023, NHP 2030, ENESIS 2022.",
    },
  },
  features: {
    tag: { pt: "A Clínica Imersiva", en: "The Immersive Clinic" },
    title: {
      pt: "Quatro pilares para uma nova geração de cuidados",
      en: "Four pillars for a new generation of care",
    },
    items: [
      {
        title: { pt: "Realidade Virtual & Aumentada", en: "Virtual & Augmented Reality" },
        desc: {
          pt: "Ambientes terapêuticos imersivos para avaliação, psicoterapia e programas de educação.",
          en: "Immersive therapeutic environments for assessment, psychotherapy and education programs.",
        },
      },
      {
        title: { pt: "Inteligência Artificial & LLMs", en: "Artificial Intelligence & LLMs" },
        desc: {
          pt: "IA generativa e modelos de linguagem para acompanhamento personalizado e respostas em tempo real.",
          en: "Generative AI and language models for personalized support and real-time responses.",
        },
      },
      {
        title: { pt: "Sensorização & Wearables", en: "Sensors & Wearables" },
        desc: {
          pt: "Monitorização contínua, síncrona e assíncrona, do estado de saúde mental do utente.",
          en: "Continuous, synchronous and asynchronous monitoring of the user's mental health state.",
        },
      },
      {
        title: { pt: "Ambiente Seguro", en: "Safe Environment" },
        desc: {
          pt: "Espaços controlados, privados e livres de estigma, onde partilhar é mais fácil.",
          en: "Controlled, private and stigma-free spaces where sharing becomes easier.",
        },
      },
    ],
  },
  impact: {
    tag: { pt: "Alinhamento Estratégico", en: "Strategic Alignment" },
    title: {
      pt: "Alinhado com a estratégia Web 4.0 da UE e os ODS da OMS",
      en: "Aligned with the EU Web 4.0 strategy and the WHO SDGs",
    },
    eu: {
      pt: "Os mundos virtuais — segundo a Estratégia 4.0 da União Europeia — ajudarão a obter diagnósticos mais rápidos e precisos e a abrir acesso a novos tratamentos terapêuticos num mercado global previsto em 800 mil milhões de euros.",
      en: "Virtual worlds — under the EU 4.0 Strategy — will enable faster, more accurate diagnostics and open access to new therapeutic treatments in a global market projected at €800 billion.",
    },
    sdgTitle: { pt: "Objetivos de Desenvolvimento Sustentável", en: "Sustainable Development Goals" },
    sdgs: [
      { n: 3, pt: "Saúde e Bem-Estar", en: "Good Health & Well-being" },
      { n: 4, pt: "Educação de Qualidade", en: "Quality Education" },
      { n: 9, pt: "Indústria & Inovação", en: "Industry & Innovation" },
      { n: 10, pt: "Redução das Desigualdades", en: "Reduced Inequalities" },
      { n: 11, pt: "Cidades Sustentáveis", en: "Sustainable Cities" },
      { n: 13, pt: "Ação Climática", en: "Climate Action" },
      { n: 17, pt: "Parcerias para a Implementação", en: "Partnerships for the Goals" },
    ],
  },
  news: {
    tag: { pt: "Notícias & Publicações", en: "News & Publications" },
    title: {
      pt: "Acompanhe os 3 anos do projeto",
      en: "Follow the 3-year project journey",
    },
    body: {
      pt: "Esta secção reunirá comunicações científicas, marcos do projeto e publicações da equipa. Em breve.",
      en: "This section will gather scientific communications, project milestones and team publications. Coming soon.",
    },
    placeholder: { pt: "Primeiras publicações em preparação", en: "First publications in preparation" },
    follow: { pt: "Siga-nos", en: "Follow us" },
  },
  partners: {
    tag: { pt: "Consórcio", en: "Consortium" },
    title: { pt: "Um projeto realizado em parceria", en: "A project delivered in partnership" },
  },
  footer: {
    rights: {
      pt: "Projeto de Investigação & Desenvolvimento — 3 anos.",
      en: "Research & Development Project — 3 years.",
    },
  },
} as const;

export function t<T extends { pt: string; en: string }>(entry: T, lang: Lang): string {
  return entry[lang];
}
