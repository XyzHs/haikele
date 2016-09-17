function AddToCart(sysno,qty) {
    var number;
    if (qty == "") {
        number = $("#ProductNum").val();
    }
    else {
        number = qty;
    }
//    var number = $("#ProductNum").val();
    $.post("/Ajax/create.ashx", { action: "a", productno: sysno, quantity: number }, function (data) {
        if (data == "-1") {
            alert("您今天已经买过了，请明天再来买吧\n每人每天只能买一次1元购商品，请您谅解一下");
            return;
        }
    });

    //删除页面中已经有的 阴影
    $("#cart_shadow").remove();

    try{
     var $img = $("._" + sysno).last();

    //创建阴影div
    var $shadow = $('<div id="cart_shadow" style="display: none; background: url(' + $img.attr("src") + ') repeat-x scroll 0 -66px transparent; border:1px solid #aaa;z-index: 9999;"> </div>').prependTo("body");
    //获取当前点击的前一个img标签

    //利用img标签的宽度，高度，上边距等属性来设置阴影div
    $shadow.css({
        'width': $img.css('width'),
        'height': $img.css('height'),
        'position': 'absolute',
        'top': $img.offset().top,
        'left': $img.offset().left,
        'opacity': 0.6
    }).show();



    //获取购物车标签
    var $cart = $("#a_mycart");
    //利用购物车表情按的宽度，高度，上边距等属性来设置阴影div的动画效果
    $shadow.animate({
        width: $cart.innerWidth(),
        height: $cart.innerHeight(),
        top: $cart.offset().top,
        left: $cart.offset().left,
        opacity: 0
    }, { duration: 2000, complete: function () {

        
        InitCart();
        $("#cart_shadow").remove();
    }
    })
    }catch(e) {
        setTimeout(InitCart, 2000);
        $("#cart_shadow").remove();
    }
    //阻止超链接跳转
    return false;
}


function AddToCartS(sysno) {

    $.post("/Ajax/create.ashx", { action: "a", productnos: sysno, quantity: 1 }, function (data) {
        InitCart();
    });
    return false;
}
