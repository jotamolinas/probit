const fs = require('fs');
const content = fs.readFileSync('src/components/InteractivePreview.tsx', 'utf8');
const newContent = content.replace(
  '<header className="bg-white w-full py-4 px-6 md:px-12 shadow-md relative z-50">',
  '<header className="bg-white w-full py-4 px-6 md:px-12 relative z-50">'
).replace(
  '<div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(17,24,39,1),rgba(3,7,18,1))] overflow-hidden">',
  `<div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white via-white/40 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(17,24,39,1),rgba(3,7,18,1))] overflow-hidden">`
);
fs.writeFileSync('src/components/InteractivePreview.tsx', newContent);
