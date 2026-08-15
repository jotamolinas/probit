export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  cta: string;
  basePriceUSD: number;
  unitLabel: string;
  icon: string;
}

export interface DesignToken {
  name: string;
  hex: string;
  description: string;
  usage: string;
}

export interface CopySnippet {
  section: string;
  label: string;
  content: string;
  explanation: string;
}

export const VISUAL_IDENTITY = {
  themeName: "Cloud Modernity (Claridad Tecnológica)",
  summary: "Sustituimos el antiguo fondo negro pesado por un entorno luminoso, espacioso y corporativo. Sanamos la duplicidad del logotipo mediante un posicionamiento limpio en el header y reemplazamos la foto genérica de la taza de café por un dashboard vivo que simula la infraestructura real de un negocio paraguayo.",
  palette: [
    {
      name: "Fondo (Pure Canvas / Slate Glare)",
      hex: "#F8FAFC",
      description: "Gris ultra-claro sutil (Slate 50) combinado con blanco puro (#FFFFFF).",
      usage: "Genera amplitud visual, respiro (negativo espacial) y transmite limpieza operativa, alejándose del fondo negro saturado anterior."
    },
    {
      name: "Color Principal (Cumulus Blue)",
      hex: "#0F172A",
      description: "Azul marino profundo (Slate 900) para textos y jerarquía máxima.",
      usage: "Establece el contraste y la legibilidad B2B de nivel enterprise."
    },
    {
      name: "Color Secundario (Nube / Sky Bridge)",
      hex: "#0284C7",
      description: "Celeste tecnológico sofisticado (Sky 600).",
      usage: "Acentúa elementos intermedios, links y el concepto de conectividad en las nubes."
    },
    {
      name: "Color de Acento (Guaraní Amber)",
      hex: "#D97706",
      description: "Ámbar/Dorado corporativo cálido (Amber 600) u Opalina Activa.",
      usage: "Exclusivo para botones de conversión inicial (CTAs) y llamadas visuales de urgencia sofisticada."
    }
  ] as DesignToken[],
  typography: {
    titleFont: "Inter o Poppins (Sans-serif geométrico)",
    bodyFont: "Inter o Slate-Geometrics",
    description: "Para dar un aspecto de software e innovación, se descartan serifas tradicionales y fuentes decorativas. La tipografía Inter en pesos de 500 a 800 genera excelente ritmo de lectura en pantallas de alta densidad."
  },
  assetStrategy: {
    title: "Sustitución de Imagen de Stock (Café y Laptop)",
    points: [
      "Reemplazar la vieja imagen corporativa por una UI animada interactiva (un dashboard simplificado de rendimiento de infraestructura o estado de la nube).",
      "Ilustraciones vectoriales abstractas de topología de red con nodos dinámicos que reaccionan al cursor de las empresas.",
      "Capturas estilizadas de interfaces reales con sombras profundas y bordes redondeados sobrios."
    ]
  }
};

export const CORE_SOLUTIONS: ServiceItem[] = [
  {
    id: "software",
    title: "Desarrollo de Software",
    badge: "Soluciones a Medida",
    shortDesc: "Sistemas corporativos robustos y aplicaciones móviles de alto rendimiento diseñadas desde cero.",
    fullDesc: "Creamos herramientas tecnológicas que se adaptan exactamente al flujo operativo de tu negocio en Paraguay. Desde integraciones con pasarelas de pago locales hasta sistemas de gestión (ERP/CRM) modulares que aumentan el control operativo.",
    features: [
      "Aplicaciones Móviles (iOS/Android) nativas e híbridas",
      "Sistemas de gestión Web e Intranets optimizadas",
      "Integración de APIs y facturación electrónica paraguaya",
      "Arquitectura de software escalable y libre de licencias cautivas"
    ],
    cta: "Cotizar Software a Medida",
    basePriceUSD: 1200,
    unitLabel: "por fase de proyecto",
    icon: "Code"
  },
  {
    id: "infraestructura",
    title: "Infraestructura TI",
    badge: "Soporte y Servidores",
    shortDesc: "Redes seguras, soporte técnico corporativo proactivo y gestión integral de servidores.",
    fullDesc: "Garantizamos la continuidad operativa de tu empresa en Paraguay. Auditamos, diseñamos e instalamos redes seguras de datos, gestionamos la migración de tu estructura física a servidores privados de alto cumplimiento, y brindamos soporte remoto y presencial.",
    features: [
      "Soporte Helpdesk remoto y presencial con SLA garantizado",
      "Seguridad perimetral, Firewalls personalizados y VPNs corporativas",
      "Diseño e instalación de cableado estructurado bajo normas internacionales",
      "Mantenimiento preventivo e inventario de activos TI"
    ],
    cta: "Saber de Soporte TI",
    basePriceUSD: 250,
    unitLabel: "mensual (abono corporativo)",
    icon: "Network"
  },
  {
    id: "ads",
    title: "Ads & Adquisición",
    badge: "Marketing de Performance",
    shortDesc: "Estrategias de pauta digital y adquisición segmentada para multiplicar tus clientes corporativos.",
    fullDesc: "Dejamos atrás los likes de vanidad para enfocarnos en leads calificados. Diseñamos embudos de captación de clientes de alto rendimiento en Google Ads, LinkedIn y plataformas sociales clave, midiendo el Retorno de Inversión (ROI) de cada Guaraní invertido.",
    features: [
      "Campañas B2B de alta conversión en Google e industrias clave",
      "Estudio de palabras clave transaccionales para Paraguay",
      "Diseño de Landing Pages orientadas puramente a conversión",
      "Reportes ejecutivos semanales de costo por lead adquirido"
    ],
    cta: "Estructurar Embudo Ads",
    basePriceUSD: 300,
    unitLabel: "de inversión sugerida",
    icon: "TrendingUp"
  },
  {
    id: "hosting",
    title: "Hosting & Cloud VPS",
    badge: "Nube de Alta Velocidad",
    shortDesc: "Tu plataforma web, rápida, segura y siempre disponible con soporte técnico local de guardia.",
    fullDesc: "Servidores en la nube optimizados para Paraguay y la región con uptime garantizado del 99.9%. Olvídate de caídas en horas pico. Incluimos copias de seguridad automáticas permanentes, certificados SSL gratuitos e infraestructura de latencia ultra-baja.",
    features: [
      "Servidores VPS escalables e infraestructuras Dockerizadas",
      "Panel de administración ágil independiente",
      "Copias de seguridad diarias automatizadas fuera del sitio",
      "Soporte técnico real de guardia 24/7/365 en WhatsApp"
    ],
    cta: "Cotizar Hosting Cloud",
    basePriceUSD: 15,
    unitLabel: "mensual (servidor dedicado o compartido)",
    icon: "Cloud"
  }
];

