import sys

with open('src/components/InteractivePreview.tsx', 'r') as f:
    content = f.read()

target = """                      className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between group/srv ${
                        isActive
                          ? "bg-blue-600/25 border-blue-500 shadow-lg text-white"
                          : "bg-slate-950/45 border-white/5 hover:border-white/15 hover:bg-slate-950/70 text-slate-300"
                      }`}"""

replacement = """                      className={`p-3.5 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-between group/srv ${
                        isActive
                          ? "bg-blue-600/25 shadow-lg text-white"
                          : "bg-transparent hover:bg-white/5 text-slate-300"
                      }`}"""

if target in content:
    content = content.replace(target, replacement)
    print("Replaced hero list item")
else:
    print("Hero list item not found")

with open('src/components/InteractivePreview.tsx', 'w') as f:
    f.write(content)

