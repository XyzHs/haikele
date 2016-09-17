/**
 * Created by Administrator on 2016/9/6.
 */
var timer0;
var timer1;
var timer2;
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
            this.css({"display":"block"})
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
            this.css({"display":"block"})
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
    $(document).ready(function(){
        $("#nav12 a").each(function(){
            $(this).attr("href","Listofpp.html?1001");
        });
    });
});

window.onload=function() {
    /*------------轮播图1-----------------*/
    var winW=$(window).width();
    $(".lbt2Box").width(winW);
    $(".lbt2Box").css({"left":-(winW-1000)/2});
    $(".lbt1 .lbt2").width(winW+460);
    $(".lbt1 .lbt2").css({"left":-460+(winW-1000)/2});
    //console.log(winW);
    var imgWidth=1920;
    var oNavLis=document.getElementById("navulid").children;
    var oImgUl=document.getElementById("lbt3");
    for(var i=0;i<oNavLis.length;i++){
        oNavLis[i].onmouseover=function(){
            clearInterval(timer);
            if(pageIndex==7){
                oImgUl.style.left="-460px";
            }
            var pageIndexNav= parseInt(this.innerHTML);
            var targetJson={
                "left":-(pageIndexNav-1)*imgWidth
            };
            startMove(oImgUl,targetJson, function () {
                playImg();
            });
            for(var j=0;j<oNavLis.length;j++){
                oNavLis[j].className="liun";
            }
            this.className="lion";
            pageIndex=pageIndexNav;
        }
    }
    var pageIndex=1;
    function playImg(){
        clearInterval(timer0);
        timer0=setInterval(function(){
            if(pageIndex==7){
                oImgUl.style.left=0;
                var targetJson={
                    "left":-1*imgWidth
                };
                startMove(oImgUl,targetJson);
                pageIndex=2;
            }else{
                var targetJson={
                    "left":-1*pageIndex*imgWidth
                };
                startMove(oImgUl,targetJson);
                pageIndex++;
            }
            setLiClass(pageIndex);
        },3000);
    }
    playImg();
    function setLiClass(pageIndex){
        var arrLis=document.getElementById("navulid").children;
        for(var i=0;i<arrLis.length;i++){
            arrLis[i].className="liun";
        }
        if(pageIndex==7){
            arrLis[0].className="lion";
        }else {
            arrLis[pageIndex - 1].className = "lion";
        }
    }
    /*------------轮播图2-----------------*/
    var pageIndex1=1;
    var imgWidth1=1000;
    var oNavLis1=document.getElementById("btn").children;
    var oImgUl1=document.getElementById("lbt3333");
    for(var i=0;i<oNavLis1.length;i++){
        oNavLis1[i].onmouseover=function(){
            clearInterval(timer1);
            var pageIndexNav= parseInt(this.innerHTML);
            var targetJson={
                "left":-(pageIndexNav-1)*imgWidth1
            };
            startMove(oImgUl1,targetJson, function () {
                playImg1();
            });
            for(var j=0;j<oNavLis1.length;j++){
                oNavLis1[j].className="liun";
            }
            this.className="lion";
            pageIndex1=pageIndexNav;
        }
    }
    function playImg1(){
        clearInterval(timer1);
        timer1=setInterval(function(){
            if(pageIndex1==4){
                oImgUl1.style.left=0;
                var targetJson1={
                    "left":-1*imgWidth1
                };
                startMove(oImgUl1,targetJson1);
                pageIndex1=2;
            }else{
                var targetJson1={
                    "left":-1*pageIndex1*imgWidth1
                };
                startMove(oImgUl1,targetJson1);
                pageIndex1++;
            }
            setLiClass1(pageIndex1);
            //console.log(pageIndex1);
        },2000);
    }
    playImg1();
    function setLiClass1(pageIndex1){
        var arrLis=document.getElementById("btn").children;
        for(var i=0;i<arrLis.length;i++){
            arrLis[i].className="liun";
        }
        if(pageIndex1==4){
            arrLis[0].className="lion";
        }else {
            arrLis[pageIndex1 - 1].className = "lion";
            //alert(arrLis[pageIndex1 - 1].className)
        }
    }
  /*  var pageIndex2=0;
    function playImg2(){
        timer=setInterval(function(){
            if(pageIndex2==5){
                pageIndex2=2;
            }else {
                pageIndex2++;
            }
            slideT(pageIndex2);
        },2000);
    }
    playImg2();
    function slideT(pageIndex2){
        var arrLis=document.getElementById("zuihou").children;
        for(var i=0;i<arrLis.length;i++){
            arrLis[i].style.display="none";
        }
        if(pageIndex2==5){
            arrLis[0].style.display="block";
        }else {
            arrLis[pageIndex2 - 1].style.display="block";
        }
    }*/
    /*------------轮播图3-----------------*/
    var pageIndex2=1;
    var imgWidth2=30;
    var oImgUl2=document.getElementById("zuihou");
    function playImg2(){
        clearInterval(timer2);
        timer2=setInterval(function(){
            if(pageIndex2==5){
                oImgUl2.style.top=0;
                var targetJson2={
                    "top":-1*imgWidth2
                };
                startMove(oImgUl2,targetJson2);
                pageIndex2=2;
            }else{
                var targetJson2={
                    "top":-1*pageIndex2*imgWidth2
                };
                startMove(oImgUl2,targetJson2);
                pageIndex2++;
            }
        },1000);
    }
    playImg2();
};
































