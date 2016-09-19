$(function() {

	$(".box ul li").click(function() {
		var index = $(this).index();
		$("li").eq(index).css("width", "700px").siblings("li").css("width", "100px");
		$(".box ul li").eq(index).css("width", "700px").siblings(".box ul li").css("width", "100px");
	});
});