# CSS-DOM

- <a href="#no1">9.1 三位一体的网页</a>
- <a href="#no2">9.2 style 属性</a>
- <a href="#no3">9.3 何时该用DOM脚本设置样式</a>
- <a href="#no4">9.4 className 属性</a>
- <a href="#no5">9.5 小结</a>

**本章内容**

- style 属性
- 如何检索样式
- 如何改变样式

##<a name="no1">9.1 三位一体的网页</a>

- 结构层
- 表示层
- 行为层

###9.1.1 结构层

> 网页的结构层由HTML或XHTML之类的标记语言负责创建。标签，也就是那些出现在尖括号里的单词，对网页内容的语义含义做出了描述。

###9.1.2 表示层

> 表示层由CSS负责完成。

###9.1.3 行为层

> 行为层负责内容应该如何响应事件这一问题。这是`JavaScript`语言和`DOM`主宰的领域。

###9.1.4 分离

- 使用(X)HTML去大件文档的结构；
- 使用CSS去设置文档的呈现效果；
- 使用DOM脚本去实现文档的行为。


##<a name="no2">9.2 style 属性</a>

> 文档中的每个元素都有一个对象，每个对象又有着各种各样的属性。

###9.2.1 获取样式

	element.style.styleName

###9.2.2 设置样式

	element.style.property = value

##<a name="no3">9.3 何时该用DOM脚本设置样式</a>

###9.3.1 根据元素在节点树里的位置来设置样式

> 略

###9.3.2 根据某种条件反复设置某种样式

> 略

###9.3.3 响应事件

> 略

##<a name="no4">9.4 className 属性</a>

	element.className

#

**新增 class**

	function addClass(element, value){
	  if(!element.className){
	    element.className = value;
	  }else{
	    newClassName = element.className;
		newClassName += '';
		nawClassName += value;
	    element.className = newClassName;
	  }
	}


##<a name="no5">9.5 小结</a>

- (读)写style对象的各种属性
- className 属性