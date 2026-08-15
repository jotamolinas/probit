import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# Replace the import
content = content.replace('import { CORE_SOLUTIONS, ServiceItem } from "../data/proposalData";', 'import { ServiceItem } from "../data/proposalData";')

# Inject new CORE_SOLUTIONS right after imports
new_core_solutions = """
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
"""

# Find the place to inject (after imports, e.g. after 'const logo4 = "/logo4.jpg";')
content = content.replace('const logo4 = "/logo4.jpg";', 'const logo4 = "/logo4.jpg";\n' + new_core_solutions)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
