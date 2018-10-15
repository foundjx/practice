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
$('#tel').blur(function(){
	var re1=/^\d{11}$/;
	if(!re1.test($(this).val()) && $(this).val()!=''){
		$(this).next().css('display','block');
		
	}
})
$('#tel').focus(function(){
		$(this).next().css('display','none');
})


$('#pwd').blur(function(){
	var re2=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[])+$)([^(0-9a-zA-Z)]|[]|[a-z]|[A-Z]|[0-9]){9,}$/;
	if(!re2.test($(this).val()) && $(this).val()!=''){
		$(this).next().css('display','block');
		
	}

})
$('#pwd').focus(function(){
		$(this).next().css('display','none');
})


$('#code').blur(function(){
	var msg=$('.yzm-spa').html();
	if($(this).val()!=msg){
		$(this).next().css('display','block');
		
	}

})
$('#code').focus(function(){
		$(this).next().css('display','none');
})


$('.btn').click(function(){
		if($('#re_form input').val()==''){
			$('#tel').next().html('请输入手机号');
			$('#tel').next().css('display','block');
		}else if($('#tel').val()!=''){
			$('#code').next().html('请输入验证码');
			$('#code').next().css('display','block');
		}
		
//		$('.xy').css('display','block');
})


