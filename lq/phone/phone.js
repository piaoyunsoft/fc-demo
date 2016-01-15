$(function(){
  // 设置rem
  var _w = $(window).width();
  var BASE_W = 750;
  var BASE_SIZE = 20;
  var iFont = _w / BASE_W * 20;
  $('html,body').css('font-size', iFont);

// console.log(iFont);

  touch.on('#target', 'touchstart', function(ev){
    ev.preventDefault();
  });

  var target = document.getElementById("target");
  var dx, dy;

  touch.on('#target', 'drag', function(ev){
    dx = dx || 0;
    dy = dy || 0;
    var offx = dx + ev.x + "px";
    var offy = "0px";

    if(ev.x < 0){
      return;
    }

// console.log(Math.floor((dx + ev.x)/iFont));

    if(Math.floor((dx + ev.x)/iFont) == 22){
      closeAudio();
      alert('o 了');
      return;
    }else if(Math.floor((dx + ev.x)/iFont) > 22){
      return false;
    }

    this.style.webkitTransform = "translate3d(" + offx + "," + offy + ",0)";
  });

  touch.on('#target', 'dragend', function(ev){
    dx += ev.x;
    dy += ev.y;
  });

  var musicBox = $('#musicBox');

  musicBox.attr('src','./images/qixi-3.mp3');

  var audioTimer = setInterval(function(){
    musicBox.attr('src','./images/qixi-3.mp3');
  },7000);

  // 关闭接听铃声
  function closeAudio(){
    musicBox.attr('src','');
    clearInterval(audioTimer);
  }
 
});