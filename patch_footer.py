import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# 1. Update the Footer background and logo
footer_target = """      <footer className="bg-[#000000] py-10 px-6 md:px-12 relative z-20" id="probit-footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          {/* Identity & Link */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div 
              style={{ WebkitMaskImage: 'radial-gradient(circle, black 70%, transparent 100%)', maskImage: 'radial-gradient(circle, black 70%, transparent 100%)' }}
            >
              <img 
                src={logo3} 
                alt="PROBIT - Tecnología Corporativa" 
                className="h-12 md:h-16 w-auto object-contain" 
                loading="lazy"
              />
            </div>"""

footer_replacement = """      <footer className="bg-[#060b19] py-10 px-6 md:px-12 relative z-20" id="probit-footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          {/* Identity & Link */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div>
              <img 
                src={logo3} 
                alt="PROBIT - Tecnología Corporativa" 
                className="h-12 md:h-16 w-auto object-contain mix-blend-screen" 
                loading="lazy"
              />
            </div>"""

if footer_target in content:
    content = content.replace(footer_target, footer_replacement)
    print("Footer replaced successfully.")
else:
    print("Footer target not found.")

# 2. Optionally update the conversion section to match perfectly
conv_target = """      {/* FINAL B2B LEAD CONVERSION SECTION - CONTENEDOR GLASSMORPHIC & SWIPE-TO-ACTION */}
      <section className="py-24 bg-transparent relative z-10" id="conversion-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-150 px-3.5 py-1.5 rounded-full inline-block">
              Compromiso de Respuesta
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-display" id="conversion-title">
              ¿Listo para optimizar el rendimiento tecnológico de tu organización?
            </h2>
            
            <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">"""

conv_replacement = """      {/* FINAL B2B LEAD CONVERSION SECTION - CONTENEDOR GLASSMORPHIC & SWIPE-TO-ACTION */}
      <section className="py-24 bg-[#060b19] relative z-10" id="conversion-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-900/30 border border-emerald-800/50 px-3.5 py-1.5 rounded-full inline-block">
              Compromiso de Respuesta
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-display" id="conversion-title">
              ¿Listo para optimizar el rendimiento tecnológico de tu organización?
            </h2>
            
            <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">"""

if conv_target in content:
    content = content.replace(conv_target, conv_replacement)
    print("Conversion section replaced successfully.")
else:
    print("Conversion target not found.")

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
