import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

content = re.sub(r'className="flex items-center gap-1\.5 text-[10px] font-extrabold uppercase tracking-widest text-slate-500 group-hover/srv:text-blue-600 transition-colors"',
                 r'className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-slate-500 group-hover/srv:text-[#3b82f6] transition-colors"', content)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
