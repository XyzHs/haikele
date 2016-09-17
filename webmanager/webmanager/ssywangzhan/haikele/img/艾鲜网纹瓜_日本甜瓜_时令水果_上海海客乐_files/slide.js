// JavaScript Document
$(function() {
    $(".j-banner").find("img[load_src]").each(function() {
        $(this).attr("src", $(this).attr("load_src")).removeAttr("load_src")
    }),
   $("#slide_focus").slideShow({
        events: "mouseover",
        type: "x",
        speed: 500,
        time: 3e3,
        auto: !0,
        btn: !0,
        minus: !1
    }),
	$("#slide_focus").slideShow({
        events: "click",
        type: "x",
        speed: 500,
        time: 3e3,
        auto: !0,
        plus: !0,
        minus: !1
    }),
    $("#slide").slideShow({
        events: "mouseover",
        type: "y",
        speed: 400,
        time: 2e3,
        auto: !0,
        btn: !0,
        plus: !1,
        minus: !1
    }),
    $("div[class^='slide_x_']").each(function() {
        $(this).slideShow({
            events: "mouseover",
            type: "x",
            speed: 400,
            time: 5e3,
            auto: !0,
            btn: !0,
            plus: !1,
            minus: !1
        })
    }),
    $("div[class^='slide_xF_']").each(function() {
        $(this).slideShow({
            events: "mouseover",
            type: "fade",
            speed: 400,
            time: 5e3,
            auto: !0,
            btn: !0,
            plus: !1,
            minus: !1
        })
    })
    
    
}); (function(n) {
    n.fn.slideShow = function(t) {
        var r, i, f, u;
        if (!this.length) return;
        t = n.extend({
            events: "click",
            type: "x",
            start: 0,
            speed: 800,
            time: 5e3,
            auto: !0,
            btn: !0,
            plus: !1,
            minus: !1
        },
        t),
        r = this,
        i = {},
        i.box = r.find(".box"),
        i.list = i.box.find(".list"),
        i.arr = i.list.find("li"),
        i.sum = i.arr.length,
        i.btn = r.find(".btn"),
        i.btn_arr = i.btn.find("li"),
        i.plus = r.find(".plus"),
        i.minus = r.find(".minus"),
        i.w = i.box.width(),
        i.h = i.box.height(),
        i.s = 0;
        if (i.sum <= 1) return;
        i.on = function() {
            if (!t.auto) return;
            i.off(),
            i.run = setTimeout(function() {
                i.goto()
            },
            t.time)
        },
        i.off = function() {
            typeof i.run != "undefined" && clearTimeout(i.run)
        },
        i.clear = function() {
            i.btn.length && i.btn.remove(),
            i.plus.length && i.plus.remove(),
            i.minus.length && i.minus.remove(),
            i.off()
        },
        i.checkBtn = function(n) {
            i.btn.length && (i.btn_arr.removeClass("selected"), i.btn_arr.eq(n).addClass("selected"))
        },
        i.goto = function(r) {
            i.off();
            if (r === undefined) var r = i.s + 1;
            else if (r == i.s) {
                i.checkBtn(r),
                i.on();
                return
            }
            r > i.sum && (r = 0),
            r < 0 && (r = i.sum - 1),
            i.checkBtn(r);
            switch (t.type) {
            case "x":
                i.box.stop(!0, !1).animate({
                    scrollLeft: i.w * r
                },
                t.speed),
                r < i.sum || (i.arr.eq(0).css({
                    left: i.w * r
                }), i.checkBtn(0), r = 0, i.box.queue(function() {
                    i.box.scrollLeft(0),
                    n(this).dequeue()
                })),
                i.box.queue(function() {
                    i.arr.eq(0).css({
                        left: ""
                    }),
                    n(this).dequeue()
                });
                break;
            case "y":
                i.box.stop(!0, !1).animate({
                    scrollTop: i.h * r
                },
                t.speed),
                r == i.sum && (i.arr.eq(0).css({
                    top: i.h * r
                }), i.checkBtn(0), r = 0, i.box.queue(function() {
                    i.box.scrollTop(0),
                    n(this).dequeue()
                })),
                i.box.queue(function() {
                    i.arr.eq(0).css({
                        top: ""
                    }),
                    n(this).dequeue()
                });
                break;
            case "fade":
                r == i.sum && (i.checkBtn(0), r = 0),
                i.arr.css({
                    display: "none",
                    position: "relative",
                    zIndex: ""
                }),
                i.arr.eq(i.s).css({
                    display: "",
                    position: "absolute",
                    zIndex: 1
                }),
                i.arr.eq(r).css({
                    display: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 2
                }).fadeIn(t.speed);
                break;
            case "toggle":
                r == i.sum && (i.checkBtn(0), r = 0),
                i.arr.hide(),
                i.arr.eq(r).show()
            }
            i.s = r,
            i.box.queue(function() {
                i.on(),
                n(this).dequeue()
            })
        };
        if (t.btn && !i.btn.length) {
            for (f = "", u = 1; u <= i.sum; u++) f += "<li class='b_" + u + "'>" + u + "</li>";
            i.btn = n("<ul></ul>", {
                "class": "btn",
                html: f
            }).appendTo(r),
            i.btn_arr = i.btn.find("li")
        }
        t.plus && !i.plus.length && (i.plus = n("<div></div>", {
            "class": "plus"
        }).appendTo(r)),
        t.minus && !i.minus.length && (i.minus = n("<div></div>", {
            "class": "minus"
        }).appendTo(r)),
        i.box.hover(function() {
            i.off()
        },
        function() {
            i.on()
        }),
        t.btn && i.btn_arr.bind(t.events,
        function() {
            i.goto(i.btn_arr.index(n(this)))
        }),
        t.plus && i.plus.bind(t.events,
        function() {
            i.goto()
        }),
        t.minus && i.minus.bind(t.events,
        function() {
            i.goto(i.s - 1)
        }),
        i.goto(t.start)
    }
})(jQuery); 

