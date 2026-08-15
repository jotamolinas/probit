import React, { useState, useMemo } from "react";
import { 
  DollarSign, 
  Sparkles, 
  Send, 
  Code, 
  Network, 
  TrendingUp, 
  Cloud,
  CheckCircle,
  HelpCircle
} from "lucide-react";

export default function Estimator() {
  // Exchange rate configuration: 7800 PYG per USD (simulated overvalued exchange rate as requested)
  const EXCHANGE_RATE = 7800;

  // Calculador states
  const [softwareType, setSoftwareType] = useState<"none" | "api" | "web" | "mobile">("web");
  const [endpointsTI, setEndpointsTI] = useState<number>(10); // Number of PCs/servers for IT support
  const [adBudget, setAdBudget] = useState<number>(400); // Monthly spending in USD
  const [includeAds, setIncludeAds] = useState<boolean>(true);
  const [hostingLevel, setHostingLevel] = useState<"none" | "shared" | "vps-scalable" | "dedicated">("vps-scalable");

  // Client Metadata
  const [clientName, setClientName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const [clientCompany, setClientCompany] = useState<string>("");

  // Helper values
  const softwarePrices = {
    none: 0,
    api: 600,
    web: 1200,
    mobile: 2400
  };

  const hostingPrices = {
    none: 0,
    shared: 15,
    "vps-scalable": 65,
    dedicated: 180
  };

  // Calculations
  const calculations = useMemo(() => {
    const softwareCost = softwarePrices[softwareType];
    const tiSupportCost = endpointsTI * 20; // $20 USD per endpoint
    const adsCost = includeAds ? adBudget : 0;
    const hostingCost = hostingPrices[hostingLevel];

    const totalUSD = softwareCost + tiSupportCost + adsCost + hostingCost;
    
    // Formula: Multiply by exchange rate and round UP to the nearest 1,000 Guaraníes
    const convertAndRound = (usd: number) => {
      if (usd === 0) return 0;
      const rawPyg = usd * EXCHANGE_RATE;
      return Math.ceil(rawPyg / 1000) * 1000;
    };

    const totalPYG = convertAndRound(totalUSD);

    return {
      subtotals: {
        software: { usd: softwareCost, pyg: convertAndRound(softwareCost) },
        ti: { usd: tiSupportCost, pyg: convertAndRound(tiSupportCost) },
        ads: { usd: adsCost, pyg: convertAndRound(adsCost) },
        hosting: { usd: hostingCost, pyg: convertAndRound(hostingCost) }
      },
      totalUSD,
      totalPYG
    };
  }, [softwareType, endpointsTI, adBudget, includeAds, hostingLevel]);

  // Format Helper
  const formatPYG = (amount: number) => {
    return new Intl.NumberFormat("es-PY", {
      style: "currency",
      currency: "PYG",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount).replace("PYG", "") + " ₲";
  };

  const formatUSD = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(amount);
  };

  // Generate WhatsApp Payload text as required by system guidelines
  const whatsappPayloadText = useMemo(() => {
    const softwareLabel = {
      none: "Ninguno",
      api: "Integración de Sistemas/API ($600)",
      web: "Plataforma Web a Medida Corporativa ($1,200)",
      mobile: "Aplicación Móvil iOS & Android ($2,400)"
    }[softwareType];

    const hostingLabel = {
      none: "Ninguno",
      shared: "Hosting Cloud Corporativo Inicial ($15/mes)",
      "vps-scalable": "Nube Escalable VPS Avanzada ($65/mes)",
      dedicated: "Servidor Dedicado Empresarial ($180/mes)"
    }[hostingLevel];

    const companyStr = clientCompany ? ` de la empresa *${clientCompany}*` : "";
    const nameStr = clientName ? `Hola, soy *${clientName}*${companyStr}. ` : "Hola PROBIT, ";

    return `${nameStr}He configurado una cotización estimada de servicios tecnológicos con los siguientes detalles:

💻 *Desarrollo de Software:* ${softwareLabel}
🌐 *Infraestructura y Soporte TI:* ${endpointsTI} Terminales / Equipos (${formatUSD(endpointsTI * 20)} USD/mes)
📈 *Ads & Estrategia Digital:* ${includeAds ? `Sí, inversión recomendada de ${formatUSD(adBudget)} USD/mes` : "No incluido"}
☁️ *Alojamiento & Hosting:* ${hostingLabel}

📊 *PRESUPUESTO ESTIMADO DE CONVERSIÓN:*
------------------------------------------------
💵 *Total Estimado (USD):* ${formatUSD(calculations.totalUSD)} USD
🇵🇾 *Equivalente Estimado (PYG):* ${formatPYG(calculations.totalPYG)} (Cambio interno de la empresa)

_Acepto que este cálculo es orientativo y deseo que un asesor de PROBIT me contacte para formalizar la propuesta técnica oficial en menos de 48 horas._`;
  }, [clientName, clientCompany, softwareType, endpointsTI, includeAds, adBudget, hostingLevel, calculations]);

  return (
    <div className="bg-slate-950 text-white rounded-2xl border border-slate-800 shadow-xl overflow-hidden" id="estimator-panel">
      
      {/* Mini Title bar */}
      <div className="p-6 border-b border-slate-800/80 bg-slate-900/40" id="est-header">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-100 text-lg">Estimador de Soluciones Corporativas</h3>
            <p className="text-slate-400 text-xs mt-0.5">Calcula al instante tu inversión de renovación TI en Paraguay.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12" id="est-split">
        {/* Sliders and Options (Left 7 columns) */}
        <div className="p-6 md:p-8 lg:col-span-7 space-y-6 border-b lg:border-b-0 lg:border-r border-slate-800/60" id="est-inputs">
          
          {/* Card 1: Software */}
          <div className="space-y-3" id="input-software">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold flex items-center gap-2 text-slate-200">
                <Code className="w-4 h-4 text-sky-400" />
                <span>1. Desarrollo de Software</span>
              </label>
              <span className="text-xs bg-slate-800 px-2.5 py-0.5 rounded-full text-slate-300 font-mono">
                {formatUSD(softwarePrices[softwareType])}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2" id="software-options">
              {(["none", "api", "web", "mobile"] as const).map((type) => {
                const label = {
                  none: "Ninguno",
                  api: "API / Conectividad",
                  web: "Web Corporativo",
                  mobile: "App Móvil de Alto Impacto"
                }[type];
                return (
                  <button
                    key={type}
                    id={`opt-sw-${type}`}
                    onClick={() => setSoftwareType(type)}
                    className={`p-3 text-xs rounded-xl border text-left transition-all ${
                      softwareType === type
                        ? "bg-sky-600/20 border-sky-400 text-sky-100 font-semibold shadow-[0_0_12px_rgba(2,132,199,0.15)]"
                        : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-900/80"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card 2: Infrastructure Support endpoints */}
          <div className="space-y-3" id="input-ti">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold flex items-center gap-2 text-slate-200">
                <Network className="w-4 h-4 text-sky-400" />
                <span>2. Infraestructura TI & Soporte Directo</span>
              </label>
              <span className="text-xs bg-slate-850 px-2.5 py-0.5 rounded-full text-slate-300 font-mono">
                {formatUSD(endpointsTI * 20)} USD
              </span>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80 space-y-3">
              <div className="flex justify-between text-xs text-slate-400">
                <span>Rango: 2 a 100 Equipos/Terminales</span>
                <span className="font-bold text-sky-400">{endpointsTI} Equipos</span>
              </div>
              <input
                id="slider-ti"
                type="range"
                min="2"
                max="100"
                value={endpointsTI}
                onChange={(e) => setEndpointsTI(parseInt(e.target.value))}
                className="w-full accent-sky-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
              <p className="text-[10px] text-slate-500 leading-normal">
                Incluye monitoreo constante remota, helpdesk de guardia ilimitado, y mantenimiento físico bimensual.
              </p>
            </div>
          </div>

          {/* Card 3: Digital Advertising Placement */}
          <div className="space-y-3" id="input-ads">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold flex items-center gap-2 text-slate-200">
                <TrendingUp className="w-4 h-4 text-sky-400" />
                <span>3. Ads y Captación Corporativa</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="chk-ads"
                  type="checkbox"
                  checked={includeAds}
                  onChange={(e) => setIncludeAds(e.target.checked)}
                  className="w-4 h-4 text-sky-600 bg-slate-900 border-slate-700 rounded accent-sky-500"
                />
                <span className="text-xs text-slate-400">Incluir Campañas</span>
              </div>
            </div>

            {includeAds && (
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80 space-y-3 animate-fade-in">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Presupuesto mensual recomendado Google/Meta:</span>
                  <span className="font-bold text-sky-400 font-mono">{formatUSD(adBudget)} USD</span>
                </div>
                <input
                  id="slider-ads"
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={adBudget}
                  onChange={(e) => setAdBudget(parseInt(e.target.value))}
                  className="w-full accent-sky-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                  <span>$100 (Básico)</span>
                  <span>$1.000 (Pyme)</span>
                  <span>$2.000 (Corporaciones)</span>
                </div>
              </div>
            )}
          </div>

          {/* Card 4: Cloud Hosting & VPS magnitude */}
          <div className="space-y-3" id="input-hosting">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold flex items-center gap-2 text-slate-200">
                <Cloud className="w-4 h-4 text-sky-400" />
                <span>4. Hosting VPS & Nube Escalable</span>
              </label>
              <span className="text-xs bg-slate-800 px-2.5 py-0.5 rounded-full text-slate-300 font-mono">
                {formatUSD(hostingPrices[hostingLevel])} / mes
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2" id="hosting-options">
              {(["none", "shared", "vps-scalable", "dedicated"] as const).map((level) => {
                const label = {
                  none: "Ninguno",
                  shared: "Web Sencilla Pyme",
                  "vps-scalable": "Nube VPS Dedicada",
                  dedicated: "Cluster Concurrencia Máxima"
                }[level];
                return (
                  <button
                    key={level}
                    id={`opt-host-${level}`}
                    onClick={() => setHostingLevel(level)}
                    className={`p-3 text-xs rounded-xl border text-left transition-all ${
                      hostingLevel === level
                        ? "bg-sky-600/20 border-sky-400 text-sky-100 font-semibold shadow-[0_0_12px_rgba(2,132,199,0.15)]"
                        : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-900/80"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Calculated Totals and WhatsApp Package Output (Right 5 columns) */}
        <div className="p-6 md:p-8 lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col justify-between" id="est-outputs-sidebar">
          
          <div className="space-y-6" id="est-totals-box">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Desglose Estimado de Conversión
            </h4>

            {/* Subtotal List */}
            <div className="space-y-3 border-y border-slate-800 py-4 text-xs" id="subtotal-list">
              <div className="flex justify-between">
                <span className="text-slate-400">Desarrollo Software</span>
                <span className="font-mono text-slate-200">{formatUSD(calculations.subtotals.software.usd)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Infraestructura TI Soporte</span>
                <span className="font-mono text-slate-200">{formatUSD(calculations.subtotals.ti.usd)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-semibold">Ads & Adquisicion</span>
                <span className="font-mono text-slate-200">{formatUSD(calculations.subtotals.ads.usd)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Cloud Hosting / VPS</span>
                <span className="font-mono text-slate-200">{formatUSD(calculations.subtotals.hosting.usd)}</span>
              </div>
            </div>

            {/* Master Totals */}
            <div className="space-y-2" id="grand-totals">
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-slate-300">Total en Dólares (USD):</span>
                <span className="text-2xl font-black text-sky-400 font-mono tracking-tight">
                  {formatUSD(calculations.totalUSD)}
                </span>
              </div>
              <div className="flex flex-col bg-slate-80/50 p-3 rounded-lg border border-slate-800/80">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Total en Guaraníes (PYG):</span>
                  <span className="text-xl font-bold font-mono text-amber-500">
                    {formatPYG(calculations.totalPYG)}
                  </span>
                </div>
                <p className="text-[9px] text-slate-500 mt-1 leading-snug">
                  * Tipo de cambio referencial Probit de 1 USD = {EXCHANGE_RATE} ₲. Redondeado automáticamente hacia arriba al millar más cercano, garantizando previsibilidad operativa.
                </p>
              </div>
            </div>

            {/* Form Fields to customize output */}
            <div className="space-y-2 pt-2 border-t border-slate-800" id="form-estimator-inputs">
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Tus Datos para el Mensaje:</span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  id="est-name"
                  type="text"
                  placeholder="Tu Nombre"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs focus:outline-none focus:border-sky-500"
                />
                <input
                  id="est-company"
                  type="text"
                  placeholder="Tu Empresa"
                  value={clientCompany}
                  onChange={(e) => setClientCompany(e.target.value)}
                  className="bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>
          </div>

          {/* Action Trigger Button */}
          <div className="mt-8 pt-4 border-t border-slate-800/80 space-y-3" id="est-ctas">
            <a
              id="btn-whatsapp-estimate"
              href={`https://api.whatsapp.com/send?phone=595981000000&text=${encodeURIComponent(whatsappPayloadText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-amber-600 hover:bg-amber-500 active:scale-[0.98] text-white py-3 px-4 rounded-xl font-semibold text-center text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_4px_12px_rgba(217,119,6,0.2)]"
            >
              <Send className="w-4 h-4 shrink-0" />
              <span>Enviar Cotización por WhatsApp</span>
            </a>
            
            <p className="text-[10px] text-slate-500 text-center leading-normal">
              Se creará un enlace pre-formateado con los precios en Dólares y Guaraníes para evitar retrasos de presupuesto.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
