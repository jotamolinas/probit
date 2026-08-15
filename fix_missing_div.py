with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

content = content.replace('{/* Glassmorphic B2B Solutions Panel Card */}            <div className="rounded-2xl p-6 space-y-4 text-slate-100 relative group transition-all duration-350" id="live-hardware-console">', '<div className="lg:col-span-5 relative" id="hero-graphic-panel">\n            {/* Glassmorphic B2B Solutions Panel Card */}\n            <div className="rounded-2xl p-6 space-y-4 text-slate-100 relative group transition-all duration-350" id="live-hardware-console">')

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
