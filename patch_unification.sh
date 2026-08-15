cat << 'INNER_EOF' > /tmp/target_header.txt
      {/* TOP DIRECT NAVIGATION BAR */}
      <header className="absolute top-0 w-full z-50 bg-slate-900/20 backdrop-blur-md border-b border-white/5 pointer-events-auto" id="probit-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" id="header-container">
          
          {/* Logo Original */}
          <div 
            className="cursor-pointer active:scale-95 transition-all duration-300 flex items-center" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img 
              src={logo3} 
              alt="PROBIT" 
              className="h-10 w-auto object-contain mix-blend-screen brightness-125 contrast-125" 
            />
          </div>
        </div>
      </header>

      {/* HERO SECTION - REDISEÑO DE VANGUARDIA */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden" id="inicio-section">
        
        {/* Futuristic Pinterest-style tech wallpaper background */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-slate-900 via-slate-900/90 to-[#041d24]">
INNER_EOF

cat << 'INNER_EOF' > /tmp/replacement_header.txt
      {/* TOP DIRECT NAVIGATION BAR */}
      <header className="absolute top-0 w-full z-50 bg-[#201e1f] pointer-events-auto" id="probit-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex items-center justify-center sm:justify-start" id="header-container">
          
          {/* Logo Original */}
          <div 
            className="cursor-pointer transition-all duration-300 flex items-center mt-4" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img 
              src={logo3} 
              alt="PROBIT" 
              className="h-16 md:h-20 w-auto object-contain mix-blend-screen" 
            />
          </div>
        </div>
      </header>

      {/* HERO SECTION - REDISEÑO DE VANGUARDIA */}
      <section className="relative pt-36 pb-24 bg-[#201e1f] text-white overflow-hidden" id="inicio-section">
        
        {/* Futuristic Pinterest-style tech wallpaper background */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#201e1f] via-[#201e1f]/90 to-[#041d24]">
INNER_EOF

cat << 'INNER_EOF' > /tmp/target_hero_content.txt
          <div className="lg:col-span-7 relative" id="hero-text-wrapper">
            <div className="absolute -inset-3 bg-gradient-to-tr from-blue-400 to-teal-400 rounded-3xl blur-2xl opacity-15 -z-10 animate-pulse"></div>
            <div className="backdrop-blur-lg bg-slate-900/40 border border-white/10 p-8 rounded-2xl space-y-7 text-left shadow-2xl relative" id="hero-text-container">
              
              {/* Aggressive Typographic H1 with official brand and slogan unificado */}
            <div 
              className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-3 sm:px-4 py-2 sm:py-2.5 rounded-3xl sm:rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 mb-5 shadow-[0_0_15px_rgba(20,184,166,0.15)] cursor-pointer hover:bg-teal-500/20 transition-all" 
              id="hero-pill"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {/* Logo Original */}
              <img 
                src={logo3} 
                alt="PROBIT" 
                className="h-10 w-auto object-contain mix-blend-screen brightness-125 contrast-125" 
              />
              
              {/* Divider (desktop only) */}
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-teal-500/50"></span>
              
              {/* Slogan */}
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-teal-300">
                Tu informática en las nubes
              </span>
            </div>
INNER_EOF

cat << 'INNER_EOF' > /tmp/replacement_hero_content.txt
          <div className="lg:col-span-7 relative" id="hero-text-wrapper">
            <div className="space-y-7 text-left relative" id="hero-text-container">
              
              {/* Aggressive Typographic H1 with official brand and slogan unificado */}
            <div 
              className="inline-flex items-center gap-3 mb-2" 
              id="hero-pill"
            >
              {/* Slogan */}
              <span className="text-sm sm:text-base md:text-lg font-black tracking-widest uppercase text-teal-400">
                Tu informática en las nubes
              </span>
            </div>
INNER_EOF

# Apply replacements
awk '
BEGIN {
  RS=""
  target_header=""
  while((getline line < "/tmp/target_header.txt") > 0) {
    target_header = target_header (target_header=="" ? "" : "\n") line
  }
  close("/tmp/target_header.txt")
  
  replacement_header=""
  while((getline line < "/tmp/replacement_header.txt") > 0) {
    replacement_header = replacement_header (replacement_header=="" ? "" : "\n") line
  }
  close("/tmp/replacement_header.txt")
}
{
  # Cannot easily use awk string replacement for multiline without loading whole file
}' src/components/InteractivePreview.tsx

