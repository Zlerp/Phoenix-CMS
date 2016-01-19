//
// //
// $(document).ready(function() {
//   $('svg').find('circle').fadeOut( 0 );
//
//   var transDur = $('svg').find('.removingCirc').valueOf().css('transition-duration');
//   console.log(transDur);
//   $('svg').hover(function() {
//     /* Stuff to do when the mouse enters the element */
//       $(this).find('circle').fadeIn( 100 );
//       $(this).find('circle').attr("class", "social-circle movingCirc");
//
//       console.log('on');
//   }, function() {
//     /* Stuff to do when the mouse leaves the element */
//     $(this).find('circle').attr("class", "social-circle removingCirc");
//     $(this).find('circle').delay( 999 ).fadeOut( 0 );
//     console.log("hover off");
//   });
// });


$(function() {
  $('svg').hover(function() {
    // var pathLen = $(this).find('circle')[0].getTotalLength();

    // var path = document.querySelector(this).find('circle');
    // var length = path.getTotalLength();
    // console.log(length);
    /* Stuff to do when the mouse enters the element */
    $(this).find('.social-circle')
      .stop()
      .animate({'stroke-dashoffset': 0}, 1000, 'easeOutBounce');
      // .css('fill', '#f4321e');
      console.log('on');
  }, function() {
    /* Stuff to do when the mouse leaves the element */
    $(this).find('.social-circle')
      .stop()
      .animate({
        'stroke-dashoffset': 900
      }, 1000, 'easeOutBounce');
      // .css('fill', 'none');
  });
});
