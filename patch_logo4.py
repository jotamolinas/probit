import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# Add logo4 import/definition if not present
if "const logo4" not in content:
    content = content.replace('const logo3 = "/logo3.jpeg";', 'const logo3 = "/logo3.jpeg";\nconst logo4 = "/logo4.jpg";')

# Replace logo3 with logo4 in header and footer
# Header logo is around line 710
content = re.sub(r'(<header.*?<img\s+src=\{)logo3(\}.*?</header>)', r'\1logo4\2', content, flags=re.DOTALL)

# Footer logo is around line 1608
content = re.sub(r'(<footer.*?<img\s+src=\{)logo3(\}.*?</footer>)', r'\1logo4\2', content, flags=re.DOTALL)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
