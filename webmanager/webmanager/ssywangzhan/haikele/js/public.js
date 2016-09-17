/**
 * Created by Administrator on 2016/9/10.
 */
var timer;
$(document).ready(function(){
    $("#logo31")
        .on("mouseover",function(){
            $("#logo32").css({"display":"block"});
        })
        .on("mouseout",function(){
            clearTimeout(timer);
            timer=setTimeout(function(){
                $("#logo32").css({"display":"none"});
            },300)
        });
    $("#logo321")
        .on("mouseover",function(){
            clearTimeout(timer);
            $("#logo32").css({"display":"block"})
        })
        .on("mouseout",function(){
            $("#logo32").css({"display":"none"});
        });
    $(".head3 em")
        .on("mouseover",function(){
            $(".head3 a").css({"display":"block"});
        })
        .on("mouseout",function(){
            clearTimeout(timer);
            timer=setTimeout(function(){
                $(".head3 a").css({"display":"none"});
            },50)
        });
    $(".head3 a")
        .on("mouseover",function(){
            clearTimeout(timer);
            $(this).css({"display":"block"})
        })
        .on("mouseout",function(){
            $(".head3 a").css({"display":"none"});
        });
    $(".head4 em")
        .on("mouseover",function(){
            $(".head4 a").css({"display":"block"});
        })
        .on("mouseout",function(){
            clearTimeout(timer);
            timer=setTimeout(function(){
                $(".head4 a").css({"display":"none"});
            },50)
        });
    $(".head4 a")
        .on("mouseover",function(){
            clearTimeout(timer);
            $(this).css({"display":"block"})
        })
        .on("mouseout",function(){
            $(".head4 a").css({"display":"none"});
        });
    $(".nav12 li")
        .on("mouseover",function(){
            $(this).css({"padding-left":"1px"});
            $(this).find("h3").css({"width":"195px","margin-top":"-6px","line-height":"34px","height":"36px","background":"#fafafa","border":"1px solid green","border-left":"6px solid green"})
            $(this).find("div").css({"display":"block"});
        })
        .on("mouseout",function(){
            $(this).css({"padding-left":""});
            $(this).find("h3").css({"width":"190px","background":"","border":"","margin-top":"","line-height":"","height":"25px"})
            $(this).find("div").css({"display":"none"});
        });
    $("#qqHelp").
        on("mouseover",function(){
            $(".float1P").css({"display":"block"})
        })
        .on("mouseout",function(){
            $(".float1P").css({"display":"none"})
        });
    $("#float2Span").
        on("mouseover",function(){
            $(".float2P").css({"display":"block"})
        })
        .on("mouseout",function(){
            clearTimeout(timer);
            timer=setTimeout(function(){
                $(".float2P").css({"display":"none"});
            },100)
        });
    $(".float2P").
        on("mouseover",function(){
            clearTimeout(timer);
            $(this).css({"display":"block"})
        })
        .on("mouseout",function(){
            $(this).css({"display":"none"})
        });
    //$("body").on("click",function(){alert(window.scrollY)});
    //console.log(window.scrollY);
    $(window).scroll(function ()
    {
        var st = $(this).scrollTop();
        if(st>0){
            $(".float3Span").css({"display":"block"})
        }else{
            $(".float3Span").css({"display":"none"})
        }
    });
    /*    $(window).scroll(function ()
     {
     var st = $(this).scrollTop();
     if(st<158){
     $("#nav12").css({"display":"block"})
     }else{
     $("#nav12").css({"display":"none"})
     }
     });*/
    $(window).scroll(function ()
    {
        var st = $(this).scrollTop();
        if(st>158){
            $("#nav12").css({"display":"none"});
            $(".nav1")
                .on("mouseover", function () {
                    $("#nav12").css({"display": "block"})
                })
                .on("mouseout", function () {
                    $("#nav12").css({"display": "none"})
                });
        }else{
            $("#nav12").css({"display":"block"});
            $(".nav1")
                .on("mouseover", function () {
                    $("#nav12").css({"display": "block"})
                })
                .on("mouseout", function () {
                    $("#nav12").css({"display": "block"})
                });
        }
    });
    $("#tj a").css({
        "display": "block",
        "height": "31px",
        "background": "#fff",
        "border":"1px solid green",
        "border-bottom":"none",
        "border-top":"2px solid green"
    })
    $("#tj").on("mouseover",function(){
        $("#tab_con1").css({"display":"block"});
        $("#tab_con2").css({"display":"none"});
        $("#tj a").css({
            "display": "block",
            "height": "31px",
            "background": "#fff",
            "border":"1px solid green",
            "border-bottom":"none",
            "border-top":"2px solid green"
        })
        $("#pl a").css({
            "display": "",
            "height": "",
            "background": "",
            "border":"",
            "border-bottom":"",
            "border-top":""
        })
    })
    $("#pl").on("mouseover",function(){
        $("#tab_con1").css({"display":"none"});
        $("#tab_con2").css({"display":"block"});
        $("#tj a").css({
            "display": "",
            "height": "",
            "background": "",
            "border":"",
            "border-bottom":"",
            "border-top":""
        });
        $("#pl a").css({
            "display": "block",
            "height": "31px",
            "background": "#fff",
            "border":"1px solid green",
            "border-bottom":"none",
            "border-top":"2px solid green"
        })

    });
    /* $(".sp")
     .on("mouseover",function(){
     $(this).css({"border":"1px solid #ccc"});
     $(this).find(".indexAdcart").stop(true).animate({bottom:0},100)
     })
     .on("mouseout",function(){
     $(this).css({"border":""});
     $(this).find(".indexAdcart").stop(true).animate({bottom:-36},100);
     })*/
    /*   $(".sp")
     .on("mouseover",function(){
     $(this).css({"border":"1px solid #ccc"});
     $(this).find(".indexAdcart").stop(true).slideDown();
     })
     .on("mouseout",function(){
     $(this).css({"border":""});
     $(this).find(".indexAdcart").stop(true).slideUp();
     });*/
    function chandong(){
        setInterval(function(){
            $(".floatAd_div0805 img")
                .animate({bottom:-10},500)
                .animate({bottom:0},500);
        },1000);
    }
    chandong();
    $(window).scroll(function ()
    {
        var st = $(this).scrollTop();
        if(st>=120){
            $("#navs").css({
                "position":"fixed",
                "width":"100%",
                "top":"0",
                "left":"0",
                "z-index":"100"
            })
        }else{
            $("#navs").css({"position":"","top":"","left":""})
        }
    });
});