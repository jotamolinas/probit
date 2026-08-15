import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# 1. Update logo4 path
content = content.replace(
    'const logo4 = "/logo1.jpeg";',
    'const logo4 = "/logo.png";'
)

# 2. Header logo styles
old_header_logo = r'''            <img 
              src={logo4} 
              alt="PROBIT" 
              className="h-16 md:h-20 w-auto object-contain mix-blend-screen invert grayscale opacity-90" 
            />'''

new_header_logo = r'''            <img 
              src={logo4} 
              alt="PROBIT" 
              className="h-10 sm:h-12 w-auto object-contain" 
            />'''

content = content.replace(old_header_logo, new_header_logo)

# 3. Footer logo styles
old_footer_logo = r'''              <img 
                src={logo4} 
                alt="PROBIT - Tecnología Corporativa" 
                className="h-12 md:h-16 w-auto object-contain mix-blend-screen invert grayscale opacity-90" 
                loading="lazy"
              />'''

new_footer_logo = r'''              <img 
                src={logo4} 
                alt="PROBIT - Tecnología Corporativa" 
                className="h-10 sm:h-12 w-auto object-contain" 
                loading="lazy"
              />'''

content = content.replace(old_footer_logo, new_footer_logo)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
