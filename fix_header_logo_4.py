import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# Replace header logo classes to remove the black box (mix-blend-screen) and position it absolutely behind the text
old_header = r'''      <header className="absolute top-0 w-full z-50 pointer-events-auto" id="probit-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex items-center justify-start" id="header-container">
          
          {/* Logo Original */}
          <div 
            className="cursor-pointer transition-all duration-300 flex items-center -ml-2" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img 
              src={"/logo3.jpg"} 
              alt="PROBIT" 
              className="h-32 md:h-40 w-auto object-contain drop-shadow-lg filter brightness-110 contrast-110" 
            />
          </div>

        </div>
      </header>'''

new_header = r'''      <header className="absolute top-0 w-full z-0 pointer-events-none" id="probit-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex items-center justify-start" id="header-container">
          
          {/* Logo Original */}
          <div 
            className="cursor-pointer transition-all duration-1000 flex items-center -ml-2 opacity-50" 
          >
            <img 
              src={"/logo3.jpg"} 
              alt="PROBIT" 
              className="h-64 md:h-80 w-auto object-contain filter mix-blend-screen pointer-events-auto" 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>

        </div>
      </header>'''

content = content.replace(old_header, new_header)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
