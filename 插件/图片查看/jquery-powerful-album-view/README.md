# 基于jQuery功能强大的图片查看器插件

> viewer是一款功能强大的图片查看器jQuery插件。它可以实现ACDsee等看图软件的部分功能。它可以对图片进行移动，缩放，旋转，翻转，可以前后浏览一组图片。该图片查看器还支持移动设备，支持键盘控制，功能十分强大。

##安装
> 可以通过nmp或bower来安装该图片查看器插件。

	npm install imageviewer
	bower install imageviewer

##使用方法

> 使用该幻灯片插件需要引入jQuery，viewer.css和viewer.js文件。

	<link rel="stylesheet" href="css/viewer.css" type="text/css">
	<script type="text/javascript" src="js/jquery.min.js"></script> 
	<script type="text/javascript" src="js/viewer.js"></script>                 

###HTML结构
该图片查看器需要一个块级元素来作为包裹元素，可以只有一张图片，直接使用`<img>`元素，或者是一组图片，使用无序列表来制作：

	<!--单张图片-->
	<div>
	  <img class="image" src="picture.jpg" alt="Picture">
	</div>

	<!--一组图片-->
	<div>
	  <ul class="images">
	    <li><img src="picture.jpg" alt="Picture"></li>
	    <li><img src="picture-2.jpg" alt="Picture 2"></li>
	    <li><img src="picture-3.jpg" alt="Picture 3"></li>
	  </ul>
	</div>

###初始化插件

在页面DOM元素加载完毕之后，可以通过下面的方法来初始化该图片查看器插件。

	// View one image
	$('.image').viewer();
	 
	// View some images
	$('.images').viewer(); 

###键盘控制

在模态窗口模式下，可以使用键盘来控制查看图片：

	Esc：退出全屏并停止播放。
	←：查看前一张图片。
	→：查看下一张图片。
	↑：放大图片。
	↓：缩小图片。
	Ctrl + 0：缩小到初始大小。
	Ctrl + 1：放大到自然尺寸。

##配置参数
你可以通过`$().viewer(options)`来设置这个图片查看器的参数。如果你要修改全局配置参数，你需要使用`$.fn.viewer.setDefaults(options)`。

	inline：类型：Boolean，默认值：false。使用内联模式来查看图片。
	button：类型：Boolean，默认值：true。在图片查看器的右上角显示按钮。
	navbar：类型：Boolean，默认值：true。显示导航条。
	title：类型：Boolean，默认值：true。显示图片标题。标题来自图片的alt属性或从URL解析的图片名称。
	toolbar：类型：Boolean，默认值：true。显示工具栏。
	tooltip：类型：Boolean，默认值：true。在放大缩小图片的时候显示图片的百分比比例。
	movable：类型：Boolean，默认值：true。图片是否可以移动。
	zoomable：类型：Boolean，默认值：true。图片是否可以放大缩小。
	rotatable：类型：Boolean，默认值：true。图片是否可以旋转。
	scalable：类型：Boolean，默认值：true。图片是否可以翻转。
	transition：类型：Boolean，默认值：true。是否为某些指定的元素使用CSS3 Transition效果。
	fullscreen：类型：Boolean，默认值：true。是否允许全屏模式。该功能需要浏览器支持Full Screen API。
	keyboard：类型：Boolean，默认值：true。是否可以使用键盘控制。
	interval：类型：Number，默认值：5000。自动播放时图片的切换时间间隔。
	zoomRatio：类型：Number，默认值：0.1。在使用鼠标缩放图片时的缩放比例。
	minZoomRatio：类型：Number，默认值：0.01。图片缩小的最小比例。
	maxZoomRatio：类型：Number，默认值：100。图片放大的最小比例。
	zIndex：类型：Number，默认值：2015。定义图片查看器模态窗口的CSS z-index属性的值。
	zIndexInline：类型：Number，默认值：0。定义图片查看器在内联模式中CSS z-index属性的值。
	url：类型：String 或 Function，默认值：'src'。定义原始图片的URL地址。
	build：类型：Function，默认值：null。"build.viewer"事件的快捷方式。
	built：类型：Function，默认值：null。"built.viewer"事件的快捷方式。
	show：类型：Function，默认值：null。"show.viewer"事件的快捷方式。
	shown：类型：Function，默认值：null。"shown.viewer"事件的快捷方式。
	hide：类型：Function，默认值：null。"hide.viewer"事件的快捷方式。
	hidden：类型：Function，默认值：null。"hidden.viewer"事件的快捷方式。

