
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