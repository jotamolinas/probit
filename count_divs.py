with open("src/components/InteractivePreview.tsx", "r") as f:
    lines = f.readlines()

opens = 0
closes = 0
for i in range(741, 958):
    opens += lines[i].count("<div")
    closes += lines[i].count("</div")

print(f"Opens: {opens}, Closes: {closes}")
