  
**简要教程**

> 这是一款基于html5 canvas的轻量级炫酷js粒子动画库插件。该js粒子动画库插件可以设置粒子的形状、旋转、分布、颜色等属性，还可以动态添加粒子，效果非常酷。

#使用方法

该粒子动画库插件使用方法非常简单，首先要在页面中引入`particles.js`文件。

	<script src="js/particles.js"></script>

在页面中使用一个div来作为放置粒子的容器。

	<div id="particles-js"></div>

然后可以按下面的方法调用该粒子插件：

	/* particlesJS('dom-id', params);
	/* @dom-id : set the html tag id [string, optional, default value : particles-js]
	/* @params: set the params [object, optional, default values : check particles.js] */
	 
	/* config dom id (optional) + config particles params */
	particlesJS('particles-js', {
	  particles: {
	    color: '#fff',
	    shape: 'circle', // "circle", "edge" or "triangle"
	    opacity: 1,
	    size: 4,
	    size_random: true,
	    nb: 150,
	    line_linked: {
	      enable_auto: true,
	      distance: 100,
	      color: '#fff',
	      opacity: 1,
	      width: 1,
	      condensed_mode: {
	        enable: false,
	        rotateX: 600,
	        rotateY: 600
	      }
	    },
	    anim: {
	      enable: true,
	      speed: 1
	    }
	  },
	  interactivity: {
	    enable: true,
	    mouse: {
	      distance: 250
	    },
	    detect_on: 'canvas', // "canvas" or "window"
	    mode: 'grab',
	    line_linked: {
	      opacity: .5
	    },
	    events: {
	      onclick: {
	        enable: true,
	        mode: 'push', // "push" or "remove" (particles)
	        nb: 4
	      }
	    }
	  },
	  /* Retina Display Support */
	  retina_detect: true
	});

插件中的可用参数都非常简单，可以参考上面的代码。

如下图所示：
![](http://i.imgur.com/migDzyN.png)