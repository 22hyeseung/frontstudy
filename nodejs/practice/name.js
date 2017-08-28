
// `module.exports`에 저장한 값은 다른 모듈에서 불러올 수 있음
module.exports = {
  familyName: '김',
  givenName: '승하',
  fullName: function() {
    return this.familyName + this.givenName
  }
}