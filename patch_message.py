import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

message_block = r"""                {\/\* Brief Message \*\/}
                <div className="space-y-1\.5" id="field-message">
                  <label className="text-xs font-bold text-slate-700 block font-display">Breve descripción del reto operativo de tu empresa<\/label>
                  <textarea
                    id="input-message"
                    rows=\{3\}
                    placeholder="Escribe brevemente si requieres migrar servidores, crear un ERP, o abono de soporte Helpdesk\.\.\."
                    value=\{message\}
                    onChange=\{\(e\) => setMessage\(e\.target\.value\)\}
                    className="w-full px-3\.5 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-\[#3b82f6\] focus:ring-1 focus:ring-\[#3b82f6\] focus:bg-white transition-all"
                  ><\/textarea>
                <\/div>"""

content = re.sub(message_block, '', content)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
