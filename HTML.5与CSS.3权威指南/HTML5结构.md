##3.3 HTML5结构

###3.3.1 大纲

1. 显式编排内容区块 ： 明确使用`section`等元素创建文档结构，在每个内容区块内使用标题（`h1-h6`,`hgroup`等）。
2. 隐式编排内容区块 ： 不明确使用`section`等元素，而是根据页面中所书写的各级标题（`h1-h6`,`hgroup`）等把内容区块自动创建出来。因为HTML5分析器只要看到书写了某个级别的标题，就会判断存在相对应的内容区块。
3. 标题分级 ：　不同的标题有不同的级别。h1的级别最高，h6的级别最低。
4. 不同的内容区块可以是哟on个想同级别的标题
5. 网页编排示例


###3.3.2 对新的结构元素使用样式
> 因为很多浏览器尚未对HTML5中新增的结构元素提供支持，我们无法知道客户端使用的浏览器是否支持这些元素，所以需要使用CSS追加如下声明，目的是用过浏览器页面中使用的HTML5中新增元素都是以块方式显示的。如下所示：

	//追加block声明
	article,aside,dialog,figure,footer,header,legend,nav,section{display:block;}
	
	//正常使用样式
	nav{float:left;width:20%:}
	article{float:right;width:79%;}

另外，在IE8及以前的浏览器是不支持用CSS的方法来使用这些尚未支持的结构元素的，为了在IE浏览器中也能正常使用这些结构元素，需要使用 JavaScript 脚本，如下所示：

	//在脚本中创建元素
	<script>
	document.createElement('header');
	document.createElement('nav');
	document.createElement('footer');
	document.createElement('article');
	</script>

	<style>
	//正常使用样式
	nav{float:left;width:20%:}
	article{float:right;width:79%;}
	</style>

###3.3.3 article 元素的样式
> 一个网页中可能有多个独立的`article`元素，每一个`article`元素都允许有自己的标题与脚注等从属元素，并允许对自己的从属元素单独使用样式。