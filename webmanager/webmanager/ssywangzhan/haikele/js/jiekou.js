/**
 * Created by Administrator on 2016/9/9.
 */
$(function(){
//ajax 获取数据 load
$(function(){
    $.ajax({
            url:"http://localhost:8080/product/GetProductsByPage_get",
            data:{
                pageSize:5,
                pageIndex:1
            },
            type:"get",
            success:function(data){
                console.log(data);
                //data  array
                for(var i=0;i<data.length;i++){
                    //把data 里面的string 主动转成对象；
                    var dataObj=JSON.parse(data[i].Data);
                    if(dataObj!=null){
                        var trOb=$("<div class=\"tab_conDiv sp\"><a id=\"re_indexTH_ctl00_hl_Link\" href=\"DetailsPage.html?"+dataObj.Id+"\">" +
                            "<img src=\"img/"+dataObj.Src+"\" class=\"_39196\" alt=\""+dataObj.name1+"\" /></a>" +
                            "<p class=\"indexHotP\"><a href=\"#\" target=\"_blank\">"+dataObj.name2+"&nbsp;"+dataObj.weight+"" +
                            "<span class=\"sale_Name1\">"+dataObj.hao+"</span><i></i> " +
                            "</a></p><p><span class=\"indexHotPrice\"></span><span class=\"indexHotPriceO\">&yen;"+dataObj.price+"" +
                            "</span></p><span class=\"indexHotIcon\">推荐</span><a onclick=\"gyeyt("+dataObj.Id+")\" class=\"indexAdcart\"  href=\"javascript:void(0)\">加入购物车</a></div>");
                        $("#tab_con1").append(trOb);
                    }
                }
            },
        error:function(){
            //alert(arguments.length);
        },
        dataType:"jsonp",
        complete: function () {
            $(".sp")
                .on("mouseover",function(){
                    $(this).css({"border":"1px solid #ccc"});
                    $(this).find(".indexAdcart").stop(true).slideDown();
                })
                .on("mouseout",function(){
                    $(this).css({"border":""});
                    $(this).find(".indexAdcart").stop(true).slideUp();
                });

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
});
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
    }
    var strCookie=getCookie("cartcookie");//string
    var arrProducts=JSON.parse(strCookie); //string to object  //条件的， string 必须是一个遵循json格式的string
    var totalCount=0;
    for(var i=0;i<arrProducts.length;i++){
        totalCount+=arrProducts[i].count;
    }
    var oPTotalCount=document.getElementById("shopCounct");
    oPTotalCount.innerHTML=totalCount;
});