
$(window).scroll(function(){
	var sTop = $("body,html").scrollTop();
//	console.log(sTop);
	if(sTop>='700'){
		$('.gray_3').css('display','block');
	}else{
		$('.gray_3').css('display','none');
	}
})
$('.gray_3').click(function(){
	$("body,html").animate({ scrollTop:0 },500);
})

$('.shop_list').css('background','rgba(255,255,255,.8)');
//手机配件
$('.shop_list li').find('a').mouseenter(function(){
	$(this).css({'background':'#fff','color':'#008800'});
	$(this).find('p').css('color','#333');
//	$('.shop_msg').css('display','block');
	$('.shop_msg').toggle();
	$('.shop_msg1').css('display','none');
	$('.shop_msg2').css('display','none');
	$('.shop_msg3').css('display','none');
	$('.shop_msg4').css('display','none');
	$('.shop_msg5').css('display','none');
	$('.shop_msg6').css('display','none');
	$('.shop_msg7').css('display','none');
})
$('.shop_list li').find('a').mouseleave(function(){
	$('.shop_msg').css('display','none');
	$(this).css({'background':'rgba(255,255,255,0)','color':'#000'});
})
//数码
$('.shop_list li').find('a').eq(1).mouseenter(function(){
	$(this).css({'background':'#fff','color':'#008800'});
//	$('.shop_msg').css('display','none');
	$('.shop_msg').toggle();
	$('.shop_msg2').css('display','none');
	$('.shop_msg3').css('display','none');
	$('.shop_msg4').css('display','none');
	$('.shop_msg5').css('display','none');
	$('.shop_msg6').css('display','none');
	$('.shop_msg7').css('display','none');
	$('.shop_msg1').css({'display':'block','top':'-51px'});
	$(this).find('div').eq(0).removeClass('shop_msg');
})
$('.shop_list li').find('a').eq(1).mouseleave(function(){
	$('.shop_msg1').css('display','none');
	$(this).css({'background':'rgba(255,255,255,0)','color':'#000'});
})
//电脑周边
$('.shop_list li').find('a').eq(2).mouseenter(function(){
	$(this).css({'background':'#fff','color':'#008800'});
//	$('.shop_msg').css('display','none');
	$('.shop_msg').toggle();
	$('.shop_msg1').css('display','none');
	$('.shop_msg3').css('display','none');
	$('.shop_msg4').css('display','none');
	$('.shop_msg5').css('display','none');
	$('.shop_msg6').css('display','none');
	$('.shop_msg7').css('display','none');
	$('.shop_msg2').css({'display':'block','top':'-102px'});
	$(this).find('div').eq(0).removeClass('shop_msg');
})
$('.shop_list li').find('a').eq(2).mouseleave(function(){
	$('.shop_msg2').css('display','none');
	$(this).css({'background':'rgba(255,255,255,0)','color':'#000'});
})
//移动存储
$('.shop_list li').find('a').eq(3).mouseenter(function(){
	$(this).css({'background':'#fff','color':'#008800'});
//	$('.shop_msg').css('display','none');
	$('.shop_msg').toggle();
	$('.shop_msg1').css('display','none');
	$('.shop_msg2').css('display','none');
	$('.shop_msg4').css('display','none');
	$('.shop_msg5').css('display','none');
	$('.shop_msg6').css('display','none');
	$('.shop_msg7').css('display','none');
	$('.shop_msg3').css({'display':'block','top':'-153px'});
	$(this).find('div').eq(0).removeClass('shop_msg');
})
$('.shop_list li').find('a').eq(3).mouseleave(function(){
	$('.shop_msg3').css('display','none');
	$(this).css({'background':'rgba(255,255,255,0)','color':'#000'});
})


//汽车用品
$('.shop_list li').find('a').eq(4).mouseenter(function(){
	$(this).css({'background':'#fff','color':'#008800'});
//	$('.shop_msg').css('display','none');
	$('.shop_msg').toggle();
	$('.shop_msg1').css('display','none');
	$('.shop_msg2').css('display','none');
	$('.shop_msg3').css('display','none');
	$('.shop_msg5').css('display','none');
	$('.shop_msg6').css('display','none');
	$('.shop_msg7').css('display','none');
	$('.shop_msg4').css({'display':'block','top':'-204px','height':480});
	$(this).find('div').eq(0).removeClass('shop_msg');
})
$('.shop_list li').find('a').eq(4).mouseleave(function(){
	$('.shop_msg4').css('display','none');
	$(this).css({'background':'rgba(255,255,255,0)','color':'#000'});
})


//家用电器
$('.shop_list li').find('a').eq(5).mouseenter(function(){
	$(this).css({'background':'#fff','color':'#008800'});
//	$('.shop_msg').css('display','none');
	$('.shop_msg').toggle();
	$('.shop_msg1').css('display','none');
	$('.shop_msg2').css('display','none');
	$('.shop_msg3').css('display','none');
	$('.shop_msg4').css('display','none');
	$('.shop_msg6').css('display','none');
	$('.shop_msg7').css('display','none');
	$('.shop_msg5').css({'display':'block','top':'-255px'});
	$(this).find('div').eq(0).removeClass('shop_msg');
})
$('.shop_list li').find('a').eq(5).mouseleave(function(){
	$('.shop_msg5').css('display','none');
	$(this).css({'background':'rgba(255,255,255,0)','color':'#000'});
})



//户外运动
$('.shop_list li').find('a').eq(6).mouseenter(function(){
	$(this).css({'background':'#fff','color':'#008800'});
//	$('.shop_msg').css('display','none');
	$('.shop_msg').toggle();
	$('.shop_msg1').css('display','none');
	$('.shop_msg2').css('display','none');
	$('.shop_msg3').css('display','none');
	$('.shop_msg4').css('display','none');
	$('.shop_msg5').css('display','none');
	$('.shop_msg7').css('display','none');
	$('.shop_msg6').css({'display':'block','top':'-306px'});
	$(this).find('div').eq(0).removeClass('shop_msg');
})
$('.shop_list li').find('a').eq(6).mouseleave(function(){
	$('.shop_msg6').css('display','none');
	$(this).css({'background':'rgba(255,255,255,0)','color':'#000'});
})

//教育文具
$('.shop_list li').find('a').eq(7).mouseenter(function(){
	$(this).css({'background':'#fff','color':'#008800'});
//	$('.shop_msg').css('display','none');
	$('.shop_msg').toggle();
	$('.shop_msg1').css('display','none');
	$('.shop_msg2').css('display','none');
	$('.shop_msg3').css('display','none');
	$('.shop_msg4').css('display','none');
	$('.shop_msg5').css('display','none');
	$('.shop_msg6').css('display','none');
	$('.shop_msg7').css({'display':'block','top':'-357px'});
	$(this).find('div').eq(0).removeClass('shop_msg');
})
$('.shop_list li').find('a').eq(7).mouseleave(function(){
	$('.shop_msg7').css('display','none');
	$(this).css({'background':'rgba(255,255,255,0)','color':'#000'});
})


$('.shop_list_').find('p').mouseenter(function(){
	$(this).css('color','#008800');
})
$('.shop_list_').find('p').mouseleave(function(){
	$(this).css('color','#333');
})


$('.phone_right a').mouseenter(function(){
	$(this).css('boxShadow','0px 0px 8px 2px #ddd');
})
$('.phone_right a').mouseleave(function(){
	$(this).css('boxShadow','');
})