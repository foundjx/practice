$('.shop').mouseenter(function(){
		$('#down_pic').css('display','block');
	})
	$('.shop').mouseleave(function(){
		$('#down_pic').css('display','none');
	})
	$('.movephone').mouseenter(function(){
		$('.move_green').css('color','#23ac38');
	})
	$('.movephone').mouseleave(function(){
		$('.move_green').css('color','#999');
	})
	$('.move_green').mouseenter(function(){
		$('.move_green').css('color','#23ac38');
	})
	$('.move_green').mouseleave(function(){
		$('.move_green').css('color','#999');
	})
	
	$('.mall_pic').mouseenter(function(){
		$('#down_pic').css('display','block');
	})
	$('.mall_pic').mouseleave(function(){
		$('#down_pic').css('display','none');
	})
	
	$('#search').focus(function(){
		$(this).val('');
	})
	$('#search').blur(function(){
		$(this).val('N7 pro新品');
		
	})
	$('#shopping').mouseenter(function(){
		$('#car_msg').css({'display':'block'});
		$('.shop_car').css({'background':'#fff','borderBottom':'1px solid #fff','color':'#2cac36','position':'relative'});
		time();
		$('#down_pic').css('zIndex','20001');
		$('.shop_car span').css('color','#2CAC36');
	})
	$('#shopping').mouseleave(function(){
		$('#car_msg').css('display','none');
		$('.shop_car').css({'background':'#f9f9f9','borderBottom':'1px solid #ddd','color':'#363636'});
	})
	
function time(){
	var timer=setTimeout(function(){
			$('.wait').css('display','none');
			$('.show').css('display','block');
		},500)
}


//$('.nav li').not('.talk').mouseenter(function(){
////	$('.list_msg').css('display','block');
////	$('.list_msg').fadeOut(function(){
////		$(this).fadeIn(500);
////	})
//	$('.list_msg').fadeToggle(500);
//	$(this).css('color','#23862A');
//})
//$('.nav li').not('.talk').mouseleave(function(){
//	$('.list_msg').css('display','none');
//	$(this).css('color','#000');
//})

$.get('nav1.json',function(arr){
	var  brr=[];
	for(var i=0;i<arr.length;i++){
		var str=`
			<a href="#" class="p1">
				<img src='${arr[i].src}'/>
			</a>
			<a href="#"> 
				${arr[i].name}
				<p>${arr[i].price}</p>
			</a>
		`;
		brr.push(str);
	}
//	console.log(brr[0]);
	$('.phone_msg1').append(brr[0]);
	$('.phone_msg2').append(brr[1]);
	$('.phone_msg3').append(brr[2]);
	$('.phone_msg4').append(brr[3]);
	$('.phone_msg5').append(brr[4]);
	$('.phone_msg6').append(brr[5]);
})
$('.nav li').eq(0).mouseenter(function(){
	$(this).find('.list_msg').fadeToggle(500);
	$(this).css('color','#23862A');
})
$('.nav li').eq(0).mouseleave(function(){
	$(this).find('.list_msg').css('display','none');
	$(this).css('color','#000');
})

$.get('nav2.json',function(arr){
	var  brr=[];
	for(var i=0;i<arr.length;i++){
		var str=`
			<a href="#" class="p1">
				<img src='${arr[i].src}'/>
			</a>
			<a href="#"> 
				${arr[i].name}
				<p>${arr[i].price}</p>
			</a>
		`;
		brr.push(str);
	}
//	console.log(brr[0]);
	$('.movie_msg1').append(brr[0]);
	$('.movie_msg2').append(brr[1]);
	$('.movie_msg3').append(brr[2]);
	$('.movie_msg4').append(brr[3]);
	$('.movie_msg5').append(brr[4]);
	$('.movie_msg6').append(brr[5]);
})
$('.nav li').eq(1).mouseenter(function(){
	$(this).find('.list_msg1').fadeToggle(500);
	$(this).css('color','#23862A');
	$(this).find('div').eq(0).removeClass('list_msg');
})
$('.nav li').eq(1).mouseleave(function(){
	$(this).find('.list_msg1').css('display','none');
	$(this).css('color','#000');
})


