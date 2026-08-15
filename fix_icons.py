import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

content = content.replace('Target,\n  Eye\n} from "lucide-react";', 'Target,\n  Eye,\n  ArrowUp\n} from "lucide-react";')

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
