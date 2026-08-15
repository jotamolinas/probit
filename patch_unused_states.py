import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

content = re.sub(r'const \[email, setEmail\] = useState<string>\(""\);\n', '', content)
content = re.sub(r'const \[company, setCompany\] = useState<string>\(""\);\n', '', content)
content = re.sub(r'const \[message, setMessage\] = useState<string>\(""\);\n', '', content)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
