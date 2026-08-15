import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# Remove nuestra-filosofia-section completely
content = re.sub(
    r'\{\/\* NUESTRA FILOSOFÍA SECTION \*\/.*?\}\s*<\/section>',
    '',
    content,
    flags=re.DOTALL
)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
