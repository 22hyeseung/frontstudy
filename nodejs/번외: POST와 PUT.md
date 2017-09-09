# REST API: POST VS PUT

POST와 PUT은 CRUD로직중 Create와 Update의 속성을 가진 http 메소드이다.

정의만 보면 둘은 동일한 작업을 하는 것 같다. 둘은 어떤 차이가 있는가?

## Idempotent

첫번째 차이는 [멱등성(Idempotent)](https://ko.wikipedia.org/wiki/%EB%A9%B1%EB%93%B1%EB%B2%95%EC%B9%99)이다.  

멱등성이란 단항연산 ƒ에 대해 결과 값이 항상 자기 자신을 향하는 성질이다. 이러한 성질을 수식으로 표현하면 아래와 같다.  

*ƒ(ƒ(x))=ƒ(x)*  

한마디로, 같은 연산을 무한정 반복해도 결과는 **항상 동일한 값을 갖는다**는 말이다.  

RESTful 서비스 관점에서, 연산(서비스 호출)이 idempotent하려면, 클라이언트가 (의도했거나 말거나) 동일한 요청을 반복적으로 보내도 한번 요청했을 때와 같은 결과를 산출할 수 있어야 한다.

결론부터 말하면, PUT은 멱등성을 가지고 있지만 POST는 그렇지 못하다.

## 리소스 결정권

**URI에 대한 결정권이 서버측에 있는가 클라이언트측에 있는가**의 차이가 있다. PUT은 클라이언트에 있으며 POST는 서버에게 있다.

### POST

POST는 새로운 리소스(자원)를 생성(create)할 때 주로 사용된다. 특히 하위 리소스를 만드는 데 주로 사용된다. 즉, POST로 생성하는 리소스는 상위 리소스에 종속된다. 부모(상위) 리소스에 POST를 보내면 **서비스가 부모와 새로 생성할 리소스를 연결하고 ID(새 리소스의 URI)를 할당하는 등의 작업을 처리한다.** 클라이언트는 저장해야할 리소스의 위치를 모르기 때문에 지정해줄 수 없다. 즉, 리소스의 URI 결정권이 전적으로 서버측에 있다.  

```json
POST /customers HTTP/1.1
{ "name": "Bob", "age": 17  }

HTTP/1.1 201 Created
```

위 예제에서 `{ "name": "Bob", "age": 17  }`는 POST요청으로 새롭게 생성될 리소스(하위 리소스)이며 부모(싱위 리소스)인 customers 아래에 생성된다. POST로 생성되는 리소스는 요청마다 다른 위치에 배정된다. 위 리소스의 위치는 `/customers/2`로 지정되며 만약 동일한 리소스에 대한 POST 요청을 한번 더 보내면 위치만 다르게(`/customers/3`) 같은 리소스가 생성될 것이다.  

이처럼 POST는 not idempotent하다. POST 요청은 보내는 족족 서버는 새로운 위치에 새로운 리소스를 만든다.

<br>

### PUT

PUT은 **클라이언트가 지정한 위치에** 리소스를 생성하거나 업데이트(update/replace)한다. 클라이언트가 리소스를 저장할 위치를 알고 있으며, URI에 대한 결정권은 전적으로 클라이언트측에 있다.  

PUT은 리소스의 생성보다는 **수정/업데이트** 기능에 가장 많이 사용된다.  

```json
PUT /customers/3 HTTP/1.1
{ "name": "Ash", "age": 28  }
```

PUT은 지정된 특정 위치의 리소스에 대해 제어하므로 동일 요청을 여러번으로 보내도 한번 보낸 것과 동일한 효과를 낸다. 즉, idempotent하다.

---

**Reference**

[멱등성](https://ko.wikipedia.org/wiki/%EB%A9%B1%EB%93%B1%EB%B2%95%EC%B9%99)  

[REST API: POST VS PUT](https://1ambda.github.io/javascripts/rest-api-put-vs-post/)   

[What Is Idempotence?](http://www.restapitutorial.com/lessons/idempotency.html)  

[When should we use PUT and when should we use POST?](http://restcookbook.com/HTTP%20Methods/put-vs-post/)  

[POST vs PUT](http://blog.embian.com/66)  