export const COPY_DECK: CopySnippet[] = [
  {
    section: "Header / Menú Superior",
    label: "Navegación Limpia",
    content: "Enlaces: Inicio | Soluciones TI | El Enfoque Cloud | Área de Clientes | Solicitar Asesoría (Botón CTA)",
    explanation: "Elimina el menú hamburguesa que ocultaba los servicios clave. Muestra de forma inmediata las opciones para incrementar la confianza e integra el Área de Clientes, reforzando que no es un sitio en construcción perpetuo."
  },
  {
    section: "Hero Section",
    label: "Titular Principal (H1)",
    content: "Tu infraestructura tecnológica e información corporativa, escalables y seguras en la nube.",
    explanation: "Evoluciona el eslogan original 'Tu informática en las nubes' hacia una propuesta de valor enfocada en negocio: escalabilidad, seguridad e infraestructura bajo control operativo."
  },
  {
    section: "Hero Section",
    label: "Subtítulo de Soporte (H2)",
    content: "En Probit diseñamos soluciones de software a medida, soporte de infraestructura TI presencial, pauta digital inteligente y alojamiento cloud premium para llevar el rendimiento de tu empresa al siguiente nivel.",
    explanation: "Escribe de forma amena los cuatro pilares (software, soporte/infraestructura, ads, hosting) estructurados en prosa en vez de una aburrida lista con viñetas, mejorando el SEO y la asimilación del lector inicial."
  },
  {
    section: "Hero Section",
    label: "Botón de Acción Principal (CTA)",
    content: "Agendar una Consultoría Gratuita hoy mismo",
    explanation: "Apela al compromiso de la empresa. Ofrecer una primera aproximación de diagnóstico sin costo reduce fricción y genera prospectos de alto valor."
  },
  {
    section: "Sección 3: Enfoque Cloud",
    label: "Texto de Diferenciamiento",
    content: "Unificamos el poder de la nube con la seguridad en tierra firme de tu empresa.\nEn el ecosistema empresarial B2B actual, el término 'en la nube' no puede ser solo un lema abstracto. Significa que tu negocio no frena si un servidor local falla, que tus colaboradores acceden a las aplicaciones empresariales desde cualquier rincón de Paraguay con absoluta confidencialidad, y que tus bases de datos están redundadas geográficamente contra cualquier eventualidad cibernética. En Probit construimos esa red invisible que protege cada transacción, almacenamiento e interacción de tu corporativo.",
    explanation: "Explica a nivel pragmático qué significa el concepto de 'nube' para Probit y el cliente corporativo, construyendo autoridad técnica sincera y confiable."
  },
  {
    section: "Sección 4: Conversión Final",
    label: "Título de Llamado a la Acción",
    content: "¿Listo para transformar el rendimiento tecnológico de tu organización?",
    explanation: "Reemplaza el pasivo e informal 'No pierdes nada en aguardarnos' de la antigua web, por una invitación asertiva a iniciar la optimización técnica hoy."
  },
  {
    section: "Sección 4: Conversión Final",
    label: "Texto de Garantía y Confianza",
    content: "Sin demoras recurrentes ni tecnicismos confusos. Estudiamos tu caso y te brindamos una cotización corporativa formal en menos de 48 horas laborales.",
    explanation: "Establece plazos y transmite profesionalismo alejado del cansino ritmo informal que aleja a los directores de TI paraguayos."
  }
];

export const ANIMATION_RECOMMENDATIONS = [
  {
    title: "Carga Progresiva del Hero (Fade-In Staggered)",
    desc: "Los elementos del Hero (Navbar, Título, Subtítulo, Botones) deben ingresar con un retardo escalonado de 0.15 segundos mediante opacidad y traslación vertical sutil (15px). Esto evita un salto visual y retiene la atención del cliente corporativo desde el primer milisegundo de entrada."
  },
  {
    title: "Hover Tridimensional en Tarjetas de Soluciones",
    desc: "Al posicionar el ratón sobre cualquiera de las 4 tarjetas principales de servicio, el contenedor debe elevarse sutilmente sobre el eje Y (-6px) con una sombra difuminada y un borde que cambie progresivamente de gris neutro hacia el Celeste Sky (#0284C7). El icono interno debe rotar ligeramente o amplificarse en un 5% de escala para otorgar interactividad física estimulante."
  },
  {
    title: "Micro-interacciones en Botones (Magnetic Feedback)",
    desc: "Los botones de llamado a la acción (CTA) deben expandirse levemente al pasar el ratón (scale: 1.02) y modificar su tono del ámbar de acento al dorado profundo en una transición fluida de 250ms, brindando al dedo (en móvil) o al cursor (en escritorio) una respuesta clara de que el objeto es accionable."
  }
];
