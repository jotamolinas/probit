import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# 1. Update the Slogan
content = re.sub(r'className="text-base sm:text-lg md:text-xl font-black tracking-widest uppercase text-teal-400"',
                 r'className="text-base sm:text-lg md:text-xl font-black tracking-widest uppercase text-[#3b82f6]"', content)

# 2. Update the Hero Primary Button
content = re.sub(r'className="absolute -inset-0\.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 rounded-xl blur-md opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-\[pulse_3\.5s_ease-in-out_infinite\]"',
                 r'className="absolute -inset-0.5 bg-[#3b82f6] rounded-xl blur-md opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-[pulse_3.5s_ease-in-out_infinite]"', content)

content = re.sub(r'className="relative w-full px-6 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 text-slate-950 hover:brightness-110 active:scale-\[0\.99\] transition-all text-center flex items-center justify-center gap-2 cursor-pointer"',
                 r'className="relative w-full px-6 py-4 rounded-xl font-extrabold text-sm bg-[#3b82f6] text-white hover:brightness-110 active:scale-[0.99] transition-all text-center flex items-center justify-center gap-2 cursor-pointer"', content)

# 3. Update the 4 Pilares background when selected
content = re.sub(r'isSelected \n?\s*\? "border-blue-600 bg-gradient-to-b from-blue-50/60 to-white/95 shadow-xl ring-2 ring-blue-600/10"\n?\s*: "border-blue-500/25 hover:border-blue-500 hover:shadow-lg hover:bg-white/90"',
                 r'isSelected \n                       ? "border-[#3b82f6] bg-gradient-to-b from-blue-50/60 to-white/95 shadow-xl ring-2 ring-[#3b82f6]/10"\n                       : "border-[#3b82f6]/25 hover:border-[#3b82f6] hover:shadow-lg hover:bg-white/90"', content)

content = re.sub(r'isSelected \n?\s*\? "bg-blue-600 text-white shadow-md shadow-blue-500/20"\n?\s*: "bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600"',
                 r'isSelected \n                           ? "bg-[#3b82f6] text-white shadow-md shadow-[#3b82f6]/20"\n                           : "bg-slate-100 text-slate-700 group-hover:bg-[#3b82f6]/10 group-hover:text-[#3b82f6]"', content)

content = re.sub(r'isSelected \? "text-indigo-600" : "text-blue-600 group-hover:text-indigo-600"',
                 r'isSelected ? "text-[#3b82f6]" : "text-[#3b82f6]/70 group-hover:text-[#3b82f6]"', content)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)

