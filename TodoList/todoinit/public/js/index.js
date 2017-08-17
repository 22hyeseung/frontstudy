$(".input").focus(function () {
  $(this).parent().addClass("is-active is-completed");
});

$(".input").focusout(function () {
  if ($(this).val() === "")
    $(this).parent().removeClass("is-completed");
  $(this).parent().removeClass("is-active");
})

$(".button").mouseover(function () {
  $(this).css('background-color', '#333');
  $(this).css('color', '#e8f8f9');
})

$(".button").mouseout(function () {
  $(this).css('background-color', '#b0e0e6');
})

$(".button").click(function (){
  $(".todo-input-group").css('display', 'block');
})