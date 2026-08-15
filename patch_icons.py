import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

content = re.sub(r'text-blue-500', r'text-[#3b82f6]', content)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
