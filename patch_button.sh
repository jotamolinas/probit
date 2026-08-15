cat << 'INNER_EOF' > /tmp/target.txt
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5" id="hero-cta-desktop">
                <button
                  id="btn-hero-primary"
                  onClick={() => window.open(`https://wa.me/595983440021?text=${encodeURIComponent('Hola, quisiera agendar una asesoría corporativa gratuita con PROBIT.')}`, '_blank')}
                  className="px-6 py-4 rounded-xl font-extrabold text-sm bg-cyan-400 text-slate-950 hover:bg-cyan-300 active:scale-[0.99] transition-all text-center shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Agendar Asesoría Corporativa Gratuita</span>
                  <Sparkles className="w-4 h-4 text-blue-700 group-hover:rotate-12 transition-transform animate-pulse" />
                </button>
INNER_EOF

cat << 'INNER_EOF' > /tmp/replacement.txt
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5" id="hero-cta-desktop">
                <div className="relative group flex-1 sm:flex-none">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 rounded-xl blur-md opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-[pulse_3.5s_ease-in-out_infinite]"></div>
                  <button
                    id="btn-hero-primary"
                    onClick={() => window.open(`https://wa.me/595983440021?text=${encodeURIComponent('Hola, quisiera agendar una asesoría corporativa gratuita con PROBIT.')}`, '_blank')}
                    className="relative w-full px-6 py-4 rounded-xl font-extrabold text-sm bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 text-slate-950 hover:brightness-110 active:scale-[0.99] transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Agendar Asesoría Corporativa Gratuita</span>
                    <Sparkles className="w-4 h-4 text-blue-900 group-hover:rotate-12 transition-transform animate-pulse" />
                  </button>
                </div>
INNER_EOF

sed -i -e '/<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5" id="hero-cta-desktop">/,/<\/button>/!b' \
       -e '/<button/,/<\/button>/!b' \
       -e '/<\/button>/r /tmp/replacement.txt' \
       -e '/<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5" id="hero-cta-desktop">/,/<\/button>/d' src/components/InteractivePreview.tsx
