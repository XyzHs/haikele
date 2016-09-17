/**
 * Created by Administrator on 2016/9/9.
 */
var str=location.href; //取得地址栏的url
var num=str.indexOf("?");  //？ 的位置
str=str.substr(num+1);
$.ajax({
    url: "http://localhost:8080/product/GetProductById_get",
    data: {
        "id": str
    },
    dataType: "jsonp",
    success: function (data) {
        console.log(data);
        //把data 里面的string 主动转成对象；
        var dataObj = JSON.parse(data.Data);
        var trOb = $(" <div class=\"ke_m2con\"><div class=\"ke_m2pc_l\">" +
            "<div id=\"ink_showImg\"><div class=\"small_pic\">" +
            "<span class=\"mark\"></span><span class=\"float_layer\"></span>" +
            "<img src=\"img/"+dataObj.Src+"\" id=\"ctl00_Body_img_url1\" class=\"_49362\">" +
            "</div></div><div class=\"ke_m2pcl_c2 clearfix1\"><div class=\"ke_m2pc_btn1\">" +
            "<img src=\"img/int0914_btn1.jpg\" alt=\"\" width=\"15\" height=\"48\">" +
            "</div><div class=\"ke_m2pc_con\"><ul class=\"smallshop\" style=\"width: 237px;\"></ul></div>" +
            "<div class=\"ke_m2pc_btn2\"><img src=\"img/int0914_btn2.jpg\" " +
            "alt=\"有机食品,有机蔬菜,配送,有机食品超市,有机食品连锁店,有机食品购物网,上海有机食品专卖店\"" +
            " width=\"15\" height=\"48\">" + "</div></div></div><div class=\"clearfix1\"></div></div>" +
            "<div class=\"pInfo\"><h1>"+dataObj.name+"<span class=\"pView_red\"></span>" +
            "</h1><h1><span class=\"pColor1\">馥郁香甜，富含更多营养</span> " +
            "</h1><h1><span class=\"pColor2\"></span></h1><dl><dt>价&nbsp;&nbsp;格：</dt>" +
            "<dd><span class=\"pInfo_price\">"+dataObj.price+"</span></dd></dl><dl><dt>规&nbsp;&nbsp;格：" +
            "</dt><dd>"+dataObj.unit+"</dd></dl><dl><dt>产品级别：</dt><dd>进口</dd></dl><dl><dt>产&nbsp;&nbsp;地：</dt>" +
            "<dd>上海</dd></dl> <dl><dt>货&nbsp;&nbsp;号：" +
            "</dt><dd>007353</dd></dl><dl><dt>保 质 期：</dt><dd>15天</dd></dl>" +
            "<div class=\"pInfo_buy\"><dl><dd style=\"margin:0px;\">" +
            "<input class=\"plist_Add2\" type=\"button\">" +
            "<input id=\"ProductNum\" class=\"plist_Add3 ProductNum\" value=\"1\" type=\"text\">" +
            "<input class=\"plist_Add1\" type=\"button\">" +
            "<a href=\"javascript:void(0)\" class=\"plist_listBtn2\">加入购物车</a>" +
            "<div class=\"pInfo_buy_qrcode\"><img src=\"img/qrcode.png\">" +
            "<p>扫一扫即可购买</p></div></dd></dl></div><dl class=\"pInfo_info\">" +
            "<dt></dt><dd></dd></dl></div>");
        $(".pView").append(trOb);
    },
    complete:function () {
        $(".plist_Add2").on("click",function(){
            if(parseInt( $("#ProductNum").val())>1){
                $("#ProductNum").val(parseInt( $("#ProductNum").val())-1);
            }else{
                alert("不能再减了！");
            }
        });
        $(".plist_Add1").on("click",function(){
                $("#ProductNum").val(parseInt( $("#ProductNum").val())+1);
        });
    }
});
/*
<li>" +
"<img alt=\"有机食品,有机蔬菜,配送,有机食品超市,有机食品连锁店,有机食品购物网,上海有机食品专卖店\" " +
"class=\"ink_smlImg\" src=\"img/565560_3_pic500_308.jpg\" width=\"66\" height=\"66\">"+"</li><li>" +
"<img alt=\"有机食品,有机蔬菜,配送,有机食品超市,有机食品连锁店,有机食品购物网,上海有机食品专卖店\"" +
" class=\"ink_smlImg\" src=\"img/565560_1_pic500_308.jpg\" width=\"66\" height=\"66\">"+"</li><li>" +
"<img alt=\"有机食品,有机蔬菜,配送,有机食品超市,有机食品连锁店,有机食品购物网,上海有机食品专卖店\" " +
"class=\"ink_smlImg\" src=\"img/565560_2_pic500_308.jpg\" width=\"66\" height=\"66\">" +
"</li>*/
