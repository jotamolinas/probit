import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

content = re.sub(r'`\*Mensaje/Necesidad Tecnológica:\*\\n\$\{message\}`', r'""', content)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
