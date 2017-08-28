# nvm(node version manager)

```bash
# 주석: `#`으로 시작하는 명령은 bash에서 무시됩니다.
# 아래 명령을 한 줄씩 차례대로 입력하세요
$ nvm install 8.4
$ nvm use 8.4
$ nvm alias default 8.4 # nvm-windows는 필요없음
```

# Node.js REPL

REPL(Read Eval Print Loop): 윈도우 커맨드, 혹은 UNIX/LINUX Shell처럼 사용자가 커맨드를 입력하면 시스템이 값을 반환하는 환경을 일컫는다. 

Node.js는 REPL 환경과 함께 제공되며 다음과 같은 기능을 수행할 수 있다.

* Read: 유저의 값을 입력 받아 Javascript 데이터 구조로 메모리에 저장한다.
* Eval: 데이터를 처리(Evaluate)한다.
* Print: 결과값을 출력한다.
* Loop: Read, Eval, Print를 유저가 Ctrl+C를 두 번 눌러 종료할 때까지 반복한다.

Node.js 의 REPL 환경은 자바스크립트 코드의 테스팅 및 디버깅할 때 유용하게 사용된다.

```bash
// REPL 시작하기
$ node

// 한 줄 짜리 코드 입력하기
> 'hello node'
'hello node'

// 위쪽 화살표 키를 입력해서 이전 명령 불러오기
> 'hello node'
'hello node'

// Underscore(_) 변수
밑줄 _변수는 최근 결과값을 지칭한다.
> var x = 10;
undefined
> var y = 5;
undefined
> x+y;
15
> var sum = _
undefined
>console.log(sum)
15
undefined

// 변수 사용하기
> const factorial = n => n < 1 ? 1 : n * factorial(n-1)
undefined

> factorial(3)
6

// 여러 줄에 나눠서 입력하기
> function factorial2(n) {
... return n < 1 ? 1 : n * factorial(n-1)
... }
undefined

> factorial2(4)
24

// `.exit`를 입력하거나 `Ctrl+C`를 두 번 입력해서 나가기
> .exit

// Node.js module 사용하기
> const os = require('os') // 급할땐 `os = ...`
undefined

> os.platform()
'linux'

> os.freemem()
658300928
```

# node.js로 파일 실행시키기

```bash
$ node (파일 경로)
```

# node.js

Node.js®은 chrome의 v8 자바스크립트 엔진에 기반한 자바스크립트 런타임이다.

Node.js는 가볍고 효율적인 event-driven, non-blocking I/O model을 사용한다. 

Node.js의 패키지 에코 시스템인 npm은 전 세계 오픈 소스 라이브러리 중 가장 큰 생태계(ecosystem)이다.

## 1) JavaScript Runtime이란?

* JavaScript는 언어
* JavaScript 런타임(runtime)은 JS를 구동하기 위해 필요한 실행 환경
* 프로그래머는 런타임이 제공하는 도구를 응용해서 프로그램을 개발
* 웹 브라우저나 Node.js도 JavaScript 런타임의 일종

## 2) JavaScript Runtime 종류
* Chrome이 제공하는 웹 브라우저용 런타임
* Node.js가 제공하는 서버용 런타임
* MongoDB가 제공하는 데이터 처리용 런타임
* Photoshop이 제공하는 전용 런타임
...

# V8 JavaScript Engine
JIT(Just-In-Time) compilation
Code Optimization
Used in
Google Chrome
Node.js
MongoDB
...


## V8 엔진의 작동 방식?

### 1) Event-driven Programming
프로그램의 흐름이 외부 요인에 의해 일어나는 사건에 의해 결정되는 프로그래밍 양식  
약속된 방식으로 이벤트 핸들러를 작성함으로써 외부 이벤트가 일어났을 때 코드를 실행  

* 마우스 입력
* 키보드 입력
* 다른 프로그램/컴퓨터로부터의 통신

```js
 // DOM 이벤트 핸들러 등록 (웹 브라우저)
domElement.addEventListener('click', function(e) {
  e.stopPropagation()
  alert('hello')
})

