var babyObj = function(){
	this.x;
	this.y;
	this.angle;	//角度
	this.babyBody = new Image();

	this.babyTailTimer = 0;
	this.babyTailCount = 0;

	this.babyEyeTimer = 0;
	this.babyEyeCount = 0;
	this.babyEyeInterval = 1000;	//时间间隔,表示当前图片持续时间

	this.babyBodyTimer = 0;
	this.babyBodyCount = 0;
}

babyObj.prototype.init = function(){
	this.x = canWidth / 2 - 50;
	this.y = canHeight / 2 + 50;
	this.angle = 0;
	this.babyBody.src = './img/babyFade0.png';
}

babyObj.prototype.draw = function(){
	this.x = lerpDistance(mom.x, this.x, 0.98);	//使一个值趋近于另外一个值
	this.y = lerpDistance(mom.y, this.y, 0.98);

	// 计算坐标差	Math.atan2(y,x);
	var deltaY = mom.y - this.y;
	var deltaX = mom.x - this.x;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI;	//-PI , PI
	this.angle = lerpAngle(beta, this.angle, 0.6);

	// 尾巴
	this.babyTailTimer += deltaTime;
	if(this.babyTailTimer > 50){
		this.babyTailCount = (this.babyTailCount + 1) % 8;
		this.babyTailTimer %= 50;
	}

	// 眼睛
	this.babyEyeTimer += deltaTime;
	if(this.babyEyeTimer > this.babyEyeInterval){
		this.babyEyeCount = (this.babyEyeCount + 1) % 2;
		this.babyEyeTimer %= this.babyEyeInterval;

		if(this.babyEyeCount == 0){
			this.babyEyeInterval = Math.random() * 1500 + 2000;	//[2000,3500)
		}else{
			this.babyEyeInterval = 200;
		}
	}

	// 身体
	this.babyBodyTimer += deltaTime;
	if(this.babyBodyTimer > 300){
		this.babyBodyCount = this.babyBodyCount + 1;
		this.babyBodyTimer %= 300;
		if(this.babyBodyCount > 19){
			this.babyBodyCount = 19;
			data.gameOver = true;
		}
	}

	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	var babyTailCount = this.babyTailCount;
	ctx1.drawImage(babyTail[babyTailCount], -babyTail[babyTailCount].width / 2 + 23, -babyTail[babyTailCount].height / 2);
	var babyBodyCount = this.babyBodyCount;
	ctx1.drawImage(babyBody[babyBodyCount], -babyBody[babyBodyCount].width / 2 , -babyBody[babyBodyCount].height / 2);
	var babyEyeCount = this.babyEyeCount;
	ctx1.drawImage(babyEye[babyEyeCount], -babyEye[babyEyeCount].width / 2 , -babyEye[babyEyeCount].height / 2);
	ctx1.restore();
}