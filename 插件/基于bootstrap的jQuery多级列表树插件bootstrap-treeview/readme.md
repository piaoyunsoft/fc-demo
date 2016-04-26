
简要教程

`bootstrap-treeview`是一款效果非常酷的基于bootstrap的`jQuery`多级列表树插件。该`jQuery`插件基于`Twitter Bootstrap`，以简单和优雅的方式来显示一些继承树结构，如视图树、列表树等等。

![](http://i.imgur.com/CaCm44c.png)

##插件依赖
- Bootstrap v3.0.3
- jQuery v2.0.3

以上两个外部依赖文件已经经过测试可以正常使用，其他版本的Bootstrap需要另行测试。该插件不支持bootstrap 2。

##使用方法
首先要在页面中引入依赖文件和 bootstrap-treeview.js文件。

	<!-- Required Stylesheets -->
	<link href="./css/bootstrap.css" rel="stylesheet">
	 
	<!-- Required Javascript -->
	<script src="./js/jquery.js"></script>
	<script src="./js/bootstrap-treeview.js"></script>

##HTML结构

可以使用任何HTML DOM元素来作为该列表树的容器：

	<div id="tree"></div>

##调用插件

该列表树插件最基本的调用方法如下：

	function getTree() {
	    // Some logic to retrieve, or generate tree structure
	    return data;
	}
	 
	$('#tree').treeview({data: getTree()});

##数据结构

为了创建树的继承结构，需要为该列表树插件提供一个嵌套结构的js对象。例如：

	var tree = [
	  {
	    text: "Parent 1",
	    nodes: [
	      {
	        text: "Child 1",
	        nodes: [
	          {
	            text: "Grandchild 1"
	          },
	          {
	            text: "Grandchild 2"
	          }
	        ]
	      },
	      {
	        text: "Child 2"
	      }
	    ]
	  },
	  {
	    text: "Parent 2"
	  },
	  {
	    text: "Parent 3"
	  },
	  {
	    text: "Parent 4"
	  },
	  {
	    text: "Parent 5"
	  }
	];

最简单的树结构可以只有一个节点，使用一个带text属性的js对象来实现即可：

	{
	    text: "Node 1"
	}

如果你需要自定义更多的内容，可以参考下面：


	{
	  text: "Node 1",
	  icon: "glyphicon glyphicon-stop",
	  selectedIcon: "glyphicon glyphicon-stop",
	  color: "#000000",
	  backColor: "#FFFFFF",
	  href: "#node-1",
	  selectable: true,
	  state: {
	    checked: true,
	    disabled: true,
	    expanded: true,
	    selected: true
	  },
	  tags: ['available'],
	  nodes: [
	    {},
	    ...
	  ]
	}

##节点属性

下面的参数可用于树节点的属性定义，如节点的文本、颜色和标签等。


| 参数名称        | Are           | 参数类型  |
| ------------- |:-------------:| -----:|
| text     | String(必选项)  | 列表树节点上的文本，通常是节点右边的小图标。 |


参数名称|参数类型|参数描述
-----|------|----
text|String(必选项)|列表树节点上的文本，通常是节点右边的小图标。
icon|String(可选项)|列表树节点上的图标，通常是节点左边的图标。
selectedIcon|String(可选项)|当某个节点被选择后显示的图标，通常是节点左边的图标。
href|String(可选项)|结合全局enableLinks选项为列表树节点指定URL。
selectable|Boolean. Default: true|指定列表树的节点是否可选择。设置为false将使节点展开，并且不能被选择。
state|Object(可选项)|一个节点的初始状态。
state.checked|Boolean，默认值false|指示一个节点是否处于checked状态，用一个checkbox图标表示。
state.disabled|Boolean，默认值false|指示一个节点是否处于disabled状态。（不是selectable，expandable或checkable）
state.expanded|Boolean，默认值false|指示一个节点是否处于展开状态。
state.selected|Boolean，默认值false|指示一个节点是否可以被选择。
color|String. Optional|节点的前景色，覆盖全局的前景色选项。
backColor|String. Optional|节点的背景色，覆盖全局的背景色选项。
tags|Array of Strings. Optional|通过结合全局showTags选项来在列表树节点的右边添加额外的信息。