$.get('nav3.json',function(arr){
	var  brr=[];
	for(var i=0;i<arr.length;i++){
		var str=`
			<a href="#" class="p1">
				<img src='${arr[i].src}'/>
			</a>
			<a href="#"> 
				${arr[i].name}
				<p>${arr[i].price}</p>
			</a>
		`;
		brr.push(str);
	}
//	console.log(brr[0]);
	$('.w_msg1').append(brr[0]);
	$('.w_msg2').append(brr[1]);
	$('.w_msg3').append(brr[2]);
	$('.w_msg4').append(brr[3]);
	$('.w_msg5').append(brr[4]);
	$('.w_msg6').append(brr[5]);
})
$('.nav li').eq(2).mouseenter(function(){
	$(this).find('.list_msg2').fadeToggle(500);
	$(this).css('color','#23862A');
	$(this).find('div').eq(0).removeClass('list_msg');
})
$('.nav li').eq(2).mouseleave(function(){
	$(this).find('.list_msg2').css('display','none');
	$(this).css('color','#000');
})


$.get('nav4.json',function(arr){
	var  brr=[];
	for(var i=0;i<arr.length;i++){
		var str=`
			<a href="#" class="p1">
				<img src='${arr[i].src}'/>
			</a>
			<a href="#"> 
				${arr[i].name}
				<p>${arr[i].price}</p>
			</a>
		`;
		brr.push(str);
	}
//	console.log(brr[0]);
	$('.s_msg1').append(brr[0]);
	$('.s_msg2').append(brr[1]);
	$('.s_msg3').append(brr[2]);
	$('.s_msg4').append(brr[3]);
	$('.s_msg5').append(brr[4]);
	$('.s_msg6').append(brr[5]);
})
$('.nav li').eq(3).mouseenter(function(){
	$(this).find('.list_msg3').fadeToggle(500);
	$(this).css('color','#23862A');
	$(this).find('div').eq(0).removeClass('list_msg');
})
$('.nav li').eq(3).mouseleave(function(){
	$(this).find('.list_msg3').css('display','none');
	$(this).css('color','#000');
})

$.get('nav5.json',function(arr){
	var  brr=[];
	for(var i=0;i<arr.length;i++){
		var str=`
			<a href="#" class="p1">
				<img src='${arr[i].src}'/>
			</a>
			<a href="#"> 
				${arr[i].name}
				<p>${arr[i].price}</p>
			</a>
		`;
		brr.push(str);
	}
//	console.log(brr[0]);
	$('.l_msg1').append(brr[0]);
	$('.l_msg2').append(brr[1]);
	$('.l_msg3').append(brr[2]);
	$('.l_msg4').append(brr[3]);
	$('.l_msg5').append(brr[4]);
	$('.l_msg6').append(brr[5]);
})
$('.nav li').eq(4).mouseenter(function(){
	$(this).find('.list_msg4').fadeToggle(500);
	$(this).css('color','#23862A');
	$(this).find('div').eq(0).removeClass('list_msg');
})
$('.nav li').eq(4).mouseleave(function(){
	$(this).find('.list_msg4').css('display','none');
	$(this).css('color','#000');
})


$.get('nav6.json',function(arr){
	var  brr=[];
	for(var i=0;i<arr.length;i++){
		var str=`
			<a href="#" class="p1">
				<img src='${arr[i].src}' style='width:114px'/>
			</a>
			<a href="#"> 
				&ensp;&ensp;&ensp;&ensp;${arr[i].name}
				<p>${arr[i].price}</p>
			</a>
		`;
		brr.push(str);
	}
//	console.log(brr[0]);
	$('.r_msg1').append(brr[0]);
	$('.r_msg2').append(brr[1]);
})
$('.nav li').eq(6).mouseenter(function(){
	$(this).find('.list_msg5').fadeToggle(500);
	$(this).css('color','#23862A');
	$(this).find('div').eq(0).removeClass('list_msg');
})
$('.nav li').eq(6).mouseleave(function(){
	$(this).find('.list_msg5').css('display','none');
	$(this).css('color','#000');
})

