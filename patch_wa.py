import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

content = re.sub(r'`\*Empresa/Organización:\* \$\{company \|\| \'No especificado\'\}\\n` \+\n\s*`\*Correo Electrónico:\* \$\{email\}\\n` \+', '', content)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
