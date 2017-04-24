// JavaScript Document
$(function(){
	
	//登录页面	   	
	$("#btnLogin").click(function(){
		var phone=trim(jQuery(".txtphone").val());
		var pwd=trim(jQuery(".txtPassword").val());
		
		if($(".txtphone").val()==""||$(".txtphone").val()=="手机号"){
			$("#addBox").show().delay(1000).fadeOut();
			return;
		}	
	if(!checkMobile(phone)){
			$("#addBox3").show().delay(1000).fadeOut();
			return;
		}
		if($(".txtPassword").val()==""||$(".txtPassword").val()=="密码"){
			$("#addBox2").show().delay(1000).fadeOut();
			return;
		}
		
	
	});
	
	
	//注册页面	   	
	$("#btntijiao").click(function(){
		var phone=trim(jQuery(".txtphone").val());
		var yzm=trim(jQuery(".txtyzm").val());
		var pwd=trim(jQuery(".txtPassword").val());
		
		
		if($(".txtphone").val()==""||$(".txtphone").val()=="手机号"){
			$("#addBox").show().delay(1000).fadeOut();
			return;
		}	
		if(!checkMobile(phone)){
			$("#addBox3").show().delay(1000).fadeOut();
			return;
		}
	   if($(".txtyzm").val()==""||$(".txtyzm").val()=="验证码"){
			$("#addBox1").show().delay(1000).fadeOut();
			return;
		}
		if($(".txtPassword").val()==""||$(".txtPassword").val()=="密码"){
			$("#addBox2").show().delay(1000).fadeOut();
			return;
		}
		
	
	});
	
		//找回密码页面	   	
	$("#btnzhaohui").click(function(){
		var phone=trim(jQuery(".txtphone").val());
		var yzm=trim(jQuery(".txtyzm").val());
		var pwd=trim(jQuery(".txtPassword").val());
		
		
		if($(".txtphone").val()==""||$(".txtphone").val()=="手机号"){
			$("#addBox").show().delay(1000).fadeOut();
			return;
		}	
		if(!checkMobile(phone)){
			$("#addBox3").show().delay(1000).fadeOut();
			return;
		}
	   if($(".txtyzm").val()==""||$(".txtyzm").val()=="验证码"){
			$("#addBox1").show().delay(1000).fadeOut();
			return;
		}
		if($(".txtPassword").val()==""||$(".txtPassword").val()=="密码"){
			$("#addBox2").show().delay(1000).fadeOut();
			return;
		}
		
	
	});
	
	
		
})