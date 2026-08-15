import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

content = re.sub(r'</div>xt-sm font-black text-white drop-shadow-sm tracking-tight leading-snug">\s*Hosting Cloud VPS &amp; Software de Factura Electrónica Paraguay\s*</h3>\s*</div>\s*</div>', '</div>\n          </div>', content, flags=re.MULTILINE)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
