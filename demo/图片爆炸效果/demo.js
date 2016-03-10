$(function(){
  var box = $('#box');
  var piece = $('#box div');
  var btn = $('#btn');
  var boxX = box.offset().left;
  var boxY = box.offset().top;
  var changeTime = 0.5; //动画改变时间
  var nowIndex = 0;
  var bgIndex = 1;
  var bgList = [
    'http://7xr9pe.com1.z0.glb.clouddn.com/1.jpg'
    ,'http://7xr9pe.com1.z0.glb.clouddn.com/2.jpg'
    ,'http://7xr9pe.com1.z0.glb.clouddn.com/3.jpg'
    ,'http://7xr9pe.com1.z0.glb.clouddn.com/4.jpg'
    ,'http://7xr9pe.com1.z0.glb.clouddn.com/5.jpg'
    ,'http://7xr9pe.com1.z0.glb.clouddn.com/6.jpg'
  ];

  
  initImg();

  // 初始化图片
  function initImg(){
    box.css({
      'background' : 'url('+ bgList[bgIndex] +') no-repeat'
    });

    piece.each(function(i) {
      var me = $(this);
      me.css({
        'background' : 'url('+ bgList[nowIndex] +') no-repeat',
        'background-position': '-'+ (me.offset().left - boxX) + 'px -' + (me.offset().top - boxY) + 'px'
      });
    });

    nowIndex++;
  }

  var timer = null;
  btn.click(function(){
    clearTimeout(timer);
    piece.each(function(i){
      var me = piece.eq(i);

      me.css({
        'opacity' : 0,
        'transition': 'all '+ changeTime +'s ease-out'
      });

      setStyle3(
        me,
        'transform',
        'rotateX(' + rnd(-180, 180) + 'deg) rotateY(' + rnd(-180, 180) + 'deg) rotateZ('+ rnd(-180, 180) +'deg) scale('+ rnd(1.5, 3) +')');
    });

    timer = setTimeout(function(){
      var imgLen = bgList.length;

      if(nowIndex >= imgLen ){
        nowIndex = 0;
      }

      bgIndex = nowIndex + 1;

      if(bgIndex >= imgLen){
        bgIndex = 0;
      }

      piece.css({
        'transform': 'rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)'
        ,'opacity': 1
        ,'transition': 'none'
        ,'background' : 'url('+ bgList[nowIndex] +') no-repeat'
      });

      box.css({
        'background' : 'url('+ bgList[bgIndex] +') no-repeat'
      });

      piece.each(function(i) {
        var me = $(this);
        me.css({
          'background-position': '-'+ (me.offset().left - boxX) + 'px -' + (me.offset().top - boxY) + 'px'
        });
      });

      nowIndex++;
    },500);

  });

  function rnd(min, max){
    return Math.floor(Math.random()*(max - min)) + min;
  }

  function setStyle3(obj, name, value){
    obj.css(name, value);
  }

});