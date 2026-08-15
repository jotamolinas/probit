import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# 1. Header transparency
old_header = r'<header className="absolute top-0 w-full z-50 bg-\[#020617\] pointer-events-auto" id="probit-header">'
new_header = r'<header className="absolute top-0 w-full z-50 bg-slate-900/40 backdrop-blur-md pointer-events-auto border-b border-white/5" id="probit-header">'
content = content.replace(old_header, new_header)

# 2. Logo image styling
old_logo = r'''          <div 
            className="cursor-pointer transition-all duration-300 flex items-center" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img 
              src={logo4} 
              alt="PROBIT" 
              className="h-16 md:h-20 w-auto object-contain" 
            />
          </div>'''

new_logo = r'''          <div 
            className="cursor-pointer transition-all duration-300 flex items-center -ml-2" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img 
              src={logo4} 
              alt="PROBIT" 
              className="h-16 md:h-20 w-auto object-contain mix-blend-screen invert grayscale opacity-90" 
            />
          </div>'''

content = content.replace(old_logo, new_logo)

# 3. Hero slogan pill removal
old_slogan = r'''            <div 
              className="inline-flex items-center gap-3 mb-2" 
              id="hero-pill"
            >
              {/* Slogan */}
              <span className="text-base sm:text-lg md:text-xl font-black tracking-widest uppercase text-\[#3b82f6\]">
                Tu informática en las nubes
              </span>
            </div>'''

new_slogan = r'''            <div className="mb-2" id="hero-slogan">
              <span className="text-base sm:text-lg md:text-xl font-black tracking-widest uppercase text-sky-400 drop-shadow-sm">
                Tu informática en las nubes
              </span>
            </div>'''

content = content.replace(old_slogan, new_slogan)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
