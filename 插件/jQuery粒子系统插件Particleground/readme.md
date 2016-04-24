> 插件描述：`Particleground` 粒子系统是一个jQuery插件，时髦的背景。 `Particleground` 包括一个可选的视差效应控制鼠标在桌面设备和移动设备上的陀螺仪。它适用于任何浏览器支持HTML5画布。

#使用方法

###页面调用`jquery`和`particleground.js`
	
	<script type='text/javascript' src='js/jquery-1.11.1.min.js'></script>
	<script type='text/javascript' src='jquery.particleground.min.js'></script>

###html

	<div id="particles">
	  <div class="intro">
	    <h1>Particleground</h1>
	    <p>A jQuery plugin for snazzy background particle systems</p>
	  </div>
	</div>


###js初始化插件，调用对应的id

	$('#particles').particleground();


###选项

可以通过设置选项选择对象的构造函数。

下面是一个示例的设置粒子系统点和线的颜色:

	$('#your-element').particleground({
	    dotColor: '#ff0000',
	    lineColor: '#ff0000'
	});


下面是一个完整的列表的选项,默认值:

	1. `minSpeedX`: 0.1
	2. `maxSpeedX`: 0.7
	3. `minSpeedY`: 0.1
	4. `maxSpeedY`: 0.7
	5. `zirectionX`: 'center'	//可以“center”,“left”或'right”。“中心”意味着点将反弹的边缘画布。
	6. `directionY`: 'center'	//可以 'center', 'up' or 'down'. 'center' 意味着点将反弹的边缘画布。