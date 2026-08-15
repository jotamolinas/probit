import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# Replace bg-[#201e1f] with a deep, modern slate/blue background
content = content.replace('bg-[#201e1f]', 'bg-[#030712]')
content = content.replace('to-[#041d24]', 'to-[#0a1128]')

# We can also add a sleek radial gradient or grid mask to it
hero_background_block = r"""        \{\/\* Futuristic Pinterest-style tech wallpaper background \*\/\}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-\[#030712\] via-\[#030712\]\/90 to-\[#0a1128\]">
          \{\/\* Deep celestial gradient mesh \*\/\}
          <div className="absolute top-\[-20%\] left-\[-10%\] w-\[60%\] h-\[60%\] bg-blue-600\/30 rounded-full blur-\[120px\]  mix-blend-screen animate-\[pulse_10s_ease-in-out_infinite\]" \/>
          <div className="absolute bottom-\[-20%\] right-\[-10%\] w-\[50%\] h-\[50%\] bg-teal-500\/20 rounded-full blur-\[100px\] mix-blend-screen animate-\[pulse_12s_ease-in-out_infinite_reverse\]" \/>"""

hero_new_background = """        {/* Futuristic Tech Grid & Neon Background */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[#030712]">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
          
          {/* Neon Glow Meshes */}
          <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-[#3b82f6]/20 rounded-full blur-[120px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 right-1/4 w-[40%] h-[40%] bg-cyan-500/15 rounded-full blur-[100px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite_reverse]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#3b82f6]/10 rounded-full blur-[150px] mix-blend-screen" />"""

content = re.sub(hero_background_block, hero_new_background, content)

# And similarly for the enfoque section
enfoque_background_block = r"""        \{\/\* Futuristic Pinterest-style tech wallpaper background \*\/\}
        <div className="absolute inset-0 z-0 pointer-events-none bg-\[#030712\]">
          \{\/\* Deep celestial gradient mesh \*\/\}
          <div className="absolute top-\[-20%\] left-\[-10%\] w-\[60%\] h-\[60%\] bg-blue-600\/30 rounded-full blur-\[120px\]  mix-blend-screen animate-\[pulse_10s_ease-in-out_infinite\]" \/>
          <div className="absolute bottom-\[-20%\] right-\[-10%\] w-\[50%\] h-\[50%\] bg-teal-500\/20 rounded-full blur-\[100px\] mix-blend-screen animate-\[pulse_12s_ease-in-out_infinite_reverse\]" \/>"""

enfoque_new_background = """        {/* Futuristic Tech Grid & Neon Background */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[#030712]">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
          
          {/* Neon Glow Meshes */}
          <div className="absolute -top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#3b82f6]/20 rounded-full blur-[120px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/15 rounded-full blur-[100px] mix-blend-screen animate-[pulse_12s_ease-in-out_infinite_reverse]" />"""

content = re.sub(enfoque_background_block, enfoque_new_background, content)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
