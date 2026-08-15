import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

old_section = r"""      \{\/\* NUESTRA FILOSOFÍA SECTION \*\/\}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative z-10" id="nuestra-filosofia-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-black text-slate-950 font-display mb-1">Nuestra Filosofía<\/h2>
            <p className="text-slate-600 leading-relaxed">Lo que somos y los principios que guían nuestras decisiones<\/p>
          <\/div>

          \{\/\* ESENCIA - Top 3 Cards \*\/\}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            \{\/\* TARJETA 1 \(Misión\) \*\/\}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 border-t-4 border-t-blue-600 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <Target className="w-8 h-8 text-blue-600 mb-4" \/>
              <h3 className="text-lg font-black text-slate-950 font-display mb-3">Misión<\/h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Brindar tranquilidad tecnológica a las empresas a través de soluciones robustas de infraestructura, hosting y desarrollo de software, asegurando que tu operación nunca se detenga y potenciando tu crecimiento sostenido\.
              <\/p>
            <\/div>

            \{\/\* TARJETA 2 \(Visión\) \*\/\}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 border-t-4 border-t-blue-600 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <Eye className="w-8 h-8 text-blue-600 mb-4" \/>
              <h3 className="text-lg font-black text-slate-950 font-display mb-3">Visión<\/h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Consolidarnos como el partner tecnológico de referencia en Paraguay, reconocidos por nuestra capacidad de respuesta inmediata, redundancia de servicios y ser el motor de tu transformación digital\.
              <\/p>
            <\/div>

            \{\/\* TARJETA 3 \(Objetivos\) \*\/\}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 border-t-4 border-t-blue-600 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
              <Zap className="w-8 h-8 text-blue-600 mb-4" \/>
              <h3 className="text-lg font-black text-slate-950 font-display mb-3">Objetivos<\/h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Garantizar disponibilidad absoluta mediante infraestructura robusta, desarrollar software a medida que elimine fricciones y actuar como tu socio tecnológico de confianza a largo plazo\.
              <\/p>
            <\/div>
          <\/div>

          \{\/\* VALORES - Bottom 4 Cards \*\/\}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            \{\/\* TARJETA 1 \(Redundancia\) \*\/\}
            <div className="bg-slate-900\/5 backdrop-blur-md border border-white\/40 rounded-3xl p-6 flex flex-col items-center text-center transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
              <div className="bg-blue-50 p-3 rounded-full mb-4">
                <Shield className="w-8 h-8 text-blue-600" \/>
              <\/div>
              <h3 className="text-lg font-black text-slate-950 mb-2">Redundancia<\/h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No dejamos nada al azar\. Sistemas con respaldos y guardias preparadas para cualquier contingencia\.
              <\/p>
            <\/div>

            \{\/\* TARJETA 2 \(Proactividad\) \*\/\}
            <div className="bg-slate-900\/5 backdrop-blur-md border border-white\/40 rounded-3xl p-6 flex flex-col items-center text-center transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
              <div className="bg-blue-50 p-3 rounded-full mb-4">
                <Activity className="w-8 h-8 text-blue-600" \/>
              <\/div>
              <h3 className="text-lg font-black text-slate-950 mb-2">Proactividad<\/h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nos anticipamos a los problemas antes de que afecten tu operación\. Nos ocupamos para que tú descanses\.
              <\/p>
            <\/div>

            \{\/\* TARJETA 3 \(Innovación\) \*\/\}
            <div className="bg-slate-900\/5 backdrop-blur-md border border-white\/40 rounded-3xl p-6 flex flex-col items-center text-center transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
              <div className="bg-blue-50 p-3 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" \/>
              <\/div>
              <h3 className="text-lg font-black text-slate-950 mb-2">Innovación<\/h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Desarrollamos tecnología pensando exclusivamente en el impacto positivo del negocio que confía en nosotros\.
              <\/p>
            <\/div>

            \{\/\* TARJETA 4 \(Transparencia\) \*\/\}
            <div className="bg-slate-900\/5 backdrop-blur-md border border-white\/40 rounded-3xl p-6 flex flex-col items-center text-center transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
              <div className="bg-blue-50 p-3 rounded-full mb-4">
                <Users className="w-8 h-8 text-blue-600" \/>
              <\/div>
              <h3 className="text-lg font-black text-slate-950 mb-2">Transparencia<\/h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hablamos claro, cumplimos los acuerdos y nos ponemos la camiseta de cada empresa como socios de crecimiento\.
              <\/p>
            <\/div>
          <\/div>
        <\/div>
      <\/section>"""

