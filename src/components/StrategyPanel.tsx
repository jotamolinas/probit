import React, { useState } from "react";
import { 
  VISUAL_IDENTITY, 
  COPY_DECK, 
  ANIMATION_RECOMMENDATIONS, 
  DesignToken 
} from "../data/proposalData";
import { 
  Copy, 
  Check, 
  Palette, 
  Type, 
  FileText, 
  Sparkles, 
  Layers, 
  Monitor, 
  Compass, 
  Zap,
  Info
} from "lucide-react";

export default function StrategyPanel() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"visual" | "copywriting" | "ux">("visual");

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden" id="strategy-panel">
      {/* Panel Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-50/70">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-semibold mb-2" id="consultant-badge">
              <Compass className="w-3.5 h-3.5" />
              <span>Informe de Consultoría UX/UI</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight" id="panel-title">
              Estrategia de Rediseño y Copywriting B2B
            </h2>
            <p className="text-sm text-slate-500 mt-1" id="panel-desc">
              Define las bases estratégicas para el reposicionamiento de PROBIT Paraguay.
            </p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-slate-200 mt-6 -mb-6" id="panel-tabs">
          <button
            id="tab-visual"
            onClick={() => setActiveTab("visual")}
            className={`pb-3 px-4 font-medium text-sm border-b-2 transition-all flex items-center gap-2 ${
              activeTab === "visual"
                ? "border-sky-600 text-sky-600 font-semibold"
                : "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300"
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>1. Identidad Visual</span>
          </button>
          <button
            id="tab-copy"
            onClick={() => setActiveTab("copywriting")}
            className={`pb-3 px-4 font-medium text-sm border-b-2 transition-all flex items-center gap-2 ${
              activeTab === "copywriting"
                ? "border-sky-600 text-sky-600 font-semibold"
                : "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>2. Copywriting Completo</span>
          </button>
          <button
            id="tab-ux"
            onClick={() => setActiveTab("ux")}
            className={`pb-3 px-4 font-medium text-sm border-b-2 transition-all flex items-center gap-2 ${
              activeTab === "ux"
                ? "border-sky-600 text-sky-600 font-semibold"
                : "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>3. Recomendaciones UX</span>
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="p-6 md:p-8" id="tab-content-container">
        
        {/* PANEL 1: IDENTIDAD VISUAL */}
        {activeTab === "visual" && (
          <div className="space-y-8 animate-fade-in" id="panel-visual-content">
            {/* Concept Summary */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50/40 p-5 rounded-xl border border-sky-100 flex gap-4">
              <div className="p-3 bg-white rounded-lg h-fit text-sky-600 shadow-sm border border-sky-50">
                <Layers className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-base" id="theme-heading">
                  Concepto: {VISUAL_IDENTITY.themeName}
                </h3>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed" id="theme-summary">
                  {VISUAL_IDENTITY.summary}
                </p>
              </div>
            </div>

            {/* Colors Grid */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2" id="colors-sub">
                <span>Paleta de Colores Sugerida (CSS & Tailwind Ready)</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="color-cards-grid">
                {VISUAL_IDENTITY.palette.map((color: DesignToken, i: number) => (
                  <div key={i} className="border border-slate-150 rounded-xl p-4 flex gap-4 bg-slate-50/30 hover:bg-slate-50 transition-colors" id={`color-card-${i}`}>
                    {/* Visual Color Block */}
                    <div 
                      className="w-16 h-16 rounded-lg shadow-inner shrink-0 border border-slate-200/50 flex items-center justify-center relative group" 
                      style={{ backgroundColor: color.hex }}
                    >
                      <button
                        onClick={() => copyToClipboard(color.hex, `hex-${i}`)}
                        className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center text-white transition-opacity"
                        title="Copiar Código HEX"
                      >
                        {copiedId === `hex-${i}` ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    {/* Color Metadata */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-800 text-sm">{color.name}</span>
                        <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-600 cursor-pointer" onClick={() => copyToClipboard(color.hex, `hex-lbl-${i}`)}>
                          {color.hex}
                        </code>
                      </div>
                      <p className="text-xs text-slate-500 italic">{color.description}</p>
                      <p className="text-xs text-slate-600 leading-normal">{color.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography & Image Strategy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="typography-strategy-grid">
              {/* Typography Box */}
              <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-white" id="typography-box">
                <div className="flex items-center gap-2 text-slate-800 font-bold text-sm uppercase tracking-wide border-b border-slate-100 pb-2">
                  <Type className="w-4 h-4 text-sky-600" />
                  <span>Soporte Tipográfico</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">Tipografía Principal:</span>
                    <span className="text-slate-800 font-semibold font-sans text-lg">{VISUAL_IDENTITY.typography.titleFont}</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">Tipografía de Cuerpo:</span>
                    <span className="text-slate-700 font-sans text-sm">{VISUAL_IDENTITY.typography.bodyFont}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed mt-2 pt-2 border-t border-slate-100/60">
                    {VISUAL_IDENTITY.typography.description}
                  </p>
                </div>
              </div>

              {/* Asset Strategy Box */}
              <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-white" id="asset-box">
                <div className="flex items-center gap-2 text-slate-800 font-bold text-sm uppercase tracking-wide border-b border-slate-100 pb-2">
                  <Monitor className="w-4 h-4 text-sky-600" />
                  <span>Sustitución de Imagen Antigua</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  {VISUAL_IDENTITY.assetStrategy.title}
                </p>
                <ul className="space-y-2 text-xs text-slate-600 pl-4 list-disc" id="asset-points-list">
                  {VISUAL_IDENTITY.assetStrategy.points.map((pt, index) => (
                    <li key={index} className="leading-relaxed">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        )}

        {/* PANEL 2: ARQUITECTURA DE CONTENIDO Y COPYWRITING */}
        {activeTab === "copywriting" && (
          <div className="space-y-6 animate-fade-in" id="panel-copy-content">
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-lg p-3 text-amber-800 text-xs mb-4" id="copy-disclaimer">
              <Info className="w-4 h-4 shrink-0" />
              <span>Haz clic en el botón de copiar a la derecha de cualquier sección para extraer el copy real formateado para tu equipo de maquetación.</span>
            </div>

            <div className="space-y-5" id="copy-snippets-list">
              {COPY_DECK.map((snippet, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-slate-300 transition-colors" id={`copy-snippet-${idx}`}>
                  {/* Badge & Copy Action */}
                  <div className="bg-slate-50/80 px-4 py-2.5 border-b border-slate-100 flex items-center justify-between text-xs" id={`copy-header-${idx}`}>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-700 uppercase tracking-wider">{snippet.section}</span>
                      <span className="text-slate-400 font-medium">|</span>
                      <span className="text-slate-500 font-medium font-mono">{snippet.label}</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(snippet.content, `snippet-${idx}`)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-all font-medium"
                      title="Copiar Copy Textual"
                    >
                      {copiedId === `snippet-${idx}` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-[11px] text-emerald-600">Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[11px]">Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                  {/* Copy Text Body */}
                  <div className="p-4 md:p-5 italic font-medium text-slate-800 text-sm md:text-base leading-relaxed bg-slate-50/10" id={`copy-body-${idx}`}>
                    &ldquo;{snippet.content}&rdquo;
                  </div>
                  {/* Strategic Logic */}
                  <div className="bg-slate-50/30 px-4 py-2.5 border-t border-slate-100 text-xs text-slate-500 leading-relaxed" id={`copy-footer-${idx}`}>
                    <strong className="text-sky-800">Justificación Estratégica:</strong> {snippet.explanation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PANEL 3: RECOMENDACIONES DE ANIMACIÓN Y UX */}
        {activeTab === "ux" && (
          <div className="space-y-6 animate-fade-in" id="panel-ux-content">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="ux-recommendations-grid">
              {ANIMATION_RECOMMENDATIONS.map((rec, i) => (
                <div key={i} className="border border-slate-150 rounded-xl p-5 space-y-3 bg-white hover:shadow-md transition-shadow relative" id={`ux-rec-card-${i}`}>
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-sky-50 text-sky-600 font-mono text-xs font-bold flex items-center justify-center">
                    0{i+1}
                  </div>
                  <div className="p-2.5 bg-sky-50 rounded-lg w-fit text-sky-600">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm leading-snug">
                    {rec.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {rec.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Strategic Pillars Summary */}
            <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-4" id="ux-conclusion-box">
              <h4 className="font-bold text-sm tracking-widest text-sky-400 uppercase">
                Metodología de Conversión TI
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Diseñar para directores de tecnología y gerentes de operaciones en el mercado B2B paraguayo requiere eliminar cualquier indicio de "soporte artesanal". La asertividad en las respuestas, la transparencia en los SLA y la disponibilidad inmediata y confiable (WhatsApp activo) multiplican el ratio de leads cualificados en un <span className="text-white font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">22% en promedio</span> respecto a las páginas de espera convencionales.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
