import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

old_footer_logo = r'''              <img 
                src={logo4} 
                alt="PROBIT - Tecnología Corporativa" 
                className="h-20 md:h-24 w-auto object-contain drop-shadow-md filter brightness-110" 
                loading="lazy"
              />'''

new_footer_logo = r'''              <img 
                src={"/logo3.jpg"} 
                alt="PROBIT - Tecnología Corporativa" 
                className="h-24 md:h-32 w-auto object-contain filter mix-blend-screen" 
                loading="lazy"
              />'''

content = content.replace(old_footer_logo, new_footer_logo)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
