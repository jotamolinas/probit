import fs from "fs";
import jpeg from "jpeg-js";

try {
  let jpegData = fs.readFileSync("public/logo3.jpeg");
  let rawImageData = jpeg.decode(jpegData);
  let w = rawImageData.width;
  let h = rawImageData.height;
  
  const getPixel = (x: number, y: number) => {
    let index = (y * w + x) * 4;
    let r = rawImageData.data[index];
    let g = rawImageData.data[index + 1];
    let b = rawImageData.data[index + 2];
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }
  
  console.log(`Top-left: ${getPixel(0,0)}`);
  console.log(`(10,10): ${getPixel(10,10)}`);
  console.log(`(w/2, 10): ${getPixel(Math.floor(w/2), 10)}`);
  console.log(`(50, 50): ${getPixel(50, 50)}`);
  console.log(`(100, 100): ${getPixel(100, 100)}`);
} catch (e) {
  console.error(e);
}
