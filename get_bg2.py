import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

match = re.search(r'(<section[^>]*id="enfoque-section".*?</section>)', content, re.DOTALL)
if match:
    print(match.group(1)[:2000])

