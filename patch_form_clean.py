import re

with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

# Update conversion-form-box
content = re.sub(r'className="frost-glass-heavy border border-white/90 shadow-2xl rounded-3xl p-6 md:p-10 text-left max-w-2xl mx-auto backdrop-blur-2xl relative overflow-hidden"',
                 r'className="bg-white border border-slate-100 shadow-2xl rounded-3xl p-6 md:p-10 text-left max-w-2xl mx-auto relative overflow-hidden"', content)

# Remove the span
span_block = r"""                  <span className="text-\[9px\] bg-blue-50 text-blue-600 font-mono px-2 py-0\.5 rounded-full border border-blue-150">
                    Soporte Directo Paraguay
                  <\/span>"""
content = re.sub(span_block, '', content)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
