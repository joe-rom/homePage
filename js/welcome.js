function initWelcome(mount, words, speed){
  var welcome = $(mount)
  welcome.html(words[0])

  function setNameInterval(i){
      setInterval(function(){
          welcome.fadeOut(1000, 'swing', function(){
              welcome.html(words[i]);
              welcome.fadeIn(1000);
          });
          i++;
          if(i === words.length) i = 0
      }, speed)
  }
  setNameInterval(0);
}
