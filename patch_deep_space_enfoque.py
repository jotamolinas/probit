import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

enfoque_bg_old = r"""        \{\/\* Futuristic Pinterest-style tech wallpaper background \*\/\}
        <div className="absolute inset-0 z-0 pointer-events-none bg-\[#020617\]">
          \{\/\* Deep celestial gradient mesh \*\/\}
          <div className="absolute top-\[-20%\] left-\[-10%\] w-\[60%\] h-\[60%\] bg-blue-600\/30 rounded-full blur-\[120px\]  mix-blend-screen animate-\[pulse_10s_ease-in-out_infinite\]" \/>
          <div className="absolute top-\[40%\] right-\[-10%\] w-\[50%\] h-\[70%\] bg-teal-500\/20 rounded-full blur-\[140px\]  mix-blend-screen animate-\[pulse_12s_ease-in-out_infinite_2s\]" \/>
          <div className="absolute bottom-\[-30%\] left-\[20%\] w-\[40%\] h-\[50%\] bg-indigo-600\/20 rounded-full blur-\[150px\] mix-blend-screen " \/>
          
          \{\/\* Cyberpunk perspective grid \*\/\}
          <div 
            className="absolute inset-0 opacity-\[0\.15\]" 
            style=\{\{
              backgroundImage: 'linear-gradient\(rgba\(255, 255, 255, 1\) 1px, transparent 1px\), linear-gradient\(90deg, rgba\(255, 255, 255, 1\) 1px, transparent 1px\)',
              backgroundSize: '50px 50px',
              transform: 'perspective\(1000px\) rotateX\(60deg\) scale\(2\.5\) translateY\(-30%\)',
              transformOrigin: 'top center'
            \}\}
          \/>
          \{\/\* Vignette overlay \*\/\}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-\[#201e1f\]\/60 to-\[#201e1f\]" \/>
        <\/div>"""

new_enfoque_bg = """        {/* Deep Space Gradient Background */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(17,24,39,1),rgba(3,7,18,1))] overflow-hidden">
          
          {/* Canvas3D - Partículas 3D flotantes */}
          <div className="absolute inset-0 opacity-15">
            <Canvas3D />
          </div>
          
          {/* Neon Orbs */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#06b6d4]/15 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[#4f46e5]/15 rounded-full blur-[120px] mix-blend-screen" />
        </div>"""

content = re.sub(enfoque_bg_old, new_enfoque_bg, content)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)

