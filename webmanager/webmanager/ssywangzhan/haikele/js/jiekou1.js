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
            pageIndex:2
        },
        type:"get",
        success:function(data){
            console.log(data);
            //data  array
            for(var i=0;i<data.length;i++){
                //把data 里面的string 主动转成对象；
                var dataObj=JSON.parse(data[i].Data);
                if(dataObj!=null){
                    var trOb=$("<div class=\"index_comment\"><a target=\"_blank\" href=\"DetailsPage.html?"+dataObj.Id+"\">" +
                        " <img  src=\"img/"+dataObj.Src+"\" class=\"\"></a><p class=\"clearfix1\">" +
                        "<a href=\"#\" target=\"_blank\" class=\"index_comment_name\">"+dataObj.name+"</a>" +
                        "<span class=\"red fr\">&yen;"+dataObj.price+"</span></p><p class=\"index_comment_user\">"+dataObj.phone+"</p>" +
                        "<p class=\"index_comment_text\">"+dataObj.evaluation+"</p><p class=\"index_comment_time\">"+dataObj.time+"</p></div>");
                    $("#tab_con2").append(trOb);
                }
            }
        },
        error:function(){
            //alert(arguments.length);
        },
        dataType:"jsonp",
        complete: function () {
        }
    })
});