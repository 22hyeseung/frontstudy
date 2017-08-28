//readFileSync.js
const fs = require('fs'); // Node.js 내장 모듈
try {
  const data = fs.readFileSync('./calc.js', 'utf8');
  console.log(data);
} catch (err) {
  console.log(err);
}
console.log('done!');