##方法
由于该图片查看器插件使用的是异步加载图片的方式，所以你需要在`shown`（模态窗口模式）或`built`（内联模式）之后才能调用下面的方法，除了模态窗口模式的`show`方法和`destroy`方法之外。
	
	// Modal mode
	$().viewer({
	  shown: function () {
	    $().viewer('method', argument1, , argument2, ..., argumentN);
	  }
	}
	 
	// Inline mode
	$().viewer({
	  built: function () {
	    $().viewer('method', argument1, , argument2, ..., argumentN);
	  }
	}
#
	show()：显示图片查看器。只在模态窗口模式中有效。
	hide()：隐藏图片查看器。只在模态窗口模式中有效。
	view([index])：

	$().viewer().hide() 	//隐藏查看器

**index (optional)**：

	类型：Number
	默认值：0
	在查看的图片的index
	通过图片的index来查看某张图片。 

#
	$().viewer('view', 1); // 查看第二张图片   
# 
	prev()：查看前一张图片。
	next()：查看下一张图片。
	move(offsetX[, offsetY])：移动图片。

**offsetX**：

	类型：Number
	默认值：0
	水平方向上移动的距离，单位像素。
	offsetY(optional)：
	类型：Number
	垂直方向上移动的距离，单位像素。
	如果没有提供，默认值是offsetX。

#
	$().viewer('move', 1);
	$().viewer('move', -1, 0); // 向左移动图片
	$().viewer('move', 1, 0);  // 向有移动图片
	$().viewer('move', 0, -1); // 向上移动图片
	$().viewer('move', 0, 1);  // 向下移动图片   

	zoom(ratio[, hasTooltip])：缩放图片。

**ratio**：

	类型：Number
	Zoom in（放大）：需要一个正数（ratio > 0）。
	Zoom out（缩小）：需要一个负数（ratio < 0）

**hasTooltip (optional)**：

	类型：Boolean
	默认值：false
	显示tooltip。
#
	$().viewer('zoom', 0.1);
	$().viewer('zoom', -0.1);   


**zoomTo(ratio[, hasTooltip])：缩放图片到指定的比例**。

	ratio：
	类型：Number
	需要一个正数（ratio > 0）

**hasTooltip (optional)**：

	类型：Boolean
	默认值：false
	显示tooltip。
#
	$().viewer('zoomTo', 0); // Zoom to zero size (0%)
	$().viewer('zoomTo', 1); // Zoom to natural size (100%)    


**rotate(degree)：旋转图片。**

	degree：
	类型：Number
	向右旋转需要一个正数（ratio > 0）
	向左旋转需要一个负数（ratio < 0）
	该方法需要浏览器支持CSS3 2D Transforms（IE9+）。

#
	$().viewer('rotate', 90);
	$().viewer('rotate', -90);   

**rotateTo(degree)：将图片旋转到指定的角度。**

	degree：
	类型：Number
	该方法需要浏览器支持CSS3 2D Transforms（IE9+）。
 
#
	$().viewer('rotateTo', 0); // 将图片重置到0度
	$().viewer('rotateTo', 360); // 将图片旋转一周  

**scale(scaleX[, scaleY])：翻转图片。**

	scaleX：
	类型：Number
	默认值：1
	图片横坐标方向上的缩放比例。
	当值为1时不做任何事情。
#
**scaleY：(optional**
	
	类型：Number
	图片纵坐标方向上的缩放比例。
	如果未指定，默认值为scaleX。
	该方法需要浏览器支持CSS3 2D Transforms（IE9+）。 

#
	$().viewer('scale', -1); // 在垂直和水平方向上翻转图片
	$().viewer('scale', -1, 1); // 水平翻转
	$().viewer('scale', 1, -1); // 垂直翻转
#
	scaleX(scaleX)：水平翻转图片。
	scaleX：
	类型：Number
	默认值：1
	图片横坐标方向上的缩放比例。
	当值为1时不做任何事情。
	该方法需要浏览器支持CSS3 2D Transforms（IE9+）。
#
	$().viewer('scaleX', -1); // 水平翻转

**scaleY(scaleY)：垂直翻转。**
	scaleY：
	类型：Number
	默认值：1
	图片纵坐标方向上的缩放比例。
	当值为1时不做任何事情。
	该方法需要浏览器支持CSS3 2D Transforms（IE9+）。
#
	$().viewer('scaleY', -1); // 水平翻转
#
	play()：播放图片。
	stop()：停止播放。
	full()：进入模态窗口模式。仅在内联模式中有效。
	exit()：退出模态窗口模式。仅在内联模式中有效。
	tooltip()：以百分比显示当前图片的比例。需要tooltip参数设置为true。
	toggle()：在原始尺寸和当前尺寸之间切换图片尺寸。
	reset()：重置图片到元素状态。
	destroy()：销毁图片查看器实例。

##事件
	build.viewer：当图片查看器实例开始创建时触发。
	built.viewer：当图片查看器实例被创建之后触发。
	show.viewer：当图片查看器元素开始显示时触发。仅在模态窗口模式有效。
	shown.viewer：当图片查看器元素显示之后触发。仅在模态窗口模式有效。
	hide.viewer：当图片查看器元素开始隐藏时触发。仅在模态窗口模式有效。
	hidden.viewer：当图片查看器元素隐藏之后触发。仅在模态窗口模式有效。

##No conflict

如果你使用了和这个图片查看器具有相同名称空间的其它插件，可以通过$.fn.viewer.noConflict方法来恢复它。

##浏览器兼容
	Chrome (latest 2)
	Firefox (latest 2)
	Internet Explorer 8+
	Opera (latest 2)
	Safari (latest 2)

via：[http://www.w2bc.com/article/jquery-powerful-album-view](http://www.w2bc.com/article/jquery-powerful-album-view)
	 

[详情查看](http://www.w2bc.com/article/jquery-powerful-album-view)