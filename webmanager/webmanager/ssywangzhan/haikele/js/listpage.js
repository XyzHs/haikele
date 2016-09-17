/**
 * Created by Administrator on 2016/9/6.
 */
var pageSizeV =5;
var pageIndexV=3;
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
                    var trOb = $("<li><div class=\"newpdtPlist_list clearfix1\"><a target=\"_blank\" href=\"DetailsPage.html?1001\">" +
                        "<img alt=\"【*】白水有机富士（6枚）\" class=\"_49106\" src=\"img/"+dataObj.Src+"\"></a><div class=\"plistUPadding\">" +
                        "<p class=\"plist_listName1\"><a target=\"_blank\" href=\"#\">"+dataObj.name+"</a></p>" +
                        "<p class=\"plist_listName1\"><span class=\"sale_Name1\">来自陕西白水 中国有机苹果之乡</span></p>" +
                        "<p class=\"\"><span class=\"p_priceN fl\">"+dataObj.price+"</span></p></div></div></li>");
                    $(".viewed_main").append(trOb);
                }
            }
        },
        dataType:"jsonp",
        complete:function () {
            $(".sp")
                .on("mouseover",function(){
                    $(this).css({"border":"1px solid #ccc"});
                    //$(this).find(".indexAdcart").stop(true).slideDown();
                })
                .on("mouseout",function(){
                    $(this).css({"border":""});
                    //$(this).find(".indexAdcart").stop(true).slideUp();
                });
            if(pageIndexV<f_Ui.length+3){
                pageIndexV++;
                getF_Info();
            }
        }
    })
}
getF_Info();