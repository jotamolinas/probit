import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# Replace swipe-to-action block with a standard button
swipe_block = r'\{\/\* 2\. COMPONENTES DE VANGUARDIA INTERACCIÓN — MOBILE-FIRST SWIPE-TO-ACTION SYSTEM \*\/.*?<button type="submit" className="hidden" aria-hidden="true" disabled><\/button>'
new_button = r"""
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full px-6 py-4 rounded-xl font-extrabold text-sm bg-[#3b82f6] text-white drop-shadow-sm hover:brightness-110 active:scale-[0.99] transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/20"
                  >
                    <span>Enviar consulta</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>"""

content = re.sub(swipe_block, new_button, content, flags=re.DOTALL)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
