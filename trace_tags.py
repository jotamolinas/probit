with open("src/components/InteractivePreview.tsx", "r") as f:
    lines = f.readlines()

import re

stack = []
for i, line in enumerate(lines):
    if i < 700: continue
    # Extremely basic html parser
    tags = re.findall(r'<(div|section|/div|/section)\b', line)
    for tag in tags:
        if not tag.startswith('/'):
            stack.append((tag, i+1))
        else:
            name = tag[1:]
            if len(stack) > 0 and stack[-1][0] == name:
                stack.pop()
            else:
                print(f"Mismatch at line {i+1}: expected closing for {stack[-1] if stack else 'Nothing'}, got </{name}>")

print(f"Remaining stack at end: {stack}")
