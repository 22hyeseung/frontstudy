const utils = require('./utils');
const assert = require('assert');

describe('utils.js 모듈의 capitalize 함수는', () => {
  it('문자열의 첫번째 문자를 대문자로 반환한다.', () => {
    const result = utils.capitalize('hello');
    assert.equal(result, 'Hello');
  });
});
