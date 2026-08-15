import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# Header
old_header_logo = r'''            <img 
              src={logo4} 
              alt="PROBIT" 
              className="h-24 md:h-32 w-auto object-contain" 
            />'''

new_header_logo = r'''            <img 
              src={logo4} 
              alt="PROBIT" 
              className="h-32 md:h-40 w-auto object-contain drop-shadow-lg filter brightness-110 contrast-110" 
            />'''

content = content.replace(old_header_logo, new_header_logo)

# Footer
old_footer_logo = r'''              <img 
                src={logo4} 
                alt="PROBIT - Tecnología Corporativa" 
                className="h-14 md:h-16 w-auto object-contain" 
                loading="lazy"
              />'''

new_footer_logo = r'''              <img 
                src={logo4} 
                alt="PROBIT - Tecnología Corporativa" 
                className="h-20 md:h-24 w-auto object-contain drop-shadow-md filter brightness-110" 
                loading="lazy"
              />'''

content = content.replace(old_footer_logo, new_footer_logo)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
