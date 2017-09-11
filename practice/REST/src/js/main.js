const userid = document.getElementById('userid');
const password = document.getElementById('password');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const putBtn = document.getElementById('put-btn');
const delBtn = document.getElementById('del-btn');

const viewer = document.getElementById('viewer');
const xhr = new XMLHttpRequest();

function inputClear() {
  userid.value = '';
  password.value = '';
  firstname.value = '';
  lastname.value = '';
}

// get

function getUserList() {
  xhr.open('GET', '/users', true);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send(null);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // console.log('response text: ' + xhr.responseText);
        viewer.innerHTML = xhr.responseText;
      }
    }
  };
}

function getUser() {
  const path = '/users/' + userid.value;
  xhr.open('GET', path, true);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send(null);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // console.log('response text: ' + xhr.responseText);
        viewer.innerHTML = xhr.responseText;
      }
    }
  };
}

getBtn.addEventListener('click', () => {
  if (!userid.value) getUserList();
  else getUser();
  inputClear();
});


// post

function addUser() {
  xhr.open('POST', '/users', true);
  xhr.setRequestHeader('Content-type', 'application/json');
  const userdata = {
    userid: userid.value,
    password: password.value,
    firstname: firstname.value,
    lastname: lastname.value
  };
  xhr.send(JSON.stringify(userdata));
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        viewer.innerHTML = xhr.responseText; // 문구 안 나옴..
        // console.log(xhr.responseText);
      }
    }
  };
}

postBtn.addEventListener('click', () => {
  addUser();
  inputClear();
});


// put

function updateUser() {
  const path = '/users/' + userid.value;
  xhr.open('PUT', path, true);
  xhr.setRequestHeader('Content-type', 'application/json');
  const newdata = {
    userid: userid.value,
    password: password.value,
    firstname: firstname.value,
    lastname: lastname.value
  };
  xhr.send(JSON.stringify(newdata));
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        viewer.innerHTML = xhr.responseText;
      } else if (xhr.status === 204) {
        console.log('데이터가 없습니다.');
      }
    }
  }
}

putBtn.addEventListener('click', () => {
  updateUser();
  inputClear();
});

function deleteUser() {
  const path = '/users/' + userid.value;
  xhr.open('DELETE', path, true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(null);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        viewer.innerHTML = xhr.responseText;
      }
    }
  };
}

delBtn.addEventListener('click', () => {
  deleteUser();
  inputClear();
});
