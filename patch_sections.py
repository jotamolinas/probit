import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# 1. Remove the old Nuestra Filosofía section
filosofia_regex = r'\{\/\* NUESTRA FILOSOFÍA SECTION \*\/.*?\}\s*<\/section>'
content = re.sub(filosofia_regex, '', content, flags=re.DOTALL)

# 2. Prepare SOBRE NOSOTROS & PROCESO DE TRABAJO
new_sections = r"""
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
"""

# We want to insert these right before the conversion section
# Find the start of the conversion section
conversion_regex = r'(\{\/\* FINAL B2B LEAD CONVERSION SECTION)'
content = re.sub(conversion_regex, new_sections + r'\n      \1', content, count=1)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
