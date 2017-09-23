![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYsXvW6Bfe9ePKxXXFSgviF9NBnHb9HvYi5r5M-myak3MkubFaqw)

# Flux

Flux는 Facebook에서 클라이언트-사이드 웹 어플리케이션을 만들기 위해 사용하는 어플리케이션 아키텍쳐다. 단방향 데이터 흐름을 활용해 뷰 컴포넌트를 구성하는 React를 보완하는 역할을 한다. 

Flux 어플리케이션은 다음 핵심적인 세가지 부분으로 구성되어 있다: Dispatcher, Stores, Views(React 컴포넌트). 

<br>

## 구조와 데이터 흐름

Flux 어플리케이션에서의 데이터는 단방향으로 흐른다.

![](https://haruair.github.io/flux/img/flux-simple-f8-diagram-explained-1300w.png)

모든 데이터는 중앙 허브인 dispatcher를 통해 흐른다. action은 dispatcher에게 action creator 메소드를 제공하는데 대부분의 action은 view에서의 사용자 상호작용에서 발생한다. dispatcher는 store를 등록하기 위한 콜백을 실행한 이후에 action을 모든 store로 전달한다. 등록된 콜백을 활용해 store는 관리하고 있는 상태 중 어떤 액션이라도 관련이 있다면 전달해준다. store는 change 이벤트를 controller-views에게 알려주고 그 결과로 데이터 계층에서의 변화가 일어난다. Controller-views는 이 이벤트를 듣고 있다가 이벤트 핸들러가 있는 store에서 데이터를 다시 가져온다. controller-views는 스스로의 `setState()` 메소드를 호출하고 컴포넌트 트리에 속해 있는 자식 노드 모두를 다시 랜더링하게 한다.

Action creator는 라이브러리에서 제공하는 helper 메소드이다. 메소드 파라미터에서 action을 생성하고 type 을 설정하거나 dispatcher에게 제공하는 역할을 한다.

모든 action은 store가 dispatcher에 등록해둔 callback을 통해 모든 store에 전송된다.

action에 대한 응답으로 store가 스스로 갱신을 한 다음에는 자신이 변경되었다고 모두에게 알린다.

controller-view라고 불리는 특별한 view가 변경 이벤트를 듣고 새로운 데이터를 store에서 가져온 후 모든 트리에 있는 자식 view에게 새로운 데이터를 제공한다.

어플리케이션의 상태는 store에 의해서 관리되고 어플리케이션의 다른 부분과는 완전히 분리된 상태로 남는다. 두 store 사이에 의존성이 나타나도 둘은 엄격하게 위계가 관리되어 dispatcher에 의해 동기적으로 변경되는 방법으로 관리된다.

<br>

## single dispatcher 

dispatcher는 Flux 어플리케이션의 중앙 허브로 모든 데이터의 흐름을 관리한다. 본질적으로 store의 콜백을 등록하는데 쓰이고 action을 store에 배분해주는 간단한 작동 방식으로 그 자체가 특별하게 똑똑한 것은 아니다. 각각의 store를 직접 등록하고 콜백을 제공한다. action creator가 새로운 action이 있다고 dispatcher에게 알려주면 어플리케이션에 있는 모든 store는 해당 action을 앞서 등록한 callback으로 전달 받는다.

어플리케이션의 규모가 커지게 되면 dispachter의 역할은 더욱 필수적이다. **store 간에 의존성(dependency)을 특정적인 순서로 callback을 실행하는 과정으로 관리하기 때문이다. Store는 다른 store의 업데이트가 끝날 때까지 선언적으로 기다릴 수 있고 끝나는 순서에 따라 스스로 갱신된다.

<br>

## Stores

store는 자신을 dispatcher에 등록하고 callback을 제공한다. 이 callback은 action을 파라미터로 받는다. store의 등록된 callback의 내부에서는 switch문을 사용한 action 타입을 활용해서 action을 해석하고 store 내부 메소드에 적절하게 연결될 수 있는 훅을 제공한다. 여기서 결과적으로 action은 disaptcher를 통해 store의 상태를 갱신한다. store가 업데이트 된 후, 상태가 변경되었다는 이벤트를 중계하는 과정으로 view에게 새로운 상태를 보내주고 view 스스로 업데이트하게 만든다.

<br>

## Views와 Controller-Views 

React는 조화롭고 자유로운 형태로 다시 랜더링 할 수 있는 view를 view 레이어로 제공한다. 복잡한 view 위계의 상위를 살펴보면 store에 의해 이벤트를 중계할 수 있는 특별한 종류의 view가 있다. 이 view를 controller-view라고 부르는데 store에서 데이터를 얻을 수 있는 glue 코드를 제공하고 데이터를 위계대로 자식들에게 전달하도록 돕는다. 페이지의 광범위한 영역을 관리하는 contoller-view를 가지게 된다.

store에게 이벤트를 받으면 store의 퍼블릭 getter 메소드를 통해 새로 필요한 데이터를 처음으로 요청하게 된다. 그 과정에서 setState() 또는 forceUpdate() 메소드를 호출하게 되고 그 호출 과정에서 자체의 render() 메소드와 하위 모든 자식의 render() 메소드를 실행한다.

전체적인 store의 상태를 단일 객체로 만들어 하위에 있는 view에 전달하게 되는데 다른 자식들도 필요한 부분이라면 데이터를 사용할 수 있도록 한다. 또한 controller-view는 위계의 최상위에서 마치 controller와 같은 역할을 지속적으로 수행해 하위에 있는 view가 가능한 한 순수하게, 함수적으로 유지될 수 있도록 한다. 또한 store의 전체 상태를 단일 객체로 흘려 보내는데 이 방식은 관리해야 하는 프로퍼티 수를 줄이는 효과도 있다.

때때로 컴포넌트의 단순함을 유지하기 위해 위계 깊은 곳에서 contoller-views가 추가적으로 필요할 때가 있다. 중간에 contoller-views를 넣으면 특정 데이터 도메인에 관계된 위계 영역을 감싸서 독립적으로 만드는데(encapsulate) 도움이 된다. 하지만 조심해야 한다. 위계 내에서 만든 controller-view는 단일의 데이터 흐름과 상충해 잠재적으로 새로운 데이터 흐름의 시작점에서 충돌할 수 있다.

내부에 controller-view를 추가하는 것을 결정할 때에는 여러 데이터 업데이트의 흐름이 위계와 다른 방향으로 흐르지 않도록 고려해 단순함의 균형을 유지해야 한다. 여러 데이터가 업데이트 되면 이상한 효과를 만들어 React의 렌더링 메소드가 다른 controller-view에 의해 반복적으로 실행되서 디버깅의 어려움을 가중할 가능성이 있다. 내부 controller-view를 만드는 것을 결정할 때, 데이터를 갱신하기 위해 위계에서 여러 방향으로 흐르는 복잡성에 반해 단순한 컴포넌트의 이점에서 균형을 찾아야 한다. 여러 방향으로의 데이터 갱신은 이상한 효과를 만들 수 있다. 특히 React의 렌더 메소드는 여러 controller-view를 갱신하기 위해 반복적으로 실행이 되어버려 디버깅의 어려움을 가중할 수도 있다.

<br>


## Actions

dispatcher는 action을 호출해 데이터를 불러오고 store로 전달할 수 있도록 메소드를 제공한다. action의 생성은 dispatcher로 action을 보낼 때 의미있는 헬퍼 메소드로 포개진다. 할 일 목록 어플리케이션에서 할 일 아이템의 문구를 변경하고 싶다고 가정하자. updateText(todoId, newText)와 같은 함수 시그니쳐를 이용해 TodoActions 모듈 내에 action을 만든다. 이 메소드는 view의 이벤트 핸들러로부터 호출되어 실행할 수 있고 그 결과로 사용자 상호작용에 응답할 수 있게 된다. 이 action creator 메소드는 type 을 추가할 수 있다. 이 type을 이용해 action이 store에서 해석될 수 있도록, 적절한 응답이 가능하도록 한다. 예시에서와 같이 TODO_UPDATE_TEXT와 같은 이름의 타입을 사용한다.

action은 서버와 같은 다른 장소에서 올 수 있다. 예를 들면 data를 초기화 할 때 이런 과정이 발생할 수 있다. 또한 서버에서 에러 코드를 반환하거나 어플리케이션이 제공된 후에 업데이트가 있을 때 나타날 수 있다.


<br>

---
***Reference***

[FLUX DOC](https://haruair.github.io/flux/docs/overview.html#content)

