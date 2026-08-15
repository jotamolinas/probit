with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

content = content.replace(r'tu organización<\/strong>', r'tu organización</strong>')

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
