const fs = require("fs");
const path = require("path");
const allColorScales = require("../index");

const outputDir = require("../tsconfig.json").compilerOptions.outDir;

Object.entries(allColorScales).forEach(([colorScaleName, scale]) => {
  const selector = /DarkA?$/.test(colorScaleName) ? ".dark-theme" : ":root";

  // Building css modules
  const scaleAsCssProperties = Object.entries(scale)
    .map(([name, value]) => `  --${name}: ${value};`)
    .join("\n");
  const scaleAsCssFile = `${selector} {\n${scaleAsCssProperties}\n}`;
  fs.writeFileSync(
    path.join(outputDir, colorScaleName + ".css"),
    scaleAsCssFile
  );

  // Building scss modules
  const scaleAsScssProperties = Object.entries(scale)
    .map(([name, value]) => `  $${name}: ${value};`)
    .join("\n");
  const scaleAsScssFile = `${selector} {\n${scaleAsScssProperties}\n}`;
  fs.writeFileSync(
    path.join(outputDir, colorScaleName + ".scss"),
    scaleAsScssFile
  );
});