// 选项卡
$(document).ready(function() {
	jQuery.jqtab = function(tabtit,tab_conbox,shijian) {
		$(tab_conbox).find("li").hide();
		$(tabtit).find("li:first").addClass("thistab").show(); 
		$(tab_conbox).find("li:first").show();
	
		$(tabtit).find("li").bind(shijian,function(){
		  $(this).addClass("thistab").siblings("li").removeClass("thistab"); 
			var activeindex = $(tabtit).find("li").index(this);
			$(tab_conbox).children().eq(activeindex).show().siblings().hide();
			return false;
		});
	
	};
	/*调用方法如下：*/
	$.jqtab("#tabs","#tab_conbox","click");

	$.jqtab("#tabs2","#tab_conbox2","mouseenter");
	$.jqtab("#tabs2","#tab_conbox3","mouseenter");
	
});

//加入收藏
function addBookmark2(){
	var title="海客乐有机食品,有机蔬菜,蔬菜专卖店,有机食品超市";
	var url="http://www.haikele.com";
	if(window.sidebar){
		window.sidebar.addPanel(title,url,'');
	}else{
		try{
			window.external.AddFavorite(url,title);
		}catch(e){
			alert("您的浏览器不支持该功能,请使用Ctrl+D收藏本页");
		}
	}
}

