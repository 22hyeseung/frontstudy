import AJAX from './ajax';

// 테이블
const tbody = document.querySelector('tbody');

// 버튼
const addBtn = document.querySelector('#add-btn');
const editBtn = document.querySelector('#del-btn');

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
      <a class="waves-effect waves-gray btn-flat" id="submit-btn" data-item="${id}" data-type="submit">
        <i class="medium material-icons">done</i>
      </a>
      <a class="waves-effect waves-gray btn-flat" id="cancel-btn" data-item="${id}" data-type="cancel">
        <i class="medium material-icons">cancel</i>
      </a>
      <a class="waves-effect waves-gray btn-flat" id="del-btn" data-item="${id}" data-type="delete">
        <i class="medium material-icons">delete</i>
      </a>
    </td>
    </tr>`);
}

// (3) 새 아이템 추가 기능
function addItem(inputData) {
  // post해서 받은 데이터를 추가한다.
  AJAX.post('/books', inputData).then((data) => {
    render(JSON.parse(data));
  });
}

// (4) 기존 아이템 업데이트 기능
function updateItem(inputData, id) {
  const path = '/books' + id;
  AJAX.put(path, inputData).then((data) => {
    render(JSON.parse(data));
  });
}

// =============================================
// 화면
// 1. 첫 페이지: 북리스트
AJAX.get('/books').then((data) => {
  // console.log(JSON.parse(data));
  render(JSON.parse(data));
});

// 2. 리스트에 아이템(book) 추가
addBtn.addEventListener('click', () => {
  // 현재 리스트 아이템 갯수 = tr의 갯수
  const length = tbody.childElementCount;
  const id = length + 1;
  appendInput(id);
});

tbody.addEventListener('click', (e) => {
  if (!e.target || e.target.nodeName !== 'BUTTON') return;
  // 이벤트 걸어줄 대상이 되는 버튼과 데이터 ID
  const tragetID = e.target.dataset.item * 1;

  // 클릭 이벤트에서만 생기는 버튼
  const submitBtn = document.querySelector('#submit-btn');
  const cancelBtn = document.querySelector('#cancel-btn');

  // 사용자가 입력한 input값
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const price = document.querySelector('#price');

  const inputData = { title, author, price };
  inputData.editable = false;

  // 2-1. submit을 누르는 경우
  submitBtn.addEventListener('click', () => {
    // 첫 생성인 경우
    if (!inputData.editable) {
      inputData.status = 'new';
      inputData.editable = true;
      // post
      addItem(inputData);
    } else { // 수정인 경우
      inputData.status = 'edited';
      // put
      updateItem(inputData, tragetID);
    }
  });
  // 2-2. cancel을 누르는 경우
  cancelBtn.addEventListener('click', () => {
    // 첫 생성인 경우
    if (!inputData.editable) {
      // 해당 리스트 삭제
    } else { // 수정인 경우
      // 실행 취소
    }
  });
});

// 3. 리스트의 아이템 편집(수정)

// 4. 리스트의 아이템 삭제

// tbody.addEventListener('click', (e) => {
//   if (!e.target || e.target.nodeName !== 'BUTTON') return;

//   const tragetID = e.target.dataset.item * 1;

// });


