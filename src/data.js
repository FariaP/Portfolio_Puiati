// Conteúdo do site. Itens marcados com TODO são provisórios e precisam ser trocados.

// TODO: número real com DDI+DDD (ex.: 5511999999999)
const WHATSAPP = "5532988850219";
export const contactUrl = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
export const CONTACT_URL = contactUrl("Olá Lucas, quero transformar minha história em filme.");

export const PLANS = [
  {
    name: "Básico",
    tagline: "Registro essencial com qualidade e objetividade.",
    price: 1059,
    items: ["Cerimônia completa", "Captação padrão", "Edição simples e objetiva", "Vídeo final com duração padrão", "Entrega digital"],
  },
  {
    name: "Intermediário",
    tagline: "Equilíbrio ideal entre qualidade profissional e investimento.",
    price: 1899,
    items: ["Cerimônia completa", "Cobertura da festa", "Captação profissional", "Edição profissional", "Vídeo final com duração média", "Entrega digital em alta resolução"],
  },
  {
    name: "Alto Padrão",
    tagline: "Cobertura completa do grande dia, com padrão cinematográfico.",
    price: 2999,
    featured: true,
    items: [
      "Cerimônia completa na igreja",
      "Cobertura completa da festa",
      "Captação em alta qualidade (cinematográfica)",
      "Edição avançada com narrativa emocional",
      "Vídeo final com maior duração",
      "Entrega digital em alta resolução",
      "Direção cinematográfica do casal",
      "Captação de áudio profissional dos votos",
      { text: "2 Câmeras incluso", bonus: true },
      { text: "BÔNUS: Trailer teaser para redes sociais", bonus: true },
      { text: "BÔNUS: Drone incluso para captação aérea", bonus: true },
      { text: "BÔNUS: Pré-wedding ou making off do casal incluso", bonus: true },
    ],
  },
];

// Vídeo do hero: vídeo em loop sobre o poster.
export const HERO = {
  poster: "/images/Puiati_pb.PNG",
  video: "/video/clips/filme.mp4",
};

export const LUCAS_PHOTO = "/images/Puiati_color.jpeg";

export const PROJECTS = [
  { title: "Entre Água e Luz", category: "Casamento", year: "2026", image: "/images/film-01.png", position: "50% 57%", text: "A noiva, o fim de tarde e o reflexo da água. Um filme feito de pausas e de luz." },
  { title: "O Instante", category: "Cerimônia", year: "2026", image: "/images/film-02.png", position: "50% 30%", text: "A emoção que ninguém ensaia, registrada no exato segundo em que acontece." },
  { title: "Lado a Lado", category: "Casamento", year: "2026", image: "/images/film-03.png", position: "40% 30%", text: "O olhar de quem espera, o braço de quem sustenta. A cerimônia contada em silêncio." },
  { title: "Antes da Festa", category: "Making of", year: "2026", image: "/images/film-04.png", position: "50% 30%", text: "O respiro entre o preparo e a celebração, em preto e branco." },
  { title: "Pausa", category: "Ensaio", year: "2026", image: "/images/film-05.png", position: "50% 25%", text: "Um intervalo de calma no meio do dia mais esperado da vida." },
];

export const STEPS = [
  { title: "Conversa", text: "Entendemos quem vocês são e o que precisa ser lembrado." },
  { title: "Planejamento", text: "Roteiro, locações e momentos-chave definidos com antecedência." },
  { title: "Captação", text: "Presença discreta, olhar atento e cada emoção registrada de verdade." },
  { title: "Edição", text: "Ritmo, trilha e cor para transformar imagens em narrativa." },
  { title: "Seu filme", text: "Uma história para rever sempre que quiser sentir tudo de novo." },
];

// TODO: substituir por depoimentos reais de clientes
export const TESTIMONIALS = [
  { quote: "Assistir ao filme foi reviver o dia inteiro, com detalhes que nem percebemos na hora.", author: "Lidiane & Mateus" },
  { quote: "Ele some no meio da festa e aparece em cada emoção. Nunca nos sentimos filmados.", author: "Carol & Gabriel" },
  { quote: "Chorei do primeiro ao último minuto. É exatamente a nossa história.", author: "Lívia & Víctor" },
];

export const FEATURES = [
  { icon: "camera", title: "Câmeras profissionais", text: "Equipamento de cinema para captação em 4K com qualidade de produtora." },
  { icon: "drone", title: "Drone 4K", text: "Imagens aéreas que revelam a grandiosidade do seu cenário." },
  { icon: "edit", title: "Edição emocional", text: "Narrativa cinematográfica que conta a verdadeira história do dia." },
  { icon: "finish", title: "Acabamento de cinema", text: "Color grading e som tratado para uma entrega impecável." },
];

export const ADDON = {
  label: "Serviço adicional",
  title: "Mercedes 1978",
  text: "Uma Mercedes clássica de 1978, disponível para ensaios de pré-wedding e para a entrada da noiva na cerimônia ou recepção, proporcionando uma experiência exclusiva e marcante ao casal.",
  price: 2000,
  note: "Contratação opcional, adicionada separadamente ao plano de casamento escolhido.",
  images: ["/images/mercedez2.jpeg", "/images/mercedez1.jpeg", "/images/mercedez3.jpeg"],
};

// Cortes de 20s (a partir de 0:06) gerados em public/video/clips/
export const CLIPS = {
  filme: "/video/clips/filme.mp4",
  curta: "/video/clips/curta.mp4",
  prewedding: "/video/clips/prewedding.mp4",
  teaser: "/video/clips/teaser.mp4",
  filme2: "/video/clips/filme2.mp4",
  filme3: "/video/clips/filme3.mp4",
  curta2: "/video/clips/curta2.mp4",
  prewedding2: "/video/clips/prewedding2.mp4",
  teaser2: "/video/clips/teaser2.mp4",
};
