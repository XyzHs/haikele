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