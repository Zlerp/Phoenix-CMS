



$(document).ready(function() {

  // $(".mediaClip").hover(
  //   function () {
  //     $(".clipTitle").addClass('hide');
  //   },
  //   function () {
  //     $(".clipTitle").removeClass('hide');
  //   }
  //   );

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
