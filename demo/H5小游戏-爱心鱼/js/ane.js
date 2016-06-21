var aneObj = function(){
	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.amp = [];	//海葵摆动振幅
	this.alpha = 0;	//正弦角度
}

aneObj.prototype.num = 50;
aneObj.prototype.init = function(){
	for (var i = 0; i < this.num; i++) {
		this.rootx[i] = i * 16 + Math.random();
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight - 200 + Math.random() * 50;
		this.amp[i] = Math.random() * 50 + 50;
	};
}

/**
 * [draw 绘制海葵]
 * @author fuchong
 * @version 1.0
 * @date    2016-06-20
 */
aneObj.prototype.draw = function(){
	this.alpha += deltaTime * 0.0008;
	var l = Math.sin(this.alpha);
	ctx2.save();
	ctx2.globalAlpha = 0.6;
	ctx2.lineWidth = 20;
	ctx2.lineCap = 'round';
	ctx2.strokeStyle = '#3b154e';
	for (var i = 0; i < this.num; i++) {
		// beginPath,moveTo,lineTo,stroke,strokeStyle,lineWidth,lineCap,globalAlpha
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i], canHeight);
		this.headx[i] = this.rootx[i] + l * this.amp[i];
		ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i]);
		ctx2.stroke();
	};
	ctx2.restore();
}