import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

old_footer_logo = r'''            <div>
              <img 
                src={logo4} 
                alt="PROBIT - Tecnología Corporativa" 
                className="h-12 md:h-16 w-auto object-contain " 
                loading="lazy"
              />
            </div>'''

new_footer_logo = r'''            <div className="-ml-2">
              <img 
                src={logo4} 
                alt="PROBIT - Tecnología Corporativa" 
                className="h-12 md:h-16 w-auto object-contain mix-blend-screen invert grayscale opacity-90" 
                loading="lazy"
              />
            </div>'''

content = content.replace(old_footer_logo, new_footer_logo)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
