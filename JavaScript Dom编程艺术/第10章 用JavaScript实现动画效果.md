# 用JavaScript实现动画效果
- <a href="#no1">10.1 动画基础知识</a>
- <a href="#no2">10.2 实用的动画</a>
- <a href="#no3">10.3 小结</a>

**本章内容**

- 动画基础知识
- 用动画丰富网页的浏览效果

##<a name="no1">10.1 动画基础知识</a>

> 动画就是让元素的样式随着时间而不断的发生变化。

###10.1.1 位置

> 网页元素在浏览器窗口里的位置是一种表示性的信息。因此，位置信息通常是由CSS负责设置。

例：

    element{
      position: absolute;
      top: 50px;
      left: 100px;
    }


###10.1.2 时间

> JavaScript 函数`setTimeout`能够让某个函数在经过一定预定的时间之后才开始执行。这个函数带有两个参数：第一个参数通常是字符串，其内容是将要执行的那个函数的名字；第二个参数是一个数值，它以毫秒为单位设定了需要多长时间后才开始执行第一个参数所给出的函数：

	setTimeout('function', interval)

**在绝大多数时候，把这个函数调用赋值给一个变量是一个好主意：**

	variable = setTimeout('function', interval);

在想要取消某个正在排队等待执行的函数，就可以用`clearTimeout`取消。

	clearTimeout(variable)

###10.1.3 时间递增量

> 略

###10.1.4 抽象

	function moveElement(elementId, final_x, final_y, interval){
	  if(!document.getElementById()){
	    return false;
	  }
	
	  if(!document.getElementById(elementId)){
	    return false;
	  }
	
	  var elem = document.getElementById(elementId);
	  var xpos = parseInt(elem.style.left);
	  var ypos = parseInt(elem.style.top);
	  if(xpos == final_x && ypos == final_y){
	    return true;
	  }
	
	  if(xpos < final_x){
	    xpos++;
	  }
	
	  if(xpos > final_x){
	    xpos--;
	  }
	
	  if(ypos < final_y){
	    ypos++;
	  }
	
	  if(ypos > final_y){
	    ypos--;
	  }
	
	  elem.style.left = xpos + 'px';
	  elem.style.top = ypos + 'px';
	
	  var repeat = 'moveElement("'+elementId+'",'+final_x+','+final_y+',+'interval+')';
	  movement = setTimeout(repeat, interval);
	}

##<a name="no2">10.2 实用的动画</a>
###10.2.1 提出问题
> 略
###10.2.2 解决问题
> 略
###10.2.3 CSS
> 略
###10.2.4 JavaScript
> 略
###10.2.5 变量作用于问题
> 略
###10.2.6 改进动画效果

**改进后的moveElement**

	function moveElement(elementId, final_x, final_y, interval){
	  if(!document.getElementById()){
	    return false;
	  }
	
	  if(!document.getElementById(elementId)){
	    return false;
	  }
	
	  var elem = document.getElementById(elementId);
	  if(elem.movement){
	    clearTimeout(elem.movement);
	  }
	  var xpos = parseInt(elem.style.left);
	  var ypos = parseInt(elem.style.top);
	  var dist = 0;
	  if(xpos == final_x && ypos == final_y){
	    return true;
	  }
	
	  if(xpos < final_x){
	    dist = Math.ceil(final_x - xpos/10);
	    xpos = xpos + dist;
	  }
	
	  if(xpos > final_x){
	    dist = Math.ceil(xpos - final_x/10);
	    xpos = xpos - dist;
	  }
	
	  if(ypos < final_y){
	    dist = Math.ceil(final_y - ypos/10);
	    ypos = ypos + dist;
	  }
	
	  if(ypos > final_y){
	    dist = Math.ceil(ypos - final_y/10);
	    ypos = ypos - dist;
	  }
	
	  elem.style.left = xpos + 'px';
	  elem.style.top = ypos + 'px';
	
	  var repeat = 'moveElement("'+elementId+'",'+final_x+','+final_y+',+'interval+')';
	  movement = setTimeout(repeat, interval);
	}

###10.2.7 添加安全检查

	function moveElement(elementId, final_x, final_y, interval){
	  if(!document.getElementById()){
	    return false;
	  }
	
	  if(!document.getElementById(elementId)){
	    return false;
	  }
	
	  var elem = document.getElementById(elementId);
	  if(elem.movement){
	    clearTimeout(elem.movement);
	  }
	  if(!elem.style.left){
	    elem.style.left = '0px';
	  }
	  if(!elem.style.top){
	    elem.style.top = '0px';
	  }
	  var xpos = parseInt(elem.style.left);
	  var ypos = parseInt(elem.style.top);
	  var dist = 0;
	  if(xpos == final_x && ypos == final_y){
	    return true;
	  }
	
	  if(xpos < final_x){
	    dist = Math.ceil(final_x - xpos/10);
	    xpos = xpos + dist;
	  }
	
	  if(xpos > final_x){
	    dist = Math.ceil(xpos - final_x/10);
	    xpos = xpos - dist;
	  }
	
	  if(ypos < final_y){
	    dist = Math.ceil(final_y - ypos/10);
	    ypos = ypos + dist;
	  }
	
	  if(ypos > final_y){
	    dist = Math.ceil(ypos - final_y/10);
	    ypos = ypos - dist;
	  }
	
	  elem.style.left = xpos + 'px';
	  elem.style.top = ypos + 'px';
	
	  var repeat = 'moveElement("'+elementId+'",'+final_x+','+final_y+',+'interval+')';
	  movement = setTimeout(repeat, interval);
	}

###10.2.8 生成HTML标记
> 略

##<a name="no3">10.3 小结</a>

> 在本章里，我们首先对“动画”进行了定义：随时间变化而改变某个元素在浏览器窗口里的显示位置。通过结合使用`CSS-DOM`和`JavaScript`的`setTimeout`函数，实现了一个简易的动画。