import sys

with open('src/components/InteractivePreview.tsx', 'r') as f:
    content = f.read()

target = """      {/* TOP DIRECT NAVIGATION BAR */}
      <header className="absolute top-0 w-full z-50 bg-[#201e1f] pointer-events-auto" id="probit-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex items-center justify-center sm:justify-start" id="header-container">
          
          {/* Logo Original */}
          <div 
            className="cursor-pointer transition-all duration-300 flex items-center mt-4" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img 
              src={logo3} 
              alt="PROBIT" 
              className="h-16 md:h-20 w-auto object-contain mix-blend-screen" 
            />
          </div>
        </div>
      </header>"""

replacement = """      {/* TOP DIRECT NAVIGATION BAR */}
      <header className="absolute top-0 w-full z-50 bg-[#000000] pointer-events-auto" id="probit-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex items-center justify-between" id="header-container">
          
          {/* Logo Original */}
          <div 
            className="cursor-pointer transition-all duration-300 flex items-center mt-4" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ WebkitMaskImage: 'radial-gradient(circle, black 70%, transparent 100%)', maskImage: 'radial-gradient(circle, black 70%, transparent 100%)' }}
          >
            <img 
              src={logo3} 
              alt="PROBIT" 
              className="h-16 md:h-20 w-auto object-contain" 
            />
          </div>

          {/* Área Cliente Button */}
          <div className="mt-4 hidden sm:block">
            <button 
              onClick={() => window.open('https://wa.me/595983440021?text=Hola,%20necesito%20acceder%20al%20%C3%81rea%20de%20Clientes', '_blank')}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold tracking-wide transition-all border border-white/5"
            >
              Área Cliente
            </button>
          </div>
        </div>
      </header>"""

if target in content:
    content = content.replace(target, replacement)
    print("Replaced header")
else:
    print("Header not found")

with open('src/components/InteractivePreview.tsx', 'w') as f:
    f.write(content)
