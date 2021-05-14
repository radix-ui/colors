import fs from 'fs'
import path from 'path'

const convertScalesToCssProperties = (colors) => {
  return Object.entries(colors).map((scale) => {
    const key = scale[0]
    const values = Object.entries(scale[1])
      .map((row) => {
        return `  --${row[0]}: ${row[1]};`
      })
      .join('\n')
    return `.${key}{\n${values}\n}`
  })
}
import('../dark/index.js').then((module) => {
  fs.writeFileSync(
    path.resolve(process.cwd(), 'dark/theme.module.css'),
    convertScalesToCssProperties({ ...module.default }).join('\n'),
  )
})

import('../light/index.js').then((module) => {
  fs.writeFileSync(
    path.resolve(process.cwd(), 'light/theme.module.css'),
    convertScalesToCssProperties({ ...module.default }).join('\n'),
  )
})
