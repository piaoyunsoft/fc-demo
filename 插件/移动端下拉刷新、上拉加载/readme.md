> 插件描述：移动端下拉刷新、上拉加载更多插件

#依赖 (dependence)

Zepto 或者 jQuery 1.7以上版本，推荐jQuery 2.x版本（二者不要同时引用） 

Zepto or jQuery 1.7+，recommend to use jQuery 2.x（not use them at the same time）

#使用方法 (usage)
引用css和js 

(basic)

	<link rel="stylesheet" href="../dist/dropload.css">
	<script src="../dist/dropload.min.js"></script>
#
	$('.element').dropload({
	    scrollArea : window,
	    loadDownFn : function(me){
	        $.ajax({
	            type: 'GET',
	            url: 'json/more.json',
	            dataType: 'json',
	            success: function(data){
	                alert(data);
	                // 每次数据加载完，必须重置
	                me.resetload();
	            },
	            error: function(xhr, type){
	                alert('Ajax error!');
	                // 即使加载出错，也得重置
	                me.resetload();
	            }
	        });
	    }
	});

> （注明：所有示例里ajax和setTimeout都是为了模拟加载效果而写的，与本插件无直接关系。ajax建议自己写，无特殊情况不必copy我的ajax写法，因为写得太烂。如需下载本地运行，请在本机装服务器环境，否则ajax会报错。）

#参数列表 (options)
参数|说明|默认值|可填值
----|----|----|----
scrollArea|滑动区域|绑定元素自身|window
domUp| 上方DOM |`{domClass : 'dropload-up',domRefresh : '<div class="dropload-refresh">↓下拉刷新</div>',domUpdate: '<div class="dropload-update">↑释放更新</div>',domLoad : '<div class="dropload-load">○加载中...</div>'}`| 数组
domDown |下方DOM|`{domClass : 'dropload-down',domRefresh : '<div class="dropload-refresh">↑上拉加载更多</div>',domLoad : '<div class="dropload-load">○加载中...</div>',domNoData : '<div class="dropload-noData">暂无数据</div>'}`| 数组
autoLoad|自动加载|true|true和false
distance|拉动距离|50|数字
threshold| 提前加载距离|加载区高度2/3|正整数
loadUpFn|上方function|空|`function(me){//你的代码 me.resetload();}`
loadDownFn|下方function|空|`function(me){//你的代码 me.resetload();}`


#API
暴露一些功能，可以让dropload更灵活的使用

lock() 锁定dropload

参数|说明
-----|-----
lock()|智能锁定，锁定上一次加载的方向
lock('up')|锁定上方
lock('down')|锁定下方

unlock() 解锁dropload
noData() 无数据

参数|说明
----|----
noData()|无数据
noData(true)|无数据
noData(false)|有数据

resetload() 重置。每次数据加载完，必须重置

dropReload() 手动加载

#已知问题
由于部分Android中UC和QQ浏览器头部有地址栏，并且一开始滑动页面隐藏地址栏时，无法触发scroll和resize，所以会导致部分情况无法使用。
###解决方案
1. 增加distance距离，例如DEMO2中distance:50；
2. 加meta使之全屏显示

	<meta name="full-screen" content="yes">
	<meta name="x5-fullscreen" content="true">