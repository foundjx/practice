$('.collect span').click(function(){
	$(this).html('♥');
})

//$('.s_1').mouseenter(function(){
//	$(this).css('border','1px solid #ddd');
//	$('.big_pic li').css('display','none');
//	$('.b_pic1').css('display','block');
//	$(this).siblings().css('border','1px solid #fff');
//})
//$('.s_1').mouseleave(function(){
//	$(this).css('border','1px solid #fff');
//})

//
//$('.s_2').mouseenter(function(){
//	$(this).css('border','1px solid #ddd');
//	$('.big_pic li').css('display','none');
//	$('.b_pic2').css('display','block');
//	$(this).siblings().css('border','1px solid #fff');
//})
//$('.s_2').mouseleave(function(){
//	$(this).css('border','1px solid #fff');
//})


//$('.s_3').mouseenter(function(){
//	$(this).css('border','1px solid #ddd');
//	$('.big_pic li').css('display','none');
//	$('.b_pic3').css('display','block');
//	$(this).siblings().css('border','1px solid #fff');
//})
//$('.s_3').mouseleave(function(){
//	$(this).css('border','1px solid #fff');
//})

//$('.s_4').mouseenter(function(){
//	$(this).css('border','1px solid #ddd');
//	$('.big_pic li').css('display','none');
//	$('.b_pic4').css('display','block');
//	$(this).siblings().css('border','1px solid #fff');
//})
//$('.s_4').mouseleave(function(){
//	$(this).css('border','1px solid #fff');
//})


//$('.s_5').mouseenter(function(){
//	$(this).css('border','1px solid #ddd');
//	$('.big_pic li').css('display','none');
//	$('.b_pic5').css('display','block');
//	$(this).siblings().css('border','1px solid #fff');
//})
//$('.s_5').mouseleave(function(){
//	$(this).css('border','1px solid #fff');
//})

$('.detail_smallpic li').mouseenter(function(){
	var index=$(this).index();
//	console.log(index);
	$(this).css('border','1px solid #ddd');
	$(this).siblings().css('border','1px solid #fff');
	$('.big_pic li').eq(index).css('display','block');
	$('.big_pic li').eq(index).siblings().css('display','none');
	$('.pig_pic li').eq(index).css('display','block');
	$('.pig_pic li').eq(index).siblings().css('display','none');
	//console.log($('.pig_pic li').eq(index).offset().left,$('.pig_pic li').eq(index).offset().top);
//	console.log($('.big_pic li').eq(index));
//	console.log($('.pig_pic p_pic1').width());
})

//放大镜
$('.detail_bigpic').mouseenter(function(){
	$('.saomiao').css('display','block');
	$('.fd').css('display','block');
	$(this).css('border','1px solid #dddddd');
//	$('.saomiao').mousemove(function(){
//		
//	})
})
$('.detail_bigpic').mouseleave(function(){
	$('.saomiao').css('display','none');
	$('.fd').css('display','none');
	$(this).css('border','1px solid #fff');
})

$('.mark').mousemove(function(evt){
	var e=evt || window.event;
	var left = e.pageX - $('.detail_bigpic').offset().left - $('.saomiao').outerWidth() / 2;
	var top = e.pageY - $('.detail_bigpic').offset().top - $('.saomiao').outerHeight() / 2;
	//边界
	if(left <= 0){
		left = 0;
	}else if(left >= $('.mark').outerWidth() - $('.saomiao').outerWidth()){
		left = $('.mark').outerWidth() -$('.saomiao').outerWidth();
	}
	if(top <= 0){
		top = 0;
	}else if(top >= $('.mark').outerHeight() - $('.saomiao').outerHeight()){
		top = $('.mark').outerHeight() - $('.saomiao').outerHeight();
	}

	$('.saomiao').css('left',left);
	$('.saomiao').css('top',top);
	//求小图的移动比例
	var pX = left / ($('.mark').outerWidth() - $('.saomiao').outerWidth());
	var pY = top / ($('.mark').outerHeight() - $('.saomiao').outerHeight());
	//设置大图的坐标值
//	oBigImg.style.left = - pX * (oBigImg.offsetWidth - oBigPic.offsetWidth) + 'px';
//	oBigImg.style.top = - pY * (oBigImg.offsetHeight - oBigPic.offsetHeight) + 'px';
	$('.pig_pic li').css('left',-pX * ($('.pig_pic img').outerWidth() - $('.fd').outerWidth()));
	$('.pig_pic li').css('top',-pY * ($('.pig_pic img').outerHeight() - $('.fd').outerHeight()));
//	console.log($('.p_pic2 img').width());
})


