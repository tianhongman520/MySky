//点击mian关闭按钮，关闭视频播放器
$(".main-top span").click(function  () {
	$(".main").hide();
});

//设置播放、暂停按钮
//document.querySelectorAll(".main-top button")[0].onclick=function  () {
//	var videos=document.querySelector("video");
//	if (videos.play) {
//		videos.pause();
//	}
//}

//document.querySelectorAll(".main-top button")[1].onclick=function  () {
//	var videos=document.querySelector("video");
//	if (videos.pause) {
//		videos.play();
//	}
//}

//固定导航条
$(document).ready(function() {
	var topMain = $(".top").height(); //获取到头部DIV的高度
	var Logo = $(".top");
	//屏幕的滑动
	$(window).scroll(function() {
		if($(window).scrollTop() > topMain) {
			Logo.addClass("ScrollNav");
		} else {
			Logo.removeClass("ScrollNav");
		}
	});
});

//照片旋转
$(document).ready(function() {
	setInterval(function() {
		$(".main-img-a").toggleClass("img-rotate");
		$(".main-img-b").toggleClass("img-rotate");
	},2000);
});
