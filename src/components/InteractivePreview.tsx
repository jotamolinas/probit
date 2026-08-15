import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ServiceItem } from "../data/proposalData";

const CORE_SOLUTIONS: ServiceItem[] = [
  {
    id: "software",
    title: "Desarrollo de Software",
    badge: "Soluciones a Medida",
    shortDesc: "Creación de soluciones digitales a tu medida. Diseñamos y desarrollamos software, aplicaciones y sistemas web optimizados para automatizar procesos, mejorar la productividad y escalar tu empresa.",
    fullDesc: "Creación de soluciones digitales a tu medida. Diseñamos y desarrollamos software, aplicaciones y sistemas web optimizados para automatizar procesos, mejorar la productividad y escalar tu empresa.",
    features: [],
    cta: "Cotizar servicio",
    basePriceUSD: 0,
    unitLabel: "",
    icon: "Code"
  },
  {
    id: "infraestructura",
    title: "Infraestructura TI",
    badge: "Seguridad y Redes",
    shortDesc: "Bases tecnológicas sólidas, seguras y eficientes. Montamos, optimizamos y gestionamos tu red e infraestructura informática para garantizar que tu operación nunca se detenga.",
    fullDesc: "Bases tecnológicas sólidas, seguras y eficientes. Montamos, optimizamos y gestionamos tu red e infraestructura informática para garantizar que tu operación nunca se detenga.",
    features: [],
    cta: "Cotizar servicio",
    basePriceUSD: 0,
    unitLabel: "",
    icon: "Network"
  },
  {
    id: "ads",
    title: "Ads - Publicidad Digital",
    badge: "Captación B2B",
    shortDesc: "Estrategias para captar clientes e impulsar ventas. Diseñamos y gestionamos campañas publicitarias de alto impacto para conectar tu negocio con la audiencia correcta y maximizar tu retorno de inversión.",
    fullDesc: "Estrategias para captar clientes e impulsar ventas. Diseñamos y gestionamos campañas publicitarias de alto impacto para conectar tu negocio con la audiencia correcta y maximizar tu retorno de inversión.",
    features: [],
    cta: "Cotizar servicio",
    basePriceUSD: 0,
    unitLabel: "",
    icon: "TrendingUp"
  },
  {
    id: "hosting",
    title: "Hosting en la Nube",
    badge: "Alta Disponibilidad",
    shortDesc: "Velocidad, seguridad y disponibilidad total. Alojamos tus correos corporativos y sitios web en servidores en la nube de alto rendimiento, garantizando máxima velocidad de carga y respaldos continuos.",
    fullDesc: "Velocidad, seguridad y disponibilidad total. Alojamos tus correos corporativos y sitios web en servidores en la nube de alto rendimiento, garantizando máxima velocidad de carga y respaldos continuos.",
    features: [],
    cta: "Cotizar servicio",
    basePriceUSD: 0,
    unitLabel: "",
    icon: "Cloud"
  }
];

import { 
  Code, 
  Network, 
  TrendingUp, 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Send, 
  Laptop, 
  Activity, 
  ShieldCheck, 
  Shield,
  CloudRain, 
  Users,
  Server,
  Sparkles,
  Award,
  Lock,
  ExternalLink,
  MessageSquare,
  Building,
  Mail,
  User,
  Phone,
  Settings,
  Database,
  Cpu,
  RefreshCw,
  Sliders,
  DollarSign,
  Briefcase,
  Layers,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  CloudUpload,
  Headphones,
  X,
  HelpCircle,
  Zap,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Globe,
  Target,
  Eye,
  ArrowUp
} from "lucide-react";

// Paraguayan partner industries for the B2B infinite trust marquee
const TRUST_PARTNERS = [
  { name: "Fiber Flash", segment: "Hosting" },
  { name: "Industria Metalúrgica del Paraná", segment: "Hosting" },
  { name: "Estudio Creativo Lata Hu", segment: "Hosting" },
  { name: "Escribanía Martínez Varela", segment: "Hosting" },
  { name: "Rotasul Agro", segment: "Hosting" },
  { name: "Royal Paraguay", segment: "Hosting" },
  { name: "Hospital Santa Rosa", segment: "Hosting" },
  { name: "Hospital Sanatorio Central", segment: "Infraestructura TI - Hosting" },
  { name: "Punto Farma", segment: "Infraestructura TI" }
];

// Rich side-by-side explanations designed to convert "the beginner to the expert"
const SIMPLE_EXPLANATIONS: Record<string, {
  pills: string[];
  metaTitle: string;
  simpleTitle: string;
  simpleBrief: string;
  simpleAnalogy: string;
  simpleBenefits: string[];
  advancedTitle: string;
  advancedSpecs: { label: string; value: string }[];
  advancedArchitecture: string;
  realCta: string;
  formInterestVal: string;
}> = {
  software: {
    pills: ["Sin Alquileres Cautivos", "100% Tuyo", "Adaptado a la SET", "Soporte 100% en Español"],
    metaTitle: "Desarrollo de Software",
    simpleTitle: "Creación de Soluciones Digitales a tu Medida.",
    simpleBrief: "Diseñamos y desarrollamos software, aplicaciones y sistemas web optimizados para automatizar procesos, mejorar la productividad y escalar tu empresa.",
    simpleAnalogy: "A diferencia de las soluciones genéricas enlatadas bajo suscripción perpetua, los desarrollos de software a medida de PROBIT garantizan la propiedad intelectual absoluta del código. Diseñamos con un alto estándar modular, facilitando integraciones locales directas con sistemas de facturación electrónica (SIFEN/SET), pasarelas de pago y ERPs preexistentes.",
    simpleBenefits: [
      "Propiedad absoluta del código: Su empresa adquiere un activo digital duradero sin cuotas de alquiler forzado.",
      "Flujo de trabajo optimizado: Eliminamos la fricción de planillas manuales automatizando procesos desde su PC o celular.",
      "Facturación legal nativa: Sistemas integrados y validados con los protocolos SIFEN locales de Paraguay."
    ],
    advancedTitle: "Especificaciones de Ingeniería y Código Limpio",
    advancedSpecs: [
      { label: "Frontend Stack", value: "React 18 / Next.js o Mobile Expo Pro" },
      { label: "Backend API", value: "NodeJS / NestJS o Fast-API Python" },
      { label: "Base de Datos", value: "PostgreSQL / MongoDB Enterprise" },
      { label: "Integraciones", value: "Bancard, PagoMóvil, Factura Electrónica SET" }
    ],
    advancedArchitecture: "Despliegues modulares en la nube utilizando contenedores Docker independientes que garantizan tolerancia a fallos, APIs REST/GraphQL documentadas y base de datos con alta redundancia.",
    realCta: "Cotizar Software a Medida",
    formInterestVal: "software-medida"
  },
  infraestructura: {
    pills: ["CCTV IP/A", "Soporte en Sitio", "Seguridad VPN", "Soporte 100% en Español"],
    metaTitle: "Infraestructura TI",
    simpleTitle: "Bases tecnológicas sólidas, seguras y eficientes.",
    simpleBrief: "Montamos, optimizamos y gestionamos tu red e infraestructura informática para garantizar que tu operación nunca se detenga.",
    simpleAnalogy: "La estabilidad técnica es crítica para la competitividad empresarial. Proveemos un esquema activo de mantenimiento preventivo y reactivo: desde la correcta diagramación de cableado estructurado hasta la configuración avanzada de túneles VPN encriptados, asegurando que su equipo humano opere siempre en un ambiente rápido, seguro y libre de interrupciones.",
    simpleBenefits: [
      "Continuidad operativa garantizada: Respuesta técnica in situ o remota ágil ante cualquier contingencia de la red.",
      "Optimización de conectividad: Configuración profesional de enrutamiento para asegurar enlaces estables y continuos.",
      "Mitigación de riesgos de seguridad: Blindaje y políticas activas de firewall para salvaguardar sus datos corporativos."
    ],
    advancedTitle: "Estructuración de Redes y Ciberseguridad TI",
    advancedSpecs: [
      { label: "Cableado", value: "Estructurado Cat6A o Enlaces de Fibra Óptica" },
      { label: "Security", value: "Sistemas Firewall Fortinet / pfSense Dedicados" },
      { label: "VPNs", value: "Túneles Encriptados IPSec / WireGuard Activos" },
      { label: "Monitoreo", value: "Control proactivo 24/7/365 de estado y latencia" }
    ],
    advancedArchitecture: "Segmentación lógica de subredes V-LAN, balanceo activo de proveedores de enlace (SD-WAN / Failover instantáneo) y auditorías de seguridad perimetral para aislar servidores de archivos corporativos.",
    realCta: "Solicitar Servicio TI",
    formInterestVal: "soporte-ti"
  },
  ads: {
    pills: ["Retorno Real-ROI", "Google Ads Líder", "Enfocado en Ventas", "Soporte 100% en Español"],
    metaTitle: "Ads (Publicidad Digital)",
    simpleTitle: "Estrategias para captar clientes e impulsar ventas.",
    simpleBrief: "Diseñamos y gestionamos campañas publicitarias de alto impacto para conectar tu negocio con la audiencia correcta y maximizar tu retorno de inversión.",
    simpleAnalogy: "Nuestra metodología se desmarca de la publicidad basada en vanidad o posicionamiento blando. Nos enfocamos estrictamente en el Retorno de Inversión (ROI) y el Partner Growth. Usamos herramientas de medición avanzada server-side para rastrear con exactitud la calidad de cada consulta, optimizando las inversiones en Google Ads, LinkedIn y Meta Ads.",
    simpleBenefits: [
      "Inversión de alta rentabilidad: Trazabilidad completa de punta a punta, sabiendo qué anuncios traen clientes reales.",
      "Funnel sin fricciones: Landing pages optimizadas para maximizar el flujo de contactos por WhatsApp o formularios.",
      "Público objetivo corporativo: Segmentación quirúrgica dirigida exclusivamente a directivos y clientes potenciales."
    ],
    advancedTitle: "Estrategia de Performance y Tráfico Calificado",
    advancedSpecs: [
      { label: "Canales", value: "Google Ads, LinkedIn Ads, FB/IG Meta Ads" },
      { label: "Métricas", value: "CPA (Costo de Adquisición), CTR, LTV de Clientes" },
      { label: "Conversión", value: "Landing Pages de Alta Velocidad A/B Testeadas" },
      { label: "Medición", value: "GTM (Tag Manager) con Atribución Avanzada" }
    ],
    advancedArchitecture: "Seguimiento limpio de conversiones (Server-Side Tracking), automatización de pujas inteligentes basadas en valor real de leads y funnel integrado para captación corporativa B2B de alta intención.",
    realCta: "Estructurar Embudo Ads",
    formInterestVal: "marketing"
  },
  hosting: {
    pills: ["99.98% Garantizado", "Soporte WhatsApp", "Datacenter Seguro", "Soporte 100% en Español"],
    metaTitle: "Hosting en la Nube",
    simpleTitle: "Velocidad, seguridad y disponibilidad total.",
    simpleBrief: "Alojamos tus correos corporativos y sitios web en servidores en la nube de alto rendimiento, garantizando máxima velocidad de carga y respaldos continuos.",
    simpleAnalogy: "Alojamos sus datos críticos sobre servidores privados virtuales (VPS) equipados con procesadores de gama corporativa AMD EPYC™ y discos rápidos NVMe. Esta arquitectura garantiza una latencia menor a 15ms en todo el territorio de Paraguay, copias de seguridad automáticas programadas cada 24 horas fuera del sitio principal, y atención directa de ingenieros de guardia.",
    simpleBenefits: [
      "Soporte de ingeniería directa: Comunicación fluida por WhatsApp con ingenieros calificados en español.",
      "Velocidad de carga líder: Tiempos mínimos de respuesta que favorecen el SEO y la satisfacción del usuario.",
      "Seguridad y redundancia: Backups diarios con protocolos automáticos para garantizar el resguardo permanente."
    ],
    advancedTitle: "Arquitectura Cloud VPS e Infraestructura Dedicada",
    advancedSpecs: [
      { label: "Procesadores", value: "AMD EPYC™ de Nivel Enterprise" },
      { label: "Almacenamiento", value: "Discos de Estado Sólido NVMe de Lectura Rápida" },
      { label: "Entorno", value: "Contenedores Dockerizados con Nginx Inverso" },
      { label: "Seguridad", value: "Mitigación DDoS Activa y Certificados SSL Gratis" }
    ],
    advancedArchitecture: "Entorno óptimo con balanceo de carga, aislamiento total de recursos por usuario a nivel de filesystem, protección activa contra ataques de fuerza bruta y latencia promedio menor a 15ms local en territorio paraguayo.",
    realCta: "Ver Planes de Hosting",
    formInterestVal: "hosting-cloud"
  }
};

