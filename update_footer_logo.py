import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

old_footer_logo = r'''              <img 
                src={"/logo3.jpg"} 
                alt="PROBIT - Tecnología Corporativa" 
                className="h-24 md:h-32 w-auto object-contain filter mix-blend-screen" 
                loading="lazy"
              />'''

new_footer_logo = r'''              <img 
                src={"/logo3.jpg"} 
                alt="PROBIT - Tecnología Corporativa" 
                className="h-24 md:h-32 w-auto object-contain filter mix-blend-screen border border-[#222124]" 
                loading="lazy"
              />'''

content = content.replace(old_footer_logo, new_footer_logo)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
