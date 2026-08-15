with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

content = content.replace("bg-[#030712]", "bg-[#020617]")
content = content.replace("to-[#0a1128]", "to-[#020617]")
content = content.replace("from-[#0a1128]", "from-[#020617]")

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
