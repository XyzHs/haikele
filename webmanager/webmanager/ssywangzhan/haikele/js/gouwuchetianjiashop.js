/**
 * Created by Administrator on 2016/9/14.
 */
    //页面加载完成 ，读取cookie。病渲染到页面。
    function getzongjia(){
    var strCookie=getCookie("cartcookie");//string
    var arrProducts=JSON.parse(strCookie);
    var b=new Array();
    var zongjia=0;
    //console.log(arrProducts);
    for(var j=0;j<arrProducts.length;j++){
        b[j]=$("#ctl00_Body_grd_Shipping tbody tr").eq(j).find("td").eq(4).text();
        if(b[j]=="undefined"){
        }else{
            zongjia=zongjia+parseFloat(b[j]);
        }
    }
    zongjia=zongjia.toFixed(2);
    var oPTotalPrice=document.getElementById("ctl00_Body_lbl_SumAmount");
    oPTotalPrice.innerHTML=zongjia;
}
    var strCookie=getCookie("cartcookie");//string
    if(strCookie.length=="undefined"){
    }else{
        //在购物车中显示出来；
        var arrProducts=JSON.parse(strCookie); //string to object  //条件的， string 必须是一个遵循json格式的string
        console.log(arrProducts);
        //console.log(arrProducts.length);
        InitCart(arrProducts);
        //showProduct();
    }
    //deleteProduct();
    /* function jia(dom){
     changeCount(dom,1);
     }
     function jian(dom){
     changeCount(dom,-1);
     }*/
//第二个参数，是代表数量的变化值；
//通过商品信息，在购物车中渲染一条记录；
    function showProduct(productInfo) {
        //for(var i=0;i<arrProducts.length;i++){
            str = productInfo.id;
            $.ajax({
                url: "http://localhost:8080/product/GetProductById_get",
                data: {
                    "id": str,
                },
                dataType: "jsonp",
                type: "get",
                success: function (data) {
                    console.log(data);
                    //把data 里面的string 主动转成对象；
                    var dataObj=JSON.parse(data.Data);
                    console.log(dataObj);
                    var trOb = "<tr align=\"center\"><td align=\"left\"><a target=\"_blank\" href=\"#\">" +
                        "<img src=\"img/"+dataObj.Src+"\" style=\"display: inline-block\"/></a>" +
                        "<a target=\"_blank\" href=\"#\">"+dataObj.name+"</a></td><td>"+dataObj.price+"</td>" +
                        "<td><span class=\"wrap_input\"><span onclick=\"changeCount(this,-1,"+dataObj.Id+")\" class=\"jian\">-</span><span class=\"input\">" +
                        "<input maxlength=\"2\" id="+dataObj.Id+" value=\""+productInfo.count+"\" type=\"text\"/>" +
                        "</span><span onclick=\"changeCount(this,1,"+dataObj.Id+")\" class=\"jia\">+</span></span>" +
                        "</td><td>"+dataObj.unit+"</td><td class=\"qiuhe\" style=\"color:Red;\">"+((dataObj.price)*productInfo.count).toFixed(2)+"</td>" +
                        "<td>"+((dataObj.price)*productInfo.count).toFixed(2)+"</td>" +
                        "<td>次日达</td><td><a onclick=\"deleteProduct(this,"+dataObj.Id+");\" href=\"#\" style=\"color:#085C9B\">删除</a></td></tr>";
                    $("#ctl00_Body_grd_Shipping tbody").append(trOb);
                },
                error: function () {
                    alert(arguments.length);
                },
                complete: function () {
                    getzongjia();
                }
            });
        //}
    }
    function InitCart(arrCookie){
        var totalCount=0;
        for(var i=0;i<arrCookie.length;i++){
            //totalCount+=arrCookie[i].count;
            showProduct(arrCookie[i]);
        }
        /*var oPTotalCount=document.getElementById("shopCounct");
        oPTotalCount.innerHTML=totalCount;*/
    }
    function changeCount(dom,count,Id){
    var  productId=Id;
    //1.页面显示数字要 加1
    //2.cookie 中找到对应的商品，让商品的数量加1；
    //1. 找到cookie中对应的商品。让商品的数量加1；
    //2.根据cookie 重新加在购物车。
    var strCookie=getCookie("cartcookie");
    if(strCookie.length>0){
        var arrCookie=JSON.parse(strCookie);
        for(var i=0;i<arrCookie.length;i++){
            if(arrCookie[i].id==productId){
                //arrCookie[i].changeCount(count);
                arrCookie[i].count=arrCookie[i].count+count;
                //arrCookie[i].totalPrice=parseInt(arrCookie[i].price)*arrCookie[i].count;
                if(arrCookie[i].count==0){
                    arrCookie[i].count=1;
                    //arrCookie.splice(i,1);
                }
                break;
            }
        }
        var strCookieNew=JSON.stringify(arrCookie);
        setCookie("cartcookie",strCookieNew,30);
        console.log(strCookie)
    }


    var cartList=document.getElementById(productId);
    if(count==1){
        cartList.value=parseInt(cartList.value)+1;
    }else{
        if(cartList.value<=1){
            alert("不能再减了！");
        }else{
            cartList.value=parseInt(cartList.value)-1;
        }
    }

    //InitCart(arrCookie);
    var xiaoji=$(dom.parentNode.parentNode.parentNode.lastChild.previousSibling.previousSibling).text();
    var price=$(dom.parentNode.parentNode.parentNode.firstChild.nextSibling).text();
    $(dom.parentNode.parentNode.parentNode.lastChild.previousSibling.previousSibling).text((parseFloat(price)*parseFloat(cartList.value)).toFixed(2));
    $(dom.parentNode.parentNode.parentNode.lastChild.previousSibling.previousSibling.previousSibling).text((parseFloat(price)*parseFloat(cartList.value)).toFixed(2));


    var strCookie=getCookie("cartcookie");//string
    var arrProducts=JSON.parse(strCookie); //string to object  //条件的， string 必须是一个遵循json格式的string
    var totalCount=0;
    for(var i=0;i<arrProducts.length;i++){
        totalCount+=arrProducts[i].count;
    }
    var oPTotalCount=document.getElementById("shopCounct");
    oPTotalCount.innerHTML=totalCount;

   getzongjia();
}

    function deleteProduct(dom,Id){
    //dom 我点是哪个 a标签
    var  productId=Id;
    //alert(Id);

    dom.parentNode.parentNode.parentNode.removeChild(dom.parentNode.parentNode);
    //删除cookie
    var strCookie=getCookie("cartcookie");
    if(strCookie.length>0){
        var arrCookie=JSON.parse(strCookie);
        //找到要删除的元素
        for(var i=0;i<arrCookie.length;i++){
            if(arrCookie[i].id==productId){
                arrCookie.splice(i,1);//从下标i开始， 删除 1个元素  仅仅是把数组arrCookie 删除了一个对象的商品！
                //cookie 还是原来。
            }
        }
    }
    //更新cookie
    var strCookieNew=JSON.stringify(arrCookie);
    setCookie("cartcookie",strCookieNew,30);


        getzongjia();

}



/*
 var b=new Array();
 for(var j=0;j<arrProducts.length;j++){
 zongjia+=b[j]=$("#ctl00_Body_grd_Shipping tbody tr").eq(j).find("td").eq(4).html();
 alert(zongjia)
 }
 console.log(b);*/














