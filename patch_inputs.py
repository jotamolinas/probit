import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

content = re.sub(r'className="w-full px-3\.5 py-3 rounded-xl text-xs bg-white/70 backdrop-blur-xs border border-slate-200/60 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-xs"',
                 r'className="w-full px-3.5 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] focus:bg-white transition-all"', content)

content = re.sub(r'className="w-full px-3\.5 py-3 rounded-xl text-xs bg-white/70 backdrop-blur-xs border border-slate-200/60 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-xs cursor-pointer"',
                 r'className="w-full px-3.5 py-3 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] focus:bg-white transition-all cursor-pointer"', content)

content = re.sub(r'className="w-full px-4 py-3\.5 rounded-xl text-xs bg-white/70 backdrop-blur-xs border border-slate-200/60 text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-xs resize-none"',
                 r'className="w-full px-4 py-3.5 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] focus:bg-white transition-all resize-none"', content)

# Check the send button as well to make it use #3b82f6
content = re.sub(r'className="relative w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:brightness-110 active:scale-\[0\.99\] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"',
                 r'className="relative w-full py-4 rounded-xl font-bold text-sm bg-[#3b82f6] text-white hover:brightness-110 active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"', content)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
