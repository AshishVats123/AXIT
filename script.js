$(function () {
  //  --------tabs----------
    $(".tabs ul li a").click(function (e) {
        e.preventDefault();
        $(".tabs ul li a").removeClass("active");
        $(this).addClass("active");
        var index=$(this).parent().index();           
        $(`.tab-hid`).fadeOut(0);
        $('.tab-hid:eq('+index+')').fadeIn();

      });
    });
// ---------mob menu--------
$(function(){
  $(".mob").click(function(){
      $(this).toggleClass("active");
      $(".wrap-1 .flex").slideToggle();
  });






});





