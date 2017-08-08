

$("ul>li").mouseover(function(){
	var index = $(this).index();
	console.log(index)
	$("ul>li>span").eq(index).hide().parent().siblings("li").find("span").show()
})

//$("ul").mouseout(function(){
//	$("ul>li>span").hide()
//})
