module.exports = function tenSec(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value)
    }, 10000)
  })
}