// 서버도 똑같이 합니다.
// (단, 프레임워크를 쓸 때는 직접 이벤트를 다룰 일이 별로 없음)
// HTTP 응답 이벤트 핸들러 등록 (Node.js)
httpResponse.on('data', data => {
  console.log(data)
})
```

### 2) Non-blocking I/O

Blocking I/O는 스레드가 입력/출력이 완료될 때까지 기다렸다가 다음 코드를 실행  

Non-blocking I/O는 스레드가 입력/출력을 기다리지 않고 코드를 계속 실행  

순차적으로 실행되다가 기다려야 할 상황이 오면 코드 실행을 멈추고 그 상황이 완료된 이후에 코드를 실행하지만, 어떤 프로그래밍 언어나 기술들은 코드가 기다려야 하는 상황이 왔을 때, 그에 대한 신호만 주고 다음 코드를 계속 실행한다. 이전 코드가 완료되기를 기다렸다가 실행하는 것이 blocking I/O라고 하며 기다리지 않고 계속 실행하는 것을 non-blocking I/O라고 한다.

non-blocking의 단점은 코드가 복잡해질 수 있다는 점이다. (이러한 복잡함을 해결해주는 도구가 promise이다.)

**I/O 성능 향상 & 복잡한 코드**  

# Node.js Module

```js
// name.js

// `module.exports`에 저장한 값은 다른 모듈에서 불러올 수 있음
module.exports = {
  familyName: '김',
  givenName: '승하',
  fullName: function() {
    return this.familyName + this.givenName
  }
}
// calc.js

// `exports`로도 참조 가능
exports.add = (x, y) => x + y
exports.sub = (x, y) => x - y
```

# REPL에서 불러오기

```
// Node.js 내장 모듈과는 다르게 경로를 지정해야 함
> const name = require('./name')
undefined
> name
{ familyName: '김',
  givenName: '승하',
  fullName: [Function: fullName] }
