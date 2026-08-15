import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

content = content.replace(
    'const logo4 = "/logo4.jpg";',
    'const logo4 = "/logo1.jpeg";'
)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
