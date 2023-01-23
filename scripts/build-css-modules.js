const fs = require('fs');
const path = require('path');
const allColorScales = require('../index');

const outputDir = require('../tsconfig.json').compilerOptions.outDir;

Object.entries(allColorScales).forEach(([colorScaleName, scale]) => {
  const isDark = /DarkA?$/.test(colorScaleName);
  const selector = isDark
    ? '[data-theme="dark"]'
    : '[data-theme="light"], :root:not([data-theme="dark"])';
  const classSelector = isDark ? '.dark-theme' : ':root';
  const scaleAssCssProperties = Object.entries(scale)
    .map(([name, value]) => `  --${name}: ${value};`)
    .join('\n');
  let scaleAsCssFile = `${selector} {\n${scaleAssCssProperties}\n}`;
  const classyScaleAsCssFile = `${classSelector} {\n${scaleAssCssProperties}\n}`;

  if (isDark) {
    const indented = scaleAssCssProperties
      .split('\n')
      .map((prop) => `  ${prop}`)
      .join('\n');
    scaleAsCssFile += `\n\n@media only screen and (prefers-color-scheme: dark) {\n  :root:not([data-theme="light"]) {\n${indented}\n  }\n}`;
  }

  fs.writeFileSync(
    path.join(outputDir, colorScaleName + '.css'),
    classyScaleAsCssFile
  );
  fs.writeFileSync(
    path.join(outputDir, colorScaleName + '.classless.css'),
    scaleAsCssFile
  );
});
