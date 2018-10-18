
$('.btn_1').click(function(){
	$('#login_tel').css('display','block');
	$('#login_pwd').css('display','block');
	$(this).css({'color':'#36b447','textDecoration':'underline'});
	$('.btn_2').css({'color':'#333','textDecoration':'none'})
	$('.huan').css('display','none');
//	$('#login_pwd').css('display','none');
	
})

$('.btn_2').click(function(){
	$('#login_tel').css('display','none');
	$('#login_pwd').css('display','none');
	$(this).css({'color':'#36b447','textDecoration':'underline'});
	$('.btn_1').css({'color':'#333','textDecoration':'none'})
	$('.huan').css('display','block');
//	$('#login_pwd').css('display','none');
	
})

$('.form_ form').find('input').not('.act_login').focus(function(){
	$(this).css('border','1px solid #36b447');
})
$('.form_ form').find('input').not('.act_login').blur(function(){
	$(this).css('border','1px solid #e6e6e6');
})



$('.act_login').click(function(){
	var arr=document.cookie.split(';');
//	console.log(arr);
	for(var i=0,len=arr.length;i<len;i++){
		var list=arr[i].split('=');
//		console.log(list);
		var obj=eval('('+list[1]+')');
		console.log(obj.tel)
		if(obj.tel==$('#login_tel').val()){
			if(obj.pw==$('#login_pwd').val()){
				location.href='index.html';
			}else{
				console.log('err');
				alert('密码错误请重新输入！');
			}
		}
	}
})
