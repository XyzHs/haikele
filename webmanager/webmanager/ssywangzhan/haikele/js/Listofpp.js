/**
 * Created by Administrator on 2016/9/10.
 */
$(document).ready(function() {
    $("#nav12").css({"display": "none"});
    $(".nav1")
        .on("mouseover", function () {
            $("#nav12").css({"display": "block"})
        })
        .on("mouseout", function () {
            $("#nav12").css({"display": "none"})
        });
    $(window).scroll(function ()
    {
        var st = $(this).scrollTop();
        if(st<158){
            $("#nav12").css({"display":"none"});
            $(".nav1")
                .on("mouseover", function () {
                    $("#nav12").css({"display": "block"})
                })
                .on("mouseout", function () {
                    $("#nav12").css({"display": "none"})
                });
        }else{
            $("#nav12").css({"display":"none"});
            $(".nav1")
                .on("mouseover", function () {
                    $("#nav12").css({"display": "block"})
                })
                .on("mouseout", function () {
                    $("#nav12").css({"display": "none"})
                });
        }
    });
});
window.onload=function(){
    var timer1;
    var flag=true;
    function playZindex(){
        clearInterval(timer1);
        var oLis=document.getElementById("list").getElementsByTagName("li");
        var oLis0=document.getElementById("btn").getElementsByTagName("li");
        timer1=setInterval(function(){
                for(var i=0;i<oLis.length;i++){
                    oLis[i].style.zIndex=1;
                    oLis0[i].className="b_1";
                }
            if(flag){
                oLis[0].style.zIndex=2;
                oLis0[0].className="b_2 selected";
                flag=false;
            }
            else{
                oLis[1].style.zIndex=2;
                oLis0[1].className="b_2 selected";
                flag=true;
            }
        },1000);
    }
    playZindex();
};



























