import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# Header logo mask removal
header_target = """          <div 
            className="cursor-pointer transition-all duration-300 flex items-center" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ WebkitMaskImage: 'radial-gradient(circle, black 70%, transparent 100%)', maskImage: 'radial-gradient(circle, black 70%, transparent 100%)' }}
          >
            <img 
              src={logo3} 
              alt="PROBIT" 
              className="h-16 md:h-20 w-auto object-contain" 
            />
          </div>"""

header_replacement = """          <div 
            className="cursor-pointer transition-all duration-300 flex items-center" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img 
              src={logo3} 
              alt="PROBIT" 
              className="h-16 md:h-20 w-auto object-contain" 
            />
          </div>"""

content = content.replace(header_target, header_replacement)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
