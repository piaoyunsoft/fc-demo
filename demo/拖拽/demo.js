/**
 * [Drag 拖拽]
 * @author fuchong
 * @version 1.0
 * @date    2016-07-05
 */
$(function(){
	// 1
	DARG.init();
	
	// 2
	// DARG.init({
	// 	Box: $('#J_text'),
	// 	BoxW: 100,
	// 	BoxH: 100,
	// 	Area: $('.test')
	// });
});

var DARG = {
	canDrag: false,
	Box: $('#J_drag'),
	BoxW: $('#J_drag').width(),
	BoxH: $('#J_drag').height(),
	Area: $('.J_dragArea'),
	mouseOffsetX: 0,
	mouseOffsetY: 0,
	init: function(options){
		options = options || {};
		options.BoxW = options.BoxW || DARG.BoxW;
		options.BoxH = options.BoxH || DARG.BoxH;
		options.Box = options.Box || DARG.Box;
		options.Area = options.Area || DARG.Area;

		DARG.autoCenter(options);
		DARG.bindEvent(options);
	},
	autoCenter: function(options){
		options.Box.css({
			'left': ($(window).width() - options.BoxW) / 2 + 'px',
			'top': ($(window).height() - options.BoxH) / 2 + 'px'
		});
	},
	bindEvent: function(options){

		$(window).resize(function(){
			DARG.autoCenter();
		});

		options.Area.on({
			mousedown: function(e){
				DARG.mouseOffsetX = e.pageX - options.Box.offset().left;
				DARG.mouseOffsetY = e.pageY - options.Box.offset().top;
				DARG.canDrag = true;
			}
		});

		$('body').on({
			mouseup: function(e){
				DARG.mouseOffsetX = 0;
				DARG.mouseOffsetY = 0;
				DARG.canDrag = false;
			},
			mousemove: function(e){
				if(DARG.canDrag){
					var curX = e.pageX;	//鼠标当前位置
					var curY = e.pageY - $(window).scrollTop();

					var moveX = 0;	//元素的新位置
					var moveY = 0;

					moveX = curX - DARG.mouseOffsetX;
					moveY = curY - DARG.mouseOffsetY;

					if(moveX <= 0){
						moveX = 0;
					}else if(moveX >= $(window).width() - options.BoxW){
						moveX = $(window).width() - options.BoxW;
					}

					if(moveY <=0 ){
						moveY = 0;
					}else if(moveY >= $(window).height() - options.BoxH){
						moveY = $(window).height() - options.BoxH;
					}

					options.Box.css({
						'left': moveX,
						'top': moveY
					});
				}
			}
		});
	}
};