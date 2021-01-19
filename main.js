$(".fa-bars").click(function () {
  $(".nav-items").toggleClass("slideB");
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};
$(".search").click(function () {
  const value = $(this).attr("data-filter");
  if (value == "all") {
    $(".itembox").show(500);
  } else {
    $(".itembox")
      .not("." + value)
      .hide(400);
    $(".itembox")
      .filter("." + value)
      .show(400);
  }
  $(this).addClass("active").siblings().removeClass("active");
});

$(".accor").click(function () {
  $(this).next().slideToggle(500);
});
