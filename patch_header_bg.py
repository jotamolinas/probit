import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

old_header = r'<header className="absolute top-0 w-full z-50 bg-[#020617] pointer-events-auto" id="probit-header">'
new_header = r'<header className="absolute top-0 w-full z-50 bg-slate-900/40 backdrop-blur-md pointer-events-auto border-b border-white/5" id="probit-header">'

content = content.replace(old_header, new_header)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
