#this 、call 和 apply
> 在JavaScript编程中，`this`关键字总是让初学者感到迷惑，`Function.prototype.call`和`Function.prototype.apply`这两个方法也有着广泛的运用。我们有必要在学习设计模式之前先理解这几个概念。

- <a href="#no1">2.1 this</a>
- <a href="#no2">2.2 call 和 apply</a>

##<a name="no1">2.1 this</a>
> 跟别的语言大相径庭的是，`JavaScript`的`this`总是指向一个对象，而具体指向哪个对象是在运行时基于函数的执行环境动态绑定的，而非函数被声明时的环境。

###2.1.1 `this`的指向
> 除去不常用的`with`和`eval`的情况，具体到实际应用中，this的指向大致可以分为以下4种。

- 作为对象的方法调用。
- 作为普通函数调用。
- 构造器调用。
- `Function.prototype.call`或`Function.prototype.apply`调用。

**1.  作为对象的方法调用**

当函数作为对象的方法被调用时，`this`指向该对象：

	var obj = {
	    a: 1,
	    getA: function(){
	        alert ( this === obj );    // 输出：true
	        alert ( this.a );    // 输出: 1
	    }
	};
	
	obj.getA();

**2.  作为普通函数调用**

当函数不作为对象的属性被调用时，也就是我们常说的普通函数方式，此时的`this`总是指向全局对象。在浏览器的`JavaScript`里，这个全局对象是`window`对象。

	window.name = 'globalName';
	
	var getName = function(){
	    return this.name;
	};
	
	console.log( getName() );    // 输出：globalName

或者：

	window.name = 'globalName';
	
	var myObject = {
	    name: 'sven',
	    getName: function(){
	        return this.name;
	    }
	};
	
	var getName = myObject.getName;
	console.log( getName() );    // globalName

有时候我们会遇到一些困扰，比如在`div`节点的事件函数内部，有一个局部的`callback`方法，`callback`被作为普通函数调用时，`callback`内部的`this`指向了`window`，但我们往往是想让它指向该`div`节点，见如下代码：

	<html>
	    <body>
	        <div id="div1">我是一个div</div>
	    </body>
	    <script>
	
	    window.id = 'window';
	
	    document.getElementById( 'div1' ).onclick = function(){
	        alert ( this.id );        // 输出：'div1'
	        var callback = function(){
	            alert ( this.id );        // 输出：'window'
	        }
	        callback();
	    };
	
	    </script>
	</html>

此时有一种简单的解决方案，可以用一个变量保存`div`节点的引用：

	document.getElementById( 'div1' ).onclick = function(){
	    var that = this;    // 保存div的引用
	    var callback = function(){
	        alert ( that.id );    // 输出：'div1'
	    }
	    callback();
	};

在ECMAScript 5的`strict`模式下，这种情况下的`this`已经被规定为不会指向全局对象，而是`undefined`：

	function func(){
	    "use strict"
	    alert ( this );    // 输出：undefined
	}
	
	func();

**3.  构造器调用**


JavaScript中没有类，但是可以从构造器中创建对象，同时也提供了`new`运算符，使得构造器看起来更像一个类。

除了宿主提供的一些内置函数，大部分JavaScript函数都可以当作构造器使用。构造器的外表跟普通函数一模一样，它们的区别在于被调用的方式。当用`new`运算符调用函数时，该函数总会返回一个对象，通常情况下，构造器里的`this`就指向返回的这个对象，见如下代码：

	var MyClass = function(){
	    this.name = 'sven';
	};
	
	var obj = new MyClass();
	alert ( obj.name );     // 输出：sven

但用`new`调用构造器时，还要注意一个问题，如果构造器显式地返回了一个`object`类型的对象，那么此次运算结果最终会返回这个对象，而不是我们之前期待的`this`：

	var MyClass = function(){
	    this.name = 'sven';
	    return {    // 显式地返回一个对象
	        name: 'anne'
	    }
	};
	
	var obj = new MyClass();
	alert ( obj.name );     // 输出：anne

如果构造器不显式地返回任何数据，或者是返回一个非对象类型的数据，就不会造成上述问题：

	var MyClass = function(){
	    this.name = 'sven'
	    return 'anne';    // 返回string类型
	};
	
	var obj = new MyClass();
	alert ( obj.name );     // 输出：sven

**4.  `Function.prototype.call`或`Function.prototype.apply`调用**

跟普通的函数调用相比，用`Function.prototype.call`或`Function.prototype.apply`可以动态地改变传入函数的`this`：

	var obj1 = {
	    name: 'sven',
	    getName: function(){
	        return this.name;
	    }
	};
	
	var obj2 = {
	    name: 'anne'
	};
	
	console.log( obj1.getName() );     // 输出: sven
	console.log( obj1.getName.call( obj2 ) );    // 输出：anne

`call`和`apply`方法能很好地体现JavaScript的函数式语言特性，在JavaScript中，几乎每一次编写函数式语言风格的代码，都离不开`call`和`apply`。在JavaScript诸多版本的设计模式中，也用到了`call`和`apply`。

###2.1.2 丢失的`this`

这是一个经常遇到的问题，我们先看下面的代码：

	var obj = {
	    myName: 'sven',
	    getName: function(){
	        return this.myName;
	    }
	};
	
	console.log( obj.getName() );    // 输出：'sven'
	
	var getName2 = obj.getName;
	console.log( getName2() );    // 输出：undefined

当调用`obj.getName`时，`getName`方法是作为`obj`对象的属性被调用的，根据2.1.1节提到的规律，此时的`this`指向`obj`对象，所以`obj.getName()`输出`'sven'`。

当用另外一个变量`getName2`来引用`obj.getName`，并且调用`getName2`时，根据2.1.2节提到的规律，此时是普通函数调用方式，`this`是指向全局`window`的，所以程序的执行结果是`undefined`。

再看另一个例子，`document.getElementById`这个方法名实在有点过长，我们大概尝试过用一个短的函数来代替它，如同`prototype.js`等一些框架所做过的事情：

	var getId = function( id ){
	    return document.getElementById( id );
	};
	
	getId( 'div1' );

我们也许思考过为什么不能用下面这种更简单的方式：

	var getId = document.getElementById;
	getId( 'div1' );

现在不妨花1分钟时间，让这段代码在浏览器中运行一次：

	<html>
	    <body>
	        <div id="div1">我是一个div</div>
	    </body>
	    <script>
	
	    var getId = document.getElementById;
	    getId( 'div1' );
	
	    </script>
	</html>

在Chrome、Firefox、IE10中执行过后就会发现，这段代码抛出了一个异常。这是因为许多引擎的`document.getElementById`方法的内部实现中需要用到`this`。这个`this`本来被期望指向`document`，当`getElementById`方法作为`document`对象的属性被调用时，方法内部的`this`确实是指向`document`的。

但当用`getId`来引用`document.getElementById`之后，再调用`getId`，此时就成了普通函数调用，函数内部的`this`指向了`window`，而不是原来的`document`。

我们可以尝试利用`apply`把`document`当作`this`传入`getId`函数，帮助“修正”`this`：

	document.getElementById = (function( func ){
	    return function(){
	        return func.apply( document, arguments );
	    }
	})( document.getElementById );
	
	var getId = document.getElementById;
	var div = getId( 'div1' );
	
	alert (div.id);    // 输出： div1



##<a name="no2">2.2 `call`和`apply`</a>




[资料来源](http://www.ituring.com.cn/tupubarticle/7768)