/**
 * Created by Administrator on 2016/9/9.
 */
var pageSizeV =10;
var pageIndexV=1;
//ajax 获取数据 load
$(function(){
    $.ajax({
        url:"http://localhost:8080/product/GetProductsByPage_get",
        data:{
            pageSize:5,
            pageIndex:3
        },
        type:"get",
        success:function(data){
            console.log(data);
            //data  array
            for(var i=0;i<data.length;i++){
                //把data 里面的string 主动转成对象；
                var dataObj=JSON.parse(data[i].Data);
                var trOb=$("<li class=\"indexPlistLi\"><a href=\"#\">" +
                    "<img src=\"img/"+dataObj.Src+"\" class=\"_47339\" alt=\""+dataObj.name+"\" /></a>" +
                    "<p class=\"indexHotP\"><a href=\"#\" target=\"_blank\">"+dataObj.name+"&nbsp;&nbsp;"+dataObj.unit+"" +
                    "<span class=\"sale_Name1\">"+dataObj.evaluation+"</span><i></i></a></p><p> " +
                    "<span class=\"indexHotPrice\"></span><span class=\"indexHotPriceO\">&yen;"+dataObj.price+"</span> " +
                    "</p><span class=\"indexHotIcon\">新品</span></li>");
                $(".lbtx").append(trOb);
            }
        },
        error:function(){
            //alert(arguments.length);
        },
        dataType:"jsonp"
    })
});