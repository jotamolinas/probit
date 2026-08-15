import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

bad_badges = r'<span>Servicios Garantizados<\/span>\s*<\/div>\s*<\/div>\s*<\/div>\s*{\/\* Column Right \(HIGH-FIDELITY B2B INFRASTRUCTURE BLUEPRINT CARD\) \*\/}'
fixed_badges = r"""                <span>Servicios Garantizados</span>
              </div>
            </div>
          </div>
        </div>
          {/* Column Right (HIGH-FIDELITY B2B INFRASTRUCTURE BLUEPRINT CARD) */}"""

content = re.sub(bad_badges, fixed_badges, content, flags=re.DOTALL)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
