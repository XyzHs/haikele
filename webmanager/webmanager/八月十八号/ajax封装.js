/**
 * Created by Administrator on 2016/8/18.
 */
function ajax(method,url,fn){
    if(!method){
        method="get";
    }
    var xhr;
    if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest();
    }else{
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
                fn(xhr.responseText);
            }else{

            }
        }
    };
        xhr.open(method,url,true);
        xhr.send();
}





















