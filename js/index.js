// navbar page start
	$(window).bind("scroll",function(){
		var navHeight = $(window).height()-100;
		var scrollTop = $(window).scrollTop();
		if(scrollTop>navHeight){
			$('.navbar-default').addClass('on');
		}else{
			$('.navbar-default').removeClass('on');
		}
	});
	$('a.page-scroll').click(function(){
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	        if (target.length) {
	            $('html,body').animate({
	                scrollTop: target.offset().top - 40
	            }, 900);
	            return false;
	        }
	    }
	});
//end  navbar page
// 导航的收起 start
	$('#btn').hover(function(){
		$(this).addClass('hover')
	},function(){
		$(this).removeClass('hover')
	});

	$('#btn').click(function(){

		$(this).addClass('focus');

		$(window).bind("scroll",function(){
			var scrollTop = $(window).scrollTop();
			if(scrollTop>50){
				$('#btn').removeClass('focus');
				var $con = $('#navbar-collapse');
				$con.attr('aria-expanded','false');
				$con.css('height','1px');
				$con.removeClass('in');
			}
		});
	});
// end  导航的收起
//底部加号旋转 start
	var $add =  $('#foot div.foot2 a.add');
	$add.click(function(){
		if ($(this).is('.click')) {
			$(this).removeClass('click');
		}else{
			$(this).addClass('click');
		};
		$(this).parent().parent().parent().siblings().children().children().children().removeClass('click');
	})
//end 底部加号旋转
	var mail = $("input[name='mail']");
	var text = $('textarea');
	var btn = $('button.btn');
	btn.click(function(){
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth()+1;
		var dat = date.getDate();
		var hours = date.getHours();
		var minute = date.getMinutes();
		var seconds = date.getSeconds();
		var Da = year +'-'+ month+'-'+dat+' '+hours+':'+minute+':'+seconds;

		var reg =  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
		if (text.val().length>0 && reg.test(mail.val())) {
			$.post('php/index.php',{email:mail.val(),text:text.val(),date:Da},function(data,status){
				alert("留言成功！");
				mail.val("");
				text.val("")
			});
		}else{
			if (text.val().length<=0 && mail.val().length<=0) {
				alert("请输入邮箱地址和邮件内容！")
			}else if(text.val().length<=0 && !reg.test(mail.val())){
				alert("请输入正确的邮箱地址和邮件内容！")
			}else if(!reg.test(mail.val().length)){
				alert("请输入正确的邮箱地址！")
			}else if(text.val().length<=0){
				alert("请输入邮件内容！")
			}else if (mail.val().length<=0) {
				alert("请输入邮箱地址！")
			}
		};
	})
//验证邮箱
	$(function(){
		$("input[name='mail']").blur(function(){
			var mail = $(this).val();
			var reg =  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
			if(!reg.test(mail) && mail.length>0){
			alert("请输入正确的邮箱地址！")
			}
		});
	});
//end 联系我们发送数据
//新闻列表start

//end新闻列表
