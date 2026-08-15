import sys

with open('src/components/InteractivePreview.tsx', 'r') as f:
    content = f.read()

target1 = """      {/* HERO SECTION - REDISEÑO DE VANGUARDIA */}
      <section className="relative pt-36 pb-24 bg-[#201e1f] text-white overflow-hidden" id="inicio-section">
        
        {/* Futuristic Pinterest-style tech wallpaper background */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#201e1f] via-[#201e1f]/90 to-[#041d24]">"""

replacement1 = """      {/* HERO SECTION - REDISEÑO DE VANGUARDIA */}
      <section className="relative pt-36 pb-24 bg-[#000000] text-white overflow-hidden" id="inicio-section">
        
        {/* Futuristic Pinterest-style tech wallpaper background */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#000000] via-[#000000]/90 to-[#041d24]">"""

target_footer = """      {/* FOOTER */}
      <footer className="py-4 px-6 md:py-4 md:px-12 relative z-20" style={{ backgroundColor: "#201e1f" }} id="probit-footer">"""

replacement_footer = """      {/* FOOTER */}
      <footer className="py-4 px-6 md:py-4 md:px-12 relative z-20" style={{ backgroundColor: "#000000" }} id="probit-footer">"""

if target1 in content:
    content = content.replace(target1, replacement1)
    print("Replaced hero bg")
else:
    print("Hero bg not found")

if target_footer in content:
    content = content.replace(target_footer, replacement_footer)
    print("Replaced footer bg")
else:
    print("Footer bg not found")

with open('src/components/InteractivePreview.tsx', 'w') as f:
    f.write(content)
