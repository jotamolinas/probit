with open("src/components/InteractivePreview.tsx", "r") as f:
    content = f.read()

import re

# We know the opening is:
# <div className="rounded-2xl p-6 space-y-4 text-slate-100 relative group transition-all duration-350" id="live-hardware-console">
# Then Header
# Then Services List Grid
# Then we should close:
# 1. live-hardware-console div
# 2. hero-graphic-panel div
# 3. the grid div
# 4. the section

fixed_part = '''              </div>

            </div>
          </div>
        </div>
      </section>

      {/* NUESTRA FILOSOFÍA SECTION */}'''

# Find the services list grid end
pattern = r'              </div>\s*</div>\s*</div>\s*</div>\s*</section>\s*\{\/\* NUESTRA FILOSOFÍA SECTION \*\/\}'

# Try replacing various amounts of closing divs
content = re.sub(r'              </div>(\s*</div>)*\s*</section>\s*\{\/\* NUESTRA FILOSOFÍA SECTION \*\/\}', fixed_part, content)

with open("src/components/InteractivePreview.tsx", "w") as f:
    f.write(content)
