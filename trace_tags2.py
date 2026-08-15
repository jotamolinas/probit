import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    lines = f.readlines()

stack = []
for i, line in enumerate(lines):
    if i < 700: continue
    
    # Ignore comments
    if "{/*" in line and "*/}" in line:
        line = re.sub(r'\{\/\*.*?\*\/\}', '', line)
    
    # Find all tags
    # A tag starts with < and ends with >.
    # We want to capture the tag name and if it's self-closing.
    matches = re.finditer(r'<(/)?(div|section)[^>]*(/?)>', line)
    for match in matches:
        is_closing = match.group(1) == '/'
        tag_name = match.group(2)
        is_self_closing = match.group(3) == '/'
        
        if is_closing:
            if stack and stack[-1][0] == tag_name:
                stack.pop()
            else:
                print(f"Mismatch at line {i+1}: expected closing for {stack[-1] if stack else 'None'}, got </{tag_name}>")
        elif not is_self_closing:
            stack.append((tag_name, i+1))

print(f"Remaining stack at end: {stack}")