//吸顶
$(window).scroll(function(){
	var xTop = $("body,html").scrollTop();
	if(xTop >1000){
		$('.xiding').css({'position':'fixed','top':'0','display':'block'});
		if(xTop >=1200){
			$('.t1').css('color','#008800');
			$('.t1').siblings().css('color','#31373c');
		}
		
		if(xTop >=16000){
			$('.t2').css('color','#008800');
			$('.t2').siblings().css('color','#31373c');
		}
		
		if(xTop >=16800){
			$('.t3').css('color','#008800');
			$('.t3').siblings().css('color','#31373c');
		}
		
		if(xTop >=17500){
			$('.t4').css('color','#008800');
			$('.t4').siblings().css('color','#31373c');
		}
	}else{
		$('.xiding').css({'position':'','display':'none'});
	}
})
$('.t1').click(function(){
	$('body,html').scrollTop('1200');
	$(this).css('color','#008800');
	$(this).siblings().css('color','#31373c');
})
$('.t2').click(function(){
	$('body,html').scrollTop('16000');
	$(this).css('color','#008800');
	$(this).siblings().css('color','#31373c');
})

$('.t3').click(function(){
	$('body,html').scrollTop('16800');
	$(this).css('color','#008800');
	$(this).siblings().css('color','#31373c');
})

$('.t4').click(function(){
	$('body,html').scrollTop('17500');
	$(this).css('color','#008800');
	$(this).siblings().css('color','#31373c');
})


$('.pei b').click(function(){
	$('.pei i').css({'border':'1px solid #ccc','borderBottom':'1px solid #fff','position':'relative'});
	$(this).css({'borderBottom':'4px solid #666','borderTop':'4px solid #fff','marginBottom':'4px'});
	$('.place').css('display','block');
	$('.fd').css('zIndex','99999');
})



$('.place img').click(function(){
	$('.place').css('display','none');
	$('.pei i').css({'border':0});
	$('.pei b').css({'borderBottom':'4px solid #fff','borderTop':'4px solid #666','marginBottom':'0px'});
})

$('.bei').click(function(){
	$(this).css({'border':'1px solid #82c92f','color':'#000','borderBottom':'1px solid #fff'});
	$('.show_place1').css('display','none');
	$('.show_place2').css('display','none');
	$('.show_place3').css({'display':'block'});
	$(this).siblings().css({'border':'1px solid #ccc','borderBottom':'0'});
})
$('.chao').click(function(){
	$(this).css({'border':'1px solid #82c92f','color':'#000','borderBottom':'1px solid #fff'});
	$('.show_place1').css('display','none');
	$('.show_place3').css('display','none');
	$('.show_place2').css({'display':'block'});
	$(this).siblings().css({'border':'1px solid #ccc','borderBottom':'0'});
})

$('.san').click(function(){
	$(this).css({'border':'1px solid #82c92f','color':'#000','borderBottom':'1px solid #fff'});
	$('.show_place2').css('display','none');
	$('.show_place3').css('display','none');
	$('.show_place1').css({'display':'block'});
	$(this).siblings().css({'border':'1px solid #ccc','borderBottom':'0'});
})



