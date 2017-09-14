import AJAX from './ajax';

// 테이블
const tbody = document.querySelector('tbody');

// 버튼
const addBtn = document.querySelector('#add-btn');
// const editBtn = document.querySelector('#del-btn');

class BookList {
  constructor() {
    this.url = '/books';
    this.books = [];
  }
}

// =============================================
// 함수

// (1) bookList를 그려주는 기능
function render(data) {
  // 리스트 초기화
  tbody.innerHTML = '';
  // 전체 리스트 조회
  data.forEach((item) => {
    tbody.innerHTML +=
      `<tr>
    <th>${item.id}</th>
    <td>${item.title}</td>
    <td>${item.author}</td>
    <td>${item.price}</td>
    <td>  
      <a class="waves-effect waves-gray btn-flat" id="edit-btn">
        <i class="medium material-icons" data-item="${item.id}" data-type="edit" >mode_edit</i>
      </a>
      <a class="waves-effect waves-gray btn-flat" id="del-btn">
        <i class="medium material-icons data-item="${item.id}" data-type="delete">delete</i>
      </a>
    </td>
    </tr>`;
  });
}

// (2) 새 리스트 항목 추가 기능
function appendInput(id) {
  // const id = length + 1;
  // tbody의 마지막 엘리먼트로 추가한다.
  tbody.insertAdjacentHTML('beforeend',
    `<tr>
    <th>${id}</th>
    <td><input class="validate" type="text" id="title" placeholder="책 제목을 입력하세요."></td>
    <td><input class="validate" type="text" id="author" placeholder="저자를 입력하세요."></td>
    <td><input class="validate" type="text" id="price" placeholder="가격을 입력하세요."></td>
    <td>  
      <a class="waves-effect waves-gray btn-flat" id="submit-btn">
        <i class="medium material-icons" data-item="${id}" data-type="submit">done</i>
      </a>
      <a class="waves-effect waves-gray btn-flat" id="cancel-btn">
        <i class="medium material-icons" data-item="${id}" data-type="cancel">cancel</i>
      </a>
      <a class="waves-effect waves-gray btn-flat" id="del-btn">
        <i class="medium material-icons"  data-item="${id}" data-type="delete">delete</i>
      </a>
    </td>
    </tr>`);
}

// (3) 새 아이템 추가 기능
function addItem(newData) {
  // console.log(newData);
  // 아이템이 추가된 배열을 post로 보낸다.
  AJAX.post('/books', JSON.stringify(newData));
}

// (4) 기존 아이템 업데이트 기능
function updateItem(newData, id) {
  const path = '/books/' + id;
  AJAX.put(path, JSON.stringify(newData));
}

// =============================================
// 화면
// 1. 첫 페이지: 북리스트

// bookList 로드

function loadList() {
  AJAX.get('/books').then((data) => {
    BookList.books = (JSON.parse(data));
    // console.log(BookList.books);
    render(BookList.books);
  });
}

loadList();


// 2. add버튼 눌렀을 때
addBtn.addEventListener('click', () => {
  // 현재 리스트 아이템 갯수 = tr의 갯수
  const length = tbody.childElementCount;
  const id = length + 1;

  // 리스트에 input 항목 추가
  appendInput(id);

  // 2-1. submit을 누르는 경우
  // submitBtn.addEventListener('click', () => {
  tbody.addEventListener('click', (e) => {
    // 사용자가 입력한 input값
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const price = document.querySelector('#price').value;

    const newData = {
      id,
      title,
      author,
      price
    };
    newData.editable = false;

    // event deligation
    if (!e.target || e.target.nodeName !== 'I') return;
    // 이벤트 걸어줄 대상이 되는 버튼
    const buttonType = e.target.dataset.type;
    if (buttonType === 'submit' && !newData.editable) {
      // ADD -> submit: 첫 생성인 경우
      newData.editable = true;
      newData.status = 'new';
      addItem(newData);
      loadList();
    }
  });
});

// 3. edit  버튼을 눌렀을 때
// editBtn.addEventListener('click', () => {
//   tbody.addEventListener('click', (e) => {
//     const buttonType = e.target.dataset.type;
//     const id = e.target.dataset.item;

//     // 사용자가 입력한 input값
//     const title = document.querySelector('#title').value;
//     const author = document.querySelector('#author').value;
//     const price = document.querySelector('#price').value;

//     const newData = {
//       id,
//       title,
//       author,
//       price
//     };
//     newData.editable = false;

//     // event deligation
//     if (!e.target || e.target.nodeName !== 'I') return;
//     // 버튼이 submit이고 수정인 경우
//     if (buttonType === 'submit' && newData.editable) {
//       newData.status = 'edited';
//       updateItem(newData, id);
//       loadList();
//     }
//   });
// });
