/**
 * Created by Administrator on 2016/9/17.
 */
window.onload=function(){
    $("#bt1").on("click",function(){  //添加信息
        alert(1);
            var id=document.getElementById("Id").value;
            var name=document.getElementById("Name").value;
            var price=document.getElementById("Price").value;
            var src=document.getElementById("Src").value;
            var weight=document.getElementById("Weight").value;
            var obj={
                id:id,
                name:name,
                price:price,
                url:src,
                weight:weight
            };
            dataStr=JSON.stringify(obj);
            $.ajax({
                url:"http://localhost:8080/product/CreateUpdateProduct_get",
                data:{
                    id:id,
                    datajson:dataStr
                },
                datatype:"jsonp",
                success:function(){
                        alert("成功添加");
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