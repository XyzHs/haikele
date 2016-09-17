// JavaScript Document

//banner
$(function () {
        $('#carousel').carouFredSel({
            width: '100%',
            items: {
                visible:1,
                start:0
            },
            scroll: {
                items: 1,
                duration: 800,
                timeoutDuration: 6000,
                pauseOnHover:1
            },
            prev: '#prev',
            next: '#next',
            pagination: {
                container: '#pager',
                deviation:0
            }
        });
    });

//导航置顶
$(document).ready(function () {
        var headHeight = $(".header").height() + 156;
        var nav = $(".j-menu");
        $(window).scroll(function () {
            if ($(this).scrollTop() > headHeight) {
                nav.addClass("navFix");
                $('.cf-list').removeAttr("style");
            }
            else {
                nav.removeClass("navFix");
                $('.cf-list').css("display", "block");
            }
        });
    });

//全部商品显示
(function ($) {
        $.fn.hoverForIE6 = function (option) {
            var s = $.extend({ current: "hover", delay: 10 }, option || {});
            $.each(this, function () {
                var timer1 = null, timer2 = null, flag = false;
                $(this).bind("mouseover", function () {
                    if (flag) {
                        clearTimeout(timer2);
                    } else {
                        var _this = $(this);
                        timer1 = setTimeout(function () {
                            _this.addClass(s.current);
                            flag = true;
                        }, s.delay);
                    }
                }).bind("mouseout", function () {
                    if (flag) {
                        var _this = $(this); timer2 = setTimeout(function () {
                            _this.removeClass(s.current);
                            flag = false;
                        }, s.delay);
                    } else {
                        clearTimeout(timer1);
                    }
                });
            });
        }
    })(jQuery);

// 排行榜
    $(document).ready(function(){
		$(".indexFloor1 .indexFloorHotD div:first").css('display','block');
		$(".indexFloor2 .indexFloorHotD div:first").css('display','block');
		$(".indexFloor3 .indexFloorHotD div:first").css('display','block');
		$(".indexFloor4 .indexFloorHotD div:first").css('display','block');
		$(".indexFloor5 .indexFloorHotD div:first").css('display','block');
        $(".indexFloorHotD").mouseover(function(){
            $(this).addClass("highlight").children("div").show().end().siblings().removeClass("highlight").children("div").hide();//鼠标移动过去效果
        });
    });

//首页加入购物车	
$(document).ready(function(){
   $(".tab_con div").mouseenter(function(){

   $(this).find('.indexAdcart').slideDown(100);
   });
   $(".tab_con div").mouseleave(function(){

   $(this).find('.indexAdcart').slideUp(100);
   });
});
$(document).ready(function(){
   $(".indexPlist li").mouseenter(function(){

   $(this).find('.indexAdcart').slideDown(100);
   });
   $(".indexPlist li").mouseleave(function(){

   $(this).find('.indexAdcart').slideUp(100);
   });
});

//首页底部合作伙伴
$(document).ready(function(){
   $('.indexPp img').mouseover(function(){
      $(this).css('border-color','black')   
   });
   $('.indexPp img').mouseout(function(){
      $(this).css('border-color','#DDD')   
   });
});

// 鼠标经过高光
$(function(){
	//鼠标滑入某li中的某div里，调整其同辈div元素的透明度，由于li的背景为黑色，所以会有变暗的效果
	$(".indexNewPic div").hover(function(){
		$(this).siblings().css("opacity",0.6);
	},function() {
		$(".indexNewPic div").css("opacity",1);
	});
});

//首页公告
$(document).ready(function(){
   $('.indexNews').find("li:first a").css('color','#FF0000')   
});