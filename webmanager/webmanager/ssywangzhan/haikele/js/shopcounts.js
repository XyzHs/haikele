/**
 * Created by Administrator on 2016/9/14.
 */
    $(function(){
        var strCookie=getCookie("cartcookie");//string
        var arrProducts=JSON.parse(strCookie); //string to object  //条件的， string 必须是一个遵循json格式的string
        var totalCount=0;
        for(var i=0;i<arrProducts.length;i++){
            totalCount+=arrProducts[i].count;
        }
        var oPTotalCount=document.getElementById("shopCounct");
        oPTotalCount.innerHTML=totalCount;
    });