$(function(){
	$(".layer").hide();
	
	$(".tuichu").click(function(){
		$(".layer").show();
	});
	$(".cancelBtn").click(function(){
		$(".layer").hide();
	});
	$(".okBtn").click(function(){
		window.open("index.html");
	});
	$(".loginBtn").click(function(){
		window.open("login.html");
	});
	$(".zhuceBtn").click(function(){
		window.open("zhuce.html");
	});
	var count=1;
	    		$("#password").click(function(){
	    			count++;
	    			if(count%2==0){
	    			    $(this).css({"background":"url(img/u_s2.png)","background-repeat":"no-repeat","background-size":"cover"});
	    			    $("#password1").hide().siblings().show();
	    			    var text_value=$("#password1").val();
	    			    $("#password2").attr("value",text_value);
	    			}else{
	    				$(this).css({"background":"url(img/u_s1.png)","background-repeat":"no-repeat","background-size":"cover"});
	    			    $("#password1").show().siblings("input").hide();
	    			    var text_value=$("#password2").val();
	    			    $("#password1").attr("value",text_value);
	    			}
	    		});
	    		$("#ok").click(function(){
	    			count++;
	    			if(count%2==0){
	    			    $(this).css({"background":"url(img/u_s2.png)","background-repeat":"no-repeat","background-size":"cover"});
	    			    $("#ok1").hide().siblings().show();
	    			    var text_value=$("#ok1").val();
	    			    $("#ok2").attr("value",text_value);
	    			}else{
	    				$(this).css({"background":"url(img/u_s1.png)","background-repeat":"no-repeat","background-size":"cover"});
	    			    $("#ok1").show().siblings("input").hide();
	    			    var text_value=$("#ok2").val();
	    			    $("#ok1").attr("value",text_value);
	    			}
	    		});
	    		//输入值时显示叉的方法
	    		$(".elseInput1").blur(function(){
	    			if($(".elseInput1").val()!=""){
	    				$(".elseSpan1").show();
	    			}else{
	    				$(".elseSpan1").hide();
	    			}
	    		});
               $(".elseSpan1").click(function(){
               	    $(".elseInput1").val("");
               	    $(".elseSpan1").hide();
               });
               $(".elseInput1").keydown(function(){
               		if($(".elseInput1").val()!=""){
	    				$(".elseSpan1").show();
	    			}else{
	    				$(".elseSpan1").hide();
	    			}
               });
               $(".elseInput2").blur(function(){
	    			if($(".elseInput2").val()!=""){
	    				$(".elseSpan2").show();
	    			}else{
	    				$(".elseSpan2").hide();
	    			}
	    		});
               $(".elseSpan2").click(function(){
               	    $(".elseInput2").val("");
               	    $(".elseSpan2").hide();
               });
               $(".elseInput2").keydown(function(){
               		if($(".elseInput2").val()!=""){
	    				$(".elseSpan2").show();
	    			}else{
	    				$(".elseSpan2").hide();
	    			}
               });
                $(".elseInput3").blur(function(){
	    			if($(".elseInput3").val()!=""){
	    				$(".elseSpan3").show();
	    			}else{
	    				$(".elseSpan3").hide();
	    			}
	    		});
               $(".elseSpan3").click(function(){
               	    $(".elseInput3").val("");
               	    $(".elseSpan3").hide();
               });
               $(".elseInput3").keydown(function(){
               		if($(".elseInput3").val()!=""){
	    				$(".elseSpan3").show();
	    			}else{
	    				$(".elseSpan3").hide();
	    			}
               });
                $(".elseInput4").blur(function(){
	    			if($(".elseInput4").val()!=""){
	    				$(".elseSpan4").show();
	    			}else{
	    				$(".elseSpan4").hide();
	    			}
	    		});
               $(".elseSpan4").click(function(){
               	    $(".elseInput4").val("");
               	    $(".elseSpan4").hide();
               });
               $(".elseInput4").keydown(function(){
               		if($(".elseInput4").val()!=""){
	    				$(".elseSpan4").show();
	    			}else{
	    				$(".elseSpan4").hide();
	    			}
               });
});
