import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

old_header_logo = r'''            <img 
              src={logo4} 
              alt="PROBIT" 
              className="h-32 md:h-40 w-auto object-contain drop-shadow-lg filter brightness-110 contrast-110" 
            />'''

new_header_logo = r'''            <img 
              src={"/logo3.jpg"} 
              alt="PROBIT" 
              className="h-32 md:h-40 w-auto object-contain drop-shadow-lg filter brightness-110 contrast-110" 
            />'''

content = content.replace(old_header_logo, new_header_logo)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
