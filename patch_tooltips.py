import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# 1. Add PILL_DEFINITIONS before the component
pill_defs = """
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
"""

content = re.sub(r'export default function InteractivePreview\(\) \{', pill_defs + r'\nexport default function InteractivePreview() {', content, count=1)

# 2. Add state
state_regex = r'const \[activeExplainService, setActiveExplainService\] = useState<string \| null>\(null\);'
content = re.sub(state_regex, r'const [activeExplainService, setActiveExplainService] = useState<string | null>(null);\n  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);', content, count=1)

# 3. Replace the pills map in the modal
old_pills = r'\{srvExp\.pills\.map\(\(p\) => \(\s*<span key=\{p\} className="text-\[10px\] font-bold text-teal-700 bg-teal-50 border border-teal-100/65 px-3 py-1 rounded-full font-mono uppercase">\s*\{p\}\s*<\/span>\s*\)\)\}'

new_pills = r"""{srvExp.pills.map((p) => (
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
                              initial={{ opacity: 0, y: 5, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 5, scale: 0.95 }}
                              transition={{ duration: 0.15 }}
                              className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-full mt-2 z-50 w-56 sm:w-64 bg-slate-900 text-white text-xs p-3 rounded-xl shadow-xl border border-slate-700 pointer-events-none"
                            >
                              <div className="absolute -top-1.5 left-6 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 bg-slate-900 rotate-45 border-t border-l border-slate-700"></div>
                              <p className="relative z-10 font-medium leading-relaxed">{PILL_DEFINITIONS[p] || "Característica clave del servicio."}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}"""

content = re.sub(old_pills, new_pills, content, flags=re.DOTALL)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
