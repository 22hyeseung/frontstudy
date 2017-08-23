 (function (window, document) {

      let bookList = [
        { id: 1, title: 'HTML5', author: 'Lee', price: 2000 },
        { id: 2, title: 'CSS3', author: 'Kim', price: 3000 },
        { id: 3, title: 'JavaScript', author: 'Park', price: 5000 }
      ];

      let tbody = document.querySelector('table');



      function makeBookList() {
        tbody.innerHTML =
          `<tr>
          <th><input type="checkbox"></th>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Price</th>
        </tr>`;
        for (var i = 0; i < bookList.length; i++) {
          tbody.innerHTML +=
            `<tr>
          <th><input type="checkbox"></th>
          <td>${bookList[i].id}</td>
          <td>${bookList[i].title}</td>
          <td>${bookList[i].author}</td>
          <td>${bookList[i].price}</td>
        </tr>`;
        }
      }
      makeBookList();

      // 체크박스 요소 전체 nodelist
      let checkboxes = document.querySelectorAll('input[type=checkbox]');
      // bookList 데이터 (tr당 데이터 1줄)
      let dataList = document.querySelectorAll('tr');

      //input 그룹
      let inputGroup = document.querySelector('.form-group');

      //하단 버튼 3개
      let delButton = document.querySelector('#del-btn');
      let addButton = document.querySelector('#add-btn');
      let cancelButton = document.querySelector('cancel-btn');

      // 체크박스 체크 여부 확인
      let checkedState = (i) => { return checkboxes[i].checked; }

      // 최상위 버튼을 토글 버튼으로: 전체 선택, 전체 해제
      function checkAll() {
        let boxState = checkedState(0); // true이면
        if (checkboxes[0]) {
          checkboxes.forEach(function (elem) {
            return elem.checked = boxState; // true
          });
        }
      }

      // 최상위 체크박스를 toggle로
      checkboxes[0].addEventListener('click', () => checkAll());


      // 체크된 List 삭제하기
      function deleteList() {
        // 체크여부 확인
        let boxState = false;
        for (let i = 0 + 1; i < checkboxes.length; i++) {
          boxState = checkedState(i); // return true/false
          // 해당 리스트 제거
          if (boxState) { // 체크된 상태이면
            bookList = bookList.filter(({ id }) => id !== (i * 1));
          }
        }
        makeBookList();
      }

      delButton.addEventListener('click', () => deleteList());

      function addList() {
        //input 칸 전체
        let inputform = document.querySelectorAll('input[type=text]')

        // 필수 입력 칸
        let title = document.querySelectorAll('input[type=text]:required')

        if (title.value) {
          let id = bookList[bookList.length - 1].id + 1;
          let title = title.value;
          let author = inputform[1].value;
          let price = inputform[2].value;
          let newData = { id, title, author, price };

          bookList.push(newData);

          makeBookList();
        } else {
          return alert("Title 입력이 필요합니다.")
        }
      }

      addButton.addEventListener('click', () => {
        if (getComputedStyle(inputGroup).display === 'none') {
          inputGroup.style.display = 'block';
        } else {
          addList();
        }
      }
      );



    }(window, document));