> name.familyName
'김'
> name.fullName()
'김승하'
> require('./calc').add(1, 2)
3
```

**브라우저에서는 전역변수를 쓰면 위험하다**
script1.js 파일에 var evil = 1; 이라는 전역 변수를 선언하면 script2.js 파일에서도 evil을 참조할 수 있게 된다.
하지만 nodejs는 조금 다르다. nodejs 모듈은 각각의 스코프(scope)가 따로 존재한다. 따라서 module1.js에서 var evil = 1;이라고 선언하더라도 전역에 선언되는 것이 아닌, module1이라는 모듈 내의 스코프에서만 존재하기 때문에 다른 모듈에서 접근할 수 없다. 따라서 export하지 않으면 다른 모듈에서 해당 변수에 접근할 수 없다.


# NPM

Node.js 패키지 관리 도구 + 클라우드 패키지 저장소

* 의존 패키지 관리
* 스크립트 실행
* 패키지 설정
* NPM에 패키지 배포
* Node.js 종합 작업 도구

```bash
$ mkdir hello-npm
$ cd hello-npm
$ npm init -y
$ code .
// package.json
{
  "name": "hello-npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

# package.json

패키지 정보를 담고 있는 파일

**dependencies**  
`npm install --save` 명령으로 설치한 패키지가 기록됨  

**scripts**  
원래 목적은 패키지 생명주기마다 자동으로 실행되는 명령을 등록하기 위함이나, 개발자 편의를 위해 자주 사용되는 명령을 등록하는 용도로 더 많이 사용됨  

```bash
$ npm install --save randomstring # node_modules에 저장됨
```

```js
// index.js
const randomstring = require('randomstring')
console.log(randomstring.generate())
```

```json
// package.json
...
  "scripts": {
    "start": "node index.js"
  }
...
```

```bash
$ npm start
```


# Concurrency Model(동시성 모델)

프로그램이 생애 주기가 겹치는 여러 실행 과정을 통해 실행된다 하더라도 프로그램의 결과에는 영향을 미치지 않는 성질

생애 주기가 겹치는 여러 실행 과정이 자원을 공유할 때 어떻게 충돌이 생기지 않도록 할 것인가?

## Resources

* CPU
* 메모리
* 네트워크
* ...

# Thread

코드 실행의 가장 작은 단위

프로그램은 하나 이상의 스레드로 이루어짐

CPU 코어 하나는 한 번에 하나의 스레드를 실행

```bash
$ sysctl -n hw.ncpu # OSX
$ nproc # linux
$ mmc devmgmt.msc # Windows
$ top -H # Shows the total number of threads
```

# 동시성을 위한 도구

자원의 공유를 위해 프로그래밍 언어는 언어들만이 가지고 있는 동시성을 위한 도구를 가지고 있는 경우가 많다.

## 1) 운영체제 차원의 도구

* Process
* Thread
* Mutex (Mutual Exclusion)

## 2) 언어 차원의 도구

* Python - asyncio
* Go - goroutine
* Erlang - actor
* JavaScript - ...?

<br>

# 자바스크립트의 동시성

## Single-Threaded Event Loop

**자바스크립트를 실행시키는 스레드가 하나 뿐이다.**
실행 과정(보통 콜백 연쇄)의 생애 주기가 겹칠 수는 있지만 어떤 경우에도 두 자바스크립트 실행과정이 동시에 실행되는 경우는 없음
내부적으로 메시지 큐를 활용하고 있으나, 모든 처리가 자동으로 이루어짐

!MDN[https://developer.mozilla.org/ko/docs/Web/JavaScript/EventLoop]

## 1) 장점

* 프로그래머가 동시성에 대해 신경쓸 필요가 없어짐
* 프로그램 작성이 쉬워짐

## 2) 단점

* CPU를 많이 쓰는 작업에 부적절
* 오래 걸리는 자바스크립트 코드가 실행되면 전체 프로그램에 영향을 미침

## 3) 전략

브라우저는 API가 있다면 API에 위임, 노드js는 c/c++로 만들어진 모듈을 가져와서 사용할 수 있는 방법이 있다.

* 오래 걸리는 일은 외부에 위임하고 넘어간 뒤, 나중에 결과를 받아 처리하기
  * Database
  * Node.js - External libraries
  * Web browser - WebAssembly
* 긴 실행과정을 **여러 개의 함수로 쪼개서** 한 번의 함수 실행이 금방 끝나게 만들기

<br>

# Asynchronous JavaScript
non-blocking과 asynchronous는 비슷한 맥락이다. 다만, non-blocking은 코드의 실행 순서에 대한 개념이고, asynchronous는 코드 작성 방식에 대한 개념이다.

* 함수를 호출할 때, 콜백까지 같이 인자에 넣어서 호출하는 비동기 프로그래밍 양식
* 콜백에서 에러 인자를 받는 방식으로 에러 처리를 함
* Node.js 내장 모듈 전체가 이 방식을 사용하도록 만들어져 있음
* 주의! 모든 콜백이 비동기인 것은 아님

---

# 비동기식 코드의 에러처리: 관습

try-catch는 동기식 에러처리 시에만 사용한다. 비동기식 에러 처리는 관습적으로 아래 방식을 사용한다.

```js
//readFile.js
const fs = require('fs'); // Node.js 내장 모듈
fs.readFile('./calc.js', 'utf8', (err, data) => {
  // 에러처리
  if(err) { //error가 있으면
    console.error(err);
  }else { //errro가 없으면 
    console.data(data);
  }
});
console.log('done!');
```

# 동기식 코드의 에러 처리: 일반적인 방식으로 처리

```js
//readFileSync.js
const fs = require('fs'); // Node.js 내장 모듈
try {
  const data = fs.readFileSync('./calc.js', 'utf8');
  console.log(data);
} catch (err) {
  console.log(err);
}
console.log('done!');
```

---
위 예제에서 readFile.js는 비동기 방식이며 readFileSync는 동기 방식으로 동작하는 코드이다. 코드를 실행 한 후 결과를 보면, 

* readFile.js

```bash
done!
{ Error: ENOENT: no such file or directory, open './calc.js' errno: -2, code: 'ENOENT', syscall: 'open', path: './calc.js' }
```

비동기 방식에서는 마지막 줄의 `console.log('done!')`코드가 이전 코드의 실행이 완료될 때까지 기다리지 않고 먼저 실행된다.

* readFileSync.js

```bash
{ Error: ENOENT: no such file or directory, open './calc.js'
    at Object.fs.openSync (fs.js:652:18)
    at Object.fs.readFileSync (fs.js:553:33)
    at Object.<anonymous> (/Users/ihyeseung/projectfolder/fastcam/frontstudy/nodejs/practice/readFileSync.js:4:19)
    at Module._compile (module.js:573:30)
    at Object.Module._extensions..js (module.js:584:10)
    at Module.load (module.js:507:32)
    at tryModuleLoad (module.js:470:12)
    at Function.Module._load (module.js:462:3)
    at Function.Module.runMain (module.js:609:10)
    at startup (bootstrap_node.js:158:16) errno: -2, code: 'ENOENT', syscall: 'open', path: './calc.js' }
done!
```

동기 방식에서는 `console.log('done!')`이 이전 코드의 실행이 완료될때까지 기다린 후 실행되었다.

<br>

# Github REST API 호출

```js
//request.js

// 유저 이름, 저장소, 할당된 이슈 갯수 출력하기
const request = require('request')
const apiUrl = 'https://api.github.com'
const option = {
  json: true,
  auth: {
    'user': 'username', // github 유저네임
    'pass': 'password', // github 비밀번호
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
```

```bash
$ node request.js
```

## Callback Hell

![callback hell](https://image.slidesharecdn.com/promisesandchaininginangularjs-141027044455-conversion-gate02/95/promises-and-chaining-in-angularjs-into-callback-hell-and-back-again-17-638.jpg?cb=1414385382)

<br>

# Promise

비동기 작업의 결과를 담는 객체  
정확히 언제가 될지 모르지만, 결국 성공 또는 실패의 상태를 갖게 되며 이 상태가 되었을 때 비로소 콜백을 실행하라는 명령을 갖게 된다.

```js
// tenSec.js

// 10초 뒤에 콜백(promise 객체를 새로 만들어서 리턴)을 실행하는 함수
module.exports = function tenSec(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value)
    }, 10000)
  })
}
```

```
> const tenSec = require('./tenSec')
> const p = tenSec(1) // p에 Promise 저장
> p // 만든지 10초가 지나기 전
Promise {
  [pending], //pending: 아직 결과가 나오지 않음.
  ...
> p // 만든지 10초가 지난 후
Promise {
  1,
  ...
```

## 1) promise의 상태(state)

* pending
아직 수행 중인 상태 (fulfilled 혹은 rejected 되기 전)

* fulfilled
promise가 지켜진(수행된) 상태

* rejected
promise가 지켜지지 못한(거부된) 상태

* settled
fulfilled이든 rejected이든 결론이 난 상태

## 2) .then

promise 객체의 메서드


```
> tenSec('hello promise').then(value => {
... console.log(value)
... })
Promise { // `then`은 Promise를 반환
  [pending],
  ...
> // 10초 후
'hello promise'
```

new Promise ()의 결과는 promise이다.
.then 메소드에서 반환된 값도 promise이다.
따라서 .then 메소드를 계속 사용할 수 있다.
.then 메소드를 쓰면 들여쓰기를 하지 않아도 된다.
따라서 Callback Hell을 피할 수 있다.

return은 바로 실행되는 동기식 작업이다. 

비동기 작업을 하려면 콜백을 통해서 해야 했다.

```js
new Promise()
.then(value => {
  request.get( function(){

  })
return // 콜백은 함수 밖에서 리턴이 불가하다
})
```

promise는 함수 밖에서 리턴해야 하는데 위와 같은 콜백 방식에서는 함수 밖에서 리턴이 불가하다.


```js
new Promise()
.then(value => {
  
})
.then(value => {

})
```


## 3) Promise chaining

```js
// chaining.js
const tenSec = require('./tenSec')
tenSec('hello promise')
  .then(value => {
    console.log(value)
    return 1 // 위 `.then`은 값이 1인 Promise를 반환함
  })
  .then(value => {
    console.log(value) // value = 1
    return tenSec('new promise') // Promise도 반환할 수 있음
  }) // 안에 들어 있는 값이 value(=1)인 Promise 생성
  .then(value => { // tenSec이 실행되고 10초 후 실행됨
    console.log(value)
  })
  .then(() => { //promise 안에서 에러가 나면
    throw new Error('error in promise')
  })
  .catch(err => { // 에러가 나면 catch 내부 코드 실행, 안나면 통과
    console.error(err)
  })
  .then(() => { // 에러 처리 이후에도 코드 실행 가능
    console.log('done')
  })
```

---
### 기타 메소드

* Promise.all(Arr): 모든 프라미스가 성공해야 성공하는 promise

```js
pa = Promise.all([p1, p2])
// pa는 p1, p2가 모두 성공해야 성공하는 Promise이다.
```

* Promise.race(Arr): 가장 빨리 성공하는 promise를 반환

```js
pr = Promise.race([p1, pw])
```

* promisify 함수

```js
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
```

```
{ Error: ENOENT: no such file or directory, open './calc.js' errno: -2, code: 'ENOENT', syscall: 'open', path: './calc.js' }
```

---

## 4) Promise의 특징

1) 이미 resolve 된 Promise에도 콜백을 실행할 수 있음

```js
> const resolved = Promise.resolve(1)
> resolved.then(v => console.log(v))
```

2) `.then`에 넘겨진 콜백은 (비동기가 아니라 바로 성공하도록 만들어진 동기식 promise라 하더라도)무조건 다음 루프에 실행됨

```js
> (function() {
... Promise.resolve(1).then(v => console.log(v))
... console.log('done!')
... })()
/* 출력:
done! -> 먼저 출력된다.
1
*/
```

## Promise.all

```js
// npm install --save request-promise
const rp = require('request-promise')
const apiUrl = 'https://api.github.com'
const option = {
  json: true,
  auth: {
    'user': 'username',
    'pass': 'password',
  },
  headers: {
    'User-Agent': 'request'
  }
}

const userPromise = rp.get(`${apiUrl}/user`, option)
const reposPromise = rp.get(`${apiUrl}/user/repos`, option)
const issuesPromise = rp.get(`${apiUrl}/issues`, option)

// 배열 내의 모든 Promise 객체가 완료되었을 때
// resolve 되는 Promise를 만든다.
Promise.all([userPromise, reposPromise, issuesPromise])
  .then(([user, repos, issues]) => {
    console.log(`name: ${user.name}`)
    console.log('repos:')
    repos.forEach(repo => {
      console.log(repo.name)
    })
    console.log(`num of assigned issues: ${issues.length}`)
  })
```

비동기 코드와 동일한 일을 promise로 할 수 있으며 promise를 이용하면 좀 더 깔끔하게 코드를 짤 수 있다.

> * [Fetch API](http://hacks.mozilla.or.kr/2015/05/this-api-is-so-fetching/)
>  * window.fetch polyfill: Fetch API를 IE에서도 사용할 수 있게 해준다.

<br>

# Async/Await

* ES2017에서 도입되어, 비동기식 코드를 동기식 코드처럼 쓸 수 있는 문법 제공
* Chrome 55, Node.js 8.0.0 부터 사용가능
(아주 최근에 나온 문법이므로, 아직까지는 비동기식 코드에 promise가 더 널리 쓰인다.)
* async function 안에서 반환된 값은 최종적으로 Promise 객체로 변환되어 반환된다.
* async function 안에서 쓸 수 있는 await 키워드는 현재 함수를 중단시키고 Promise 객체가 충족될 때까지 기다리지만, 스레드를 block 하지 않는다.
* 에러 처리는 동기식 코드처럼 try, catch 블록을 통해서 한다.

```js
const tenSec = require('./tenSec')

//await는 async 함수 안에서만 사용할 수 있다.
async function resolveAfterTenSec() {
  await tenSec()
  return 1
}

resolveAfterTenSec().then(value => {
  console.log(value)
})
```

## 1) readFile - async/await

```js
// readfileAsync.js
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
```

```
{ Error: ENOENT: no such file or directory, open './calc.js' errno: -2, code: 'ENOENT', syscall: 'open', path: './calc.js' }
```

---