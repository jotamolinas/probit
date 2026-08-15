const fs = require('fs');
let content = fs.readFileSync('src/components/InteractivePreview.tsx', 'utf8');

const oldFooter = `      <footer className="bg-[#020617] pt-0 pb-10 px-6 md:px-12 relative z-20" id="probit-footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          
          {/* Identity & Link */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div>
              <img 
                src={"/logo.png"} 
                alt="PROBIT - Tecnología Corporativa" 
                className="h-10 md:h-12 w-auto object-contain cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-300 rounded-md bg-white p-2" 
                loading="lazy"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
            </div>
            <span className="hidden md:block text-slate-500">|</span>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-xs md:text-sm text-slate-300 font-medium tracking-wide">
                Tu informática en las nubes
              </p>
            </div>
          </div>

          {/* Copyright Area */}
          <div>
            <span className="text-xs text-slate-400 tracking-wide font-medium">
              © 2026 PROBIT. Todos los derechos reservados. | ventas@probit.com.py
            </span>
          </div>

        </div>
      </footer>`;

const newFooter = `      <footer className="bg-white pt-16 md:pt-24 pb-10 px-6 md:px-12 relative z-20" id="probit-footer">
        {/* Soft SVG Wave Transition from Dark to White */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#020617"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#020617"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#020617"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left relative z-10">
          
          {/* Identity & Link */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div>
              <img 
                src={"/logo.png"} 
                alt="PROBIT - Tecnología Corporativa" 
                className="h-10 md:h-12 w-auto object-contain cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-300 rounded-md p-1" 
                loading="lazy"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
            </div>
            <span className="hidden md:block text-slate-300">|</span>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-xs md:text-sm text-slate-800 font-bold tracking-wide">
                Tu informática en las nubes
              </p>
            </div>
          </div>

          {/* Copyright Area */}
          <div>
            <span className="text-xs text-slate-600 tracking-wide font-medium">
              © 2026 PROBIT. Todos los derechos reservados. | ventas@probit.com.py
            </span>
          </div>

        </div>
      </footer>`;

if (content.includes('id="probit-footer"')) {
  content = content.replace(oldFooter, newFooter);
  fs.writeFileSync('src/components/InteractivePreview.tsx', content);
} else {
  console.log("Footer not found");
}

