import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

enfoque_regex = r'\{\/\* ENFOQUE CLOUD & PLAN DE RESPALDO.*?\}\s*<\/section>'
content = re.sub(enfoque_regex, '', content, flags=re.DOTALL)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
