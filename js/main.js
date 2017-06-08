  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
      height: '1080',
      width: '1920',
      videoId: 'FG0fTKAqZ5g',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': function(data){
          switch(data.data){
            case 1:
              $('#video').fadeIn(2000);
              break;
            case 0:
              data.target.seekTo(15)
              break;
          }
        }
      },
      playerVars: {
          start: 15,
          end: 20,
          controls: 0,
          enablejsapi: 1,
          modestbranding: 1,
          showinfo: 0,
          iv_load_policy: 3,
          loop: 1,                   
          playlist: 'FG0fTKAqZ5g'
      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
    event.target.mute();
  }
  