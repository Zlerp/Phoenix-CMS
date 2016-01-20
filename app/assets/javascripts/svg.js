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


// FIND PATH LENGTH WITH JS
// var path = $(".svg").get(0);
// var pathLen = path.getTotalLength();
// console.log(pathLen);


$(function() {

  // var pathFB = $('#fb-icon').find('path').get(0);
  // var lengthFB = pathFB.getTotalLength();
  // var pathIG = $('#ig-icon').find('path').get(0);
  // var lengthIG = pathIG.getTotalLength();
  // var pathYT = $('#yt-icon').find('path').get(0);
  // var lengthYT = pathYT.getTotalLength();
  // var pathVimeo = $('#vimeo-icon').find('path').get(0);
  // var lengthVimeo = pathVimeo.getTotalLength();
  // var pathVine = $('#vine-icon').find('path').get(0);
  // var lengthVine = pathVine.getTotalLength();
  // var pathTW = $('#tw-icon').find('path').get(0);
  // var lengthTW = pathTW.getTotalLength();
  // console.log("FB: " + lengthFB + '\n' + 'IG: ' +lengthIG + '\n' + 'YT: ' + lengthYT + '\n' + 'Vimeo: ' + lengthVimeo + '\n' + 'Vine: ' + lengthVine + '\n' + 'TW: ' + lengthTW);

  // var path = $(this).find('path.social-path').get(0);
  // var pathLen = path.getTotalLength();
  // console.log(pathLen);

  $(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height()) {
       $('.social-path').each(function() {
         // setTimeout(function() {

           var path = $(this).get(0);
           var pathLen = path.getTotalLength();
           $(this).animate({'stroke-dashoffset': 0}, 3000, 'easeOutBounce');
           console.log(pathLen);
         // }, 300);
       });
     }
  });



  $('svg').hover(function() {
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
