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
            //console.log(data);
            for(var i=0;i<data.length;i++){
                //把data 里面的string 主动转成对象；
                var dataObj=JSON.parse(data[i].Data);
                if(dataObj!=null) {
                    var trOb=$("<li class=\"indexPlistLi sp\"><a href=\"DetailsPage.html?"+dataObj.Id+"\">" +
                        "<img src=\"img/"+dataObj.Src+"\" class=\"_47339\" alt=\""+dataObj.name+"\" /></a>" +
                        "<p class=\"indexHotP\"><a href=\"#\" target=\"_blank\">"+dataObj.name+"&nbsp;&nbsp;"+dataObj.unit+"" +
                        "<span class=\"sale_Name1\">"+dataObj.evaluation+"</span><i></i></a></p><p> " +
                        "<span class=\"indexHotPrice\"></span>&yen;<span class=\"indexHotPriceO\">"+dataObj.price+"</span> " +
                        "</p><span class=\"indexHotIcon\">新品</span><a  class=\"indexAdcart\"  onclick=\"gyeyt("+dataObj.Id+")\"  href=\"javascript:void(0)\">加入购物车</a></li>");
                    $(f_Ui[pageIndexV - 3]).append(trOb);
                }
            }
        },
        dataType:"jsonp",
        complete:function () {
            $(".sp")
                .on("mouseover",function(){
                    $(this).css({"border":"1px solid #ccc"});
                    $(this).find(".indexAdcart").stop(true).slideDown();
                })
                .on("mouseout",function(){
                    $(this).css({"border":""});
                    $(this).find(".indexAdcart").stop(true).slideUp();
                });
            if(pageIndexV<f_Ui.length+3){
                pageIndexV++;
                getF_Info();
            }
            var offset = $("#gouwucheshijian").offset();
            $(".indexAdcart").click(function(event){
                var addcar = $(this);
                var img = addcar.parent().find('img').attr('src');
                var flyer = $('<img class="u-flyer" src="'+img+'">');
                flyer.fly({
                    start: {
                        left: addcar.offset().left,
                        top: event.clientY
                    },
                    end: {
                        left: offset.left+100,
                        top: offset.top+20,
                        width: 0,
                        height: 0
                    }
                    /* onEnd: function(){
                     $("#msg").show().animate({width: '250px'}, 200).fadeOut(1000);
                     addcar.css("cursor","default").removeClass('orange').unbind('click');
                     this.destory();
                     }*/
                });
            });
        }
    })
}
getF_Info();

function gyeyt(a){
    var productInfo=new Object();
    productInfo.id= a;
    productInfo.count=1;
    var products=getCookie("cartcookie"); // "lslslsl";
    var arrProducts=[]; //存储所有的商品在此arr中
    if(products=="undefined"){
        //购物车里有旧数据。
    }else
    {
        arrProducts=JSON.parse(products);//[1];
    }
    var flag=false;
    //arrProducts 这个数组里面 看看有没有一个数组元素 跟productInfo 一样
    for(var j=0;j<arrProducts.length;j++){
        //比如商品名称相等 就算是同一个商品。
        if(arrProducts[j].id==productInfo.id){
            arrProducts[j].count+=1;
            flag=true;
        }
    }
    if(!flag){
        arrProducts.push(productInfo);// 2,[productInfo,productInfo]
    }
    //存储到cookie中
    var strProInfo=JSON.stringify(arrProducts); //json对象转化为string；
    setCookie("cartcookie",strProInfo,30);//1 ,

    var strCookie=getCookie("cartcookie");//string
    var arrProducts=JSON.parse(strCookie); //string to object  //条件的， string 必须是一个遵循json格式的string
    var totalCount=0;
    for(var i=0;i<arrProducts.length;i++){
        totalCount+=arrProducts[i].count;
    }
    var oPTotalCount=document.getElementById("shopCounct");
    oPTotalCount.innerHTML=totalCount;
}


