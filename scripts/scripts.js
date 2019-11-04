$(document).ready(function () {
  //toggle between icon and description
  $(".icon").on("click",function (e) {
    var $weDo = $(e.target).closest(".we-do");
    var $hide = $weDo.find(".hide");

    $hide.slideToggle("slow");
    $(this).slideToggle("slow");
  })
  $(".hide").on("click",function (e) {
    var $weDo = $(e.target).closest(".we-do");
    var $icon = $weDo.find(".icon");

    $icon.slideToggle("slow");
    $(this).slideToggle("slow");
  })
});
