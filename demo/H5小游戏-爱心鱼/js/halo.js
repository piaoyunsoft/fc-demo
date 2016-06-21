/**
 * [haloObj 大鱼喂小鱼，小鱼特效]
 * @author fuchong
 * @version 1.0
 * @date    2016-06-21
 */
var haloObj = function(){
	this.x = [];
	this.y = [];
	this.alive = [];
	this.r = [];
}

haloObj.prototype.num = 5;
haloObj.prototype.init = function(){
	for (var i = 0; i < this.num; i++) {
		this.x[i] = 0;
		this.y[i] = 0;
		this.alive[i] = false;
		this.r[i] = 0;
	};
}

haloObj.prototype.draw = function(){
	ctx1.save();
	ctx1.lineWidth = 2;
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = 'rgba(255, 136, 0, 1)';
	for (var i = 0; i < this.num; i++) {
		if(this.alive[i]){
			// draw
			this.r[i] += deltaTime * 0.1;
			if(this.r[i] > 100){
				this.alive[i] = false;
				break;
			}
			var alpha = 1 - this.r[i] / 100;
			ctx1.beginPath();
			ctx1.arc(this.x[i], this.y[i], this.r[i], 0 ,Math.PI * 2);
			ctx1.closePath();
			ctx1.strokeStyle = 'rgba(255, 136, 0, '+ alpha +')';
			ctx1.stroke();
		}
	};
	ctx1.restore();
}

/**
 * [born 涟漪出生]
 * @author fuchong
 * @version 1.0
 * @date    2016-06-21
 */
haloObj.prototype.born = function(x, y){
	for (var i = 0; i < this.num; i++) {
		if(!this.alive[i]){
			//born
			this.alive[i] = true;
			this.r[i] = 10;
			this.x[i] = x;
			this.y[i] = y;
			return;
		}
	};
}