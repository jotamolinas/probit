import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# Update Conversion Title & Description
content = re.sub(
    r'<h2[^>]*id="conversion-title"[^>]*>.*?</h2>',
    r'<h2 className="text-3xl sm:text-4xl font-black text-white drop-shadow-sm tracking-tight font-display" id="conversion-title">\n              Transformemos tu infraestructura y tus ventas hoy.\n            </h2>',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">.*?</p>',
    r'<p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">\n              Déjanos tus datos y un especialista de nuestro equipo se pondrá en contacto contigo en menos de 24 horas.\n            </p>',
    content,
    count=1,
    flags=re.DOTALL
)

# Update form title
content = re.sub(
    r'<h3 className="font-black text-slate-900 text-xs tracking-wider uppercase font-display flex items-center gap-2">.*?</h3>',
    r'<h3 className="font-black text-slate-900 text-xs tracking-wider uppercase font-display flex items-center gap-2">\n                    <div className="w-1.5 h-4 bg-[#3b82f6] rounded-full"></div>\n                    Formulario de Contacto\n                  </h3>',
    content,
    flags=re.DOTALL
)

# Replace "Teléfono de Contacto (WhatsApp)" with "Correo / Teléfono"
content = re.sub(
    r'<span>Teléfono de Contacto \(WhatsApp\)</span>',
    r'<span>Correo / Teléfono</span>',
    content
)

content = re.sub(
    r'placeholder="Ej: \+595 981 123456"',
    r'placeholder="Ej: correo@empresa.com o +595 981 123456"',
    content
)

# Update Select options for Interest
select_old = r'<select\s*id="input-interest".*?</select>'
select_new = r"""<select
                    id="input-interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="software">Software a Medida</option>
                    <option value="ti">Infraestructura TI</option>
                    <option value="ads">Ads - Publicidad Digital</option>
                    <option value="cloud">Hosting en la Nube</option>
                  </select>"""
content = re.sub(select_old, select_new, content, flags=re.DOTALL)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
