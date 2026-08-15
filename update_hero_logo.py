import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# 1. Remove the absolutely positioned logo
old_logo = r'''        {/* Logo at the top, z-0 so it's behind text, mix-blend-screen to remove black box */}
        <div className="absolute top-0 left-0 w-full z-0 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex items-center justify-start">
            <div className="cursor-pointer transition-all duration-300 flex items-center -ml-2">
              <img 
                src={"/logo2.png"} 
                alt="PROBIT" 
                className="h-40 md:h-52 w-auto object-contain filter mix-blend-screen pointer-events-auto" 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
            </div>
          </div>
        </div>'''
content = content.replace(old_logo, "")

# 2. Add logo above the slogan
old_slogan = r'''              {/* Aggressive Typographic H1 with official brand and slogan unificado */}
            <div className="mb-2" id="hero-slogan">
              <span className="text-base sm:text-lg md:text-xl font-black tracking-widest uppercase text-sky-400 drop-shadow-sm">
                Tu informática en las nubes
              </span>
            </div>'''

new_slogan = r'''              <div className="mb-2">
                <img 
                  src={"/logo2.png"} 
                  alt="PROBIT" 
                  className="h-24 md:h-32 lg:h-40 w-auto object-contain filter mix-blend-screen -ml-4" 
                />
              </div>
              
              {/* Aggressive Typographic H1 with official brand and slogan unificado */}
            <div className="mb-2" id="hero-slogan">
              <span className="text-base sm:text-lg md:text-xl font-black tracking-widest uppercase text-sky-400 drop-shadow-sm">
                Tu informática en las nubes
              </span>
            </div>'''

content = content.replace(old_slogan, new_slogan)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
