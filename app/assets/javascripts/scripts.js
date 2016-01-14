



$(document).ready(function() {

  // $(".mediaClip").hover(
  //   function () {
  //     $(".clipTitle").addClass('hide');
  //   },
  //   function () {
  //     $(".clipTitle").removeClass('hide');
  //   }
  //   );


  $(".pure-img").rotate({
      bind: {
          click: function(){
                    $(this).rotate({
                        angle: 0,
                        animateTo: 100,
                        duration: 3000
                    });
                    // setTimeout(function(){
                    //     $("#image").stopRotate();
                    // }, 1000);
          }
     }
 });

 ('.pure-img').hover(
   function () {
     $(this).show();
   },
   function () {
     $(this).hide();
   }
 );



 $( selector ).mouseenter( handlerIn ).mouseleave( handlerOut );

  ('.mediaClip').hover(
    function () {
      $(".clipTitle").show();
    },
    function () {
      $(".clipTitle").hide();
    }
  );
    // $('.fancybox').fancybox({
    //   helpers:  {
    //       title : {
    //           type : 'inside'
    //       },
    //       overlay : {
    //           css : {
    //               'background' : 'rgba(0,0,0,.4)'
    //           }
    //       },
    //       thumbs : {
    //           width: 50,
    //           height: 50,
    //           source  : function(current) {
    //             return $(current.element).data('thumbnail');
    //           }
    //       }
    //   }
    // });
});
