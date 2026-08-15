import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

hero_bg_old = r"""        \{\/\* Futuristic Pinterest-style tech wallpaper background \*\/\}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-\[#201e1f\] via-\[#201e1f\]\/90 to-\[#0a1128\]">
          \{\/\* Deep celestial gradient mesh \*\/\}
          <div className="absolute top-\[-20%\] left-\[-10%\] w-\[60%\] h-\[60%\] bg-blue-600\/30 rounded-full blur-\[120px\]  mix-blend-screen animate-\[pulse_10s_ease-in-out_infinite\]" \/>
          <div className="absolute top-\[40%\] right-\[-10%\] w-\[50%\] h-\[70%\] bg-teal-500\/20 rounded-full blur-\[140px\]  mix-blend-screen animate-\[pulse_12s_ease-in-out_infinite_2s\]" \/>
          <div className="absolute bottom-\[-30%\] left-\[20%\] w-\[40%\] h-\[50%\] bg-indigo-600\/20 rounded-full blur-\[150px\] mix-blend-screen " \/>
          
          \{\/\* Cyberpunk perspective grid \*\/\}
          <div 
            className="absolute inset-0 opacity-\[0\.10\]" 
            style=\{\{
              backgroundImage: 'linear-gradient\(rgba\(255, 255, 255, 1\) 1px, transparent 1px\), linear-gradient\(90deg, rgba\(255, 255, 255, 1\) 1px, transparent 1px\)',
              backgroundSize: '50px 50px',
              transform: 'perspective\(1000px\) rotateX\(60deg\) scale\(2\.5\) translateY\(-30%\)',
              transformOrigin: 'top center'
            \}\}
          \/>
          \{\/\* Vignette overlay \*\/\}
          <div className="absolute inset-0 bg-gradient-to-b from-\[#111827\]\/0 via-\[#111827\]\/30 to-\[#0a1128\]" \/>
        <\/div>"""

new_bg = """        {/* Neon Tech Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[#020617] overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]"></div>
          
          {/* Neon Glow Meshes */}
          <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-[#3b82f6]/20 rounded-full blur-[120px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 right-1/4 w-[40%] h-[40%] bg-cyan-500/15 rounded-full blur-[100px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite_reverse]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#3b82f6]/10 rounded-full blur-[150px] mix-blend-screen" />
          
          {/* Gradient Overlay for blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]" />
        </div>"""

content = re.sub(hero_bg_old, new_bg, content)

enfoque_bg_old = r"""        \{\/\* Futuristic Pinterest-style tech wallpaper background \*\/\}
        <div className="absolute inset-0 z-0 pointer-events-none bg-\[#030712\]">
          \{\/\* Deep celestial gradient mesh \*\/\}
          <div className="absolute top-\[-20%\] left-\[-10%\] w-\[60%\] h-\[60%\] bg-blue-600\/30 rounded-full blur-\[120px\]  mix-blend-screen animate-\[pulse_10s_ease-in-out_infinite\]" \/>
          <div className="absolute top-\[40%\] right-\[-10%\] w-\[50%\] h-\[70%\] bg-teal-500\/20 rounded-full blur-\[140px\]  mix-blend-screen animate-\[pulse_12s_ease-in-out_infinite_2s\]" \/>
          <div className="absolute bottom-\[-30%\] left-\[20%\] w-\[40%\] h-\[50%\] bg-indigo-600\/20 rounded-full blur-\[150px\] mix-blend-screen " \/>
          
          \{\/\* Cyberpunk perspective grid \*\/\}
          <div 
            className="absolute inset-0 opacity-\[0\.05\]" 
            style=\{\{
              backgroundImage: 'linear-gradient\(rgba\(255, 255, 255, 1\) 1px, transparent 1px\), linear-gradient\(90deg, rgba\(255, 255, 255, 1\) 1px, transparent 1px\)',
              backgroundSize: '40px 40px',
              transform: 'perspective\(1000px\) rotateX\(60deg\) scale\(2\.5\) translateY\(-10%\)',
              transformOrigin: 'top center'
            \}\}
          \/>
        <\/div>"""

enfoque_new_bg = """        {/* Neon Tech Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[#020617] overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]"></div>
          
          {/* Neon Glow Meshes */}
          <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#3b82f6]/15 rounded-full blur-[120px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/15 rounded-full blur-[100px] mix-blend-screen animate-[pulse_12s_ease-in-out_infinite_reverse]" />
          
          {/* Gradient Overlay for blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
        </div>"""

content = re.sub(enfoque_bg_old, enfoque_new_bg, content)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)

