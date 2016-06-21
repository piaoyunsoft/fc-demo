var dataObj = function(){
	this.fruitNum = 0;	//果实数量
	this.double = 1;	//是否吃到蓝色果实，吃到则翻倍
	this.score = 0;
	this.gameOver = false;	//游戏是否结束
	this.alpha = 0;
}

/**
 * [draw 绘制分值]
 * @author fuchong
 * @version 1.0
 * @date    2016-06-21
 */
dataObj.prototype.draw = function(){
	var w = can1.width;
	var h = can1.height;

	ctx1.save();
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = 'white';
	ctx1.fillStyle = 'white';
	ctx1.fillText('SCORE: ' + this.score, w / 2, h - 20);

	if(this.gameOver){
		this.alpha += deltaTime * 0.001;
		if(this.alpha > 1){
			this.alpha = 1;
		}
		ctx1.fillStyle = 'rgba(255, 255, 255, '+ this.alpha +')';
		ctx1.fillText('GAME OVER ', w / 2, h / 2);
	}
	ctx1.restore();
}

/**
 * [draw 改变分值]
 * @author fuchong
 * @version 1.0
 * @date    2016-06-21
 */
dataObj.prototype.addScore = function(){
	this.score += this.fruitNum * 100 * this.double;
	this.fruitNum = 0;
	this.double = 1;
}