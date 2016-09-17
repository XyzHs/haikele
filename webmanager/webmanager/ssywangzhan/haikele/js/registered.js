/**
 * Created by Administrator on 2016/9/9.
 */
$(document).ready(function(){
    $(function () {
        $("#ctl00_Body_tbWebUserCode")
            .focus(function () {
                $(".reg_msg1").css({"display":"block"});
                })
            .blur(function () {
                $(".reg_msg1").css({"display":"none"});
            var $username = $(this).val();
            if ($username != "") {
                if ($username.length < 5) {
                    $(".reg_msg1").html("用户名长度过短");
                    $(".reg_msg1").css({"display":"block"});
                    $("#ctl00_Body_tbWebUserCode").focus();
                }
                else {
                   /* $.post("../Ajax/CheckRegister.ashx", { UserName: $username }, function (data) {
                        $("#lblCheckUserName").html(data);
                    })*/
                }
            }

        });

        $("#ctl00_Body_tbPassword0")
            .focus(function () {
                $(".reg_msg2").css({"display":"block"});
            })
            .blur(function () {
                $(".reg_msg2").css({"display":"none"});
            if ($(this).val() != "") {
                if ($(this).val().length < 5) {
                    $(".reg_msg2").html("<span color='red'>密码长度不够</span>");
                    $(".reg_msg2").css({"display":"block"});
                    $("#ctl00_Body_tbPassword0").focus();
                }
                else {
                    $("#lblCheckPwd0").html("");
                }
            }
        });
        $("#ctl00_Body_tbPassword1")
            .focus(function () {
                $(".reg_msg3").css({"display":"block"});
            })
            .blur(function () {
                $(".reg_msg3").css({"display":"none"});
            if ($(this).val() != "") {
                if ($(this).val() != $("#ctl00_Body_tbPassword0").val()) {
                    $(".reg_msg3").html("<span color='red'>两次密码输入不一致</span>");
                    $(".reg_msg3").css({"display":"block"});
                    $("#ctl00_Body_tbPassword1").focus()
                }
                else {
                    $(".reg_msg3").html("");
                    $("#ctl00_Body_btnSubmit").on("click",function(){
                        var a=$("#ctl00_Body_tbWebUserCode").val();
                        var b=$("#ctl00_Body_tbPassword0").val();
                        var scr=document.createElement("script");
                        scr.src="http://localhost:8080/user/registerGet?name="+a+"&password="+b+"&callback=fn1";
                        document.body.appendChild(scr);
                        scr.onload=function() {
                            this.parentNode.removeChild(scr);
                        };
                    })
                }
            }
        })
    });
   /* MailTips.init("tbWebUserCode");*/ //tbWebUserCode是输入框ID
});
function fn1(c){
    if(c==1){
        alert("注册成功，赶紧去登录！!");
        var d=$("#ctl00_Body_tbWebUserCode").val();
        window.location.href="login.html";
    }else{
        alert("创建失败,可能用户名已注册!");
    }
}

