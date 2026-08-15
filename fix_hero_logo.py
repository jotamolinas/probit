import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# Remove the header entirely
old_header = r'''      <header className="absolute top-0 w-full z-0 pointer-events-none" id="probit-header">
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

content = content.replace(old_header, "")

# Insert logo inside hero section, behind the text (z-0)
old_hero = r'''      <section className="relative pt-36 pb-24 bg-[#020617] text-white drop-shadow-sm overflow-hidden" id="inicio-section">'''

new_hero = r'''      <section className="relative pt-36 pb-24 bg-[#020617] text-white drop-shadow-sm overflow-hidden" id="inicio-section">
        
        {/* Background Logo Watermark */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none flex items-start pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <img 
              src={"/logo3.jpg"} 
              alt="PROBIT" 
              className="h-48 md:h-64 w-auto object-contain filter mix-blend-screen opacity-20" 
            />
        </div>'''

content = content.replace(old_hero, new_hero)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
