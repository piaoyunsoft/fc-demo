# DOM

- <a href="#no1">3.1 文档：DOM中的“D”</a>
- <a href="#no2">3.2 对象：DOM中的“O”</a>
- <a href="#no3">3.3 模型：DOM中的“M”</a>
- <a href="#no4">3.4 节点</a>
- <a href="#no5">3.5 获取和设置属性</a>
- <a href="#no6">3.6 小结</a>

**本章内容**

- 节点的概念
- 5个常用的DOM方法：`getElementById`、`getElementByTagName`、`getElementByClassName`、`getAttribute`和`setAttribute`。

##<a name="no1">3.1 文档：DOM中的“D”</a>

>  如果没有 `document`（文档），DOM也就无从谈起。当创建了一个网页并把它加载到web浏览器中时，DOM就在幕后悄然而生。它把你编写的网页文档转换为一个文档对象。

##<a name="no2">3.2 对象：DOM中的“O”</a>

> `JavaScript`里的对象可以分为三种类型：

1. 用户定义对象（`user-defined object`）:由程序员自行创建的对象。
2. 内建对象（`native object`）：内建在`JavaScript`语言里的对象，如`Array`、`Math`和`Date`等。
3. 宿主对象（`hose objecy`）：由浏览器提供的对象。

##<a name="no3">3.3 模型：DOM中的“M”</a>

> DOM中的“M”代表着“Model”（模型），是某种实物的表现形式。

##<a name="no4">3.4 节点</a>

> 节点（node）标识网络中的一个连接点，一个网络就是由一些节点构成的集合。

**3.4.1 元素节点**

> DOM的原子是元素节点（element node）。

**3.4.3 文本节点**

	<p>这里是文本节点demo</p>

> 如上所示：`<p>这里是文本节点demo</p>`中包含的问本【这里是文本节点demo】,它是一个文本节点（text node）。

**3.4.3 属性节点**

> 属性节点用来对元素做出更具体的描述。（attribute node）。

**3.4.4 CSS**

1. class 属性：你可以在所有的元素上任意应用 class 属性。
2. id 属性：id 属性的用途是给网页里的某个元素加上一个独一无二的标识符。

**3.4.5 获取元素**

> 有3中DOM方法可以获取元素节点，分别是通过元素ID、通过标签名字和通过类名字来获取。

1. `getElementById`：返回一个与有着给定`id`属性值的元素节点对应的对象。
2. `getElementByTagName`：返回一个对象数组，每个对象分别对应着文档里有着给定标签的一个元素。
3. `getElementByClassName`：这个方法可以通过`class`属性中的类名来访问元素。返回值与`getElementByTagName`类似，都是一个具有想同类名的元素的数组。

**3.4.6 盘点知识点**

- 一份文档就是一颗节点树。
- 节点分为不同的类型：元素节点、属性节点和文本节点等。
- `getElementById`返回一个对象，该对象对应着文档里的一个特定的元素节点。
- `getElementsByTagName`和`getElementByClassName`返回一个对象数组，分别对应着文档里的一组特定的元素节点。
- 每个节点都是一个对象。

##<a name="no5">3.5 获取和设置属性</a>

**3.5.1 getAttribute**

> `getAttribute`是一个函数。它只有一个参数——你打算查询的属性的名字：

	object.getAttribute(attribute)

**它只能通过元素节点对象调用。**

例：

	var paras = document.getElementByTagName('p');
	for(var i=0;i < paras.length; i++){
	  console.log(paras[i].getAttribute('title'));
	}

**3.5.2 setAttribute**

> `setAttribute`允许对属性节点的值做出修改，也只能用于元素节点。

	object.setAttribute(attribute, value);



##<a name="no6">3.6 小结</a>

**本章介绍了DOM提供的五个方法：**

1. getElementById
2. getElementsByTagName
3. getElementByClassName
4. getAttribute
5. setAttribute