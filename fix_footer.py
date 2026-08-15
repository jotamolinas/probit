import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

old_footer_logo = r'''              <img 
                src={"/logo2.png"} 
                alt="PROBIT - Tecnología Corporativa" 
                className="h-24 md:h-32 w-auto object-contain filter mix-blend-screen" 
                loading="lazy"
              />'''

new_footer_logo = r'''              <img 
                src={"/logo2.png"} 
                alt="PROBIT - Tecnología Corporativa" 
                className="h-24 md:h-32 w-auto object-contain filter mix-blend-screen cursor-pointer" 
                loading="lazy"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />'''

content = content.replace(old_footer_logo, new_footer_logo)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
