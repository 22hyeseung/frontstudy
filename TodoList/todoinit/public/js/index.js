// vanilla
// Header 오늘 날짜 가져오는 함수
function getDateToday() {
  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = today.getMonth() + 1;
  var dd = today.getDate();
  var dayName = ['일요일', '월요일', '화요일', '수요알', '목요일', '금요일', '토요일'];
  var day = dayName[today.getDay()];

  // var yy = parseInt(yyyy).toString().slice(2, 4);

  today = yyyy + '년 ' + mm + '월 ' + dd + '일 ' + day;

  return today;
}

// 진행률 로더
moveProgressBar();
//브라우저 크기 조절 시 다시 로드
$(window).resize(function () {
  moveProgressBar();
});

function moveProgressBar() {
  console.log("moveProgressBar");
  var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
  var getProgressWrapWidth = $('.progress-wrap').width();
  var progressTotal = getPercent * getProgressWrapWidth;
  var animationLength = 2500;

  // on page load, animate percentage bar to data percentage length
  // .stop() used to prevent animation queueing
  $('.progress-bar').stop().animate({
    left: progressTotal
  }, animationLength);
}

// DOM
(function (window, document) {
  var today = document.getElementById('today');
  today.append(getDateToday());
})(window, document);

// jQuery
// Contents 할 일 입력란 액션
$(".input").focus(function () {
  $(this).parent().addClass("is-active is-completed");
});

$(".input").focusout(function () {
  if ($(this).val() === "")
    $(this).parent().removeClass("is-completed");
  $(this).parent().removeClass("is-active");
})

// Contents 할 일 추가 버튼
$(".button").mouseover(function () {
  $(this).css('background-color', '#333');
  $(this).css('color', '#ccadaf');
})

$(".button").mouseout(function () {
  $(this).css('background-color', '#ccadaf');
  $(this).css('color', '#eee');
})

$(".button").click(function () {
  $(".todo-input-group").css('display', 'block');
})
