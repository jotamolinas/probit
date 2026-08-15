import sys

with open('src/components/InteractivePreview.tsx', 'r') as f:
    content = f.read()

target = """              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3" id="services-header-container">"""

replacement = """              {/* Header */}
              <div className="flex items-center justify-between pb-3" id="services-header-container">"""

if target in content:
    content = content.replace(target, replacement)
    print("Replaced right header")
else:
    print("Right header not found")

with open('src/components/InteractivePreview.tsx', 'w') as f:
    f.write(content)

