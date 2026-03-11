const fs = require('fs');
const path = require('path');

const getSpecsForProduct = (title) => {
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes('tap') || lowerTitle.includes('bib') || lowerTitle.includes('cock') || lowerTitle.includes('valve') || lowerTitle.includes('flow') || lowerTitle.includes('neck')) {
        return [
            "Material: Premium UPVC Body & Brass Thread",
            "Mechanism: Smooth Quarter-Turn Handle",
            "Inlet Size: ½\\\" Standard Fitting",
            "Build Quality: 100% Leak-Proof & Anti-Corrosive",
            "Strength: High-Density Crack-Resistant Polymer",
            "Suitable For: Bathrooms, Gardens, Utility Areas",
            "Dimensions: 92 Mm (H) × 78 Mm (L)",
            "Installation: PTFE Tape Recommended for Sealing",
            "Warranty: 5-Year Replacement Guarantee",
        ];
    } else if (lowerTitle.includes('pipe') || lowerTitle.includes('tube') || lowerTitle.includes('hose')) {
        return [
            "Material: High-Grade Impact-Resistant UPVC",
            "Pressure Rating: Heavy Duty PN 16 / Class 3",
            "Design: Precision-Engineered Leak-Proof Joints",
            "Build Quality: Chemical & Corrosion Resistant",
            "Strength: Excellent Tensile & Impact Resistance",
            "Suitable For: Plumbing, Agricultural & Industrial",
            "Standard Length: Available in 3m / 6m Options",
            "Installation: Compatible with Standard Solvent Cement",
            "Warranty: 5-Year Replacement Guarantee",
        ];
    } else if (lowerTitle.includes('tank') || lowerTitle.includes('maxion') || lowerTitle.includes('cover') || lowerTitle.includes('cistern') || lowerTitle.includes('seat')) {
        return [
            "Material: Heavy-Duty Reinforced Polymer Composite",
            "Design: Secure, Anti-Skid & Lockable Cover",
            "Build Quality: Weather, UV & Temperature Resistant",
            "Strength: High Load Bearing Capacity",
            "Suitable For: Underground Chambers, Drainage Systems",
            "Maintenance: Easy Lift & Access Design",
            "Durability: Non-Brittle & Long-Lasting",
            "Installation: Flush Mountable with Floor Surface",
            "Warranty: 5-Year Replacement Guarantee",
        ];
    } else if (lowerTitle.includes('bath') || lowerTitle.includes('shower') || lowerTitle.includes('faucet') || lowerTitle.includes('health')) {
        return [
            "Material: Superior Grade UPVC & Brass Core",
            "Finish: Elegant Chrome / Matte Finish Options",
            "Mechanism: Advanced Anti-Clogging Nozzles",
            "Build Quality: Leak-Proof & Scaling-Resistant",
            "Water Flow: Optimized High-Pressure Delivery",
            "Suitable For: Modern Bathrooms & Spa Enclosures",
            "Maintenance: Easy-to-Clean Surface",
            "Installation: Fits Standard Plumbing Connections",
            "Warranty: 5-Year Replacement Guarantee",
        ];
    } else {
        return [
            `Model Series: ${title} Edition`,
            "Material: Premium Quality High-Grade Polymer",
            "Build Quality: Durable, Leak-Proof & Long-Lasting",
            "Performance: Precision Engineered for Efficiency",
            "Strength: High Impact & Crack Resistant",
            "Application: Residential & Commercial Use",
            "Maintenance: Low Maintenance & Easy to Clean",
            "Installation: Standard Industry Fitting Compatible",
            "Warranty: 5-Year Full Replacement Guarantee",
        ];
    }
}

const dir = 'c:/Users/thein/OneDrive/Desktop/AquaExcel/app/data';
const files = ['taps.ts', 'bathfitting.tsx', 'Pipes.tsx', 'maxion.tsx', 'accesorries.tsx'];

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // More robust regex
    const regex = /(title:\s*(['"`])(.*?)\2\s*,\s*description:\s*(['"`])[\s\S]*?\4\s*,\s*image:\s*(?:['"`][^'"`]*['"`]|[a-zA-Z0-9_$]+))/g;
    
    let matchCount = 0;
    content = content.replace(regex, (match, matchContent, quote1, title, quote2) => {
        matchCount++;
        const specs = getSpecsForProduct(title);
        const specsString = `,\n    specs: [\n${specs.map(s => `      "${s}"`).join(',\n')}\n    ]`;
        return matchContent + specsString;
    });
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}: matched ${matchCount} products.`);
});
