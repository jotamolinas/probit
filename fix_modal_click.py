import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

content = content.replace(
    'onClick={(e) => e.stopPropagation()}',
    'onClick={(e) => {\n                  e.stopPropagation();\n                  setActiveTooltip(null);\n                }}'
)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
