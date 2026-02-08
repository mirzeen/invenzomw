export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  thumbnail: string;
  color: string;
  context: string;
  concept: string;
  direction: string;
  execution: string;
  result: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "ovra-studio",
    title: "Övra Studio",
    subtitle: "Identidad visual para estudio de arquitectura nórdica",
    category: "Branding & Identidad",
    year: "2024",
    thumbnail: "",
    color: "hsl(200 15% 30%)",
    context:
      "Övra es un estudio de arquitectura con sede en Estocolmo que diseña espacios residenciales centrados en la relación entre luz natural y habitabilidad. Necesitaban una identidad que comunicara precisión técnica sin perder calidez humana.",
    concept:
      "El concepto parte de la dualidad entre estructura y espacio vacío — lo construido y lo que se deja sin construir. La identidad respira tanto como los espacios que Övra diseña.",
    direction:
      "Paleta restringida a tonos piedra y acero. Tipografía geométrica con serifas suaves. Composiciones asimétricas con abundante aire. Sistema de grilla inspirado en planos arquitectónicos.",
    execution:
      "Desarrollo de marca completa: logotipo, sistema tipográfico, papelería, guidelines digitales y aplicación web. Cada pieza refleja la filosofía de 'menos decisiones, mejores espacios'.",
    result:
      "La marca posicionó a Övra como referente visual en el sector. El sitio web obtuvo reconocimiento en Awwwards y la identidad fue publicada en BP&O.",
    images: [],
  },
  {
    id: "tierra-negra",
    title: "Tierra Negra",
    subtitle: "Rebranding para marca de café de especialidad",
    category: "Rebranding",
    year: "2024",
    thumbnail: "",
    color: "hsl(25 40% 25%)",
    context:
      "Tierra Negra es una marca de café de especialidad de origen colombiano que había crecido sin una identidad coherente. La percepción de marca no reflejaba la calidad del producto ni su historia.",
    concept:
      "El rebrand se construyó sobre la idea de 'origen como destino' — cada taza es un viaje al terroir. La identidad conecta lo artesanal con lo contemporáneo sin caer en clichés rústicos.",
    direction:
      "Tipografía display con carácter, texturas orgánicas sutiles, paleta oscura con acentos terracota. Fotografía de producto con iluminación direccional y fondos matéricos.",
    execution:
      "Nuevo logotipo, sistema de packaging para tres líneas de producto, sitio web e-commerce, y campaña de lanzamiento en redes. Todo unificado bajo un lenguaje visual sólido.",
    result:
      "Las ventas online crecieron un 180% en los primeros tres meses post-lanzamiento. La marca pasó de percibirse como local a proyectarse como premium e internacional.",
    images: [],
  },
  {
    id: "forma-digital",
    title: "Forma Digital",
    subtitle: "Concepto de plataforma para gestión creativa",
    category: "Concepto Digital",
    year: "2023",
    thumbnail: "",
    color: "hsl(250 20% 25%)",
    context:
      "Proyecto conceptual para una plataforma de gestión de proyectos creativos. El brief planteaba diseñar la experiencia visual de una herramienta que compitiera con Notion y Linear en el espacio creativo.",
    concept:
      "La interfaz se diseñó como un canvas — no como una lista. El concepto 'pensar en espacio, no en secuencia' rompía con la lógica lineal de las herramientas existentes.",
    direction:
      "UI oscura con acentos de color funcionales. Tipografía monoespaciada para datos, serif para títulos. Microinteracciones sutiles que refuerzan la sensación de control.",
    execution:
      "Diseño de UI/UX completo: flujos principales, sistema de componentes en Figma, prototipo interactivo y motion guidelines. Presentado como caso de estudio.",
    result:
      "El proyecto demostró capacidad de pensamiento de producto y fue clave para obtener proyectos reales con startups tech que buscaban ese nivel de profundidad conceptual.",
    images: [],
  },
  {
    id: "viento-sur",
    title: "Viento Sur",
    subtitle: "Campaña visual para festival de música independiente",
    category: "Campaña & Dirección de Arte",
    year: "2023",
    thumbnail: "",
    color: "hsl(340 30% 30%)",
    context:
      "Viento Sur es un festival de música independiente en Buenos Aires que necesitaba una identidad de campaña que lo diferenciara del ruido visual típico de festivales masivos.",
    concept:
      "El concepto 'frecuencias visibles' tradujo la experiencia sonora a un lenguaje gráfico: ondas, distorsiones controladas y ritmo visual. Cada pieza vibra.",
    direction:
      "Paleta vibrante pero acotada. Tipografía bold condensada. Composiciones dinámicas con distorsión tipográfica controlada. Motion design como extensión natural del sistema.",
    execution:
      "Sistema completo de campaña: cartelería, assets digitales, merchandise, señalética del evento y contenido animado para redes sociales.",
    result:
      "El festival agotó entradas por primera vez. La identidad de campaña fue compartida orgánicamente por artistas participantes, amplificando el alcance sin inversión adicional.",
    images: [],
  },
  {
    id: "arco-estudio",
    title: "Arco Estudio",
    subtitle: "Identidad y web para estudio de interiorismo",
    category: "Branding & Web",
    year: "2023",
    thumbnail: "",
    color: "hsl(150 12% 28%)",
    context:
      "Arco es un estudio de interiorismo contemporáneo que trabaja la intersección entre arte y funcionalidad. Necesitaban una presencia digital que funcionara como extensión de su filosofía de diseño.",
    concept:
      "La identidad se construyó sobre el principio de 'curación' — cada decisión visual es una elección deliberada, como la selección de materiales en un espacio. Nada es decorativo.",
    direction:
      "Minimalismo cálido. Paleta de verdes apagados y beiges. Tipografía elegante sin adornos. Fotografía con luz natural como protagonista. Transiciones lentas en web.",
    execution:
      "Logotipo, sistema visual, sitio web con galería inmersiva de proyectos, y material de presentación para captación de clientes.",
    result:
      "El sitio web se convirtió en su principal herramienta de captación. Clientes comentan que 'el sitio ya comunica el nivel de trabajo antes de la primera reunión'.",
    images: [],
  },
];
