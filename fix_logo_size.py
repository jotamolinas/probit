import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

old_header_logo = r'''          <div 
            className="cursor-pointer transition-all duration-300 flex items-center -ml-2" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img 
              src={logo4} 
              alt="PROBIT" 
              className="h-10 sm:h-12 w-auto object-contain" 
            />
          </div>'''

new_header_logo = r'''          <div 
            className="cursor-pointer transition-all duration-300 flex items-center -ml-2" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img 
              src={logo4} 
              alt="PROBIT" 
              className="h-14 md:h-16 w-auto object-contain" 
            />
          </div>'''

content = content.replace(old_header_logo, new_header_logo)

old_footer_logo = r'''              <img 
                src={logo4} 
                alt="PROBIT - Tecnología Corporativa" 
                className="h-10 sm:h-12 w-auto object-contain" 
                loading="lazy"
              />'''

new_footer_logo = r'''              <img 
                src={logo4} 
                alt="PROBIT - Tecnología Corporativa" 
                className="h-14 md:h-16 w-auto object-contain" 
                loading="lazy"
              />'''

content = content.replace(old_footer_logo, new_footer_logo)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
