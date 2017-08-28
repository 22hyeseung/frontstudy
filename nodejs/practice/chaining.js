// chaining.js
const tenSec = require('./tenSec')
tenSec('hello promise')
  .then(value => {
    console.log(value)
    return 1 // 위 `.then`은 값이 1인 Promise를 반환함
  })
  .then(value => {
    console.log(value)
    return tenSec('new promise') // Promise도 반환할 수 있음
  })
  .then(value => {
    console.log(value)
  })
  .then(() => {
    throw new Error('error in promise')
  })
  .catch(err => {
    console.error(err)
  })
  .then(() => { // 에러 처리 이후에도 코드 실행 가능
    console.log('done')
  })