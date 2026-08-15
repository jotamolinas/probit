import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

old_slogan = """            <div 
              className="inline-flex items-center gap-3 mb-2" 
              id="hero-pill"
            >
              {/* Slogan */}
              <span className="text-base sm:text-lg md:text-xl font-black tracking-widest uppercase text-[#3b82f6]">
                Tu informática en las nubes
              </span>
            </div>"""

new_slogan = """            <div className="mb-2" id="hero-slogan">
              <span className="text-base sm:text-lg md:text-xl font-black tracking-widest uppercase text-sky-400 drop-shadow-sm">
                Tu informática en las nubes
              </span>
            </div>"""

content = content.replace(old_slogan, new_slogan)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
