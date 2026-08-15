import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

hero_bg_old = r"""        \{\/\* Neon Tech Grid Background \*\/\}
        <div className="absolute inset-0 z-0 pointer-events-none bg-\[#020617\] overflow-hidden">
          \{\/\* Subtle Grid Pattern \*\/\}
          <div className="absolute inset-0 bg-\[linear-gradient\(rgba\(59,130,246,0\.15\)_1px,transparent_1px\),linear-gradient\(90deg,rgba\(59,130,246,0\.15\)_1px,transparent_1px\)\] bg-\[size:40px_40px\] \[mask-image:radial-gradient\(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%\)\]"><\/div>
          
          \{\/\* Neon Glow Meshes \*\/\}
          <div className="absolute top-0 left-1\/4 w-\[50%\] h-\[50%\] bg-\[#3b82f6\]\/20 rounded-full blur-\[120px\] mix-blend-screen animate-\[pulse_8s_ease-in-out_infinite\]" \/>
          <div className="absolute bottom-0 right-1\/4 w-\[40%\] h-\[40%\] bg-cyan-500\/15 rounded-full blur-\[100px\] mix-blend-screen animate-\[pulse_10s_ease-in-out_infinite_reverse\]" \/>
          <div className="absolute top-1\/2 left-1\/2 -translate-x-1\/2 -translate-y-1\/2 w-\[60%\] h-\[60%\] bg-\[#3b82f6\]\/10 rounded-full blur-\[150px\] mix-blend-screen" \/>
          
          \{\/\* Gradient Overlay for blending \*\/\}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-\[#020617\]\/50 to-\[#020617\]" \/>
        <\/div>"""

new_hero_bg = """        {/* Deep Space Gradient Background */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(17,24,39,1),rgba(3,7,18,1))] overflow-hidden">
          
          {/* Canvas3D - Partículas 3D flotantes */}
          <div className="absolute inset-0 opacity-15">
            <Canvas3D />
          </div>
          
          {/* Neon Orbs */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#06b6d4]/15 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[#4f46e5]/15 rounded-full blur-[120px] mix-blend-screen" />
        </div>"""

content = re.sub(hero_bg_old, new_hero_bg, content)

# Remove bg-[#020617] from <section id="inicio-section"> and add it to the wrapper if needed, 
# actually bg-[#020617] is fine to leave as fallback.

enfoque_bg_old = r"""        \{\/\* Neon Tech Grid Background \*\/\}
        <div className="absolute inset-0 z-0 pointer-events-none bg-\[#020617\] overflow-hidden">
          \{\/\* Subtle Grid Pattern \*\/\}
          <div className="absolute inset-0 bg-\[linear-gradient\(rgba\(59,130,246,0\.15\)_1px,transparent_1px\),linear-gradient\(90deg,rgba\(59,130,246,0\.15\)_1px,transparent_1px\)\] bg-\[size:40px_40px\] \[mask-image:radial-gradient\(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%\)\]"><\/div>
          
          \{\/\* Neon Glow Meshes \*\/\}
          <div className="absolute top-\[20%\] left-\[-10%\] w-\[50%\] h-\[50%\] bg-\[#3b82f6\]\/15 rounded-full blur-\[120px\] mix-blend-screen animate-\[pulse_10s_ease-in-out_infinite\]" \/>
          <div className="absolute bottom-\[-10%\] right-\[-10%\] w-\[50%\] h-\[50%\] bg-cyan-500\/15 rounded-full blur-\[100px\] mix-blend-screen animate-\[pulse_12s_ease-in-out_infinite_reverse\]" \/>
          
          \{\/\* Gradient Overlay for blending \*\/\}
          <div className="absolute inset-0 bg-gradient-to-b from-\[#020617\] via-transparent to-\[#020617\]" \/>
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

# Unificar el contraste
content = re.sub(r'text-white(?![^"]*drop-shadow)', r'text-white drop-shadow-sm', content)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)

