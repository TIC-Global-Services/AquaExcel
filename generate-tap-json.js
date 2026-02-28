const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const tapPngDir = path.join(publicDir, 'tappng');
const tapJsonPath = path.join(publicDir, 'tap.json');

const files = fs.readdirSync(tapPngDir).filter(f => f.endsWith('.png'));

// Ensure they are sorted properly
files.sort();

const data = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: files.length,
  w: 1920, // Adjust if needed
  h: 1080, // Adjust if needed
  nm: "Tap Animation",
  ddd: 0,
  assets: files.map((file, i) => ({
    id: `image_${i}`,
    w: 1920,
    h: 1080,
    u: "/tappng/",
    p: file
  }))
};

fs.writeFileSync(tapJsonPath, JSON.stringify(data, null, 2));
console.log('Created tap.json with', files.length, 'frames.');
