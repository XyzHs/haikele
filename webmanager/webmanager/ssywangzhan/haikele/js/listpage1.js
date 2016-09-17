/**
 * Created by Administrator on 2016/9/6.
 */
var pageSizeV =5;
var pageIndexV=4;
//ajax 获取数据 load
var f_Ui=document.getElementsByClassName("indexPlist");
console.log(f_Ui.length);
function getF_Info() {
    $.ajax({
        url:"http://localhost:8080/product/GetProductsByPage_get",
        data:{
            "pagesize":pageSizeV,
            "pageindex":pageIndexV
        },
        success:function(data){
            console.log(data);
            for(var i=0;i<data.length;i++){
                //把data 里面的string 主动转成对象；
                var dataObj=JSON.parse(data[i].Data);
                if(dataObj!=null) {
                    var trOb = $("<li><div class=\"plist_list\"><a target=\"_blank\" href=\"DetailsPage.html\">" +
                        "<img alt=\"玉菇甜瓜\" class=\"_47339\" src=\"img/"+dataObj.Src+"\"></a>" +
                        "<div class=\"plistUPadding\"><span></span><p class=\"plist_list_sale\"></p>" +
                        "<p class=\"plist_listName\"><a target=\"_blank\" href=\"#\">"+dataObj.name+"</a></p>" +
                        "<p class=\"plist_listName\"><span class=\"sale_Name1\">"+dataObj.evaluation+"</span></p>" +
                        "<p class=\"clearfix1\"><span class=\"p_priceN fl\">"+dataObj.price+"</span></p>" +
                        "<p class=\"clearfix1 plist_list_comment\">评论<a href=\"#\">10条</a></p>" +
                        "<div class=\"clearfix1 plistUlP\"><div class=\"plist_list_num\">" +
                        "<input value=\"1\" id=\"num_47339\" class=\"plist_list_num_text\" type=\"text\">" +
                        "<span><input class=\"plist_list_num_add\" type=\"button\">" +
                        "<input class=\"plist_list_num_dis\" type=\"button\"></span>&nbsp;</div>" +
                        "<a href=\"javascript:void(0)\" class=\"plist_listBtn2\">已售罄</a>" +
                        "</div><div class=\"plist_listDate\"></div></div></div></li>");
                    $(".plistUl").append(trOb);
                }
            }
        },
        dataType:"jsonp",
        complete:function () {
        }
    })
}
getF_Info();