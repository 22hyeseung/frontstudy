const {promisify} = require('util') // Node.js 8.0.0부터 추가됨
const fs = require('fs')
const readFile = promisify(fs.readFile)

async function readFileAsync() {
  try {
    const data = await readFile('./calc.js', 'utf8')
    console.log(data)
  } catch (e) {
    console.error(e)
  }
}

readFileAsync()