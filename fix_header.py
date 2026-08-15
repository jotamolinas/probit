import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# Replace header background and border, remove "Area Cliente" button, make logo larger
old_header = r'''<header className="absolute top-0 w-full z-50 bg-slate-900/40 backdrop-blur-md pointer-events-auto border-b border-white/5" id="probit-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex items-center justify-between" id="header-container">
          
          {/* Logo Original */}
          <div 
            className="cursor-pointer transition-all duration-300 flex items-center -ml-2" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img 
              src={logo4} 
              alt="PROBIT" 
              className="h-14 md:h-16 w-auto object-contain" 
            />
          </div>

          {/* Área Cliente Button */}
          <div className="hidden sm:block">
            <button 
              onClick={() => window.open('https://wa.me/595983440021?text=Hola,%20necesito%20acceder%20al%20%C3%81rea%20de%20Clientes', '_blank')}
              className="px-5 py-2.5 rounded-full bg-[#3b82f6] hover:bg-[#2563eb] text-white drop-shadow-sm text-sm font-bold tracking-wide transition-all shadow-md"
            >
              Área Cliente
            </button>
          </div>
        </div>
      </header>'''

new_header = r'''<header className="absolute top-0 w-full z-50 pointer-events-auto" id="probit-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex items-center justify-start" id="header-container">
          
          {/* Logo Original */}
          <div 
            className="cursor-pointer transition-all duration-300 flex items-center -ml-2" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img 
              src={logo4} 
              alt="PROBIT" 
              className="h-24 md:h-32 w-auto object-contain" 
            />
          </div>

        </div>
      </header>'''

content = content.replace(old_header, new_header)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)

