/**
 * 这个函数用来解析来自URL的查询串中的name=value参数对
 * 它将name=value对存储在一个对象的属性中，并返回该对象
 * 
 * demo:
 * var args = urlArgs();	//从URL中解析参数
 * var q = args.q || '';	//如果参数定义了的话就使用参数，否则使用一个默认值
 * var n = args.n ? parseInt(args.n) : 10;
 * 
 * [urlArgs url参数对]
 * @author fuchong
 * @version 1.0
 * @date    2016-07-11
 * @return  {obj}   [参数对象]
 */
function urlArgs(){
	var args = {};
	var query = location.search.substring(1);
	var pairs = query.split('&');
	for (var i = 0; i < pairs.length; i++) {
		var pos = pairs[i].indexOf('=');
		if(pos == -1) {
			continue;
		}
		var name = pairs[i].substring(0, pos);
		var value = pairs[i].substring(pos + 1);
		value = decodeURIComponent(value);
		args[name] = value;
	};

	return args;
}


/**
 * [browser 浏览器信息]【好像不是那么准确？？IE有bug】
 * @author fuchong
 * @version 1.0
 * @date    2016-07-12
 * @return  {obj}   [浏览器类型+版本号]
 */
function browser(){
	var s = navigator.userAgent.toLowerCase();
	var match = /(webkit)[\/]([\w.]+)/.exec(s) || /(opera)(?:.*version)?[\/]([\w.]+)/.exec(s) || /(msie)([\w.]+)/.exec(s) || !/compatible/.test(s) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(s) || [];

	return {name: match[1] || '', version: match[2] || '0'};
}

/**
 * [difference 数组去重]
 * @author fuchong
 * @version 1.0
 * @date    2016-07-26
 * @param   {arr}   arr1 [数组1]
 * @param   {arr}   arr2 [数组2]
 *
 * demo:
 * var a = [1,2,3,4,5,6,7,4,3,2,123,4,5,2,1,3,4];
 * var b = [4,6,10];
 * console.log(difference(a,b)); => [1, 2, 3, 5, 7, 3, 2, 123, 5, 2, 1, 3]
 */
function difference(arr1, arr2){
	$.each(arr1, function(i,n){
		$.each(arr2, function(j,k){
			if(n == k){
				arr1.splice(i,1);
			}
		});
	});
	return arr1;
}