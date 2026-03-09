const fs = require('fs');
const file = 'c:/Users/thein/OneDrive/Desktop/AquaExcel/public/tap.json';
let data = fs.readFileSync(file, 'utf8');
data = data.replace(/"u": "\/tappng\/"/g, '"u": "https://ik.imagekit.io/pgtxr2fmn/tapanimation/tappng/"');
fs.writeFileSync(file, data);
console.log("Done replacing.");
