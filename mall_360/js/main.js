

$('.gray_3').click(function(){
	$("body,html").animate({ scrollTop:0 },0);
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

$('.star_good a').mouseenter(function(){
	$(this).css('boxShadow','0px 0px 8px 2px #ddd');
})
$('.star_good a').mouseleave(function(){
	$(this).css('boxShadow','');
})



//倒计时
 var timer=null;
   timer=setInterval(function(){
    	var date = new Date(); 
        var now = date.getTime();     
        //设置截止时间  
        var str="2018/11/11 11:58:50";       
        var endDate = new Date(str); 
        var end = endDate.getTime();         
        //时间差  
        var leftTime = end-now;         
        //定义变量 保存倒计时的时间      
        if (leftTime>=0) {   
        var nHour = parseInt(leftTime/1000/60/60);  
        var  nMinute = parseInt(leftTime/1000/60%60);  
        var nSecond = parseInt(leftTime/1000%60); 
        if(nMinute < 10){
            nMinute = "0" + nMinute;
        }
        if(nSecond < 10){
            nSecond = "0" + nSecond;
        }                        
        } else{
            clearInterval(timer);
            $('#seckill').css('display','none');
        } 
    //将倒计时赋值到div中  
    //  day.innerHTML = nDay+"天";
       $('.hour').html(nHour); 
       $('.minutes').html(nMinute); 
       $('.second').html(nSecond);   
},1000)
//左右箭头   
$('#star').mouseenter(function(){
	$('#star b').css('display','block');
})
$('#star').mouseleave(function(){
	$('#star b').css('display','none');
})

$('#star b').mouseenter(function(){
	$(this).css('color','#f10215');
})
$('#star b').mouseleave(function(){
	$(this).css('color','#fff');
})


function Banner(){}
$.extend(Banner.prototype,{
    // 写法是兼容的;
    init : function(options){
        
//          {
//             item_list : "#wrap li",
//             left_btn : "#left",
//             right_btn : "#right",
//             btn_list : "#btn_list button"    
//          }
        
       // 所有的图片;
       this.item_list = $(options.item_list);
//     console.log(this.item_list);
       // 左按钮 ;
       this.left_btn = $(options.left_btn);
       // 右按钮 ;
       this.right_btn = $(options.right_btn);
       // 按钮列表;
       this.btn_list = $(options.btn_list);
       this.nowIndex = 0;
       // 有多少元素;
       this.item_num = this.item_list.length;
       this.ul = $(".show .star_good");
//     console.log(this.item_num);
       // 获取列表中第一个元素的宽度值;
       this.item_width = this.item_list.width();
        
       this.wrap = $(".good_wrap");
       if(this.left_btn.length == 0 && this.right_btn.length == 0 && this.btn_list.length == 0){
           this.autoPlay();
           return 0;
       }
       this.bindEvent();
    },
    bindEvent : function(){
        // this.left_btn.click(this.prev.bind(this))
        this.left_btn.click($.proxy(this.prev , this));
        this.right_btn.click($.proxy(this.next , this));
        this.btn_list.mouseover($.proxy(this.toIndex , this));

        this.wrap.mouseenter($.proxy(this.stopPlay, this ));
        this.wrap.mouseleave($.proxy(this.autoPlay, this ));
		
    },
    next:function(){
        if( this.nowIndex == this.item_num - 1){
            this.nowIndex = 1;
            this.ul.css({
                left : 0
            })
        }else{
            this.nowIndex ++;
        }
        this.animate();
    },
    prev:function(){
        // console.log(this);
        if( this.nowIndex == 0){
            this.nowIndex = this.item_num - 2;
            this.ul.css({
                left : -(this.item_num -1) * this.item_width
            })
        }else{
            this.nowIndex --;
        }

        this.animate();
    },
    toIndex:function(event){
        // 要获取当前元素的下标么;
        var target = event.target || event.srcElement;
        // console.log(event);
        // console.log($(target).index());
        // index();
        this.nowIndex = $(target).index();
        this.animate();
    },
    animate:function(){
        // console.log(this.nowIndex);
        this.ul.stop().animate({
            left : -this.item_width * this.nowIndex
        })
//      var index = this.nowIndex == this.item_num - 1 ? 0 : this.nowIndex; 
//      this.btn_list.eq(index).addClass("active")
//      .siblings("button").removeClass("active");
    }
})


//楼梯
$list = $("#LoutiNav li:not(.last)");
	
	//所有的楼层
	$divs = $(".floor");
	
	//定义一个变量控制 滚动条代码的执行
	//假设值为true时  滚动条的代码可以执行
//	var flag = true;
	//点击左侧的楼层号  根据下标找到对应的楼层
	$list.click(function(){
//		flag = false;
		//操作当前点击的楼层号的样式  添加样式类
		$(this).find("span")
			   .addClass("active")
			   .end()
			   .siblings()
			   .find("span")
			   .removeClass("active");
		//获取当前操作的楼层号的下标
		var index = $(this).index();
		
		//根据下标查找对应的楼层  并获取给楼层相对于body顶部的距离  obj.offset().top
		var t = $divs.eq(index).offset().top;
		
		//设置页面滚走的距离为 t （当前index对应的楼层相对于body距离）
		$("body,html").animate({ scrollTop:t },500,function(){
			//动画完成后 将flag的值重新设置为true  滚动条代码可以被触发
//			flag = true;
		});
	})
	//点击top  回到顶部
	$(".last").click(function(){
		$("body,html").animate({ scrollTop:0 },500);
	})
	//操作滚动条 根据某个楼层的位置 确定高亮显示的楼层号
	$(window).scroll(function(){
//		if( flag ){
			//获取某个楼层的高度 
			var h = $divs.eq(0).height();
//			console.log(h);
			//获取页面滚走的距离
			var sTop = $("body,html").scrollTop();
//			console.log(sTop);
			if(sTop>='700'){
				$('.gray_3').css('display','block');
				$('#LoutiNav').css('display','block');
			}else{
				$('.gray_3').css('display','none');
				$('#LoutiNav').css('display','none');
			}
			
			//根据filter查找满足某个条件的楼层
			//条件 ： 绝对值(某个楼层的top-页面滚走的距离) < h/2
			
			var $floor = $divs.filter(function(){
				//this
				return Math.abs($(this).offset().top - sTop) < h/2;
			})
			
			//根据返回的楼层 获取该楼层在同辈元素中的位置
			var index = $floor.index();
//			console.log(index);
			if( index != -1 ){
				//根据index 找到要高亮显示的楼层号
				$list.eq(index-3).find("span")
							   .addClass("active")
							   .end()
							   .siblings()
							   .find("span")
							   .removeClass("active");
			}
			
			//当页面滚走的距离小于某个值时   将楼层号的样式清空
			if( sTop < 100 ){
				$list.find("span").removeClass("active");
			}
//		}
	})