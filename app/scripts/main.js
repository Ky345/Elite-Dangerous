$(function(){

  	setTimeout(function() {
      var newVideo = $('<div class="fullscreen-bg" style="z-index: -1;"><video loop muted autoplay class="fullscreen-video"><source id="source" src="images/Sequence2.mp4" type="video/mp4"></video></div>');
      $('.fullscreen-bg').after(newVideo);
  	},5000);
  	setTimeout(function() {
      $('#welcome').fadeIn(500);
      $('#nav li').delay(300).each(function(i){
      	$(this).delay(200*i).fadeIn('slow');
      });
  	},10000);
    $('#intro video').on('ended',function(){
      $('#intro').remove();
    });

});
