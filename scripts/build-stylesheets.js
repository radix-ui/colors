const fs = require("fs");
const path = require("path");
const allColorScales = require("../index");

const outputDir = require("../tsconfig.json").compilerOptions.outDir;

Object.entries(allColorScales).forEach(([colorScaleName, scale]) => {
  const isDarkScale = /DarkA?$/.test(colorScaleName);

  // Building css modules
  const selectorForCSS = isDarkScale ? ".dark-theme" : ":root";
  const scaleAsCssProperties = Object.entries(scale)
    .map(([name, value]) => `  --${name}: ${value};`)
    .join("\n");
  const scaleAsCssFile = `${selectorForCSS} {\n${scaleAsCssProperties}\n}`;
  fs.writeFileSync(
    path.join(outputDir, colorScaleName + ".css"),
    scaleAsCssFile
  );

  // Building scss modules
  const scaleAsScssProperties = Object.entries(scale)
    .map(([name, value]) => `  $${name}: ${value};`)
    .join("\n");
  const scaleAsScssFile = isDarkScale
    ? `.dark-theme {\n${scaleAsScssProperties}\n}`
    : scaleAsScssProperties;
  fs.writeFileSync(
    path.join(outputDir, colorScaleName + ".scss"),
    scaleAsScssFile
  );
});