//右侧悬浮
$(document).ready(function(){
   $('.floatDiv div').mouseover(function(){
      $(this).find('.float3Span').show()								  
   })
   $('.floatDiv div').mouseout(function(){
      $(this).find('.float3Span').hide()								  
   })
   $('.float2').mouseover(function(){
      $(this).find('.float2Span').show()								  
   })
   $('.float2').mouseout(function(){
      $(this).find('.float2Span').hide()								  
   })
   var ww = $(window).width()
   if(ww < 1200){
      $('.floatDiv').removeClass('float').addClass('float1000');	   
	   }else{
		    $('.floatDiv').removeClass('float1000').addClass('float');     
		   }
});
//悬浮返回顶部
$(document).ready(function(){
	var $floatTopTxt = "", $floatTopBox = $('.float4')
		.text($floatTopTxt).attr("title", $floatTopTxt).click(function() {
			$("html, body").animate({ scrollTop: 0 }, 320);
	}), $floatTopBody = function() {
		var st = $(document).scrollTop(), wh = $(window).height();
		(st > 0)? $('.float4').show(): $('.float4').hide();	
		//IE6下的定位
		if (!window.XMLHttpRequest) {
			$floatTopBox.css("top", st + wh - 166);	
		}
	};
	$(window).bind("scroll", $floatTopBody);
	$(function() { $floatTopBody(); });
});

//我的海客乐
$(document).ready(function(){
   $('.topBarSpan').mouseover(function(){
      $(this).removeClass('topBarSpanBg1').addClass('topBarSpanBg2');	
	  $(this).find('ul').show();
   })
   $('.topBarSpan').mouseout(function(){
      $(this).removeClass('topBarSpanBg2').addClass('topBarSpanBg1');	
	  $(this).find('ul').hide();
   })
});

//导航置顶
$(document).ready(function () {
        var headHeight = $(".header").height() + 156;
        var nav = $(".j-menu");
        $(window).scroll(function () {
            if ($(this).scrollTop() > headHeight) {
                nav.addClass("navFix");
            }
            else {
                nav.removeClass("navFix");
            }
        })
    });

//分类菜单导航
$(function() { 
    $(".cf-list .main").hover(function() {
        var n = 0;
        $(this).find(".list-box").addClass("over-btn").siblings("div").show()
    },
    function() {
        $(this).find(".list-box").removeClass("over-btn").siblings("div").hide()
    }),
    $.browser.msie && $.browser.version === "6.0" && ($(".list-box").mouseover(function() {
        var t = $(this).next(".main-hide").height();
        $(this).parent().find(".iframe-div").show(),
        $(this).parent().find(".iframe-div iframe").height(t)
    }).mouseleave(function() {
        $(this).parent().find(".iframe-div").hide()
    }), $(".main-hide").mouseover(function() {
        $(this).next(".iframe-div").show()
    }).mouseleave(function() {
        $(this).next(".iframe-div").hide()
    }))
});


//加入购物车
$(function () {

        $('.addToCartNew').click(function () {
            easyDialog.open({
                container: {
                    header: ' ',
                    content: '您选购的商品已成功添加到购物车！'
                },
                overlay: false,
                autoClose: 5000
            });
            $('.easyDialog_wrapper').addClass('pEasyDialog_wrapper');
            $('.pEasyDialog_wrapper').parent('#easyDialogBox').css('margin-left', '-250px');
            $('.pEasyDialog_wrapper .easyDialog_text').prepend("<div style='float:left;margin-right:15px;'><img src='http://static.haikele.com/Images/iconset.gif' /></div>");
            $('.pEasyDialog_wrapper .easyDialog_text').append("<div class='clearfix pEasyDialog_text'><a href='/SOProcess/shoppingcart.aspx' class='pEasyDialog_wrapperBtn'>去购物车结算</a><span><a href='index.aspx' class='closeBtn'>回到首页继续购物</a></span></div>");
            $('.pEasyDialog_wrapper .close_btn').append("<span>关闭窗口</span>");
        });
    });


//每日签到
$(function(){
   $('.qdDiv').mouseover(function(){
	   $('.qdDivFloat').show();							  
   });
   $('.qdDiv').mouseout(function(){
	   $('.qdDivFloat').hide();							  
   });
});

//个人中心
$(function(){
   $('.uInfoLeftDt').click(function(){
	   $(this).next('.uInfoLeftDd').slideToggle();		
	   $(this).toggleClass('uInfoLeftDtSelect');	
   });
});

