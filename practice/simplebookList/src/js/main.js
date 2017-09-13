import AJAX from './ajax';

// 테이블
const tbody = document.querySelector('tbody');

// 버튼
const addBtn = document.querySelector('#add-btn');
const editBtn = document.querySelector('#del-btn');

// bookList를 그려주는 render 함수
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

// 첫 페이지
AJAX.get('/books').then((data) => {
  // console.log(JSON.parse(data));
  render(JSON.parse(data));
});

// 아이템(book) 추가

// add버튼을 누르면 input 리스트가 추가로 생성된다.
addBtn.addEventListener('click', () => {
  // 리스트의 길이 = tr의 갯수 = tbody의 자식 노드 갯수
  const length = tbody.childElementCount;
  const id = length + 1;
  // tbody의 마지막 엘리먼트로 추가한다.
  tbody.insertAdjacentHTML('beforeend',
    `<tr>
  <th>${id}</th>
  <td><input type="text" id="title" placeholder="책 제목을 입력하세요."></td>
  <td><input type="text" id="author" placeholder="저자를 입력하세요."></td>
  <td><input type="text" id="price" placeholder="가격을 입력하세요."></td>
  <td>  
    <a class="waves-effect waves-gray btn-flat" id="submit-btn">
      <i class="medium material-icons">done</i>
    </a>
    <a class="waves-effect waves-gray btn-flat" id="cancel-btn">
      <i class="medium material-icons">cancel</i>
    </a>
    <a class="waves-effect waves-gray btn-flat" id="del-btn">
      <i class="medium material-icons">delete</i>
    </a>
  </td>
  </tr>`);
});

tbody.addEventListener('click', (e) => {
  if (!e.target || e.target.nodeName !== 'BUTTON') return;

});

// 사용자가 입력한 input값을 데이터로 받는다.

// const inputData = 

// post해서 받은 데이터를 추가한다.
// AJAX.post('/books', newData).then((data) => {
//   render(JSON.parse(data));
// });
