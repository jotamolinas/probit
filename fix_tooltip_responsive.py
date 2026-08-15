import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# Replace the tooltip motion.div
old_tooltip = r"""                            <motion\.div
                              initial=\{\{ opacity: 0, y: 5, scale: 0\.95 \}\}
                              animate=\{\{ opacity: 1, y: 0, scale: 1 \}\}
                              exit=\{\{ opacity: 0, y: 5, scale: 0\.95 \}\}
                              transition=\{\{ duration: 0\.15 \}\}
                              className="absolute left-0 top-full mt-2 z-50 w-56 sm:w-64 bg-slate-900 text-white text-xs p-3 rounded-xl shadow-xl border border-slate-700 pointer-events-none"
                            >
                              <div className="absolute -top-1\.5 left-6 w-3 h-3 bg-slate-900 rotate-45 border-t border-l border-slate-700"><\/div>
                              <p className="relative z-10 font-medium leading-relaxed">\{PILL_DEFINITIONS\[p\] \|\| "Característica clave del servicio\."\}<\/p>
                            <\/motion\.div>"""

new_tooltip = r"""                            <motion.div
                              initial={{ opacity: 0, y: 5, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 5, scale: 0.95 }}
                              transition={{ duration: 0.15 }}
                              className="fixed inset-x-4 bottom-4 sm:bottom-auto sm:inset-x-auto sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-full sm:mt-2 z-[70] sm:w-64 bg-slate-900 text-white text-xs sm:text-xs p-4 sm:p-3 rounded-xl shadow-2xl border border-slate-700 pointer-events-none"
                            >
                              <div className="hidden sm:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rotate-45 border-t border-l border-slate-700"></div>
                              <p className="relative z-10 font-medium leading-relaxed text-center sm:text-left">{PILL_DEFINITIONS[p] || "Característica clave del servicio."}</p>
                            </motion.div>"""

content = re.sub(old_tooltip, new_tooltip, content, flags=re.DOTALL)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
