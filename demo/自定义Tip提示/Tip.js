/**
 * 鉴于title属性显示缓慢，所以自己写这么一个小东西来显示相应提示信息。
 * [自定义tip提示]
 * @author fuchong
 * @version 1.0
 * @date    2016-08-10
 * @return  {[type]}   [自定义tip提示]
 *
 * demo:
 * html中  <li data-tip="xxxxx">11111111</li>  元素包含自定义属性data-tip,
 * 其中xxxxx 为需要显示的值
 */
(function(){
	$('[data-tip]').on({
		mouseenter: function(){
			var len = $('#J_tip').length;
			var tipBox = '<span id="J_tip" class="fc-tip"></span>';
			var tip = $(this).data('tip');
			// 判断是否存在提示框，不存在则添加一个
			if(!len){
				$('body').append($(tipBox));
			}else{
				$('#J_tip').show();
			}
			$('#J_tip').text(tip);

		},
		mouseout: function(){
			$('#J_tip').hide();
		}
	});

	$(document).on({
		mousemove: function(e){
			var pointX = e.pageX;
			var pointY = e.pageY;
			$('#J_tip').css({
				left: pointX + 10,
				top: pointY + 10
			});
		}
	});
})();