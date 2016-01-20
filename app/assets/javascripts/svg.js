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
   if($(window).scrollTop() + $(window).height() > $(document).height()-100) {
       $('.social-path').each(function() {
         // setTimeout(function() {
           var path = $(this).get(0);
           var pathLen = path.getTotalLength();
           $(this).animate({'stroke-dashoffset': 0}, 3000, 'easeOutBounce');
          //  console.log(pathLen);
         // }, 300);
       });
     }
  });

  var fbColor = '#5D7DC0',
      ytColor = '#FF9999',
      vnColor = '#ADFFEB',
      twColor = '#C2EFFF',
      igColor = '#9FBAD0',
      vmColor = '#DFEFBD';


  $('svg').hover(function() {
    /* Stuff to do when the mouse enters the element */
    var currentID = $(this).prop('id');
    var currentCirc = $(this).find('.social-circle');
    var currentPath = $(this).find('.social-path');
    var circFill ="";
    switch (currentID) {
      case 'fb-icon':
          circFill = fbColor;
        break;
      case 'ig-icon':
          circFill = igColor;
        break;
      case 'tw-icon':
          circFill = twColor;
        break;
      case 'yt-icon':
          circFill = ytColor;
        break;
      case 'vine-icon':
          circFill = vnColor;
        break;
      case 'vimeo-icon':
          circFill = vmColor;
        break;
      default:
        console.log(none);
    }
      currentCirc.stop()
      .animate({'stroke-dashoffset': 0}, 1000, 'easeOutBounce');
      TweenLite.to(currentCirc, 1, {fill:circFill});
      $( ".social-path" ).not( currentPath ).each(function() {
        TweenLite.to($(this), 0.4, {opacity: 0.2});
      });
  }, function() {
    /* Stuff to do when the mouse leaves the element */
    var currentCirc = $(this).find('.social-circle');
    var currentPath = $(this).find('.social-path');
      currentCirc.stop()
      .animate({
        'stroke-dashoffset': 900
      }, 1000, 'easeOutBounce');
      TweenLite.to(currentCirc, 1, {fill:'none'});
      $( ".social-path" ).not( currentPath ).each(function() {
        TweenLite.to($(this), 0.6, {opacity: 1});
      });
  });




});
