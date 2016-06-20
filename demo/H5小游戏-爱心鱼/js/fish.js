var can1;
var can2;
var ctx1;
var ctx2;
var canWidth;
var canHeight;

var lastTime;	//上一次执行动画的时间 
var deltaTime;	//两次执行的时间差
var bgPic = new Image();
var ane;	//海葵
var fruit;	//果实
var mom;	//大鱼
var baby;	//小鱼

var mx;	//鼠标x轴坐标
var my;	//鼠标y轴坐标

document.body.onload = game;
function game(){
	init();
	lastTime = Date.now();
	deltaTime = 0;
	ganmeloop();
}

/**
 * [init 初始化]
 * @author fuchong
 * @version 1.0
 * @date    2016-06-20
 */
function init(){
	// 获得canvas context
	can1 = document.getElementById('canvas1');	//fishes ui circle dust
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById('canvas2');	//background ane fruits
	ctx2 = can2.getContext('2d');

	can1.addEventListener('mousemove', onMouseMove, false);

	bgPic.src = './img/background.jpg';
	canWidth = can1.width;
	canHeight = can1.height;

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	mx = canWidth / 2;
	my = canHeight / 2;
}

/**
 * [ganmeloop 动画循环]
 * @author fuchong
 * @version 1.0
 * @date    2016-06-20
 */
function ganmeloop(){
	window.requestAnimFrame(ganmeloop);	//setInterval setTimeout
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if(deltaTime > 40) {
		deltaTime = 40;
	}
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0, 0, canWidth, canHeight);
	mom.draw();
	momFruitsCollision();

	baby.draw();
}

/**
 * [onMouseMove 用于监测鼠标移动]
 * @author fuchong
 * @version 1.0
 * @date    2016-06-20
 */
function onMouseMove(e){
	if(e.offsetX || e.layerX){
		mx = e.offsetX == undefined ? e.layerX : e.offsetX;
		my = e.offsetY == undefined ? e.layerY : e.offsetY;
	}
}