const fs = require('fs')
const path = require('path')
const allColorScales = require('../dist/index')

const outputDir = require('../tsconfig.json').compilerOptions.outDir

Object.entries(allColorScales).forEach(([colorScaleName, scale]) => {
  const selector = colorScaleName.endsWith('Dark') ? '.dark-theme' : ':root'
  const scaleAssCssProperties = Object.entries(scale)
    .map(([name, value]) => {
      return `  --${name}: ${value};`
    })
    .join('\n')
  const scaleAsCssFile = `${selector} {\n${scaleAssCssProperties}\n}`
  fs.writeFileSync(path.join(outputDir, colorScaleName + '.css'), scaleAsCssFile)
})
