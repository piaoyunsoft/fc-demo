$(function(){
  var box = $('#box');
  var piece = $('#box div');
  var btn = $('#btn');
  var boxX = box.offset().left;
  var boxY = box.offset().top;

  piece.each(function(i) {
    var me = $(this);
    me.css({
      'background-position': '-'+ (me.offset().left - boxX) + 'px -' + (me.offset().top - boxY) + 'px'
    });
  });

  btn.click(function(){
    piece.each(function(i){
      var me = piece.eq(i);

      me.css({
        'opacity' : 0,
        'transition': 'all .5s ease-out'
      });

      setStyle3(
        me,
        'transform',
        'rotateX(' + rnd(-180, 180) + 'deg) rotateY(' + rnd(-180, 180) + 'deg) rotateZ('+ rnd(-180, 180) +'deg) scale('+ rnd(1.5, 3) +')');
    });

  });

  function rnd(min, max){
    return Math.floor(Math.random()*(max - min)) + min;
  }

  function setStyle3(obj, name, value){
    obj.css(name, value);
  }

});