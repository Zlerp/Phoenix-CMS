$(document).ready(function(){
  $('.mediaGrid > a').on('click',function(){
    var link = $(this).find('.modal-src').text();
    var urlParse = link.split("=");
    var url = urlParse[urlParse.length -1];
    var youtube = "https://www.youtube.com/embed/";
    var urlLink = youtube.concat(url);
    var desc = $(this).find('.modal-desc').text();
    var title = $(this).find('.commercialTitle').text();
    console.log(urlLink);
    console.log(desc);
    console.log(title);

    $('.modal-Title').text(title);
    $('.modal-Desc').text(desc);
    $('#modal-iframe').attr('src',urlLink);
  });


  // var icons = new Vivus('fb-icon', {type: 'delayed', duration: 50, start: 'inViewport', dashGap: 50}, function () {
  //       if (window.console) {
  //         console.log('Animation finished. [log triggered from callback]');
  //       }
  //     });
});
