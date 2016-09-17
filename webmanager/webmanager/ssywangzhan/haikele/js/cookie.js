function setCookie(name,value,date) {
	var time = new Date();
	time.setDate(time.getDate() + date);
	document.cookie = name+"="+encodeURIComponent(value)+";expires="+time;
	//document.cookie = name+"="+value+";expires="+time;
}

function getCookie(name) {
	var cookieValue;
	var strCookie=document.cookie;
	var arrCookie=strCookie.split("; ");
	for(var i=0;i<arrCookie.length;i++){
		var item=arrCookie[i].split("=");
		if(item[0]==name){
			cookieValue=item[1];
		}
	}
	return decodeURIComponent(cookieValue);
	//return cookieValue;
}

function removeCookie(name) {
	setCookie(name,"",-1);
}