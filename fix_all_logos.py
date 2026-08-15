import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

content = content.replace('src={"/logo3.jpg"}', 'src={"/logo2.png"}')

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
