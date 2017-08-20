(function (window, document) {
  'use strict';

  function addListItem(e) {
    if (!input.value.trim()) {
      // console.log(typeof(input.value.trim())); //strinf
      // console.log(!!input.value.trim()); false
      return;
    }
    // enter가 들어왔거나 클릭이벤트가 있을 때,
    if ((e.keyCode === 13) || (e.type === 'click')) {
      itemPost(input.value);
      input.value = '';
      input.focus();
    }
  }

  function deleteListItem(id) {
    var xhr = new XMLHttpRequest();
    xhr.open('delete', '/todoList/' + id, true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          console.log('this.responseText: ', this.responseText);
        }
      }
    }
  }

  function itemPost(task) {
    var xhr = new XMLHttpRequest();
    xhr.open('post', '/toDoList', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    var data = {
      task: task
    };
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 201) {
          console.log(this.responseText);
          var item = JSON.parse(this.responseText);
          insertItem(todoList, item.task, item.id);
        }
      }
    }
  }


  // list item 추가
  function insertItem(element, task, id) {
    todoList.insertAdjacentHTML('beforeend', '<li class="todo-item">' + task + '<button class= "button" id="list-del-btn">다 했다!</button></li>');
    bindDeleteButton(id);
  }

  // delete 버튼 바인딩
  function bindDeleteButton(id) {
    var delButton = document.querySelectorAll('#list-del-btn');
    // console.log('delButton: ', delButton[delButton.length - 1]);
    delButton[delButton.length - 1].addEventListener('click', function () {
      todoList.removeChild(delButton[delButton.length - 1].parentNode);
      deleteListItem(id);
    });
  }

  var input = document.querySelector('.input');
  // console.log('input: ', input);
  var addButton = document.querySelector('#list-add-btn');
  // console.log('addButton: ', addButton);
  var todoList = document.querySelector('.todo-list');
  // console.log('todoList: ', todoList);

  addButton.addEventListener('click', addListItem);
  input.addEventListener('keyup', addListItem);
  // CRUD create, read, update, delete
  // HTTP method, post, get, put, delete
  var xhr = new XMLHttpRequest();
  xhr.open('get', '/toDoList', true);
  xhr.send(null);
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        console.log('this.responseText: ', this.responseText);
        var toDoItemList = JSON.parse(this.responseText);
        console.log('toDoItemList: ', toDoItemList);
        toDoItemList.forEach(function (item) {
          console.log('items.task: ', item.task, item.id);
          insertItem(todoList, item.task, item.id);
        });
      } else {
        console.error('GET failed');
      }
    }
  }

})(window, document);