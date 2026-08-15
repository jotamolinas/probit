import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# Replace H1
content = re.sub(
    r'<h1[^>]*id="hero-title-h1"[^>]*>.*?</h1>',
    r'<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-sm tracking-tight leading-[1.15]" id="hero-title-h1">\n              Impulsamos tu negocio con tecnología sólida y estrategias que venden.\n            </h1>',
    content,
    flags=re.DOTALL
)

# Replace Subtitle (hero-desc-h2)
content = re.sub(
    r'<p[^>]*id="hero-desc-h2"[^>]*>.*?</p>',
    r'<p className="text-slate-350 text-sm sm:text-base leading-relaxed max-w-2xl mt-5" id="hero-desc-h2">\n              Unificamos desarrollo de software, infraestructura TI, hosting en la nube y publicidad digital para llevar tu empresa al siguiente nivel.\n            </p>',
    content,
    flags=re.DOTALL
)

# Replace CTA primary text
content = re.sub(
    r'<span>Agendar Asesoría Corporativa Gratuita</span>',
    r'<span>Agendar una asesoría</span>',
    content
)

# Replace CTA secondary text
content = re.sub(
    r'<span>Explorar Pilares</span>',
    r'<span>Ver nuestros servicios</span>',
    content
)

# Replace Trust Badges
trust_badges_old = r'<div className="grid grid-cols-3 gap-4 pt-6 text-\[11px\] text-slate-400 font-semibold" id="hero-trust-badges">.*?<div className="flex items-center gap-2">\s*<div className="p-1 rounded-full bg-teal-500/15 text-teal-400 ">\s*<CheckCircle className="w-3.5 h-3.5" />\s*</div>\s*<span>Factura Electrónica e-Kuatia</span>\s*</div>\s*</div>'

trust_badges_new = r"""            {/* Local Trust Badges */}
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
            </div>"""

content = re.sub(trust_badges_old, trust_badges_new, content, flags=re.DOTALL)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
