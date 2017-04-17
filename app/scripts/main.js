$(function(){
    $('#fullpage').fullpage({
      anchors:['firstPage', 'secondPage', 'thirdPage']
    });
    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false);
    
  	setTimeout(function() {
      $.fn.fullpage.silentMoveTo(1);
      var newVideo = $('<div class="fullscreen-bg" id="idle" style="z-index: -2;"><video loop muted autoplay class="fullscreen-video"><source id="source" src="images/Sequence2.mp4" type="video/mp4"></video></div>');
      $('.fullscreen-bg').after(newVideo);
  	},1000);
  	setTimeout(function() {
      $('h1').animate({
        opacity: '+1'
      },500);
      $('#nav li').delay(300).each(function(i){
      	$(this).delay(200*i).animate({
          opacity: '+1'
        },500);
      });
  	},10000);
    $('#intro video').on('ended',function(){
      $('#intro').remove();
    }); 

    $('#sidewinderLink').on('click',function(e){
      var newVideo = $('<div class="fullscreen-bg" id="hangarVid" style="z-index: -3;"><video loop muted autoplay class="fullscreen-video"><source id="source" src="images/hangar.mp4" type="video/mp4"></video></div>');
      $('.fullscreen-bg').last().after(newVideo);
      setTimeout(function(){
        $('#idle').remove();
        $('#intro').remove();
      },600);
      var target = $('#sidewinder');
    });

    
});

