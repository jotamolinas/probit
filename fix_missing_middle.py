import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

content = re.sub(r'<span>Servicios Garantizados</span>\s*\{\/\* Glassmorphic B2B Solutions Panel Card \*\/\}', '<span>Servicios Garantizados</span>\n              </div>\n            </div>\n          </div>\n        </div>\n          {/* Column Right (HIGH-FIDELITY B2B INFRASTRUCTURE BLUEPRINT CARD) */}\n          <div className="lg:col-span-5 relative" id="hero-graphic-panel">\n            {/* Glassmorphic B2B Solutions Panel Card */}', content)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
