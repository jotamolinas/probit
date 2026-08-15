import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# Header Button
content = re.sub(r'className="px-5 py-2\.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold tracking-wide transition-all border border-white/5"',
                 r'className="px-5 py-2.5 rounded-full bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-bold tracking-wide transition-all shadow-md"', content)

# Hero Secondary Button
content = re.sub(r'className="px-6 py-4 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all text-center flex items-center justify-center gap-2 cursor-pointer hover:shadow-md backdrop-blur-md"',
                 r'className="px-6 py-4 rounded-xl font-bold text-sm border-2 border-[#3b82f6] text-white hover:bg-[#3b82f6]/10 transition-all text-center flex items-center justify-center gap-2 cursor-pointer hover:shadow-md backdrop-blur-md"', content)


with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
