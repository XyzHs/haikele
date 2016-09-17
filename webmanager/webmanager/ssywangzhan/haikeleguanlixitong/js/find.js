/**
 * Created by Administrator on 2016/9/17.
 */
window.onload=function(){
    $("#bt1").on("click",function(){  //添加信息
        var id=document.getElementById("Id").value;
        $.ajax({
            url: "http://localhost:8080/product/GetProductById_get",
            data:{
                id:id
            },
            datatype:"jsonp",
            success:function(data){
                if(data=="null"){
                    alert("无此商品");
                }else{
                    alert("成功找到");
                    console.log(data);
                    //把data 里面的string 主动转成对象；
                    var Obj = JSON.parse(data);
                    var dataObj=JSON.parse(Obj.Data);
                    //console.log(dataObj.Src)
                    var trOb=$("<img src=\"../haikele/img/"+dataObj.Src+"\" class=\"_47339\" alt=\""+dataObj.name+"\" />");
                    $("#shangpin").append(trOb);
                }
            },
            complete:function (data) {
            }
        });
    });
    $("#bt1").hover(function(){
        $("#bt1").css("background","#007f92");
    },function(){
        $("#bt1").css("background","#07a1b9");
    });
    //http://localhost:63486/product/CreateUpdateProduct_get?id=3&datajson=13333333
};
/**
 * Created by Administrator on 2016/9/9.
 */