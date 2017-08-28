// readfilePromise.js
const {promisify} = require('util') // Node.js 8.0.0부터 추가됨
const fs = require('fs')
const readFile = promisify(fs.readFile)
readFile('./calc.js', 'utf8')
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.error(err)
  })