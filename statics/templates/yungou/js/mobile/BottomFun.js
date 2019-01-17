var Gobal = new Object();
function GetJPData(d, c, a, b) {
 
//alert(d + "/mobile/" + c + "/" + a );
//alert(b);
    //$.getJSON(d + "/JPData?action=" + c + "&" + a + "&fun=?", b)
    //              uid:	localStorage.getItem('uid'),
    // 		  		ushell:	localStorage.getItem('ushell'),
    $.getJSON(d + "/mobile/" + c + "/" + a,{ uid:	localStorage.getItem('uid'),ushell:	localStorage.getItem('ushell')} , b)
}

function GetJPDataNoLogin(d, c, a, b) {
    $.getJSON(d + "/JPData?action=" + c + "&" + a + "&fun=?", b)
}

function loadImgFun(c) {
    var b = $("#loadingPicBlock");
    if (b.length > 0) {
        var i = "src2";
        Gobal.LoadImg = b.find("img[" + i + "]");
        var a = function() {
            return $(window).scrollTop()
        };
        var e = function() {
            return $(window).height() + a() + 50
        };
        var h = function() {
            Gobal.LoadImg.each(function(j) {
                if ($(this).offset().top <= e()) {
                    var k = $(this).attr(i);
                    if (k) {
                        $(this).attr("src", k).removeAttr(i).show()
                    }
                }
            })
        };
        var d = 0;
        var f = -100;
        var g = function() {
            d = a();
            if (d - f > 50) {
                f = d;
                h()
            }
        };
        if (c == 0) {
            $(window).bind("scroll", g)
        }
        g()
    }
}
String.prototype.trim = function() {
    return this.replace(/(\s*$)|(^\s*)/g, "")
};
String.prototype.trims = function() {
    return this.replace(/\s/g, "")
};
var addNumToCartFun = null; (function() {
   // Gobal.Skin = "./../../statics/templates/yungou";
    try{
        Gobal.Skin = Path.Skin;
    }catch (e321312) {
        return ;
    }
    Path.Webpath  = localStorage.getItem('baseUrlServer') + "index.php";
    Gobal.Webpath = Path.Webpath; 
    Gobal.imgpath = Path.imgpath;  //上传图片地址
    
    Gobal.LoadImg = null;
    Gobal.LoadHtml = '<div class="loadImg">正在加载</div>';
    Gobal.LoadPic = Gobal.Skin + "/images/loading.gif";
	 
    Gobal.NoneHtml = '<div class="haveNot z-minheight"><s></s><p>暂无记录</p></div>';
    Gobal.unlink = "javascript:void(0);";
    $("#tBtnReturn").click(function() {
        history.go( - 1);
        return false
    });
    var d = Gobal.Webpath+"/login";
    loadImgFun(0);
    var a = $("#fLoginInfo");
    // GetJPData(Gobal.Webpath, "ajax", "init",
    // function(h) {
    //     var g = '<span><a href="'+Gobal.Webpath+'/mobile/mobile">首页</a><b></b></span><span><a href='+Gobal.Webpath+'/mobile/mobile/about>新手指南</a><b></b></span>';
    //     if (h.code == 0) {
    //         g = g + '<span><a href="'+Gobal.Webpath+'/mobile/home" class="Member">' + h.username + '</a><a href="'+Gobal.Webpath+'/mobile/user/cook_end" class="Exit">退出</a></span>'
    //     } else {
    //         g = g + '<span><a href="'+Gobal.Webpath+'/mobile/user/login">登录</a><b></b></span><span><a href="'+Gobal.Webpath+'/mobile/register">注册</a></span>'
    //     }
	//
    //     a.html(g)
    // });
	//购物车网页顶部
    var c = $("#btnCart");
    if (c.length > 0) {
        GetCartnum() ;

        // GetJPData(Gobal.Webpath,"ajax","cartnum",
        // function(g) {
        //     if (g.code == 0 && g.num > 0) {
        //         c.html("<em>" + g.num + "</em>")
        //     }
        // })


    }
    addNumToCartFun = function(g) {
        c.html("<em>" + g + "</em>")
    };
    var e = function(h) {
        var g = new Date();		 
        h.attr("src", h.attr("data")).removeAttr("id").removeAttr("data")
    };
    //pageJS_lottery
    var f_pageJS = $("#pageJS", "head");

    if (f_pageJS.length > 0) {
        e(f_pageJS)
    } else {
        f_pageJS = $("#pageJS", "body");
        if (f_pageJS.length > 0) {
            e(f_pageJS)
        }
    }

    var pageJS_lottery = $("#pageJS_lottery", "head");
    try{
        if (pageJS_lottery.length > 0) {
            e(pageJS_lottery)
        } else {
            pageJS_lottery = $("#pageJS_lottery", "body");
            if (pageJS_lottery.length > 0) {
                e(pageJS_lottery)
            }
        }
    }catch(e4214235){  }


    //

    var pageJS_CartList = $("#pageJS_CartList", "head");
    try{
        if (pageJS_CartList.length > 0) {
            e(pageJS_CartList)
        } else {
            pageJS_CartList = $("#pageJS_CartList", "body");
            if (pageJS_CartList.length > 0) {
                e(pageJS_CartList)
            }
        }
    }catch(e4214235){  }


    var f2 = $("#pageJS2", "head");
    try{
        if (f2.length > 0) {
            e(f2)
        } else {
            f2 = $("#pageJS", "body");
            if (f2.length > 0) {
                e(f2)
            }
        }
    }catch(e4214235){  }



    var b = $("#btnTop");
    if ($(window).scrollTop() == 0) {
        b.hide()
    }
    b.css("zIndex", "99").click(function() {
        $("body,html").animate({
            scrollTop: 0
        },
        0)
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            b.show()
        } else {
            b.hide()
        }
    })
})();

function GetCartnum() {
    var Mcartlist =  localStorage.getItem('Cartlist');
    console.log("Mcartlist",Mcartlist);
    if(Mcartlist){
        Mcartlist = JSON.parse(Mcartlist);
    }
    var cartnum = {};
    if(Mcartlist){
        cartnum['code']=0;
        cartnum['num']=0;
        for(var key in Mcartlist){
            cartnum['num']++ ;
        }
    }else{
        cartnum['code']=1;
        cartnum['num']=0;
    }
    //var_dump($Mcartlist);
    //echo json_encode($cartnum);
    $("#btnCart").append('<em>'+cartnum.num+'</em>');
}