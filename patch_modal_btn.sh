cat << 'INNER_EOF' > /tmp/target2.txt
                  <button
                    onClick={() => {
                      setActiveExplainService(null);
                      // Go directly to WhatsApp
                      window.open(`https://wa.me/595983440021?text=${encodeURIComponent('Hola, me interesa ' + srvExp.realCta)}`, '_blank');
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-slate-950 text-white font-extrabold text-xs text-center transition-all cursor-pointer shadow-md shadow-blue-600/10 flex items-center justify-center gap-1.5"
                  >
                    <span>{srvExp.realCta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
INNER_EOF

cat << 'INNER_EOF' > /tmp/replacement2.txt
                  <div className="relative group w-full sm:w-auto">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 rounded-xl blur-md opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-[pulse_3.5s_ease-in-out_infinite]"></div>
                    <button
                      onClick={() => {
                        setActiveExplainService(null);
                        // Go directly to WhatsApp
                        window.open(`https://wa.me/595983440021?text=${encodeURIComponent('Hola, me interesa ' + srvExp.realCta)}`, '_blank');
                      }}
                      className="relative w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 text-slate-950 hover:brightness-110 font-extrabold text-xs text-center transition-all cursor-pointer shadow-md shadow-blue-600/10 flex items-center justify-center gap-1.5"
                    >
                      <span>{srvExp.realCta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
INNER_EOF

sed -i -e '/<button/,/<\/button>/!b' \
       -e '/<button/,/<\/button>/!b' \
       -e '/<\/button>/r /tmp/replacement2.txt' \
       -e '/<button/,/<\/button>/d' src/components/InteractivePreview.tsx
