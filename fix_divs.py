import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# Revert the mistake
content = content.replace("</div>\n</div>\n</div>\n</section>", "</section>")

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
