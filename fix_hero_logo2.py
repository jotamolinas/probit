import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# Replace the background watermark with a proper logo positioned like a header inside the hero section
old_watermark = r'''        {/* Background Logo Watermark */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none flex items-start pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <img 
              src={"/logo3.jpg"} 
              alt="PROBIT" 
              className="h-48 md:h-64 w-auto object-contain filter mix-blend-screen opacity-20" 
            />
        </div>'''

new_logo = r'''        {/* Logo at the top, z-0 so it's behind text, mix-blend-screen to remove black box */}
        <div className="absolute top-0 left-0 w-full z-0 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex items-center justify-start">
            <div className="cursor-pointer transition-all duration-300 flex items-center -ml-2">
              <img 
                src={"/logo3.jpg"} 
                alt="PROBIT" 
                className="h-40 md:h-52 w-auto object-contain filter mix-blend-screen pointer-events-auto" 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
            </div>
          </div>
        </div>'''

content = content.replace(old_watermark, new_logo)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
