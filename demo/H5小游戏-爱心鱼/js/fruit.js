var fruitObj = function(){
	this.alive = [];	//boolean
	this.x = [];	//图片坐标
	this.y = [];	//图片坐标
	this.l = [];	//图片长度（大小）
	this.spd = [];	//果实速度
	this.fruitType = [];	//果实类型
	this.orange = new Image();
	this.blue = new Image();
}

fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
	for (var i = 0; i < this.num; i++) {
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.spd[i] = Math.random() * 0.017 + 0.003;	//[0.003,0.02)
		this.fruitType[i] = '';
	};

	this.orange.src = './img/fruit.png';
	this.blue.src = './img/blue.png';
}

/**
 * [draw 绘制海葵果实]
 * @author fuchong
 * @version 1.0
 * @date    2016-06-20
 */
fruitObj.prototype.draw = function(){
	for (var i = 0; i < this.num; i++) {
		// find an ane, grow, fly up
		if(this.alive[i]){
			var pic;
			if(this.fruitType[i] == 'blue'){
				pic = this.blue;
			}else{
				pic = this.orange;
			}

			if(this.l[i] <= 15){
				this.l[i] += this.spd[i] * deltaTime;
			}else{
				this.y[i] -= this.spd[i] * 7 * deltaTime;
			}
			ctx2.drawImage(pic, this.x[i] - this.l[i] / 2, this.y[i] - this.l[i] / 2,this.l[i], this.l[i]);

			if(this.y[i] < 10){//-10?
				this.alive[i] = false;
			}
		}
	};
}

/**
 * [born 随机找一个海葵用于产生果实]
 * @author fuchong
 * @version 1.0
 * @date    2016-06-20
 */
fruitObj.prototype.born = function(i){
	var aneId = Math.floor(Math.random() * ane.num);
	this.x[i] = ane.x[aneId];
	this.y[i] = canHeight - ane.h[aneId];
	this.l[i] = 0;
	this.alive[i] = true;
	var ran = Math.random();
	if(ran < 0.2){
		this.fruitType[i] = 'blue';	//orange,blue
	}else{
		this.fruitType[i] = 'orange';	//orange,blue
	}
}

/**
 * [dead 当前果实为被吃掉时，从屏幕消失]
 * @author fuchong
 * @version 1.0
 * @date    2016-06-20
 */
fruitObj.prototype.dead = function(i){
	this.alive[i] = false;
}

/**
 * [fruitMonitor 用于判断当前屏幕有多少果实]
 * @author fuchong
 * @version 1.0
 * @date    2016-06-20
 */
function fruitMonitor(){
	var num = 0;
	for (var i = 0; i < fruit.num; i++) {
		if(fruit.alive[i]){
			num++;
		}
	};
	if(num < 15){
		// send fruit
		senFruit();
		return;
	}
}

/**
 * [senFruit 根据果实是否闲置状态激活果实]
 * @author fuchong
 * @version 1.0
 * @date    2016-06-20
 */
function senFruit(){
	for (var i = 0; i < fruit.num; i++) {
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	};
}


/**
 * [update 更新果实状态]
 * @author fuchong
 * @version 1.0
 * @date    2016-06-20
 */
// fruitObj.prototype.update = function(){
// 	var num = 0;
// 	for (var i = 0; i < tiis.num; i++) {
// 		if(this.alive[i]){
// 			num++;
// 		}
// 	};
// }