import sys

with open('src/components/InteractivePreview.tsx', 'r') as f:
    content = f.read()

target = """          <div className="lg:col-span-5 relative" id="hero-graphic-panel">
            {/* Visual glow indicator */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-blue-400 to-teal-400 rounded-3xl blur-2xl opacity-15 -z-10 animate-pulse"></div>
            
            {/* Glassmorphic B2B Solutions Panel Card */}
            <div className="backdrop-blur-md bg-slate-900/60 rounded-2xl shadow-2xl p-6 space-y-4.5 text-slate-100 relative group transition-all duration-350 border border-white/10" id="live-hardware-console">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3" id="services-header-container">"""

replacement = """          <div className="lg:col-span-5 relative" id="hero-graphic-panel">
            {/* Glassmorphic B2B Solutions Panel Card */}
            <div className="rounded-2xl p-6 space-y-4.5 text-slate-100 relative group transition-all duration-350" id="live-hardware-console">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3" id="services-header-container">"""

if target in content:
    content = content.replace(target, replacement)
    print("Replaced hero right panel")
else:
    print("Hero right panel not found")

with open('src/components/InteractivePreview.tsx', 'w') as f:
    f.write(content)

