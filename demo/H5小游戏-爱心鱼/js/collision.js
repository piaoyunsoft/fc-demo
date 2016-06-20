/**
 * [momFruitsCollision 判断大鱼和果实的距离]
 * @author fuchong
 * @version 1.0
 * @date    2016-06-20
 */
function momFruitsCollision(){
	for (var i = 0; i < fruit.num; i++) {
		if(fruit.alive[i]){
			// 计算距离(平方值)
			var len = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
			if(len < 900){
				fruit.dead(i);
			}
		}
	};
}