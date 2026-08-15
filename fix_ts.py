import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

bad_resets = r'      setCompany\(""\);\n      setEmail\(""\);\n      setPhone\(""\);\n      setMessage\(""\);'
fixed_resets = '      setPhone("");\n      setInterest("software");'
content = re.sub(bad_resets, fixed_resets, content)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