new_section = """      {/* NUESTRA FILOSOFÍA SECTION */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-slate-50 to-white relative z-10" id="nuestra-filosofia-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 font-display mb-2">Nuestra Filosofía</h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">Lo que somos y los principios que guían nuestras decisiones</p>
          </div>

          {/* ESENCIA - Top 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-3 md:mb-6">
            {/* TARJETA 1 (Misión) */}
            <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100 border-l-4 md:border-l-0 md:border-t-4 border-l-[#3b82f6] md:border-t-[#3b82f6] shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-row md:flex-col items-center md:text-center text-left gap-4 md:gap-0">
              <Target className="w-6 h-6 md:w-8 md:h-8 text-[#3b82f6] md:mb-4 shrink-0" />
              <div>
                <h3 className="text-base md:text-lg font-black text-slate-950 font-display md:mb-3">Misión</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Brindar tranquilidad tecnológica a las empresas a través de soluciones robustas de infraestructura, asegurando que tu operación nunca se detenga.
                </p>
              </div>
            </div>

            {/* TARJETA 2 (Visión) */}
            <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100 border-l-4 md:border-l-0 md:border-t-4 border-l-[#3b82f6] md:border-t-[#3b82f6] shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-row md:flex-col items-center md:text-center text-left gap-4 md:gap-0">
              <Eye className="w-6 h-6 md:w-8 md:h-8 text-[#3b82f6] md:mb-4 shrink-0" />
              <div>
                <h3 className="text-base md:text-lg font-black text-slate-950 font-display md:mb-3">Visión</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Consolidarnos como el partner tecnológico de referencia en Paraguay, reconocidos por nuestra capacidad de respuesta y redundancia de servicios.
                </p>
              </div>
            </div>

            {/* TARJETA 3 (Objetivos) */}
            <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100 border-l-4 md:border-l-0 md:border-t-4 border-l-[#3b82f6] md:border-t-[#3b82f6] shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-row md:flex-col items-center md:text-center text-left gap-4 md:gap-0">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-[#3b82f6] md:mb-4 shrink-0" />
              <div>
                <h3 className="text-base md:text-lg font-black text-slate-950 font-display md:mb-3">Objetivos</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Garantizar disponibilidad absoluta mediante infraestructura robusta y actuar como tu socio tecnológico de confianza a largo plazo.
                </p>
              </div>
            </div>
          </div>

          {/* VALORES - Bottom 4 Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            
            {/* TARJETA 1 (Redundancia) */}
            <div className="bg-slate-900/5 backdrop-blur-md border border-slate-200/50 rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col md:items-center md:text-center text-left transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
              <div className="bg-blue-50 p-2 md:p-3 rounded-full mb-3 w-fit md:mx-auto">
                <Shield className="w-5 h-5 md:w-8 md:h-8 text-[#3b82f6]" />
              </div>
              <h3 className="text-sm md:text-lg font-black text-slate-950 mb-1.5 md:mb-2">Redundancia</h3>
              <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed hidden sm:block">
                No dejamos nada al azar. Sistemas con respaldos y guardias preparadas.
              </p>
            </div>

            {/* TARJETA 2 (Proactividad) */}
            <div className="bg-slate-900/5 backdrop-blur-md border border-slate-200/50 rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col md:items-center md:text-center text-left transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
              <div className="bg-blue-50 p-2 md:p-3 rounded-full mb-3 w-fit md:mx-auto">
                <Activity className="w-5 h-5 md:w-8 md:h-8 text-[#3b82f6]" />
              </div>
              <h3 className="text-sm md:text-lg font-black text-slate-950 mb-1.5 md:mb-2">Proactividad</h3>
              <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed hidden sm:block">
                Nos anticipamos a los problemas antes de que afecten tu operación.
              </p>
            </div>

            {/* TARJETA 3 (Innovación) */}
            <div className="bg-slate-900/5 backdrop-blur-md border border-slate-200/50 rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col md:items-center md:text-center text-left transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
              <div className="bg-blue-50 p-2 md:p-3 rounded-full mb-3 w-fit md:mx-auto">
                <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-[#3b82f6]" />
              </div>
              <h3 className="text-sm md:text-lg font-black text-slate-950 mb-1.5 md:mb-2">Innovación</h3>
              <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed hidden sm:block">
                Desarrollamos tecnología pensando en el impacto positivo del negocio.
              </p>
            </div>

            {/* TARJETA 4 (Transparencia) */}
            <div className="bg-slate-900/5 backdrop-blur-md border border-slate-200/50 rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col md:items-center md:text-center text-left transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
              <div className="bg-blue-50 p-2 md:p-3 rounded-full mb-3 w-fit md:mx-auto">
                <Users className="w-5 h-5 md:w-8 md:h-8 text-[#3b82f6]" />
              </div>
              <h3 className="text-sm md:text-lg font-black text-slate-950 mb-1.5 md:mb-2">Transparencia</h3>
              <p className="text-[10px] md:text-xs text-slate-600 leading-relaxed hidden sm:block">
                Hablamos claro y nos ponemos la camiseta como socios de crecimiento.
              </p>
            </div>
          </div>
        </div>
      </section>"""

content = re.sub(old_section, new_section, content, flags=re.MULTILINE)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)

