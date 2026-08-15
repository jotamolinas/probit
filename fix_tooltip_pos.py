import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

content = content.replace(
    'className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-full mt-2 z-50 w-56 sm:w-64 bg-slate-900 text-white text-xs p-3 rounded-xl shadow-xl border border-slate-700 pointer-events-none"',
    'className="absolute left-0 top-full mt-2 z-50 w-56 sm:w-64 bg-slate-900 text-white text-xs p-3 rounded-xl shadow-xl border border-slate-700 pointer-events-none"'
)

content = content.replace(
    '<div className="absolute -top-1.5 left-6 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 bg-slate-900 rotate-45 border-t border-l border-slate-700"></div>',
    '<div className="absolute -top-1.5 left-6 w-3 h-3 bg-slate-900 rotate-45 border-t border-l border-slate-700"></div>'
)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
