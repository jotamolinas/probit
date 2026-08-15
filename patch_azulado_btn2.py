import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

content = re.sub(r'className="relative w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 text-slate-950 hover:brightness-110 font-extrabold text-xs text-center transition-all cursor-pointer shadow-md shadow-blue-600/10 flex items-center justify-center gap-1\.5"',
                 r'className="relative w-full px-6 py-3 rounded-xl bg-[#3b82f6] text-white hover:brightness-110 font-extrabold text-xs text-center transition-all cursor-pointer shadow-md shadow-[#3b82f6]/20 flex items-center justify-center gap-1.5"', content)

content = re.sub(r'<ArrowRight className="w-4 h-4 text-slate-900" />',
                 r'<ArrowRight className="w-4 h-4 text-white" />', content)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
