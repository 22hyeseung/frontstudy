import AJAX from './ajax';

const userid = document.getElementById('userid');
const password = document.getElementById('password');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const putBtn = document.getElementById('put-btn');
const delBtn = document.getElementById('del-btn');

const viewer = document.getElementById('viewer');

// const xhr = new XMLHttpRequest();

function clear() {
  userid.value = '';
  password.value = '';
  firstname.value = '';
  lastname.value = '';
  viewer.innerHTML = '';
}

// function xhrRequest() {
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === xhr.DONE) {
//       if (xhr.status === 200) {
//         viewer.innerHTML = xhr.responseText;
//       } else {
//         console.log('error!');
//       }
//     }
//   };
// }

function render(data) {
  viewer.innerHTML = data;
}

// get

function getUserList() {
  // xhr.open('GET', '/users');
  // xhr.send();
  // xhrRequest();
  AJAX.get('/users').then((data) => {
    console.log(data);
    render(data);
  });
}

function getUser() {
  const path = '/users/' + userid.value;
  // xhr.open('GET', path);
  // xhr.send();
  // xhrRequest();
  AJAX.get(path).then((data) => {
    render(data);
  });
}

// post

function addUser() {
  // xhr.open('POST', '/users');
  // xhr.setRequestHeader('Content-type', 'application/json');
  const userdata = {
    userid: userid.value,
    password: password.value,
    firstname: firstname.value,
    lastname: lastname.value
  };
  // xhr.send(JSON.stringify(userdata));
  // xhrRequest();
  AJAX.post('/users', userdata).then((data) => {
    render(data);
  });
}

// put

function updateUser() {
  const path = '/users/' + userid.value;
  // xhr.open('PUT', path);
  // xhr.setRequestHeader('Content-type', 'application/json');
  const newdata = {
    userid: userid.value,
    password: password.value,
    firstname: firstname.value,
    lastname: lastname.value
  };
  // xhr.send(JSON.stringify(newdata));
  // xhrRequest();
  AJAX.put(path, newdata).then(render);
}

function deleteUser() {
  const path = '/users/' + userid.value;
  // xhr.open('DELETE', path);
  // xhr.send();
  // xhrRequest();
  AJAX.delete(path).then((data) => {
    render(data);
  });
}

getBtn.addEventListener('click', function () {
  if (!userid.value) getUserList();
  else getUser();
  clear();
});

postBtn.addEventListener('click', function () {
  addUser();
  clear();
});

putBtn.addEventListener('click', function () {
  updateUser();
  clear();
});

delBtn.addEventListener('click', function () {
  deleteUser();
  clear();
});
