#HTML
> 我们在需要显示层的图片链接上加上样式`.boxer`

	<a title="标题闪电闪电" class="boxer" href="images/1b.jpg"> 
	     <img src="images/1s.jpg" alt=""> 
	</a>

#引入jQuery库和boxer相关组件

	<link rel="stylesheet" href="css/jquery.fs.boxer.css"> 
	<script src="js/jquery.min.js"></script> 
	<script src="js/jquery.fs.boxer.js"></script>

#jQuery
	
	$(function() { 
	      $('.boxer').boxer(); 
	});

参数|描述|默认值
------------- | -------------| -----
callback|打开后的回调函数|空
customClass|增加自定义 class|”
duration|动画持续时间|250
fixed|是否固定在浏览器中央（不显示关滚动条）|false
formatter|标题格式函数|空
height|加载时的初始高度|100
labels.close|关闭按钮的文字|‘Close’
labels.count|组图的文字|‘of’
labels.next|下一个按钮的文字|‘Next’
labels.previous|上一个按钮的文字|‘Previous’
margin|与浏览器视口的边距|50
minHeight|最小高度|100
minWidth|最小宽度|100
mobile|是否强制使用移动模式显示|false
opacity|遮罩不透明度|0.75
retina|是否兼容 retina 高清显示|false
requestKey|GET variable for ajax / iframe requests|‘boxer’
top|距离顶部位置|-
videoRadio|视频的高度|0.5625
videoWidth|视频的宽度|600
width|加载时的初始宽度|100