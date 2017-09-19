<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>九次方后台</title>
<style type="text/css">
/*公共样式*/
	*{
		padding: 0px;
		margin: 0px;
		font-family: '微软雅黑';
	}
	html,body{
		height: 100%;
		width: 100%;
	}
	ul li{
		list-style: none;
	}
	.page{
		width: 95%;
		margin: 50px auto;
		overflow-y:auto;
	}
/*头部样式*/
	nav{
		width: 100%;
		height: 50px;
		background-color: #222;
		padding: 10px 0px;
		position: fixed;
		top: 0px;
	}
	nav div{
		width: 80%;
		margin: auto;
		line-height: 50px;
		text-align: center;
	}
	nav span{
		font-size: 28px;
		letter-spacing: 2px;
		color: #D2CFCF;
	}
	nav img{
		float: left;
		position: relative;
		top: 15px;
	}
/*左边栏样式*/
	#left{
		width:20%;
		background-color: #313131;;
		position: fixed;
		top:70px;
		left: 0px;
	}
	#left ul{
		padding-top: 70px;
	}
	#left ul li{
		width: 80%;
		margin: 0 auto;
		text-align: center;
		height: 40px;
		line-height: 40px;
		color: #D2CFCF;
		font-size: 18px;
		cursor: pointer;
	}
	#left ul li:hover{
		color: #fff;
		background: #4F4E4E;
		opacity: 0.5;
	}
	#left ul li.hover{
		color: #fff;
		background: #222;
	}
/*右边内容样式*/
	#right{
		width: 80%;
		position: fixed;
		top:70px;
		right: 0px;
	}
</style>
</head>
<body>
<!-- 头部 start -->
	<nav>
		<div>
			<img src="img/logo.png">
			<span>九次方后台管理系统</span>
		</div>
	</nav>
<!-- end 头部 -->
<!-- 左边栏 start -->
<section id="left">
	<ul>
		<li>图片替换</li>
		<li>增加新闻</li>
		<li>新闻列表</li>
		<li>留言管理</li>
	</ul>
</section>
<!-- end 左边栏 -->
<!-- 右边栏 start -->
<section id="right">
</section>
<!-- end 右边栏 -->
</body>
<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
(function(){
// 内容的高度
	var $height = $(window).height()-70;
	$("#left").css("height",$height);
// 点效果击切换
	var $li = $("#left ul li");
	var $right = $("#right");
	var index = 0;
	var arr=['replaceImg/img.html','news/addnews.html','news/list.php','message/message.php','password/password.php',]
	$right.load(arr[0]);
	$li.click(function(){
		index = $(this).index();
		$right.load(arr[index]);//加载页面
		$(this).addClass('hover').siblings().removeClass('hover');//左边栏切换效果
	})
})()
</script>
</html>
