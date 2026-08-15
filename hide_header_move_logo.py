import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# Let's see the header structure
header_start = content.find("<header")
header_end = content.find("</header>") + 9

print(content[header_start:header_end])
