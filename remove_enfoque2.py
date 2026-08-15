import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

enfoque_regex = r'<section[^>]*id="enfoque-section"[^>]*>.*?<\/section>'
content = re.sub(enfoque_regex, '', content, flags=re.DOTALL)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
