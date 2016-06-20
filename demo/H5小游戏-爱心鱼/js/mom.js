var momObj = function(){
	this.x;
	this.y;
	this.angle;	//角度
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();
}

momObj.prototype.init = function(){
	this.x = canWidth / 2;
	this.y = canHeight / 2;
	this.angle = 0;
	this.bigEye.src = './img/babyEye0.png';
	this.bigBody.src = './img/bigSwim0.png';
	this.bigTail.src = './img/bigTail0.png';
}

momObj.prototype.draw = function(){
	this.x = lerpDistance(mx, this.x, 0.99);	//使一个值趋近于另外一个值
	this.y = lerpDistance(my, this.y, 0.99);

	// 计算坐标差	Math.atan2(y,x);
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI;	//-PI , PI
	this.angle = lerpAngle(beta, this.angle, 0.6);

	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.bigTail, - this.bigTail.width / 2 + 30, - this.bigTail.height / 2);
	ctx1.drawImage(this.bigBody, - this.bigBody.width / 2, - this.bigBody.height / 2);
	ctx1.drawImage(this.bigEye, - this.bigEye.width / 2, - this.bigEye.height / 2);
	ctx1.restore();
}