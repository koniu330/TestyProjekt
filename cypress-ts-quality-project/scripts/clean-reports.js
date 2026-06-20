const fs = require('fs')
const paths = ['cypress/screenshots', 'cypress/videos']

for (const path of paths) {
  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true, force: true })
    console.log(`Usunieto: ${path}`)
  }
}
