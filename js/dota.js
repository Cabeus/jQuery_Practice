//设置全局变量
var num = 0;
//设置轮播规则
function lunbo(num) {
	$("#U").css({
		"top": -230 * num + "px"
	});
	$("#t>li").eq(num).css({
		"background": "url(img/ui.png) no-repeat 0 -139px"
	}).siblings("li").css({
		"background": "url(img/ui.png) no-repeat 0 -182px"
	})
}
//设置点击事件
$("#t>li").click(function() {
	var index = $(this).index();
	num = index;
	lunbo(num)
})

//设置定时器
var timer = setInterval(function() {
	num++;
	if(num > $("#t>li").length - 1) {
		num = 0;
	}
	lunbo(num)
}, 1000)

//鼠标移入移除定时器
$("section").mouseover(function() {
	clearInterval(timer);
})
//鼠标移除加载定时器
$("section").mouseout(function() {
	timer = setInterval(function() {
		num++;
		if(num > $("#t>li").length - 1) {
			num = 0;
		}
		lunbo(num)
	}, 1000)
})