const HOSTING_PLANS_DATA = [
  {
    tier: "Sencillo I",
    type: "sencillo",
    storage: "5 Gb",
    features: [
      { text: "Espacio en la nube: 5Gb", icon: CloudUpload },
      { text: "Cuentas de email: 9", icon: Mail },
      { text: "Certificado SSL gratis", icon: Lock },
      { text: "Webmail Roundcube", icon: Server },
      { text: "Atención al Cliente", icon: Headphones }
    ],
    priceMonthly: "110.000 Gs.",
    discountPercent: "20%",
    priceYearly: "1.056.000 Gs.",
    savings: "264.000 Gs"
  },
  {
    tier: "Sencillo II",
    type: "sencillo",
    storage: "15 Gb",
    features: [
      { text: "Espacio en la nube: 15Gb", icon: CloudUpload },
      { text: "Cuentas de email: 15", icon: Mail },
      { text: "Certificado SSL gratis", icon: Lock },
      { text: "Webmail Roundcube", icon: Server },
      { text: "Atención al Cliente", icon: Headphones }
    ],
    priceMonthly: "135.000 Gs.",
    discountPercent: "20%",
    priceYearly: "1.296.000 Gs.",
    savings: "324.000 Gs"
  },
  {
    tier: "Sencillo III",
    type: "sencillo",
    storage: "22 Gb",
    features: [
      { text: "Espacio en la nube: 22Gb", icon: CloudUpload },
      { text: "Cuentas de email: 20", icon: Mail },
      { text: "Certificado SSL gratis", icon: Lock },
      { text: "Webmail Roundcube", icon: Server },
      { text: "Atención al Cliente", icon: Headphones }
    ],
    priceMonthly: "155.000 Gs.",
    discountPercent: "20%",
    priceYearly: "1.488.000 Gs.",
    savings: "372.000 Gs"
  },
  {
    tier: "Premium I",
    type: "premium",
    storage: "50 Gb",
    features: [
      { text: "Espacio en la nube: 50Gb", icon: CloudUpload },
      { text: "Cuentas de email: 35", icon: Mail },
      { text: "Certificado SSL gratis", icon: Lock },
      { text: "Webmail Roundcube", icon: Server },
      { text: "Atención al Cliente", icon: Headphones }
    ],
    priceMonthly: "285.000 Gs.",
    discountPercent: "20%",
    priceYearly: "2.736.000 Gs.",
    savings: "684.000 Gs"
  },
  {
    tier: "Premium II",
    type: "premium",
    storage: "100 Gb",
    features: [
      { text: "Espacio en la nube: 100Gb", icon: CloudUpload },
      { text: "Cuentas de email: 45", icon: Mail },
      { text: "Certificado SSL gratis", icon: Lock },
      { text: "Webmail Roundcube", icon: Server },
      { text: "Atención al Cliente", icon: Headphones }
    ],
    priceMonthly: "350.000 Gs.",
    discountPercent: "20%",
    priceYearly: "3.360.000 Gs.",
    savings: "840.000 Gs"
  },
  {
    tier: "Premium III",
    type: "premium",
    storage: "200 Gb",
    features: [
      { text: "Espacio en la nube: 200Gb", icon: CloudUpload },
      { text: "Cuentas de email: Ilimitado", icon: Mail },
      { text: "Certificado SSL gratis", icon: Lock },
      { text: "Webmail Roundcube", icon: Server },
      { text: "Atención al Cliente", icon: Headphones }
    ],
    priceMonthly: "450.000 Gs.",
    discountPercent: "20%",
    priceYearly: "4.320.000 Gs.",
    savings: "1.080.000 Gs"
  }
];

const SERVICE_VISUALS = [
  {
    id: "software",
    title: "Desarrollo de Software a Medida",
    desc: "Creamos herramientas tecnológicas que se adaptan exactamente al flujo de tu negocio en Paraguay, sin licencias cautivas obligatorias y 100% de tu propiedad.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    badge: "Código Propio • 100% Tuyo",
    pills: ["Sistemas Web ERP", "Apps de Celular", "Factura SET SIFEN"]
  },
  {
    id: "infraestructura",
    title: "Soporte TI & Redes de Datos Estables",
    desc: "Garantizamos el funcionamiento impecable de tu internet y terminales. Soporte HELP-DESK ultra-rápido presencial o remoto y ciberseguridad a prueba de fallos.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    badge: "SLA Dedicado • Cero Cortes",
    pills: ["Soporte Técnico de Guardia", "Firewalls Perimetrales", "VPNs Seguras"]
  },
  {
    id: "ads",
    title: "Ads de Performance & Captación ROI",
    desc: "Multiplicamos tus contactos reales. Atraemos tomadores de decisión corporativos directamente a tu WhatsApp o central comercial sin malgastar presupuesto.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    badge: "Conversión Real con Retorno",
    pills: ["Google Ads Corporativo", "Funnel de Leads", "WhatsApp Saturado"]
  },
  {
    id: "hosting",
    title: "Hosting & Cloud VPS Corporativo",
    desc: "El hogar digital más rápido, potente y seguro del país. Copias de seguridad automáticas diarias y soporte de ingenieros en español por WhatsApp.",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
    badge: "Uptime 99.98% • Discos NVMe",
    pills: ["Respaldos Nocturnos fuera de sitio", "VPS Dedicado", "Latencia Ultra-Baja"]
  }
];

