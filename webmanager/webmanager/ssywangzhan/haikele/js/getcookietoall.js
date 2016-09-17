/**
 * Created by Administrator on 2016/9/14.
 */
$(function(){
    var shy=getCookie("ssy");
    if(shy=="undefined"||shy==""){
        //alert(1);
    }
    else{
        //alert(2);
        //$(".dt1").html("你好"+shy);
        $(".dt1").css({"display":"none"});
        $(".dt2").css({"display":"block"});
        $("#zahnghao ").text(shy);
    }
    $("#tuichu").on("click",function(){
        removeCookie("ssy");
        window.location.href="index.html";
    })
});