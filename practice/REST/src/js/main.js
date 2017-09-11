const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const putBtn = document.getElementById('put-btn');
const delBtn = document.getElementById('del-btn');

const viewer = document.getElementById('viewer');
const req = new XMLHttpRequest();

// get

function getUser() {
  req.open('GET', '/users', true);
  req.setRequestHeader('Accept', 'application/json');
  req.send(null);

  req.onreadystatechange = () => {
    if (req.readyState === req.DONE) {
      if (req.status === 200) {
        // console.log('response text: ' + req.responseText);
        viewer.innerHTML = req.responseText;
      } else {
        // viewer.innerHTML = 'GET failed!';
        console.log('GET failed!');
      }
    }
  };
}

getBtn.addEventListener('click', getUser);


// post

function addUser() {
  const id = req.responseText.
  req.open('POST', '/users/' + id, true);

}
