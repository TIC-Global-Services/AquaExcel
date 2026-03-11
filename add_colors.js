const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/thein/OneDrive/Desktop/AquaExcel/app/data';
const files = ['taps.ts', 'bathfitting.tsx', 'Pipes.tsx', 'maxion.tsx', 'accesorries.tsx'];

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    const regex = /(title:\s*(['"`])(.*?)\2\s*,\s*description:\s*(['"`])[\s\S]*?\4\s*,\s*image:\s*(?:['"`][^'"`]*['"`]|[a-zA-Z0-9_$]+))/g;
    
    let matchCount = 0;
    content = content.replace(regex, (matchContent) => {
        matchCount++;
        return matchContent + `,\n    colors: [\n      { name: 'White', colorCode: '#FFFFFF' },\n      { name: 'Green', colorCode: '#4ADE80' }\n    ]`;
    });
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}: matched ${matchCount} products.`);
});
