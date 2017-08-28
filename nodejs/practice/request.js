// 유저 이름, 저장소, 할당된 이슈 갯수 출력하기
const request = require('request')
const apiUrl = 'https://api.github.com'
const option = {
  json: true,
  auth: {
    'user': 'huusz',
    'pass': 'heasengida93',
  },
  headers: {
    'User-Agent': 'request'
  }
}
request.get(`${apiUrl}/user`, option, function (error, response, body) {
  const name = body.name
  if (error) console.error(error)
  // 콜백 안에 콜백
  request.get(`${apiUrl}/user/repos`, option, function (error, response, body) {
    if (error) console.error(error)
    const repoNames = body.map(item => item.name)
    // 콜백 안에 콜백 안에 콜백
    request.get(`${apiUrl}/issues`, option, function (error, response, body) {
      if (error) console.error(error)
      const issueNum = body.length
      console.log(`name: ${name}`)
      console.log('repos:')
      repoNames.forEach(name => {
        console.log(name)
      })
      console.log(`num of assigned issues: ${issueNum}`)
    })
  })
})