const PORTFOLIO_CASES = [
  {
    id: "aginmobiliaria",
    title: "AG Inmobiliaria",
    url: "https://aginmobiliaria.com.py/",
    displayUrl: "aginmobiliaria.com.py",
    badge: "Plataforma Real Estate • En Producción",
    desc: "Plataforma inmobiliaria de alta velocidad optimizada para SEO local. Incluye motores de búsqueda avanzados, compresión automatizada de imágenes en formato WebP y flujos directos de conversión rápida hacia asesores comerciales vía WhatsApp.",
    techs: ["Next.js", "SEO Local", "WebP", "WhatsApp API"],
    b2bSpecs: ["Infraestructura Cloud", "Almacenamiento Optimizado", "Red de Alta Disponibilidad"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    mockupType: "laptop-frame"
  },
  {
    id: "ihara",
    title: "Ihara Outsourcing",
    url: "https://www.iharaoutsourcing.com/",
    displayUrl: "www.iharaoutsourcing.com",
    badge: "B2B Lead Funnel • Core Web Vitals 100/100",
    desc: "Portal corporativo premium enfocado en consultoría B2B y expansión empresarial. Interfaz ultra-minimalista diseñada para maximizar la velocidad de carga (Core Web Vitals 100/100), con un fondo tridimensional interactivo de nodos y baja fricción de captura.",
    techs: ["React 3D", "Tailwind CSS", "Ultra-Rápido", "B2B Lead"],
    b2bSpecs: ["Acceso a Portal Seguro", "Flujo de Datos Empresarial", "Infraestructura Escalable"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    mockupType: "laptop-frame"
  },
  {
    id: "coffee-expedition",
    title: "Coffee Expedition",
    url: "https://coffee-expedition-es-pt-788586066471.asia-east1.run.app/#planes",
    displayUrl: "coffee-expedition-es-pt-788586066471.asia-east1.run.app",
    badge: "E-Commerce Inmersivo • Multi-Idioma",
    desc: "Aplicación web internacional e interactiva para la gestión de suscripciones de café de especialidad. Cuenta con una arquitectura multi-idioma (Español/Portugués), diseño inmersivo y paneles dinámicos de selección de planes comerciales.",
    techs: ["Multi-Idioma", "Framer Motion", "Suscripciones", "Coffee Premium"],
    b2bSpecs: ["Suscripciones SaaS Seguras", "Pasarela de Pagos Segura", "Soporte para Alto Tráfico"],
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    mockupType: "laptop-frame"
  },
  {
    id: "monkey-usd",
    title: "Monkey Business - Growth Partner",
    url: "https://monkey-business-oficial.ai.studio/",
    displayUrl: "monkey-business-oficial.ai.studio",
    badge: "Partner Growth • Alianzas B2B",
    desc: "Plataforma web de última generación enfocada en la aceleración, gestión y crecimiento estratégico de socios comerciales (Partner Growth). Desarrollada con una interfaz minimalista de alta fidelidad, herramientas avanzadas de analítica de rendimiento para partners, micro-interacciones fluidas y una arquitectura de conversión optimizada para alianzas B2B.",
    techs: ["Partner Growth", "B2B Alianzas", "High-Fidelity UI", "Analytics Dashboard"],
    b2bSpecs: ["Capa de Integración B2B", "Escudo de Ciberseguridad", "Optimización Analítica Core"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    mockupType: "laptop-frame"
  }
];


// Interactive 3D Connected Particles/Nodes Sphere Canvas (Pure HTML5 Canvas)
function Canvas3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationId: number;
    let width = canvas.width = containerRef.current?.offsetWidth || window.innerWidth;
    let height = canvas.height = containerRef.current?.offsetHeight || 600;
    
    // Resize handler
    const handleResize = () => {
      if (canvas && containerRef.current) {
        width = canvas.width = containerRef.current.offsetWidth;
        height = canvas.height = containerRef.current.offsetHeight;
      }
    };
    window.addEventListener("resize", handleResize);
    
    // Generate particles
    const isMobile = window.innerWidth < 768;
    const numParticles = isMobile ? 65 : 140;
    const particlesList: { x: number; y: number; z: number; color: string }[] = [];
    const sphereRadius = Math.min(width, height) * (isMobile ? 0.38 : 0.33);
    
    const colors = [
      "rgba(6, 182, 212,",  // Cyan-500
      "rgba(37, 99, 235,",  // Blue-600
      "rgba(45, 212, 191,"   // Teal-400
    ];
    
    for (let i = 0; i < numParticles; i++) {
      // Fibonacci sphere distribution for uniform points
      const phi = Math.acos(1 - 2 * (i + 0.5) / numParticles);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = sphereRadius;
      
      const pColor = colors[i % colors.length];
      
      particlesList.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        color: pColor
      });
    }
    
    // Mouse tracking variables with lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        targetX = (e.clientX - cx) * 0.001;
        targetY = (e.clientY - cy) * 0.001;
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    let autoY = 0;
    let autoX = 0;
    
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Interpolate mouse rotations using smooth lerping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;
      
      autoY += 0.0012;
      autoX += 0.0006;
      
      const angleY = autoY + mouseX;
      const angleX = autoX + mouseY;
      
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      
      // Project points
      const projected: { x: number; y: number; z: number; color: string; px: number; py: number }[] = [];
      const centerX = width / 2;
      const centerY = height / 2;
      const perspective = 400;
      
      for (let i = 0; i < numParticles; i++) {
        const p = particlesList[i];
        
        // Rotate around Y axis
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.x * sinY + p.z * cosY;
        
        // Rotate around X axis
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = p.y * sinX + z1 * cosX;
        
        // 3D projection
        const scale = perspective / (perspective + z2);
        const px = centerX + x1 * scale;
        const py = centerY + y2 * scale;
        
        projected.push({
          x: x1,
          y: y2,
          z: z2,
          color: p.color,
          px,
          py
        });
      }
      
      // Draw lines between nearby points
      ctx.lineWidth = 0.5;
      for (let i = 0; i < numParticles; i++) {
        const p1 = projected[i];
        
        // Check local neighbors to form structural mesh nodes
        const checkLimit = isMobile ? 3 : 7;
        for (let j = i + 1; j < Math.min(i + checkLimit, numParticles); j++) {
          const p2 = projected[j];
          
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
          
          if (dist < sphereRadius * 0.45) {
            // Opacity based on depth and distance
            const avgZ = (p1.z + p2.z) / 2;
            const depthAlpha = (sphereRadius - avgZ) / (2 * sphereRadius); // 0 to 1
            const distAlpha = 1 - (dist / (sphereRadius * 0.45));
            const opacity = Math.max(0, Math.min(0.32, depthAlpha * distAlpha * 0.28));
            
            if (opacity > 0.01) {
              ctx.strokeStyle = `rgba(147, 197, 253, ${opacity})`; 
              ctx.beginPath();
              ctx.moveTo(p1.px, p1.py);
              ctx.lineTo(p2.px, p2.py);
              ctx.stroke();
            }
          }
        }
      }
      
      // Draw particles
      for (let i = 0; i < numParticles; i++) {
        const p = projected[i];
        const depthAlpha = (sphereRadius - p.z) / (2 * sphereRadius); // 0 to 1
        const opacity = Math.max(0.12, Math.min(0.65, depthAlpha * 0.55));
        const size = Math.max(1.1, Math.min(3.2, depthAlpha * 2.2 + 1));
        
        ctx.fillStyle = p.color + `${opacity})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Ambient soft glow around the nearest nodes
        if (depthAlpha > 0.65) {
          ctx.fillStyle = p.color + `${opacity * 0.22})`;
          ctx.beginPath();
          ctx.arc(p.px, p.py, size * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      animationId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full block opacity-75 " />
    </div>
  );
}

/**
 * =========================================================================
 * PROBIT - PRODUCTION METADATA & SEO/SEM PERFORMANCE OPTIMIZATION
 * =========================================================================
 * 
 * 🎯 REDESIGN & META-OPTIMIZATIONS SUMMARY:
 * -------------------------------------------------------------------------
 * <title>PROBIT | Desarrollo de Software & Hosting Corporativo Paraguay</title>
 * <meta name="description" content="PROBIT — Tu informática en las nubes. Expertos en Desarrollo de Software a medida, Infraestructura TI robusta, Hosting corporativo premium y Partner Growth en Paraguay. Logra 100/100 Core Web Vitals hoy." />
 * 
 * 📈 QUALITY SCORE SEM / ADWORDS TARGET KEYWORDS:
 * -------------------------------------------------------------------------
 * - "Desarrollo de Software a medida" -> Alta relevancia en Hero & Core Pillars
 * - "Hosting corporativo" -> Enfoque e infraestructura local optimizada paraguaya
 * - "Infraestructura TI" -> Arquitectura unificada B2B con soporte presencial
 * - "Partner Growth" -> Conversión directa sin fricciones (Swipe-to-Action)
 * 
 * ⚡ GOOGLE CORE WEB VITALS OPTIMIZATION:
 * -------------------------------------------------------------------------
 * - Decodificación asíncrona ("decoding=async") en todas las imágenes
 * - Carga diferida ("loading=lazy") para componentes fuera de la pantalla
 * - Reducción de TLS de DNS y DNS local con redundancia del NIC.py
 * =========================================================================
 */


const PILL_DEFINITIONS: Record<string, string> = {
  "Sin Alquileres Cautivos": "No pagas licencias mensuales por el software; es tuyo una vez desarrollado.",
  "100% Tuyo": "El código fuente y la propiedad intelectual te pertenecen por completo.",
  "Adaptado a la SET": "Diseñado para integrarse perfectamente con las normativas y SIFEN de la DNIT/SET en Paraguay.",
  "SLA Certificado": "Acuerdos de Nivel de Servicio que garantizan contractualmente el tiempo de respuesta y disponibilidad.",
  "Soporte en Sitio": "Presencia técnica física en tus oficinas para resolución de problemas críticos de hardware o red.",
  "Seguridad VPN": "Túneles encriptados que permiten a tus colaboradores acceder a la red de la empresa de forma segura desde cualquier lugar.",
  "Retorno Real-ROI": "Nos enfocamos en generar ingresos medibles, superando la inversión publicitaria inicial.",
  "Google Ads Líder": "Campañas de alto rendimiento en el principal motor de búsqueda para captar clientes con intención de compra.",
  "Enfocado en Ventas": "Toda la estrategia digital se alinea exclusivamente para generar oportunidades comerciales o ventas directas.",
  "99.98% Garantizado": "Uptime (tiempo en línea) garantizado casi total, tu sitio o sistema nunca se cae.",
  "Soporte WhatsApp": "Contacto directo y rápido con ingenieros de soporte a través de WhatsApp, sin tickets lentos.",
  "Datacenter Seguro": "Servidores alojados en centros de datos con seguridad física y digital de grado militar."
};

export default function InteractivePreview() {
  // Navigation active indicators
  const [activeNav, setActiveNav] = useState<string>("inicio");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Swipe to action mobile states
  const [swipeKey, setSwipeKey] = useState<number>(0);
  const [isSwipingCompleted, setIsSwipingCompleted] = useState<boolean>(false);
  
  const handleSwipeEnd = (event: any, info: any) => {
    if (info.offset.x > 150) {
      setIsSwipingCompleted(true);
      // Clean, seamless transition to conversion stage
      const el = document.getElementById("conversion-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setTimeout(() => {
        setIsSwipingCompleted(false);
        setSwipeKey(prev => prev + 1);
      }, 2000);
    }
  };

  // Selected Card detail toggle for the 4 pillars
  const [selectedSolution, setSelectedSolution] = useState<string | null>("software");

  // Synchronized active slide index for our luxury service visual carousel
  const [visualSlideIdx, setVisualSlideIdx] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // States & Refs for the premium Solutions-Section Portfolio Casos de Éxito
  const [activeSolutionsSlide, setActiveSolutionsSlide] = useState<number>(0);
  const solutionsCarouselScrollRef = useRef<HTMLDivElement>(null);

  const handleSolutionsScroll = () => {
    if (solutionsCarouselScrollRef.current) {
      const { scrollLeft, clientWidth } = solutionsCarouselScrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      if (index !== activeSolutionsSlide) {
        setActiveSolutionsSlide(index);
      }
    }
  };

  const handleSolutionsScrollPrev = () => {
    if (solutionsCarouselScrollRef.current) {
      solutionsCarouselScrollRef.current.scrollBy({ left: -solutionsCarouselScrollRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  const handleSolutionsScrollNext = () => {
    if (solutionsCarouselScrollRef.current) {
      solutionsCarouselScrollRef.current.scrollBy({ left: solutionsCarouselScrollRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  // Sync state changes from card-selection to active visual slide index
  useEffect(() => {
    if (selectedSolution) {
      const idx = SERVICE_VISUALS.findIndex(s => s.id === selectedSolution);
      if (idx !== -1) {
        setVisualSlideIdx(idx);
      }
    }
  }, [selectedSolution]);

  // Handle slide changes and sync selectedSolution back
  const handleSlideChange = (idx: number) => {
    setVisualSlideIdx(idx);
    setSelectedSolution(SERVICE_VISUALS[idx].id);
  };

  // Support swipe gesture natively for high-end mobile experience
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      const nextIdx = (visualSlideIdx + 1) % SERVICE_VISUALS.length;
      handleSlideChange(nextIdx);
    } else if (isRightSwipe) {
      const prevIdx = (visualSlideIdx - 1 + SERVICE_VISUALS.length) % SERVICE_VISUALS.length;
      handleSlideChange(prevIdx);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Detailed simple-to-advanced explanation modal active State
  const [activeExplainService, setActiveExplainService] = useState<string | null>(null);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [showHostingPlans, setShowHostingPlans] = useState(false);

  // Projects Custom URL and Diagnostic/Simulation modal state
  const [customProjectUrls, setCustomProjectUrls] = useState<Record<string, string>>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('probit_custom_project_urls');
        return saved ? JSON.parse(saved) : {};
      } catch (e) {
        return {};
      }
    }
    return {};
  });

  const [diagnosticProject, setDiagnosticProject] = useState<any | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveExplainService(null);
        setShowHostingPlans(false);
        setDiagnosticProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const updateProjectUrl = (id: string, url: string) => {
    const next = { ...customProjectUrls, [id]: url };
    setCustomProjectUrls(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem('probit_custom_project_urls', JSON.stringify(next));
    }
  };



  // Lead qualification form states
  const [name, setName] = useState<string>("");
      const [phone, setPhone] = useState<string>("");
  const [interest, setInterest] = useState<string>("software-medida");
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  // Swipe-to-Action state (custom gesture trigger)
  const [swipeTriggered, setSwipeTriggered] = useState<boolean>(false);
  const [swipeProgress, setSwipeProgress] = useState<number>(0); // 0 to 100%
  const dragHandleRef = useRef<HTMLDivElement>(null);
  const swipeTrackRef = useRef<HTMLDivElement>(null);

  // Form submit callback
  const handleFormSubmit = () => {
    // Generate the whatsapp link dynamically
    const text = encodeURIComponent(
      `*Formulario Corporativo y Requerimientos B2B*\n\n` +
      `*Nombre y Apellido:* ${name}\n` +
      
      `*Teléfono de Contacto:* ${phone || 'No especificado'}\n` +
      `*Interés:* ${interest}\n\n` +
      ""
    );
    window.open(`https://wa.me/595983440021?text=${text}`, '_blank');

    setSubmitSuccess(true);
    // Reset Form
    setTimeout(() => {
      setSubmitSuccess(false);
      setName("");
      setPhone("");
      setInterest("software");
      setSwipeTriggered(false);
      setSwipeProgress(0);
    }, 7000);
  };

  // Drag simulation / control for the Swipe handle
  const handleDrag = (event: any, info: any) => {
    if (swipeTriggered) return;
    const trackWidth = swipeTrackRef.current?.offsetWidth || 300;
    const handleWidth = 56; // Width of circular handle
    const maxDistance = trackWidth - handleWidth - 8; // Subtract padding
    const currentX = info.offset.x;
    const progress = Math.min(100, Math.max(0, (currentX / maxDistance) * 100));
    setSwipeProgress(progress);

    if (progress >= 95) {
      setSwipeTriggered(true);
      setSwipeProgress(100);
      handleFormSubmit();
    }
  };

  const handleDragEnd = () => {
    if (!swipeTriggered) {
      setSwipeProgress(0);
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-sans relative overflow-hidden selection:bg-blue-600/10 selection:text-blue-700" id="interactive-landing-root">
      
      {/* Schema.org JSON-LD Structured Data for Elite Google Indexation */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechCompany",
          "name": "PROBIT",
          "alternateName": "Probit Paraguay",
          "url": "https://probit.com.py",
          "logo": "https://probit.com.py/logo.png",
          "slogan": "Tu informática en las nubes",
          "description": "Proveedor líder de desarrollo de software a medida, hosting corporativo premium, consultoría de infraestructura TI y partners estratégicos de conversión digital en Paraguay.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Asunción",
            "addressCountry": "PY"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+595-983-440021",
            "contactType": "sales",
            "areaServed": "PY",
            "availableLanguage": ["Spanish", "Portuguese"]
          }
        })}
      </script>

      {/* 1. ESTÉTICA DE LUJO (FROSTED GLASS PREMIUM) - BACKGROUND GLOW BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-300/40 to-indigo-200/30 rounded-full blur-[130px] opacity-60 mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]"></div>
        <div className="absolute top-[40%] right-[5%] w-[500px] h-[500px] bg-gradient-to-br from-teal-200/40 to-blue-200/30 rounded-full blur-[120px] opacity-50 animate-[pulse_12s_ease-in-out_infinite_1s]"></div>
        <div className="absolute bottom-0 left-[-5%] w-[600px] h-[600px] bg-gradient-to-tr from-indigo-100/40 to-teal-100/40 rounded-full blur-[140px] opacity-70"></div>
      </div>

      {/* TOP DIRECT NAVIGATION BAR */}
      <header className="bg-white w-full py-4 px-6 md:px-12 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <img 
            src={"/logo.png"} 
            alt="PROBIT" 
            className="h-16 md:h-20 w-auto object-contain cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <div id="header-slogan" className="mt-2 sm:mt-0 sm:flex items-center">
            <span className="text-sm md:text-base font-black tracking-widest uppercase text-[#3b82f6] sm:border-l-2 sm:border-slate-300 sm:pl-4 drop-shadow-sm">
              Tu informática en las nubes
            </span>
          </div>
        </div>
      </header>

      {/* HERO SECTION - REDISEÑO DE VANGUARDIA */}
      <section className="relative pt-24 md:pt-32 pb-24 bg-[#020617] text-white drop-shadow-sm overflow-hidden" id="inicio-section">
        
        {/* Deep Space Gradient Background */}
        
        {/* Modern Tech Angular Cut */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] md:h-[60px]">
            <polygon points="1200,0 0,0 0,120" fill="#ffffff"></polygon>
          </svg>
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(17,24,39,1),rgba(3,7,18,1))] overflow-hidden">
          
          {/* Canvas3D - Partículas 3D flotantes */}
          <div className="absolute inset-0 opacity-15">
            <Canvas3D />
          </div>
          
          {/* Neon Orbs */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#06b6d4]/15 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[#4f46e5]/15 rounded-full blur-[120px] mix-blend-screen" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Column Left (Text in luxury Glassmorphic floating card) */}
          <div className="lg:col-span-7 relative" id="hero-text-wrapper">
            <div className="space-y-7 text-left relative" id="hero-text-container">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-sm tracking-tight leading-[1.15]" id="hero-title-h1">
              Impulsamos tu negocio con tecnología sólida y estrategias que venden.
            </h1>

            {/* Explanatory paragraph rich in key SEM/AdWords search intents */}
            <p className="text-slate-350 text-sm sm:text-base leading-relaxed max-w-2xl mt-5" id="hero-desc-h2">
              Unificamos desarrollo de software, infraestructura TI, hosting en la nube y publicidad digital para llevar tu empresa al siguiente nivel.
            </p>

            {/* CTA controls with Responsive Dual Design (Tactile Swipe-to-Action for mobiles / Premium Click for Desktop) */}
            <div className="pt-2" id="hero-cta-wrapper">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5" id="hero-cta-desktop">
              
                <div className="relative group flex-1 sm:flex-none">
                  <div className="absolute -inset-0.5 bg-[#3b82f6] rounded-xl blur-md opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-[pulse_3.5s_ease-in-out_infinite]"></div>
                  <button
                    id="btn-hero-primary"
                    onClick={() => window.open(`https://wa.me/595983440021?text=${encodeURIComponent('Hola, quisiera agendar una asesoría corporativa gratuita con PROBIT.')}`, '_blank')}
                    className="relative w-full px-6 py-4 rounded-xl font-extrabold text-sm bg-[#3b82f6] text-white drop-shadow-sm hover:brightness-110 active:scale-[0.99] transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Agendar una asesoría</span>
                    <Sparkles className="w-4 h-4 text-blue-900 group-hover:rotate-12 transition-transform animate-pulse" />
                  </button>
                </div>
                
                <button
                  id="btn-hero-secondary"
                  onClick={() => document.getElementById("soluciones-section")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-6 py-4 rounded-xl font-bold text-sm border-2 border-[#3b82f6] text-white drop-shadow-sm hover:bg-[#3b82f6]/10 transition-all text-center flex items-center justify-center gap-2 cursor-pointer hover:shadow-md backdrop-blur-md"
                >
                  <span>Ver nuestros servicios</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </button>
            </div>
          </div>

            {/* Local Trust Badges */}
                        {/* Local Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-[11px] sm:text-xs text-slate-300 font-semibold" id="hero-trust-badges">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-[#3b82f6]/20 text-[#3b82f6] ">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span>+5 Años respaldando a empresas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-[#3b82f6]/20 text-[#3b82f6] ">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span>Atención y Soporte Local</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-[#3b82f6]/20 text-[#3b82f6] ">
                  <CheckCircle className="w-4 h-4" />
                </div>
                                                <span>Servicios Garantizados</span>
              </div>
            </div>
          </div>
        </div>
          {/* Column Right (HIGH-FIDELITY B2B INFRASTRUCTURE BLUEPRINT CARD) */}
          <div className="lg:col-span-5 relative" id="hero-graphic-panel">
            {/* Glassmorphic B2B Solutions Panel Card */}
            <div className="rounded-2xl p-6 space-y-4 text-slate-100 relative group transition-all duration-350" id="live-hardware-console">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-3" id="services-header-container">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="text-xs font-bold font-mono uppercase tracking-wider text-slate-200">Pilares de Negocios</span>
                </div>
              </div>

              {/* Services List Grid */}
              <div className="space-y-4">
                {CORE_SOLUTIONS.map((service) => {
                  const IconComponent = {
                    Code: Code,
                    Network: Network,
                    TrendingUp: TrendingUp,
                    Cloud: Cloud
                  }[service.icon as "Code" | "Network" | "TrendingUp" | "Cloud"] || Code;

                  const isActive = selectedSolution === service.id;

                  return (
                    <div
                      key={service.id}
                      onClick={() => {
                        setSelectedSolution(service.id);
                        setActiveExplainService(service.id);
                      }}
                      className={`p-4 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-between group/srv border ${
                        isActive
                          ? "bg-blue-600/20 border-blue-500/50 shadow-lg text-white drop-shadow-sm"
                          : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10 text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg transition-colors ${
                          isActive 
                             ? "bg-blue-600 text-white drop-shadow-sm shadow-md" 
                             : "bg-slate-900/80 text-slate-400 group-hover/srv:text-white drop-shadow-sm group-hover/srv:bg-slate-800"
                        }`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="text-left flex items-center">
                          <h4 className="text-sm font-black tracking-tight font-display text-white drop-shadow-sm m-0">
                            {service.title}
                          </h4>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`p-2 rounded-full transition-colors ${isActive ? "bg-blue-500/30" : "bg-white/5 group-hover/srv:bg-white/10"}`}>
                          <ArrowRight className={`w-4 h-4 transition-all ${isActive ? "text-white" : "text-slate-400 group-hover/srv:text-white drop-shadow-sm group-hover/srv:translate-x-0.5"}`} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* NUESTRA FILOSOFÍA SECTION */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative z-10" id="nuestra-filosofia-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-black text-slate-950 font-display mb-1">Nuestra Filosofía</h2>
            <p className="text-slate-600 leading-relaxed">Lo que somos y los principios que guían nuestras decisiones</p>
          </div>
          
          {/* ESENCIA - Top 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* TARJETA 1 (Misión) */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 border-t-4 border-t-blue-600 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <Target className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-black text-slate-950 font-display mb-3">Misión</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Brindar tranquilidad tecnológica a las empresas a través de soluciones robustas de infraestructura, hosting y desarrollo de software, asegurando que tu operación nunca se detenga y potenciando tu crecimiento sostenido.
              </p>
            </div>

            {/* TARJETA 2 (Visión) */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 border-t-4 border-t-blue-600 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <Eye className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-black text-slate-950 font-display mb-3">Visión</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Consolidarnos como el partner tecnológico de referencia en Paraguay, reconocidos por nuestra capacidad de respuesta inmediata, redundancia de servicios y ser el motor de tu transformación digital.
              </p>
            </div>

            {/* TARJETA 3 (Objetivos) */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 border-t-4 border-t-blue-600 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <Zap className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-black text-slate-950 font-display mb-3">Objetivos</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Garantizar disponibilidad absoluta mediante infraestructura robusta, desarrollar software a medida que elimine fricciones y actuar como tu socio tecnológico de confianza a largo plazo.
              </p>
            </div>
          </div>

          {/* VALORES - Bottom 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* TARJETA 1 (Redundancia) */}
            <div className="bg-slate-900/5 backdrop-blur-md border border-white/40 rounded-3xl p-6 flex flex-col items-center text-center transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
              <div className="bg-blue-50 p-3 rounded-full mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-black text-slate-950 mb-2">Redundancia</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No dejamos nada al azar. Sistemas con respaldos y guardias preparadas para cualquier contingencia.
              </p>
            </div>

            {/* TARJETA 2 (Proactividad) */}
            <div className="bg-slate-900/5 backdrop-blur-md border border-white/40 rounded-3xl p-6 flex flex-col items-center text-center transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
              <div className="bg-blue-50 p-3 rounded-full mb-4">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-black text-slate-950 mb-2">Proactividad</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nos anticipamos a los problemas antes de que afecten tu operación. Nos ocupamos para que tú descanses.
              </p>
            </div>

            {/* TARJETA 3 (Innovación) */}
            <div className="bg-slate-900/5 backdrop-blur-md border border-white/40 rounded-3xl p-6 flex flex-col items-center text-center transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
              <div className="bg-blue-50 p-3 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-black text-slate-950 mb-2">Innovación</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Desarrollamos tecnología pensando exclusivamente en el impacto positivo del negocio que confía en nosotros.
              </p>
            </div>

            {/* TARJETA 4 (Transparencia) */}
            <div className="bg-slate-900/5 backdrop-blur-md border border-white/40 rounded-3xl p-6 flex flex-col items-center text-center transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
              <div className="bg-blue-50 p-3 rounded-full mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-black text-slate-950 mb-2">Transparencia</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hablamos claro, cumplimos los acuerdos y nos ponemos la camiseta de cada empresa como socios de crecimiento.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CORE SOLUTIONS - BENTO GRID & MOUSE GLOW NEON */}
      <section className="py-24 bg-transparent relative z-10" id="soluciones-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2" id="soluciones-info-box">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 text-blue-700 border border-blue-150 px-3.5 py-1.5 rounded-full inline-block">
              Capacidades Modulares
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-display" id="sol-heading">
              Nuestros 4 Pilares de Infraestructura &amp; Innovación
            </h2>
            
            <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
              En Paraguay, las empresas requieren soluciones estables sin tecnicismos ambiguos. Selecciona un pilar operativo para desplegar la arquitectura recomendada.
            </p>
          </div>

          {/* Cards Grid List - Standard Bento Layout with Soft Hover Neon Shadows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="solutions-cards-grid">
            {CORE_SOLUTIONS.map((service: ServiceItem) => {
              const IconComp = {
                Code: Code,
                Network: Network,
                TrendingUp: TrendingUp,
                Cloud: Cloud
              }[service.icon as "Code" | "Network" | "TrendingUp" | "Cloud"] || Code;

              const isSelected = selectedSolution === service.id;

              return (
                <div 
                  key={service.id}
                  id={`srv-card-${service.id}`}
                  onClick={() => {
                    setSelectedSolution(service.id);
                    setActiveExplainService(service.id);
                  }}
                  className={`rounded-2xl p-6 transition-all duration-300 text-left cursor-pointer flex flex-col justify-between relative overflow-hidden group hover:scale-[1.015] border-2 bg-white/70 backdrop-blur-md ${
                    isSelected 
                       ? "border-[#3b82f6] bg-gradient-to-b from-blue-50/60 to-white/95 shadow-xl ring-2 ring-[#3b82f6]/10"
                       : "border-[#3b82f6]/25 hover:border-[#3b82f6] hover:shadow-lg hover:bg-white/90"
                  }`}
                >
                  {/* Subtle glowing light behind the hovered card */}
                  <div className="absolute -inset-1 bg-gradient-to-tr from-blue-200/0 via-blue-500/0 to-teal-200/0 group-hover:from-blue-500/5 group-hover:to-teal-500/5 transition-all duration-300 -z-10 rounded-2xl"></div>
                  
                  <div className="space-y-4 relative z-10">
                    {/* Icon & Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl transition-all ${
                        isSelected 
                           ? "bg-[#3b82f6] text-white drop-shadow-sm shadow-md shadow-[#3b82f6]/20"
                           : "bg-slate-100 text-slate-700 group-hover:bg-[#3b82f6]/10 group-hover:text-[#3b82f6]"
                      }`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="font-black text-slate-950 text-base font-display">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/40 flex items-center justify-between" id={`srv-footer-${service.id}`}>
                    <span className={`text-[11px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all ${
                      isSelected ? "text-[#3b82f6]" : "text-[#3b82f6]/70 group-hover:text-[#3b82f6]"
                    }`}>
                      <span>{service.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section Header: Mira Nuestros Trabajos */}
          <div className="pt-20 text-center max-w-3xl mx-auto space-y-4 animate-fade-in" id="portfolio-cases-header">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 text-blue-700 border border-blue-150 px-3.5 py-1.5 rounded-full inline-block">
              Proyectos Destacados
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-display">
              Mira Nuestros Trabajos
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Soluciones reales implementadas con velocidad, diseño premium y conversión garantizada.
            </p>
          </div>

          {/* Dynamic Casos de Éxito / Portafolio de Proyectos Carousel */}
          <div className="relative mt-10" id="portfolio-cases-container">
            {/* Left Desktop-Only Floating Arrow */}
            <button
              onClick={handleSolutionsScrollPrev}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full hidden md:flex items-center justify-center bg-white hover:bg-slate-950 hover:text-white drop-shadow-sm text-slate-800 border border-slate-200/80 shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer"
              title="Proyecto Anterior"
              id="portfolio-scroller-left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Desktop-Only Floating Arrow */}
            <button
              onClick={handleSolutionsScrollNext}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full hidden md:flex items-center justify-center bg-white hover:bg-slate-950 hover:text-white drop-shadow-sm text-slate-800 border border-slate-200/80 shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer"
              title="Siguiente Proyecto"
              id="portfolio-scroller-right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Carousel display area */}
            <div 
              ref={solutionsCarouselScrollRef}
              onScroll={handleSolutionsScroll}
              className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none w-full pb-4 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              id="solutions-portfolio-cards-loop"
            >
              {PORTFOLIO_CASES.map((project, idx) => (
                <div 
                  key={project.id}
                  className="w-full min-w-full flex-none snap-start p-1"
                >
                  <div className="frost-glass-heavy border border-white/80 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden group/case-card bg-white/70 backdrop-blur-xl hover:border-blue-250/60 transition-all">
                    
                    {/* Top indicator of active slide */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 font-mono">
                          Caso de Éxito Corporativo • Desliza en celular ⚡
                        </span>
                      </div>
                      
                      <span className="text-[11px] font-bold text-teal-700 bg-teal-50/70 border border-teal-100 px-3 py-1 rounded-full self-start font-mono">
                        {project.badge}
                      </span>
                    </div>

                    {/* Double grid split */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      
                      {/* Multimedia Mockup container (5 columns grid) */}
                      <div className="lg:col-span-5 relative">
                        {/* Laptop Mockup */}
                        <div className="relative mx-auto max-w-[320px] sm:max-w-[400px] w-full">
                          <div className="relative border-[4px] border-slate-900 rounded-t-2xl bg-slate-950 overflow-hidden shadow-2xl h-[180px] sm:h-[220px] lg:h-[240px]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent z-15 pointer-events-none transition-transform duration-1050 group-hover/case-card:translate-x-full"></div>
                            
                            <div className="overflow-hidden rounded-t-sm w-full h-full bg-slate-900 relative">
                              {project.url ? (
                                <div className="w-full h-full transition-transform duration-700 group-hover/case-card:scale-[1.05] origin-top">
                                  <iframe
                                    src={project.url}
                                    title={`Proyecto ${project.title}`}
                                    className="absolute top-0 left-0 pointer-events-none"
                                    style={{ 
                                      width: "300%", 
                                      height: "300%", 
                                      transform: "scale(0.333333)", 
                                      transformOrigin: "0 0",
                                      border: "none"
                                    }}
                                    scrolling="no"
                                    tabIndex={-1}
                                  />
                                </div>
                              ) : (
                                <img
                                  src={project.image}
                                  alt={`Proyecto ${project.title} - Desarrollo de Software y Hosting Corporativo en Paraguay | PROBIT`}
                                  referrerPolicy="no-referrer"
                                  loading="lazy"
                                  decoding="async"
                                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/case-card:scale-105"
                                />
                              )}
                            </div>
                            
                            <div className="absolute bottom-2.5 right-2.5 bg-emerald-500 text-slate-950 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1 z-10 animate-pulse">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping"></span>
                              <span>ONLINE • ACTIVO</span>
                            </div>
                          </div>
                          <div className="relative bg-slate-800 border-t border-slate-700 rounded-b-xl h-2.5 w-[112%] -left-[6%] shadow-lg"></div>
                          <div className="relative bg-slate-900/60 h-1 w-[24%] mx-auto rounded-b-md shadow-inner"></div>
                        </div>
                      </div>

                      {/* Info and action panel (7 columns grid) */}
                      <div className="lg:col-span-7 flex flex-col justify-between space-y-4 text-left">
                        <div className="space-y-4">
                          <span className="text-[10px] font-mono font-extrabold text-blue-600 block uppercase tracking-wider">
                            {customProjectUrls[project.id] ? customProjectUrls[project.id].replace(/^https?:\/\/(www\.)?/, "") : project.displayUrl}
                          </span>
                          <h3 className="font-black text-slate-950 text-2xl tracking-tight font-display">
                            {project.title}
                          </h3>
                          
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {project.desc}
                          </p>

                          {/* Tech Chips */}
                          <div className="flex flex-col gap-3.5 pt-1">
                            {project.b2bSpecs && (
                              <div className="flex flex-wrap gap-2">
                                {project.b2bSpecs.map((spec) => (
                                  <span key={spec} className="inline-flex items-center gap-1.5 text-[10px] font-extrabold font-mono text-blue-700 bg-blue-50/70 border border-blue-200/50 px-2.5 py-1 rounded-full shadow-sm">
                                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                                    {spec}
                                  </span>
                                ))}
                              </div>
                            )}

                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {project.techs.map((tech) => (
                                <span key={tech} className="text-[10px] font-semibold font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200/40">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* CTA buttons with micro-interactions */}
                        <div className="pt-2 relative z-30">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-slate-950 text-white drop-shadow-sm font-extrabold text-xs text-center transition-all cursor-pointer shadow-lg shadow-blue-500/15 items-center justify-center gap-2 group/btn hover:scale-[1.02] active:scale-[0.98] relative z-45"
                          >
                            <span>Visitar Sitio</span>
                            <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </a>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Under indicators (Slide Dots) */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-150/40 mt-2">
              <div className="flex items-center gap-2">
                {PORTFOLIO_CASES.map((proj, i) => (
                  <button
                    key={proj.id}
                    onClick={() => {
                      if (solutionsCarouselScrollRef.current) {
                        solutionsCarouselScrollRef.current.scrollTo({
                          left: i * solutionsCarouselScrollRef.current.clientWidth,
                          behavior: "smooth"
                        });
                        setActiveSolutionsSlide(i);
                      }
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeSolutionsSlide === i 
                        ? "w-7 bg-blue-600" 
                        : "w-2.5 bg-slate-200 hover:bg-slate-350"
                    }`}
                    title={`Ver ${proj.title}`}
                  />
                ))}
              </div>

              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                PROBIT • CASOS REALES EN PARAGUAY
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* INFINITE MARQUEE TRUST SIGNALS (Paraguay B2B Enterprise Partners) */}
      <section className="py-8 bg-transparent border-t border-b border-slate-200/30 overflow-hidden relative" id="infinite-marquee-section">
        {/* Soft fading edges shadows */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center mb-3">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block font-mono">
            Clientes y servicios que usufructúan de Probit
          </span>
        </div>

        <div className="flex overflow-hidden relative py-2.5">
          <div className="flex gap-14 shrink-0 animate-[marquee_25s_linear_infinite] whitespace-nowrap hover:[animation-play-state:paused]">
            {/* Double the array to guarantee endless sliding effect */}
            {[...TRUST_PARTNERS, ...TRUST_PARTNERS].map((partner, idx) => (
              <div key={`${partner.name}-${idx}`} className="flex items-center gap-2 font-display">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500/40"></div>
                <span className="text-sm font-black text-slate-800 tracking-tight">{partner.name}</span>
                <span className="text-[9px] bg-slate-250/60 text-slate-500 font-bold px-1.5 py-0.5 rounded-md border border-slate-200/50">
                  {partner.segment}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Custom CSS specifically injected for mobile 3D animations and marquees */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes mobile-3d-float {
            0% { transform: perspective(500px) translateY(0) rotateX(10deg) rotateY(15deg); }
            50% { transform: perspective(500px) translateY(-8px) rotateX(-5deg) rotateY(-10deg); }
            100% { transform: perspective(500px) translateY(0) rotateX(10deg) rotateY(15deg); }
          }
          .animate-mobile-3d-float {
            animation: mobile-3d-float 6s ease-in-out infinite;
          }
        `}</style>
      </section>


      
      

      
      {/* SOBRE NOSOTROS */}
      <section className="py-24 bg-[#020617] text-slate-100 relative overflow-hidden" id="sobre-nosotros-section">
        {/* Deep Space Gradient Background */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(17,24,39,1),rgba(3,7,18,1))] overflow-hidden">
          {/* Neon Orbs */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#06b6d4]/10 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[#4f46e5]/10 rounded-full blur-[120px] mix-blend-screen" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white drop-shadow-sm tracking-tight font-display mb-6">
            Años de experiencia transformando empresas a través de la tecnología.
          </h2>
          <p className="text-slate-350 text-base sm:text-lg leading-relaxed">
            Nacimos con el propósito de ser el aliado tecnológico que las empresas necesitan para crecer sin límites. Combinamos ingeniería de software, arquitectura en la nube, infraestructura sólida y estrategias de marketing digital para ofrecer soluciones integrales bajo un solo techo. No solo implementamos tecnología; acompañamos el crecimiento de tu negocio con estabilidad, seguridad y resultados medibles.
          </p>
        </div>
      </section>

      {/* PROCESO DE TRABAJO */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative z-10" id="proceso-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-display mb-4">Nuestro Proceso de Trabajo</h2>
            <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">Una metodología clara y estructurada para garantizar el éxito de tu proyecto.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
            
            {/* Paso 1 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-lg relative z-10 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-black text-2xl flex items-center justify-center mx-auto mb-6 shadow-inner border-4 border-white">1</div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Diagnóstico / Consulta</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Analizamos tus necesidades actuales.</p>
            </div>
            
            {/* Paso 2 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-lg relative z-10 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-black text-2xl flex items-center justify-center mx-auto mb-6 shadow-inner border-4 border-white">2</div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Propuesta a medida</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Diseñamos la solución exacta para tu empresa.</p>
            </div>
            
            {/* Paso 3 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-lg relative z-10 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 font-black text-2xl flex items-center justify-center mx-auto mb-6 shadow-inner border-4 border-white">3</div>
              <h3 className="text-xl font-black text-slate-900 mb-3">Implementación y soporte</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Ejecutamos sin interrumpir tu operación y te acompañamos siempre.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL B2B LEAD CONVERSION SECTION - CONTENEDOR GLASSMORPHIC & SWIPE-TO-ACTION */}
      <section className="pt-24 pb-12 bg-[#020617] relative z-10" id="conversion-section">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-900/30 border border-emerald-800/50 px-3.5 py-1.5 rounded-full inline-block">
              Compromiso de Respuesta
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-black text-white drop-shadow-sm tracking-tight font-display" id="conversion-title">
              Transformemos tu infraestructura y tus ventas hoy.
            </h2>
            
            <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
              Déjanos tus datos y un especialista de nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
            </p>
          </div>

          {/* Qualified B2B Lead Conversion Frame */}
          <div className="bg-white border border-slate-100 shadow-2xl rounded-3xl p-6 md:p-10 text-left max-w-2xl mx-auto relative overflow-hidden" id="conversion-form-box">
            
            {submitSuccess ? (
              <div className="p-8 text-center space-y-5 animate-fade-in" id="form-success-alert">
                <div className="mx-auto w-16 h-16 rounded-full bg-emerald-50/10 text-emerald-600 flex items-center justify-center border border-emerald-400/40 shadow-sm">
                  <CheckCircle className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-black text-slate-950 font-display">
                  ¡Suscripción y Registro de Lead Exitoso!
                </h3>
                
                <p className="text-sm text-slate-700 max-w-sm mx-auto leading-relaxed">
                  Estimado/a <strong className="text-slate-900">{name}</strong>, hemos registrado formalmente tu solicitud de consultoría empresarial para <strong className="text-slate-900">tu organización</strong>. Un técnico de guardia se comunicará de forma directa en un plazo menor a 24 horas.
                </p>

                <div className="text-xs bg-slate-900 text-teal-400 p-3.5 rounded-xl border border-slate-800 font-mono inline-block shadow-sm">
                  CÓDIGO DE SEGUIMIENTO: PROBIT-{Math.floor(Math.random() * 90000) + 10000}-PY
                </div>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!name) return;
                  handleFormSubmit();
                }} 
                className="space-y-6 animate-fade-in" 
                id="lead-qualification-form"
              >
                
                <div className="flex items-center justify-between border-b border-slate-200/40 pb-3">
                  <h3 className="font-black text-slate-900 text-xs tracking-wider uppercase font-display flex items-center gap-2">
                    <div className="w-1.5 h-4 bg-[#3b82f6] rounded-full"></div>
                    Formulario de Contacto
                  </h3>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="form-grid-fields">
                  
                  {/* Name field */}
                  <div className="space-y-1.5" id="field-name">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5 font-display">
                      <User className="w-4 h-4 text-[#3b82f6]" />
                      <span>Nombre y Apellido *</span>
                    </label>
                    <input
                      id="input-name"
                      type="text"
                      required
                      placeholder="Ej: Ing. Jorge Cáceres"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] focus:bg-white transition-all"
                    />
                  </div>





                  {/* Phone field */}
                  <div className="space-y-1.5" id="field-phone">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5 font-display">
                      <Phone className="w-4 h-4 text-[#3b82f6]" />
                      <span>Correo / Teléfono</span>
                    </label>
                    <input
                      id="input-phone"
                      type="tel"
                      placeholder="Ej: correo@empresa.com o +595 981 123456"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] focus:bg-white transition-all"
                    />
                  </div>

                </div>

                {/* Service of Interest */}
                <div className="space-y-1.5" id="field-interest">
                  <label className="text-xs font-bold text-slate-700 block font-display">¿Qué Solución Tecnológica Requiere?</label>
                  <select
                    id="input-interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="software">Software a Medida</option>
                    <option value="ti">Infraestructura TI</option>
                    <option value="ads">Ads - Publicidad Digital</option>
                    <option value="cloud">Hosting en la Nube</option>
                  </select>
                </div>



                <div className="bg-blue-500/10 border border-blue-500/20 p-3 rounded-xl flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-[10.5px] text-slate-600 leading-relaxed font-semibold">
                    <strong>Información de Privacidad B2B:</strong> Probit encripta tus datos personales bajo políticas internas auditables. No compartimos leads comerciales con terceros.
                  </p>
                </div>

                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full px-6 py-4 rounded-xl font-extrabold text-sm bg-[#3b82f6] text-white drop-shadow-sm hover:brightness-110 active:scale-[0.99] transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/20"
                  >
                    <span>Enviar consulta</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white pt-16 md:pt-24 pb-10 px-6 md:px-12 relative z-20" id="probit-footer">
        {/* Modern Tech Angular Cut */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] md:h-[60px]">
            <polygon points="1200,0 0,0 1200,120" fill="#020617"></polygon>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left relative z-10">
          
          {/* Identity & Link */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div>
              <img 
                src={"/logo.png"} 
                alt="PROBIT - Tecnología Corporativa" 
                className="h-10 md:h-12 w-auto object-contain cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-300 rounded-md p-1" 
                loading="lazy"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
            </div>
            <span className="hidden md:block text-slate-300">|</span>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-xs md:text-sm text-[#3b82f6] drop-shadow-sm font-bold tracking-wide">
                Tu informática en las nubes
              </p>
            </div>
          </div>

          {/* Copyright Area */}
          <div>
            <span className="text-xs text-slate-600 tracking-wide font-medium">
              © 2026 PROBIT. Todos los derechos reservados. | ventas@probit.com.py
            </span>
          </div>

        </div>
      </footer>




      {/* Service Explanation Detailed Modal (Súper Simple & Nivel Genio Side-by-Side) */}
      <AnimatePresence>
        {activeExplainService && (() => {
          const srvExp = SIMPLE_EXPLANATIONS[activeExplainService];
          if (!srvExp) return null;
          
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
              id="explanation-modal-backdrop"
              onClick={() => setActiveExplainService(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full border border-slate-250 flex flex-col max-h-[90vh]"
                id="explanation-modal-content"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveTooltip(null);
                }}
              >
                {/* Header of Modal */}
                <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-600/10 text-blue-600 rounded-xl">
                      <HelpCircle className="w-5 h-5 animate-[pulse_2s_infinite]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 font-mono block">
                        Explicación Interactiva • PROBIT
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-slate-950 font-display">
                        Pilar: {srvExp.metaTitle}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Close button */}
                  <button
                    onClick={() => setActiveExplainService(null)}
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer border border-slate-200/40 hover:border-slate-300"
                    id="close-explanation-modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body Content - Scrollable area */}
                <div className="p-5 sm:p-6 md:p-8 overflow-y-auto space-y-6 flex-1 text-left custom-scrollbar">
                  
                  {/* Category Pills indicator */}
                  <div className="flex flex-wrap gap-2">
                    {srvExp.pills.map((p) => (
                      <div 
                        key={p} 
                        className="relative group/pill"
                        onMouseEnter={() => setActiveTooltip(p)}
                        onMouseLeave={() => setActiveTooltip(null)}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTooltip(activeTooltip === p ? null : p);
                        }}
                      >
                        <span className="text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-100/65 px-3 py-1 rounded-full font-mono uppercase cursor-help inline-block">
                          {p}
                        </span>
                        
                        {/* Tooltip */}
                        <AnimatePresence>
                          {activeTooltip === p && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] sm:w-auto sm:min-w-[320px] sm:max-w-md bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-700 pointer-events-none flex flex-col items-center justify-center"
                            >
                              <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest mb-1 font-mono">{p}</span>
                              <p className="relative z-10 font-medium leading-relaxed text-center text-xs sm:text-sm">{PILL_DEFINITIONS[p] || "Característica clave del servicio."}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                    <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-100/60 px-3 py-1 rounded-full font-mono uppercase">
                      Soporte 100% en Español
                    </span>
                  </div>

                  {/* Dual Grid Panel: Left for No-Technical, Right for technicals */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch pt-2">
                    
                    {/* LEFT PANEL: EXPLICACIÓN SÚPER SIMPLE (DUEÑO DE NEGOCIOS) */}
                    <div className="p-5 sm:p-6 bg-gradient-to-br from-blue-50/50 via-teal-50/20 to-white border border-blue-100/60 rounded-2xl space-y-5 flex flex-col justify-between shadow-xs">
                      <div className="space-y-4">
                        {/* Title badge for non-techs */}
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-800 bg-blue-100/55 px-3 py-1 rounded-lg">
                          <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                          <span>💡 Explicación Súper Sencilla</span>
                        </div>

                        {/* Title */}
                        <h4 className="text-md sm:text-lg font-black text-slate-950 font-display leading-snug">
                          {srvExp.simpleTitle}
                        </h4>

                        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                          {srvExp.simpleBrief}
                        </p>

                        {/* Analogy Box */}
                        <div className="p-4 bg-white border border-blue-150/45 rounded-xl block relative shadow-xs">
                          <span className="text-[9.5px] font-extrabold text-blue-600 uppercase tracking-widest block mb-1.5 font-mono">
                            Diferenciación y Enfoque de Valor
                          </span>
                          <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-sans">
                            {srvExp.simpleAnalogy}
                          </p>
                        </div>

                        {/* Simple list of benefits */}
                        <div className="space-y-3 pt-1">
                          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block font-mono">
                            ¿Por qué te conviene y te hace ganar dinero?
                          </span>
                          <div className="space-y-2.5">
                            {srvExp.simpleBenefits.map((ben) => (
                              <div key={ben} className="flex gap-2.5 text-xs text-slate-800">
                                <span className="p-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 self-start mt-0.5 shrink-0">
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                </span>
                                <span className="font-medium text-slate-700 leading-relaxed">{ben}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Brief note at footer */}
                      <p className="text-[10.5px] text-slate-400 font-mono italic pt-4 border-t border-slate-100 mt-2">
                        * Cero jerga aburrida, cero enredos. Resultados reales y claros.
                      </p>
                    </div>

                    {/* RIGHT PANEL: ESPECIFICACIONES TÉCNICAS (PARA EL GENIO) */}
                    <div className="p-5 sm:p-6 bg-slate-950 text-slate-200 border border-slate-850 rounded-2xl space-y-5 flex flex-col justify-between shadow-lg">
                      <div className="space-y-4">
                        {/* Title badge for techs */}
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-teal-400 bg-teal-500/10 border border-teal-500/15 px-3 py-1 rounded-lg font-mono">
                          <BookOpen className="w-4 h-4" />
                          <span>⚙️ Para Ingenieros (Nivel Técnico/Genio)</span>
                        </div>

                        {/* Tech spec table */}
                        <div className="space-y-2">
                          <span className="text-[10px] font-extrabold text-teal-500 uppercase tracking-widest block font-mono">
                            Ficha Técnica de Despliegue
                          </span>
                          
                          <div className="border border-slate-800 rounded-xl divide-y divide-slate-850 overflow-hidden text-[11.5px]">
                            {srvExp.advancedSpecs.map((spec) => (
                              <div key={spec.label} className="flex items-center p-2.5 justify-between">
                                <span className="text-slate-400 font-mono">{spec.label}</span>
                                <span className="text-white drop-shadow-sm font-extrabold font-mono text-right">{spec.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Architectural design details */}
                        <div className="space-y-2 pt-1">
                          <span className="text-[10px] font-extrabold text-teal-500 uppercase tracking-widest block font-mono">
                            Arquitectura y Tolerancia a Fallos
                          </span>
                          <p className="text-xs text-slate-350 leading-relaxed font-sans bg-slate-900/60 p-3.5 rounded-xl border border-slate-850">
                            {srvExp.advancedArchitecture}
                          </p>
                        </div>
                      </div>

                      {/* Security compliance note */}
                      <div className="text-[9px] text-teal-400 font-mono flex items-center gap-1.5 bg-teal-500/5 px-3 py-2 rounded-lg border border-teal-500/10 mt-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                        <span>Cumplimiento legal SET e ISO 27001 en Paraguay</span>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Footer conversion prompt */}
                <div className="p-5 sm:p-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                  <div className="text-left">
                    <span className="text-[9.5px] text-slate-400 uppercase font-mono tracking-wider block font-black">
                      ¿Listo para dar el siguiente paso?
                    </span>
                    <p className="text-xs font-semibold text-slate-600 leading-relaxed font-sans">
                      Te preparamos un presupuesto corporativo formal en menos de 48 horas.
                    </p>
                  </div>
                  
                  <div className="relative group w-full sm:w-auto">
                    <div className="absolute -inset-0.5 bg-[#3b82f6] rounded-xl blur-md opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-[pulse_3.5s_ease-in-out_infinite]"></div>
                    <button
                      onClick={() => {
                        if (activeExplainService === 'hosting') {
                          setShowHostingPlans(true);
                        } else {
                          setActiveExplainService(null);
                          window.open(`https://wa.me/595983440021?text=${encodeURIComponent('Hola, me interesa ' + srvExp.realCta)}`, '_blank');
                        }
                      }}
                      className="relative w-full px-6 py-3 rounded-xl bg-[#3b82f6] text-white drop-shadow-sm hover:brightness-110 font-extrabold text-xs text-center transition-all cursor-pointer shadow-md shadow-[#3b82f6]/20 flex items-center justify-center gap-1.5"
                    >
                      <span>{srvExp.realCta}</span>
                      <ArrowRight className="w-4 h-4 text-white drop-shadow-sm" />
                    </button>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* HOSTING PLANS MODAL */}
      <AnimatePresence>
        {showHostingPlans && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setShowHostingPlans(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full flex flex-col max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-600/10 text-blue-600 rounded-xl hidden sm:block">
                    <CloudUpload className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-950 font-display">
                      Planes de Hosting Destacados
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium hidden sm:block">
                      Estable, Seguro. Alojamiento Sencillo y Premium.
                    </p>
                  </div>
                </div>
                {/* Close Button */}
                <button
                  onClick={() => setShowHostingPlans(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-all cursor-pointer border border-slate-200/40 hover:border-slate-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="p-4 sm:p-6 overflow-y-auto bg-slate-50/50 custom-scrollbar">
                
                {/* Grid of Plans */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {HOSTING_PLANS_DATA.map((plan, idx) => {
                    const isPremium = plan.type === "premium";
                    
                    return (
                      <div 
                        key={idx}
                        className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden relative flex flex-col group hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-blue-200"
                        onClick={() => window.open(`https://wa.me/595983440021?text=${encodeURIComponent('Hola, estoy interesado en el plan Hosting ' + plan.tier)}`, '_blank')}
                      >
                        {/* Header Area */}
                        <div className={`p-5 text-center border-b ${isPremium ? 'bg-gradient-to-b from-blue-50/50 to-transparent border-blue-100' : 'bg-slate-50/50 border-slate-100'}`}>
                          {isPremium && (
                            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[9px] font-bold uppercase tracking-wider py-1 px-3 rounded-bl-xl z-10 shadow-sm">
                              Premium
                            </div>
                          )}
                          <h4 className="font-black text-slate-900 text-lg mb-1 tracking-tight">Hosting {plan.tier}</h4>
                          <div className={`inline-block px-3 py-1 rounded-full font-bold text-xs ${isPremium ? 'bg-blue-100 text-blue-800' : 'bg-slate-200 text-slate-700'}`}>
                            {plan.storage}
                          </div>
                        </div>

                        {/* Features List */}
                        <div className="p-5 flex-1 flex flex-col">
                          <ul className="space-y-3 mb-6">
                            {plan.features.map((feat, fidx) => {
                              const Icon = feat.icon;
                              return (
                                <li key={fidx} className="flex items-center gap-2.5 text-slate-600 text-[13px] font-medium">
                                  <div className={`p-1 rounded bg-slate-100 shrink-0 ${isPremium ? 'text-blue-600' : 'text-slate-500'}`}>
                                    <Icon className="w-3.5 h-3.5 stroke-[2.5]" />
                                  </div>
                                  <span className="leading-tight">{feat.text}</span>
                                </li>
                              );
                            })}
                          </ul>

                          {/* Price Area */}
                          <div className="text-center mt-auto pt-4 border-t border-slate-100">
                            <div className={`inline-flex flex-col items-center justify-center rounded-xl px-4 py-2 w-full transition-colors ${isPremium ? 'bg-blue-600 text-white group-hover:bg-blue-700' : 'bg-slate-900 text-white group-hover:bg-slate-800'} mb-2`}>
                              <span className="font-black text-[17px] tracking-tight leading-none">{plan.priceMonthly}</span>
                              <span className="text-[9px] font-bold uppercase tracking-widest mt-1 opacity-80">Mensual</span>
                            </div>
                            
                            <div className="flex flex-col items-center justify-center gap-1">
                              <div className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-center">
                                {plan.discountPercent} OFF <span className="text-slate-400 font-medium line-through ml-1">{plan.priceYearly}</span>
                              </div>
                              <div className="text-slate-500 font-medium text-[10px]">
                                Ahorre {plan.savings}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Footer Disclaimers */}
                <div className="w-full space-y-2 text-slate-500 font-medium text-[11px] sm:text-xs">
                  <div className="flex items-start gap-2 bg-slate-100/50 p-2.5 rounded-lg border border-slate-200/50">
                    <AlertTriangle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <p>Ningún plan de hosting expresado en esta propuesta incluye Dominio gratis.</p>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-100/50 p-2.5 rounded-lg border border-slate-200/50">
                    <AlertTriangle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <p>Ningún plan de hosting incluye el servicio de migración de datos asistido, este punto tendría un costo único adicional de 77,00 US$.</p>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-100/50 p-2.5 rounded-lg border border-slate-200/50">
                    <AlertTriangle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <p>Modalidades de pago: Dominio(anual), Hosting(Mensual), Hosting(1 año).</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-[60] p-3.5 rounded-full bg-[#3b82f6] text-white shadow-lg shadow-[#3b82f6]/30 hover:bg-blue-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-blue-400 group"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
