$(function(){
	SIDEBAR.init();
});


var SIDEBAR = {
	sidebar: $('#J_dazdSideBar'),
	init: function(){
		SIDEBAR.bindEvent();
	},
	close: function(){
		SIDEBAR.sidebar.animate({
			right: '-270px'
		},300);
	},
	open: function(){
		SIDEBAR.sidebar.animate({
			right: '0'
		},300);
	},
	bindEvent: function(){
		$('.J_dazdSideBarOpen').click(function(){
			// console.log($(this).text());
		});


		// 展开侧边栏
		$('.J_dazdSideBarOpen').click(function(){
			SIDEBAR.open();
			return false;
		});

		// 关闭侧边栏
		$('.J_dazdSideBarClose').click(function(){
			SIDEBAR.close();
			return false;
		});

		$('body').click(function(e){
			var curX = e.pageX;
			var left = SIDEBAR.sidebar.offset().left;
			if(curX < left){
				SIDEBAR.close();
			}
		});

		// 返回顶部
		$('.J_dazdSideBarToTop').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 300);
		});
	}
};