// 스택으로 큐 구현하기

function Queue() {
  var inbox = [];
  var outbox = [];

  this.enqueue = function (element) {
    return inbox.push(element);
  };

  this.dequeue = function () {
    init();
    while (inbox.length > 1) {
      outbox.push(inbox.pop());
    }
    return inbox.pop();
  }

  function init() {
    if (outbox.length > 0) {
      while (outbox.length > 0)
        inbox.push(outbox.pop());
    }
  }
}

var queue = new Queue();

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(6));
console.log(queue.enqueue(7) + '\n');

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
