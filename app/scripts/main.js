$(function(){
    $('#fullpage').fullpage({
      anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
      scrollingSpeed: 1000,
      onLeave: function(index, nextIndex, direction){
        if(index == 1 && nextIndex > 1) {
          $('#intro').remove();
          $('#menu').animate({
            opacity: '+1'
          }, 500);
        }
        else if(index > 1 && nextIndex == 1) {
          $('#menu').animate({
            opacity: '-1'
          }, 500);
        }
        if(nextIndex == 2 || nextIndex == 3 || nextIndex == 4 || nextIndex == 5) {
          var newVideo = $('<div class="fullscreen-bg" id="idle" style="z-index: -2;"><video loop muted autoplay class="fullscreen-video"><source id="source" src="images/Sequence2.mp4" type="video/mp4"></video></div>');
          $('.fullscreen-bg').last().after(newVideo);
          setTimeout(function() {
            $('body').find('.fullscreen-bg:lt(1)').delay(500).remove();
          },500);
        }


      },
      //Handles loading the different Hangar videos.
      onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
        if(nextSlideIndex == 1) {
          var newVideo = $('<div class="fullscreen-bg" id="hangarVid" style="z-index: -3;"><video loop muted autoplay class="fullscreen-video"><source id="source" src="images/Sidewinder.mp4" type="video/mp4"></video></div>');
          $('.fullscreen-bg').last().after(newVideo);
          setTimeout(function() {
            $('body').find('.fullscreen-bg:lt(1)').remove();
          },500);
        }
        if(nextSlideIndex == 2) {
          var newVideo = $('<div class="fullscreen-bg" id="hangarVid" style="z-index: -3;"><video loop muted autoplay class="fullscreen-video"><source id="source" src="images/Anaconda.mp4" type="video/mp4"></video></div>');
          $('.fullscreen-bg').last().after(newVideo);
          setTimeout(function() {
            $('body').find('.fullscreen-bg:lt(1)').remove();
          },500);
        }
        if(nextSlideIndex == 3) {
          var newVideo = $('<div class="fullscreen-bg" id="hangarVid" style="z-index: -3;"><video loop muted autoplay class="fullscreen-video"><source id="source" src="images/Cobra.mp4" type="video/mp4"></video></div>');
          $('.fullscreen-bg').last().after(newVideo);
          setTimeout(function() {
            $('body').find('.fullscreen-bg:lt(1)').remove();
          },500);
        }
        if(nextSlideIndex == 4) {
          var newVideo = $('<div class="fullscreen-bg" id="hangarVid" style="z-index: -3;"><video loop muted autoplay class="fullscreen-video"><source id="source" src="images/Hauler.mp4" type="video/mp4"></video></div>');
          $('.fullscreen-bg').last().after(newVideo);
          setTimeout(function() {
            $('body').find('.fullscreen-bg:lt(1)').remove();
          },500);
        }
        if(nextSlideIndex == 0) {
          var newVideo = $('<div class="fullscreen-bg" id="idle" style="z-index: -2;"><video loop muted autoplay class="fullscreen-video"><source id="source" src="images/Sequence2.mp4" type="video/mp4"></video></div>');
          $('.fullscreen-bg').last().after(newVideo);
          setTimeout(function() {
            $('body').find('.fullscreen-bg:lt(1)').delay(500).remove();
          },500);
        }
      }
    });
    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false);

    //Preloads the intro video
    var source = document.getElementById('source');
    var video = document.getElementById('video');
    var url = 'images/Sequence1.mp4';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function(oEvent) {
      var blob = new Blob([oEvent.target.response], {type: 'video/mp4'});

      source.src = URL.createObjectURL(blob);
      $('body').addClass('loaded');
      $('#loader-wrapper').animate({
        opacity: '-1'
      },100);
      video.load();
      video.play();
      //Makes sets up the background video to idle.
      setTimeout(function() {
        $.fn.fullpage.silentMoveTo(1);
        var newVideo = $('<div class="fullscreen-bg" id="idle" style="z-index: -2;"><video loop muted autoplay class="fullscreen-video"><source id="source" src="images/Sequence2.mp4" type="video/mp4"></video></div>');
        $('.fullscreen-bg').after(newVideo);
      },1000);
      setTimeout(function() {
        $('#logo').animate({
          opacity: '+1'
        },500);
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
    }
    xhr.onprogress = function(oEvent){

      if(oEvent.lengthComputable) {
         var percentComplete = Math.floor((oEvent.loaded/oEvent.total)*100);

        $('#loader').html(percentComplete+'%');
       }
     }

    xhr.send();

    


});

