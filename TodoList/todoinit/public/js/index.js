// vanilla

(function (window, document) {
  var date = new Date();

  // 오늘 날짜 가져오는 함수
  function getDateToday() {
    var yyyy = date.getFullYear();
    var mm = date.getMonth() + 1;
    var dd = date.getDate();
    var dayName = ['일요일', '월요일', '화요일', '수요알', '목요일', '금요일', '토요일'];
    var day = dayName[date.getDay()];

    // var yy = parseInt(yyyy).toString().slice(2, 4);
    return yyyy + '년 ' + mm + '월 ' + dd + '일 ' + day;
  }

  var today = document.getElementById('today');
  today.append(getDateToday());

  // 시계 - 실시간
  // function getRealTime() {
  //   var h = date.getHours();
  //   var m = date.getMinutes();
  //   var s = date.getSeconds();

  //   if (h < 10) { h = '0' + h };
  //   if (m < 10) { m = '0' + m };
  //   if (s < 10) { s = '0' + s };

  //   document.getElementById('clock').innerHTML = h + ':' + m + ':' + s;
  //   setTimeout(getRealTime, 500);
  // }

})(window, document);



// 진행률 로더
moveProgressBar();
//브라우저 크기 조절 시 다시 로드
$(window).resize(function () {
  moveProgressBar();
});

function moveProgressBar() {
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



//

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
