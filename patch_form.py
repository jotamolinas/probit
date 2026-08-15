import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# Update validation
content = re.sub(r'if \(!name \|\| !email\) return;', r'if (!name) return;', content)

# Remove field-company
company_block = r"""                  {\/\* Company field \*\/}
                  <div className="space-y-1\.5" id="field-company">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1\.5 font-display">
                      <Building className="w-4 h-4 text-blue-500" \/>
                      <span>Empresa \/ Organización<\/span>
                    <\/label>
                    <input
                      id="input-company"
                      type="text"
                      placeholder="Ej: Consorcio del Paraná S\.A\."
                      value=\{company\}
                      onChange=\{\(e\) => setCompany\(e\.target\.value\)\}
                      className="w-full px-3\.5 py-3 rounded-xl text-xs bg-white\/70 backdrop-blur-xs border border-slate-200\/60 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-xs"
                    \/>
                  <\/div>"""
content = re.sub(company_block, '', content)

# Remove field-email
email_block = r"""                  {\/\* Email field \*\/}
                  <div className="space-y-1\.5" id="field-email">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1\.5 font-display">
                      <Mail className="w-4 h-4 text-blue-500" \/>
                      <span>Correo Electrónico Corporativo \*<\/span>
                    <\/label>
                    <input
                      id="input-email"
                      type="email"
                      required
                      placeholder="Ej: jcaceres@empresa\.com\.py"
                      value=\{email\}
                      onChange=\{\(e\) => setEmail\(e\.target\.value\)\}
                      className="w-full px-3\.5 py-3 rounded-xl text-xs bg-white\/70 backdrop-blur-xs border border-slate-200\/60 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-xs"
                    \/>
                  <\/div>"""
content = re.sub(email_block, '', content)

# Remove state and usage (or we can just leave them unused)
# But it's cleaner to remove the fields and just leave the company/email states in case they are used somewhere else (like in success message)
# Actually, the user doesn't care if the state remains, but I'll change the success message slightly to omit company if it's not collected anymore.

content = re.sub(r'para <strong className="text-slate-900">\{company \|\| "tu organización"\}<\/strong>\.',
                 r'para <strong className="text-slate-900">tu organización<\/strong>.', content)


with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
