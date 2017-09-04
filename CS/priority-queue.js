// Queue 함수 선언
function Queue() {
 var items = [];
 
 this.enqueue = function (element) {
    return items.push(element);
  };

  // shift 함수는 배열의 뒤에서 인덱스를 1칸씩 미는 것이다.
  // [0, 1, 2, 3 ,4] -> [1, 2, 3, 4] -> [0]이 빠져나온다. -> 즉, 앞에서부터 item을 하나씩 꺼낸다.
  this.dequeue = function () {
    return items.shift();
  };

  this.front = function () {
    return items[0];
  };

  this.isEmpty = function () {
    return items.length === 0;
  };

  this.clear = function () {
    items = [];
  };

  this.size = function () {
    return items.length;
  };

  this.print = function () {
    console.log(items.toString());
  };
}

// 우선순위 큐

function PriorityQueue() {
  var items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function (element, priority) {
    var queueElement = new QueueElement(element.priority);

    if (items.isEmpty()) {
      items.push(queueElement);
    } else {
      var added = false;
      for (var i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        items.push(queueElement);
      }
    }
  }

  this.dequeue = function () {
    return items.shift();
  };

  this.front = function () {
    return items[0];
  };

  this.size = function () {
    return items.length;
  };

  this.clear = function() {
    return items = [];
  };
  
  this.isEmpty = function () {
    return items.length === 0;
  };
}
