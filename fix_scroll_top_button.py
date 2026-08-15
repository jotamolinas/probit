import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

old_end = r'''      </AnimatePresence>
    </div>
  );
}'''

new_end = r'''      </AnimatePresence>
      
      {/* Scroll to Top Floating Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-[60] p-3 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:scale-110 transition-all border border-blue-400"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}'''

content = content.replace(old_end, new_end)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
