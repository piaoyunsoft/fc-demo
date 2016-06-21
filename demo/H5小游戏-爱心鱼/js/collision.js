/**
 * [momFruitsCollision 判断大鱼和果实的距离]
 * @author fuchong
 * @version 1.0
 * @date    2016-06-20
 */
function momFruitsCollision(){
	if(!data.gameOver){
		for (var i = 0; i < fruit.num; i++) {
			if(fruit.alive[i]){
				// 计算距离(平方值)
				var len = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
				if(len < 900){
					fruit.dead(i);
					data.fruitNum++;
					mom.bigBodyCount++;
					if(mom.bigBodyCount > 7){
						mom.bigBodyCount = 7;
					}
					if(fruit.fruitType[i] == 'blue'){
						data.double = 2;
					}
					wave.born(fruit.x[i], fruit.y[i]);
				}
			}
		};
	}
}

/**
 * [momBabyCollision 判断大鱼和小鱼的距离]
 * @author fuchong
 * @version 1.0
 * @date    2016-06-21
 */
function momBabyCollision(){
	if(data.fruitNum > 0 && !data.gameOver){
		var len = calLength2(mom.x, mom.y, baby.x, baby.y);
		if(len < 900){
			// baby recover
			baby.babyBodyCount = 0;
			// data => 0
			mom.bigBodyCount = 0;
			// score update
			data.addScore();
			halo.born(baby.x, baby.y);
		}
	}
}