//新头部微信微博
$(function(){
   $('.topBarMain-wb').mouseover(function(){
	   $('.topBarMain-wbPic').show();							  
   });
   $('.topBarMain-wb').mouseout(function(){
	   $('.topBarMain-wbPic').hide();							  
   });
   $('.topBarMain-wx').mouseover(function(){
	   $('.topBarMain-wxPic').show();							  
   });
   $('.topBarMain-wx').mouseout(function(){
	   $('.topBarMain-wxPic').hide();							  
   });
});

//导航下拉
$(function(){
   $('.menuA_btn').mouseover(function(){
	   $('.menuA_div').show();							  
   });
   $('.menuA_btn').mouseout(function(){
	   $('.menuA_div').hide();							  
   });
});

//列表页赠品
$(function(){
   $('.plistZp').mouseenter(function(){
	   $(this).find('.plistZp_div').show();							  
   });
   $('.plistZp').mouseleave(function(){
	   $(this).find('.plistZp_div').hide();							  
   });
});

//优惠中心
$(document).ready(function() {
	jQuery.jqtabNew = function(tabtit,tab_conbox,shijian) {
		$(tab_conbox).find(".discountTab_list").hide();
		$(tabtit).find("li:first").addClass("discountTab_titleSelect").show(); 
		$(tab_conbox).find(".discountTab_list:first").show();
	
		$(tabtit).find("li").bind(shijian,function(){
		  $(this).addClass("discountTab_titleSelect").siblings("li").removeClass("discountTab_titleSelect"); 
			var activeindex = $(tabtit).find("li").index(this);
			$(tab_conbox).children().eq(activeindex).show().siblings().hide();
			return false;
		});
	
	};
	/*调用方法如下：*/
	$.jqtabNew(".discountTab_title",".discountTab_main","click");
	
});

//列表页左侧置顶
//$(document).ready(function () {
      //  var headHeight = 158;
       // var nav = $(".plFix");
       // $(window).scroll(function () {
           // if ($(this).scrollTop() > headHeight) {
            //    nav.addClass("plFixed");
           // }
           // else {
            //    nav.removeClass("plFixed");
           // }
       // })
  //  });

//列表页边框
$(function(){
   $('.plist_list').mouseover(function(){
	   $(this).css({"border-color":"#DDD","box-shadow":"0 1px 3px 3px #EEE"});							  
   });
   $('.plist_list').mouseout(function(){
	   $(this).css({"border-color":"#FFF","box-shadow":"0 0 0 0 #FFF"});							  
   });
   $('.newpdtPlist_list').mouseover(function(){
	   $(this).css({"border-color":"#DDD","box-shadow":"0 1px 3px 3px #EEE"});							  
   });
   $('.newpdtPlist_list').mouseout(function(){
	   $(this).css({"border-color":"#FFF","box-shadow":"0 0 0 0 #FFF"});							  
   });
});

//商品详情商品评论百分比
$(function(){
   var pMain_width1 = $(".pMain_comment_percent_good").html();
   $(".pMain_comment_good").css("width",pMain_width1);
   var pMain_width2 = $(".pMain_comment_percent_normal").html();
   $(".pMain_comment_normal").css("width",pMain_width2);
   var pMain_width3 = $(".pMain_comment_percent_bad").html();
   $(".pMain_comment_bad").css("width",pMain_width3);
})
$(document).ready(function() {
	jQuery.jqtab = function(tabtit,tab_conbox,shijian) {
		$(tab_conbox).find(".tab_con").hide();
		$(tabtit).find("li:first").addClass("thistab").show(); 
		$(tab_conbox).find(".pMain_comment_main1:first").show();
	
		$(tabtit).find("li").bind(shijian,function(){
		  $(this).addClass("thistab").siblings("li").removeClass("thistab"); 
			var activeindex = $(tabtit).find("li").index(this);
			$(tab_conbox).children().eq(activeindex).show().siblings().hide();
			return false;
		});
	
	};
	$.jqtab(".pMain_comment_title",".pMain_comment_main","click");
	
});

//head微信
$(function(){
   $('.head-gif').hover(function(){
	   $(this).find("div").toggle();							  
   });
});