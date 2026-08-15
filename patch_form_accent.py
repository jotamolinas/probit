import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

content = re.sub(r'<h3 className="font-black text-slate-900 text-xs tracking-wider uppercase font-display">\n                    Formulario Corporativo y Requerimientos B2B\n                  <\/h3>',
                 r'<h3 className="font-black text-slate-900 text-xs tracking-wider uppercase font-display flex items-center gap-2">\n                    <div className="w-1.5 h-4 bg-[#3b82f6] rounded-full"></div>\n                    Formulario Corporativo y Requerimientos B2B\n                  </h3>', content)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
