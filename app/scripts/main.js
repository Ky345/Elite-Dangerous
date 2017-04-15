$(function(){
    $(window).on('unload', function() {
       $('body').scrollTop(0);
    });
    $('body').scrollTop(0);
    $('body').bind('touchmove', function(e){e.preventDefault()});
    $('body').addClass('stop-scrolling');
    

  	setTimeout(function() {
      var newVideo = $('<div class="fullscreen-bg" id="idle" style="z-index: -2;"><video loop muted autoplay class="fullscreen-video"><source id="source" src="images/Sequence2.mp4" type="video/mp4"></video></div>');
      $('.fullscreen-bg').after(newVideo);
  	},5000);
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

    $('#hangarLink').on('click',function(e){
      e.preventDefault();
      var target = $('#hangar');
      $(window).scrollTo(target,600);
    }); 

    $('#sidewinderLink').on('click',function(e){
      e.preventDefault();
      var newVideo = $('<div class="fullscreen-bg" id="hangarVid" style="z-index: -3;"><video loop muted autoplay class="fullscreen-video"><source id="source" src="images/hangar.mp4" type="video/mp4"></video></div>');
      $('.fullscreen-bg').last().after(newVideo);
      setTimeout(function(){
        $('#idle').remove();
        $('#intro').remove();
      },600);
      var target = $('#sidewinder');
      $(window).scrollTo(target,600);
    });

    

});
