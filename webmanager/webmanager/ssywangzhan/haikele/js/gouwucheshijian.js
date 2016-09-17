/**
 * Created by Administrator on 2016/9/14.
 */
$(function(){
    var shy=getCookie("ssy");
    $("#gouwucheshijian").on("click",function(){
        if(shy=="undefined"||shy==""){
            window.location.href="login.html";
        }
        else{
            window.location.href="shopcart.html";
        }
    })
});