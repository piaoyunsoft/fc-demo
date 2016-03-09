$(function(){
  var piece = $('#box div');
  var btn = $('#btn');

  piece.each(function(i) {
    var me = $(this);
    me.css({
      'background-position': '-'+ me.offset().left + 'px -' + me.offset().top + 'px'
    });
  });

  btn.click(function(){
    piece.eq(9).addClass('hover1');

    setTimeout(function(){
      piece.eq(9).removeClass('hover1');
    },500);
  });


});