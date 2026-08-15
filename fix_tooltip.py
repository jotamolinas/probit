import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

old_tooltip = r'''                        {/* Tooltip */}
                        <AnimatePresence>
                          {activeTooltip === p && (
                            <motion.div
                              initial={{ opacity: 0, y: 5, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 5, scale: 0.95 }}
                              transition={{ duration: 0.15 }}
                              className="fixed inset-x-4 bottom-4 sm:bottom-auto sm:inset-x-auto sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-full sm:mt-2 z-[70] sm:w-64 bg-slate-900 text-white text-xs sm:text-xs p-4 sm:p-3 rounded-xl shadow-2xl border border-slate-700 pointer-events-none"
                            >
                              <div className="hidden sm:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rotate-45 border-t border-l border-slate-700"></div>
                              <p className="relative z-10 font-medium leading-relaxed text-center sm:text-left">{PILL_DEFINITIONS[p] || "Característica clave del servicio."}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>'''

new_tooltip = r'''                        {/* Tooltip */}
                        <AnimatePresence>
                          {activeTooltip === p && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] sm:w-auto sm:min-w-[320px] sm:max-w-md bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-700 pointer-events-none flex flex-col items-center justify-center"
                            >
                              <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest mb-1 font-mono">{p}</span>
                              <p className="relative z-10 font-medium leading-relaxed text-center text-xs sm:text-sm">{PILL_DEFINITIONS[p] || "Característica clave del servicio."}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>'''

content = content.replace(old_tooltip, new_tooltip)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
