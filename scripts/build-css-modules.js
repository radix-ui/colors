const fs = require('fs');
const path = require('path');
const allColorScales = require('../index');

const outputDir = require('../tsconfig.json').compilerOptions.outDir;

Object.entries(allColorScales).forEach(([colorScaleName, scale]) => {
  const selector = /DarkA?$/.test(colorScaleName) ? '.dark-theme' : ':root, .light-theme';
  const scaleAssCssProperties = Object.entries(scale)
    .map(([name, value]) => `  --${name}: ${value};`)
    .join('\n');
  const scaleAsCssFile = `${selector} {\n${scaleAssCssProperties}\n}`;
  fs.writeFileSync(
    path.join(outputDir, colorScaleName + '.css'),
    scaleAsCssFile
  );
});
