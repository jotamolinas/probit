const { execSync } = require('child_process');
try {
  const result = execSync('wget -S --spider "https://pin.it/6FGoEdi7A" 2>&1 | grep "Location:"').toString();
  console.log('R:', result);
} catch (e) {
  console.log('E:', e.message);
}
