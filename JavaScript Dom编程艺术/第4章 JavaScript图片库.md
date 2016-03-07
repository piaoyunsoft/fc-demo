# 案例研究：JavaScript图片库

- <a href="#no1">4.1 标记</a>
- <a href="#no2">4.2 JavaScript</a>
- <a href="#no3">4.3 应用这个JavaScript函数</a>
- <a href="#no4">4.4 对这个函数进行扩展</a>
- <a href="#no5">4.5 </a>
- <a href="#no6">4.6 </a>

**本章内容**

- 编写一个优秀的标记文件。
- 编写一个JavaScript函数以显示用户想要查看的图片。
- 由标记触发函数调用。
- 使用几个新方法扩展这个JavaScript函数。

##<a name="no1">4.1 标记</a>

	<!DOCTYPE html>
	<html lang="en">
	<head>
	  <meta charset="UTF-8">
	  <title>Document</title>
	</head>
	<body>
	  <h1>Fc-demo</h1>
	  <ul>
	    <li><a href="http://7xr9pe.com1.z0.glb.clouddn.com/1.jpg" alt="第1张图片">第1张图片</a></li>
	    <li><a href="http://7xr9pe.com1.z0.glb.clouddn.com/2.jpg" alt="第2张图片">第2张图片</a></li>
	    <li><a href="http://7xr9pe.com1.z0.glb.clouddn.com/3.jpg" alt="第3张图片">第3张图片</a></li>
	    <li><a href="http://7xr9pe.com1.z0.glb.clouddn.com/4.jpg" alt="第4张图片">第4张图片</a></li>
	  </ul>
	</body>
	</html>

改进点：

1. 点击某个连接时，停留在当前页面。
2. 点击某个连接时，能同时看到图片以及原有图片清单。

做法：

1. 通过增加一个“占位符”图片的方法在这个页面上为图片预留一个浏览区域。
2. 在点击某个链接时，拦截这个网页的默认行为。
3. 在点击某个链接时，把“占位符”图片替换为与那个连接对应的图片。

把下面代码插入到图片清单的末尾：

	<img id="placeholder" src="http://7xr9pe.com1.z0.glb.clouddn.com/0.gif" alt="">

##<a name="no2">4.2 JavaScript</a>

1. 需要给函数起一个好名字，它应该能描述这个函数的用途，还要简明扼要。
#
	function showPic(whichpic)
#
`whichpic`代表着一个元素节点。

	whichpic.getAttribute('href');

把这个路径存入变量 `source`：

	var source = whichpic.getAttribute('href');

获取“占位符”图片：

	var placeholder = document.getElementById('placeholder');

设置“占位符”路径：

	placeholder.setAttribute('src', source);

###4.2.1 非DOM解决方案

	element.value = 'the new value';

等价于

	element.setAttribute('value', 'the new value');

###4.2.2 最终的函数代码清单

	function showPic(whichpic){
	  var source = whichpic.getAttribute('href');
	  var placeholder = document.getElementById('placeholder');
	  placeholder.setAttribute('src', source);
	}

##<a name="no3">4.3 应用这个JavaScript函数</a>

	<!DOCTYPE html>
	<html lang="en">
	<head>
	  <meta charset="UTF-8">
	  <title>Document</title>
	</head>
	<body>
	  
	  <h1>Fc-demo</h1>
	  <ul>
	    <li><a href="http://7xr9pe.com1.z0.glb.clouddn.com/1.jpg" onclick="showPic(this);return false;" alt="第1张图片">第1张图片</a></li>
	    <li><a href="http://7xr9pe.com1.z0.glb.clouddn.com/2.jpg" onclick="showPic(this);return false;" alt="第2张图片">第2张图片</a></li>
	    <li><a href="http://7xr9pe.com1.z0.glb.clouddn.com/3.jpg" onclick="showPic(this);return false;" alt="第3张图片">第3张图片</a></li>
	    <li><a href="http://7xr9pe.com1.z0.glb.clouddn.com/4.jpg" onclick="showPic(this);return false;" alt="第4张图片">第4张图片</a></li>
	  </ul>
	  <img id="placeholder" src="http://7xr9pe.com1.z0.glb.clouddn.com/0.gif" alt="">
	
	  <script>
	    function showPic(whichpic){
	      var source = whichpic.getAttribute('href');
	      var placeholder = document.getElementById('placeholder');
	      placeholder.setAttribute('src', source);
	    }
	  </script>
	</body>
	</html>

##<a name="no4">4.4 对这个函数进行扩展</a>

###4.4.1 childNodes 属性

> 在一颗节点树上，`childNodes`属性可以用来获取任何一个元素的所有子元素，它是一个包含这个元素全部子元素的数组：

	element.childNodes

###4.4.2 nodeType 属性

> 每一个节点都有`nodeType`属性,`nodeType`的值是一个数字而非字符串。

	node.nodeType

**`nodeType`属性总共有12种可取值，其中仅有3中具有实用价值。**

1. 元素节点的`nodeType`属性值是1。
2. 属性节点的`nodeType`属性值是2。
3. 文本节点的`nodeType`属性值是3。

###4.4.3 在标记里增加一段描述

> 目的：将文本节点的值替换成目标图片连接的title值。

	<p id="description">Choose an image.</p>

将如上代码插入图片“占位符”后面。

###4.4.4 用JavaScript改变这段描述

> 在图片连接被点击时，为了能动态的用图片`title`替换掉图片说明，需要对`showPic`函数做一些修改。

	function showPic(whichpic){
      var source = whichpic.getAttribute('href');
      var placeholder = document.getElementById('placeholder');
      placeholder.setAttribute('src', source);

	  var text = whichpic.getAttribute('alt');
	  var description = document.getElementById('description');
    }

###4.4.5 nodeValie 属性

> 如果想改变一个文本节点的值，就用DOM提供的`nodeValue`属性，它用来得到（和设置）一个节点的值：

	node.nodeValue