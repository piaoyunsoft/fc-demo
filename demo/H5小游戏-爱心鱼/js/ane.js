var aneObj = function(){
	this.x = [];
	this.h = [];
}

aneObj.prototype.num = 50;
aneObj.prototype.init = function(){
	for (var i = 0; i < this.num; i++) {
		this.x[i] = i * 16 + Math.random();
		this.h[i] = 200 + Math.random() * 50;
	};
}

/**
 * [draw 绘制海葵]
 * @author fuchong
 * @version 1.0
 * @date    2016-06-20
 */
aneObj.prototype.draw = function(){
	ctx2.save();
	ctx2.globalAlpha = 0.6;
	ctx2.lineWidth = 20;
	ctx2.lineCap = 'round';
	ctx2.strokeStyle = '#3b154e';
	for (var i = 0; i < this.num; i++) {
		// beginPath,moveTo,lineTo,stroke,strokeStyle,lineWidth,lineCap,globalAlpha
		ctx2.beginPath();
		ctx2.moveTo(this.x[i], canHeight);
		ctx2.lineTo(this.x[i], canHeight - this.h[i]);
		ctx2.stroke();
	};
	ctx2.restore();
}