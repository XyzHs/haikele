/**
 * Created by Administrator on 2016/9/9.
 */
$(document).ready(function(){
    $("#userName")
        .focus(function(){
            $(".login_msg1").css({"display":"block"})
        })
        .blur(function(){
            $(".login_msg1").css({"display":"none"})

        });
    $("#userPwd")
        .focus(function(){
            $(".login_msg2").css({"display":"block"})
        })
        .blur(function(){
            $(".login_msg2").css({"display":"none"})
        });
    $("#ctl00_Body_btnLogin").on("click",function(){
        var a=$("#userName").val();
        var b=$("#userPwd").val();
        var scr=document.createElement("script");
        scr.src="http://localhost:8080/user/loginget?name="+a+"&password="+b+"&callback=fn2";
        document.body.appendChild(scr);
        scr.onload=function() {
            this.parentNode.removeChild(scr);
        };
    })

});
function fn2(c) {
    if (c == 1) {
        setCookie("ssy",$("#userName").val(),30);
        alert("登录成功!");
        window.location.href="index.html";
    } else {
        alert("登录失败!");
    }
}

/*
 window.onload=function(){
 bt1
 Dl.onclick=function(){
 var b=Pw.value;
 var a=Zh.value;
 var scr=document.createElement("script");
 scr.src="http://10.9.163.115:8081/user/loginget?name="+a+"&password="+b+"&callback=fn2";
 document.body.appendChild(scr);
 scr.onload=function(){
 this.parentNode.removeChild(scr);
 //            document.body.removeChild(this);
 }
 };
 function fn(a){
 if(a==1){
 P1.innerHTML="用户已存在！";
 P1.style.color="red";
 }else{
 P1.innerHTML="可用！";
 P1.style.color="blue";
 }
 }
 function fn1(b){
 if(b==1){
 alert("创建成功!");
 }else{
 alert("创建失败!");
 }
 }
 function fn2(c){
 if(c==1){
 alert("登录成功!");
 }else{
 alert("登录失败!");
 }
 }
 };*/
