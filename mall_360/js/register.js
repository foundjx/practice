//随机码
var code;
function Code(){
	code = "";
	var codeLength=6;//长度
	var codeStr = new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');										
	for(var i = 0;i < codeLength;i ++){
		var codeRondom = Math.floor(Math.random()*62);
		code += codeStr[codeRondom];
	}
	$('.yzm-spa').html(code);
}
Code();
$('.yzm-spa').click(function(){
	Code();
	$('#code').css('border','1px solid #22ac69');
})

//聚焦失焦
$('#re_form form').find('input').focus(function(){
	$(this).css('border','1px solid #22ac69');
})
$('#re_form form').find('input').blur(function(){
	$(this).css('border','1px solid #e6e6e6');
})

//表单验证

var flag1=false;
var flag2=false;
var flag3=false;
var flag4=false;
var num,ys;
function tel(){
	$('#tel').blur(function(){
	var re1=/^1[3|5|7|8|]\d{9}$/;
	if(!re1.test($(this).val()) && $(this).val()!=''){
		$(this).next().css('display','block');
		$(this).next().html('手机号格式有误');
	}else{
		flag1=true;
		num=$(this).val();
	}
	})
	$('#tel').focus(function(){
			$(this).next().css('display','none');
	})
}


function pwd(){
	$('#pwd').blur(function(){
	var re2=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[])+$)([^(0-9a-zA-Z)]|[]|[a-z]|[A-Z]|[0-9]){8,}$/;
	if(!re2.test($(this).val()) && $(this).val()!=''){
		$(this).next().css('display','block');
		$(this).next().html('至少包含数字/字母/字符两种组合 8-20位');
	}else{
		flag2=true;
		ys=$(this).val();
	}

	})
	$('#pwd').focus(function(){
			$(this).next().css('display','none');
	})
}

pwd();
function chec(){
	$('#code').blur(function(){
	var msg=$('.yzm-spa').html();
	if($(this).val()!=msg && $(this).val()!=''){
		$(this).next().css('display','block');
		$(this).next().html('验证码错误请重新输入');
//		console.log(flag);
	}else{
		flag3=true;
//		console.log(flag);
	}

	})
	$('#code').focus(function(){
			$(this).next().css('display','none');
	})
}


tel();
chec();
$('#agreen').click(function(){
	if($('#agreen').prop('checked')){
			$('.xy').css('display','none');
		}
})


//console.log(flag);

$('.btn').click(function(){
	
		function white(){
				if($('#re_form input').val()==''){
					$('#tel').next().html('请输入手机号');
					$('#tel').next().css('display','block');
				}else if($('#tel').val()!='' && $('#pwd').val()==''){
					$('#pwd').next().html('密码不能为空');
					$('#pwd').next().css('display','block');
				}else if($('#tel').val()!='' && $('#pwd').val()!='' && $('#code').val()==''){
		//			console.log($('#code').val());
					$('#code').next().html('请输入验证码');
					$('#code').next().css('display','block');
				}else if($('#agreen').prop('checked')){
					$('.xy').css('display','none');
					flag4=true;
				}else if(!$('#agreen').prop('checked')){
					$('.xy').css('display','block');
				}
			}
			white();
//		console.log(flag);
		if(flag1 && flag2 && flag3 && flag4){
			var date=new Date();
			date.setDate(date.getDate()+7);
//"key"+'='  +   '{"tel":" '+$('#tel').val()+'  ","pw":"   '+$('#pwd').val()+'      "}'   +';expires='+date+';path=/';
			document.cookie="tel"+num+'='+'{"tel":"'+num+'","pw":"'+ys+'"}'+';expires='+date+';path=/';
			location.href='login.html';
			
		}else{
			console.log('err');
		}
		

})


