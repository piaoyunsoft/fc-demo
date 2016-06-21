var momObj = function(){
	this.x;
	this.y;
	this.angle;	//角度
	this.bigBody = new Image();

	this.bigTailTimer = 0;
	this.bigTailCount = 0;

	this.bigEyeTimer = 0;
	this.bigEyeCount = 0;
	this.bigEyeInterval = 2000;	//时间间隔,表示当前图片持续时间

	this.bigBodyCount = 0;
}

momObj.prototype.init = function(){
	this.x = canWidth / 2;
	this.y = canHeight / 2;
	this.angle = 0;
	this.bigBody.src = './img/bigSwim0.png';
}

momObj.prototype.draw = function(){
	this.x = lerpDistance(mx, this.x, 0.99);	//使一个值趋近于另外一个值
	this.y = lerpDistance(my, this.y, 0.99);

	// 计算坐标差	Math.atan2(y,x);
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI;	//-PI , PI
	this.angle = lerpAngle(beta, this.angle, 0.6);

	// 尾巴
	this.bigTailTimer += deltaTime;
	if(this.bigTailTimer > 50){
		this.bigTailCount = (this.bigTailCount + 1) % 8;
		this.bigTailTimer %= 50;
	}

	// 眼睛
	this.bigEyeTimer += deltaTime;
	if(this.bigEyeTimer > this.bigEyeInterval){
		this.bigEyeCount = (this.bigEyeCount + 1) % 2;
		this.bigEyeTimer %= this.bigEyeInterval;

		if(this.bigEyeCount == 0){
			this.bigEyeInterval = Math.random() * 1500 + 2000;	//[2000,3500)
		}else{
			this.bigEyeInterval = 200;
		}
	}

	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	var count = this.bigTailCount;
	ctx1.drawImage(bigTail[count], -bigTail[count].width / 2 + 30, -bigTail[count].height / 2);
	var bigBodyCount = this.bigBodyCount;
	if(data.double == 1){
		ctx1.drawImage(bigBodyOra[bigBodyCount], - bigBodyOra[bigBodyCount].width / 2, - bigBodyOra[bigBodyCount].height / 2);
	}else{
		ctx1.drawImage(bigBodyBlu[bigBodyCount], - bigBodyBlu[bigBodyCount].width / 2, - bigBodyBlu[bigBodyCount].height / 2);
	}
	var bigEyeCount = this.bigEyeCount;
	ctx1.drawImage(bigEye[bigEyeCount], -bigEye[bigEyeCount].width / 2 , -bigEye[bigEyeCount].height / 2);
	ctx1.restore();
}