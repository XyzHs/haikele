/**
 * Created by Administrator on 2016/9/6.
 */
    window.onload=function(){
        var pageSizeV =5;
        var pageIndexV=1;
//ajax 获取数据 load
        var f_Ui=document.getElementsByClassName("shop");
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
                            var trOb=$("<img style=\"height:170px;width:170px\" src=\"../haikele/img/"+dataObj.Src+"\" class=\"_47339\" alt=\""+dataObj.name+"\" />");
                            $(f_Ui[pageIndexV-1]).append(trOb);
                        }
                    }
                },
                dataType:"jsonp",
                complete:function () {
                    if(pageIndexV<f_Ui.length){
                        pageIndexV++;
                        getF_Info();
                    }
                }
            })
        }
        getF_Info();
    }

