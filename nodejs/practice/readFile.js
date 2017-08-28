const fs = require('fs') // Node.js 내장 모듈
fs.readFile('./calc.js', 'utf8', (err, data) => {
  if(err) { //error가 있으면
    console.error(err)
  }else { //errro가 없으면 
    console.data(data)
  }
})
console.log('done!')