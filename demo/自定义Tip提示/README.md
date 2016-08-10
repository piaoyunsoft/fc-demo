###鉴于title属性显示缓慢，所以自己写这么一个小东西来显示相应提示信息。(依赖Jquery)

###html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<link rel="stylesheet" href="Tip.css">
	</head>
	<body>
		<ul>
			<li data-tip="11111111">11111111</li>
			<li data-tip="22222222">22222222</li>
			<li data-tip="33333333">33333333</li>
			<li data-tip="44444444">44444444</li>
			<li data-tip="55555555">55555555</li>
			<li data-tip="66666666">66666666</li>
			<li data-tip="77777777">77777777</li>
			<li data-tip="88888888">88888888</li>
			<li data-tip="99999999">99999999</li>
		</ul>
		<script src="jquery-2.1.4.js"></script>
		<script src="Tip.js"></script>
	</body>
	</html>

###css

	*{
		margin: 0;
		padding: 0;
	}
	body{
		font-size: 14px;
		padding: 100px;
	}
	ul{
		list-style: none;
	}
	li{
		height: 30px;
		line-height: 30px;
		margin-bottom: 10px;
		background-color: #4CAF50;
		color: #fff;
		text-indent: 2em;
	}
	
	/* Tip style */
	.fc-tip{
		background-color: #000;
		color: #fff;
		padding: 10px;
		border-radius: 5px;
		position: fixed;
	}

###js
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

###demo
![](http://i.imgur.com/fnv5ZHc.png)