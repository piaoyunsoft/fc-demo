var babyObj = function(){
	this.x;
	this.y;
	this.angle;	//角度
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();
}

babyObj.prototype.init = function(){
	this.x = canWidth / 2 - 50;
	this.y = canHeight / 2 + 50;
	this.angle = 0;
	this.babyEye.src = './img/babyEye0.png';
	this.babyBody.src = './img/babyFade0.png';
	this.babyTail.src = './img/babyTail0.png';
}

babyObj.prototype.draw = function(){
	this.x = lerpDistance(mom.x, this.x, 0.98);	//使一个值趋近于另外一个值
	this.y = lerpDistance(mom.y, this.y, 0.98);

	// 计算坐标差	Math.atan2(y,x);
	var deltaY = mom.y - this.y;
	var deltaX = mom.x - this.x;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI;	//-PI , PI
	this.angle = lerpAngle(beta, this.angle, 0.6);

	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(this.babyTail, -this.babyTail.width / 2 + 23, -this.babyTail.height / 2);
	ctx1.drawImage(this.babyBody, -this.babyBody.width / 2 , -this.babyBody.height / 2);
	ctx1.drawImage(this.babyEye, -this.babyEye.width / 2 , -this.babyEye.height / 2);
	ctx1.restore();
}