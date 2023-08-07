const fs = require("fs");
const path = require("path");
const allColorScales = require("../index");

const outputDir = require("../tsconfig.json").compilerOptions.outDir;

Object.entries(allColorScales).forEach(([colorScaleName, scale]) => {
  const selector = /blackA|whiteA/.test(colorScaleName)
    ? ":root"
    : /DarkA?$/.test(colorScaleName)
    ? ".dark, .dark-theme"
    : ":root, .light, .light-theme";

  const scaleAsCssProperties = Object.entries(scale)
    .map(([name, value]) => [toCssCasing(name), value])
    .map(([name, value]) => `  --${name}: ${value};`)
    .join("\n");

  const scaleAsCssFile = `${selector} {\n${scaleAsCssProperties}\n}`;

  fs.writeFileSync(
    path.join(outputDir, toFileName(colorScaleName) + ".css"),
    scaleAsCssFile
  );
});

function toCssCasing(str) {
  return str
    .replace(/([a-z])(\d)/, "$1-$2")
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase();
}

function toFileName(str) {
  return toCssCasing(str).replace(/-a$/, "-alpha");
}
