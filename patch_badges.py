import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

trust_badges_old = r'<div className="grid grid-cols-3 gap-4 pt-6 text-\[11px\] text-slate-400 font-semibold" id="hero-trust-badges">.*?<div className="flex items-center gap-2">\s*<div className="p-1 rounded-full bg-teal-500/15 text-teal-400 ">\s*<CheckCircle className="w-3.5 h-3.5" />\s*</div>\s*<span>Factura Electrónica e-Kuatia</span>\s*</div>\s*</div>'

# Fallback robust regex
robust_regex = r'<div className="grid grid-cols-3 gap-4 pt-6 text-\[11px\] text-slate-400 font-semibold" id="hero-trust-badges">.*?</div>\s*</div>\s*</div>'

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

content = re.sub(robust_regex, trust_badges_new, content, flags=re.DOTALL)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
