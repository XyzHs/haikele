/**
 * Created by Administrator on 2016/9/13.
 */
/**
 * Created by Administrator on 2016/9/9.
 */
var str=location.href; //取得地址栏的url
var num=str.indexOf("?");  //？ 的位置
str=str.substr(num+1);
$.ajax({
    url: "http://localhost:8080/product/GetProductById_get",
    data: {
        "id": str,
    },
    dataType: "jsonp",
    success: function (data) {
        console.log(data);
        //把data 里面的string 主动转成对象；
        var dataObj = JSON.parse(data.Data);
        if (dataObj.o_Src){
            var Src_=dataObj.o_Src.split("&&");
            for (var i=0;i<Src_.length;i++){
                var trOb = $(
                    "<li><img alt=\"有机食品,有机蔬菜,配送,有机食品超市,有机食品连锁店,有机食品购物网,上海有机食品专卖店\" " +
                    "class=\"ink_smlImg\" src=\"img1/"+Src_[i]+"\" width=\"66\" height=\"66\"></li>"
                );
                $(".smallshop").append(trOb);
            }
        }
    },
    complete:function () {
        $(".ink_smlImg").on("click",function(){
            $("#ctl00_Body_img_url1").attr("src",this.src);
        });
    }
});