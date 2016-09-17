/**
 * Created by Administrator on 2016/8/18.
 */
/*function getXhr(xhr){
    if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest();
    }else{
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
}
function ajax(xhr,url,ft,dom){
        xhr=getXhr(xhr);
        xhr.open("get",url,ft);
        xhr.onreadystatechange=function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    dom.innerHTML = xhr.responseText;
                } else {
                    dom.innerHTML = "未获取";
                }
            }
        }
    xhr.send();
}*/
function ajax(xhr,url,ft,dom){
    var xhr;
    if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest();
    }else{
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open("get",url,ft);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
                dom.innerHTML=xhr.responseText;
            }else{
                dom.innerHTML="未获取";
            }
        }
    };
    xhr.send();
}

































