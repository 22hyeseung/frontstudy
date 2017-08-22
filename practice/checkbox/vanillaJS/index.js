(function (window, document) {

  var optGroup = document.querySelector('.exam-1');
  var agrGroup = document.querySelector('.exam-2');
  var counter = document.querySelector('#counter');
  var toggle = document.querySelector('#toggle');
  var agrAll = document.querySelector('#agree-all');
  var confirm = document.querySelector('#confirm');

  var optBox = optGroup.getElementsByTagName('input');
  var agrBox = agrGroup.getElementsByTagName('input');


  // check 여부 확인
  function checkOn(i, checkbox) {
    return checkbox[i].checked;
  }

  // 모든 체크박스 상태 변경
  function turnOnOff(checkbox, truefalse) {
    checkbox = [].slice.call(checkbox);
    var turnedCheckBox = checkbox.map(function (elem) {
      elem.checked = truefalse;
    });
    return turnedCheckBox;
  }

  // check된 박스 갯수 세기
  function cntChecked(checkbox) {
    var cnt = 0;
    for (var i = 0; i < checkbox.length; i++) {
      var checked = checkOn(i, checkbox) ? cnt++ : cnt;
    }
    return cnt;
  }

  // 모든 체크박스 on/off
  function selectAll(checkbox, isToggle) {
    var on = true;
    // var isToggle = true;
    for (var i = 0; i < checkbox.length; i++) {
      // 박스가 모두 체크되어 있는 지 확인
      if (on) {
        on = checkOn(i, checkbox) ? true : false;
      }
    }
    // 박스가 모두 체크된 경우 && 토글인경우 (ex. 옵션 박스)
    // 모두 체크 해제
    if (on && isToggle) {
      var onEvent = turnOnOff(checkbox, false);
    }
    // 박스가 모두 체크되었고 토글이 아닌 경우 (ex. 동의 박스)
    // 아무것도 하지 않음
    else if (on && !isToggle) {
      return;
    }
    // 박스가 하나라도 체크되지 않은 경우
    // 모두 체크 
    else {
      var offEvent = turnOnOff(checkbox, true);
    }
  }

  // optBox의 갯수를 세는 이벤트 추가
  counter.addEventListener('click', function () {
    alert(cntChecked(optBox));
  });

  // 모든 체크박스를 on/off로 토글
  toggle.addEventListener('click', function () {
    selectAll(optBox, true);
  });

  // 모든 약관 동의 체크박스를 토글
  agrAll.addEventListener('click', function () {
    selectAll(agrBox, false);
  });

  // 약관 동의가 모두 체크되지 않았을 때, alert으로 약관 동의를 요구
  confirm.addEventListener('click', function () {
    if (cntChecked(agrBox) === agrBox.length)
      return alert("감사합니다.");
    else
      return alert("약관에 모두 동의 해주세요.");
  });
}(window, document));