# 자료구조

## 1. 스택 Stack

**LIFO(Last In, First Out)** : 후입선출, 나중에 들어간 것부터 꺼낸다.

```js
// 10진수를 2진수로 바꾸는 함수

function binarayConverter(decimal){
  var remStack = new Stack(),
  rem,
  binaryString = '';

  While (decimal > 0) {
    rem = Math.floor(decimal % 2);

    remStack.push(rem);
    decimal = Math.floor(decimal / 2);
  }

  while(!remStack.isEmpty()) {
    binaryString += remStack.pop.toString
  }
}
```

<br>

## 2. 큐 Queue

**FIFO(First In First Out)** : 들어간 순서대로 꺼내는 구조, 뒤에서 넣고, 앞에서 빼는 구조

```js
// Queue 함수 선언

function Queue() { 
  var items = [];

  this.enqueue = function(element){
    return items.push(element);
  };
  
  // shift 함수는 배열의 뒤에서 인덱스를 1칸씩 미는 것이다.
  // [0, 1, 2, 3 ,4] -> [1, 2, 3, 4] -> [0]이 빠져나온다. -> 즉, 앞에서부터 item을 하나씩 꺼낸다.
  this.dequeue = function(){
    return items.shift();
  };

  this.front = function(){
    return items[0];
  };

  this.isEmpty = function(){
    return items.length === 0;
  };

  this.clear = function(){
    items = [];
  };

  this.size = function(){
    return items.length;
  };

  this.print = function(){
    console.log(items.toString());
  };
}
```

```js
var queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue("fast");
queue.enqueue("campus");
queue.enqueue("school");

queue.size();
queue.print();
```

<br>

### Queue로 구현할 수 있는 것들

***Priority Queue***

우선순위 큐

```js
function QueueElement (element, priority){
    this.element = element;
    this.priority = priority;
}

this.enqueue = function(element, priority){
    var queueElement = new QueueElement(element, priority);

    if (this.isEmpty()) {
        items.push(queueElement);
    } else {
	var added = false;
	for (var i=0; i<items.length; i++) {
	    if (queueElement.priority < items[i].priority) {
	        items.splice(i,0,queueElement);
	        added = true;
	        break;
	    }
	}
	if (!added) {
	    items.push(queueElement);
	}
    }
};
```

***Circular Queue***
