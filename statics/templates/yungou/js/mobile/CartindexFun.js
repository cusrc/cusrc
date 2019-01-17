$(".tags li").on("click",function(){
    var id_CartindexFun = $(this).data("id");
    var num_CartindexFun = $(this).data("val");
    $("#txtNum" + id_CartindexFun).val(num_CartindexFun);
    $("#shuliang" + id_CartindexFun).val(num_CartindexFun);
    $("#price" + id_CartindexFun).text(num_CartindexFun);
    $("#arial" + id_CartindexFun).text(num_CartindexFun);
    $("#orange" + id_CartindexFun).text("￥"+num_CartindexFun);
    var a_CartindexFun = $("#cartBody");
    var q_CartindexFun = 0;
    var r_CartindexFun = 0;
    $("input:text[name=num]", a_CartindexFun).each(function(s) {
         var t_CartindexFun = parseInt($(this).val());
         var ss_CartindexFun = parseInt($(this).siblings('input').val());
         if (!isNaN(t_CartindexFun)) {
             r_CartindexFun++;
             q_CartindexFun += t_CartindexFun * ss_CartindexFun;
         }
    });
    $("#total").text(q_CartindexFun);
    $(this).parent().parent().prev().find(".z-jian").trigger("click");
    setTimeout(function(self){
      return function(){
        $(self).parent().parent().prev().find(".z-jia").trigger("click");
      }
    }(this), 100);
});


 $(function() {
     var a_CartindexFun = $("#cartBody");
     var c_CartindexFun = $("#divNone");
     var b_CartindexFun = function() {
         var o_CartindexFun = "";
         var h_CartindexFun = $("#divTopMoney");
         var g_CartindexFun = $("#divBtmMoney");
         var e_CartindexFun = function(t, s, r, q) {
             $.PageDialog.fail(t, s, r, q)
         };
         var n_CartindexFun = function(s, r, q) {
             $.PageDialog.confirm(s, r, q)
         };
         if (h_CartindexFun.length > 0) {
             h_CartindexFun.children("a").click(function() {
                 // location.href = Gobal.Webpath + "/mobile/cart/pay" //付款页面
                 location.href = "pay.html" //付款页面
             })
         }
         g_CartindexFun.children("a").click(function() {
             location.href = "pay.html" //付款页面
             // location.href = Gobal.Webpath + "/mobile/cart/pay" //付款页面
         });
         var m = function() {
             var q_CartindexFun = 0;
             var r_CartindexFun = 0;
             $("input:text[name=num]", a_CartindexFun).each(function(s) {
                 var t = parseInt($(this).val());
                 var ss = parseInt($(this).siblings('input').val());
                 if (!isNaN(t)) {
                     r_CartindexFun++;
                     q_CartindexFun += t * ss;
                 }
             });
             if (r_CartindexFun > 0) {
                 if (h_CartindexFun.length > 0) {
                     h_CartindexFun.children("span").html(q_CartindexFun)
                 }
                 g_CartindexFun.children("p").html('总共购买<span class="orange arial z-user">' + r_CartindexFun + '</span>个奖品  合计金币：<span id="total" class="orange arial">' + q_CartindexFun + ".00</span> 元")
             } else {
                 g_CartindexFun.remove()
             }
         };
         var d_CartindexFun = function() {
             var z_CartindexFun = $(this);
             var t_CartindexFun = z_CartindexFun.attr("id");
             var v_CartindexFun = t_CartindexFun.replace("txtNum", "");
             var q_CartindexFun = z_CartindexFun.next().next();
             var r_CartindexFun = parseInt(z_CartindexFun.next().next().next().val());
             var s_CartindexFun, y_CartindexFun, w_CartindexFun = /^[1-9]{1}\d{0,6}$/;
             var u_CartindexFun;
             o_CartindexFun = t_CartindexFun;
             var x_CartindexFun = function() {
                 if (o_CartindexFun != t_CartindexFun) {
                     return
                 }
                 s_CartindexFun = q_CartindexFun.val();
                 y_CartindexFun = z_CartindexFun.val();
                 if (y_CartindexFun != "" && s_CartindexFun != y_CartindexFun) {
                     var B = $(window).width();
                     var A = (B) / 2 - z_CartindexFun.offset().left - 127;
                     if (w_CartindexFun.test(y_CartindexFun)) {
                         u_CartindexFun = parseInt(y_CartindexFun);
                         if (u_CartindexFun <= r_CartindexFun) {
                             q_CartindexFun.val(y_CartindexFun)
                         } else {
                             u_CartindexFun = r_CartindexFun;
                             e_CartindexFun("最多" + u_CartindexFun + "人次", z_CartindexFun, -75, A);
                             z_CartindexFun.val(u_CartindexFun);
                             q_CartindexFun.val(u_CartindexFun)
                         }
                         p_CartindexFun(u_CartindexFun, z_CartindexFun);
                         j_CartindexFun(z_CartindexFun, v_CartindexFun, u_CartindexFun);
                         i_CartindexFun(z_CartindexFun, u_CartindexFun, r_CartindexFun);
                         m()
                     } else {
                         e_CartindexFun("只能输正整数哦", z_CartindexFun, -75, A);
                         z_CartindexFun.val(s_CartindexFun)
                     }
                 }
                 setTimeout(x_CartindexFun, 200)
             };
             x_CartindexFun()
         };
         var p_CartindexFun = function(r_CartindexFun, u) {
             var t_CartindexFun = u.parent().parent().parent();
             var q_CartindexFun = t_CartindexFun.find("div.z-Cart-tips");
             if (r_CartindexFun > 100) {
                 if (q_CartindexFun.length == 0) {
                     var s = $('<div class="z-Cart-tips">已超过100人次，请谨慎参与！</div>');
                     t_CartindexFun.prepend(s)
                 }
             } else {
                 q_CartindexFun.remove()
             }
         };
         var l_CartindexFun = function() {
             var q = $(this);
             if (o_CartindexFun == q.attr("id")) {
                 o_CartindexFun = ""
             }
             if (q.val() == "") {
                 q.val(q.next().next().val())
             }
         };
         var j_CartindexFun = function(q, t, r, yjg) {
             var s_CartindexFun = function(w) {
                 if (w.code == 1) {
                     var v = $(window).width();
                     var u = (v) / 2 - q.offset().left - 127;
                     e_CartindexFun("本期奖品已购买光了", q, -75, u)
                 } else {
                     if (w.code == 0) {
                        var ids = q.parent().prev().find(".proce").attr("ids");
                         q.parent().prev().html('总共参与：<em class="arial proce" id="arial'+ids+'" ids="'+ids+'">' + r + '</em>人次/<em class="orange arial" id="orange'+ids+'" ids="'+ids+'">￥' + r * yjg + "</em>")
                     }
                 }
             };

              AddShopCart (t, r,"cart");
            // GetJPData(Gobal.Webpath, "ajax", "addShopCart/" + t + "/" + r + "/cart", s_CartindexFun);

         };
         var k_CartindexFun = function(w, v) {
             var yjg_CartindexFun = v.attr('yunjiage');
             var u_CartindexFun = v.attr("id");
             var s_CartindexFun = u_CartindexFun.replace("txtNum", "");
             var r_CartindexFun = parseInt(v.next().next().next().val());
             var q_CartindexFun = v.next().next();
             var t_CartindexFun = parseInt(q_CartindexFun.val()) + w;
             if (t_CartindexFun > 0 && t_CartindexFun <= r_CartindexFun) {
                 i_CartindexFun(v, t_CartindexFun, r_CartindexFun);
                 q_CartindexFun.val(t_CartindexFun);
                 v.val(t_CartindexFun);
                 p_CartindexFun(t_CartindexFun, v);
                 j_CartindexFun(v, s_CartindexFun, t_CartindexFun, yjg_CartindexFun);
                 m()
             }
         };
         var i_CartindexFun = function(r, t, s) {
             var q_CartindexFun = r.prev();
             var u_CartindexFun = r.next();
             if (s == 1) {
                 q_CartindexFun.addClass("z-jiandis");
                 u_CartindexFun.addClass("z-jiadis")
             } else {
                 if (t == 1) {
                     q_CartindexFun.addClass("z-jiandis");
                     u_CartindexFun.removeClass("z-jiadis")
                 } else {
                     if (t == s) {
                         q_CartindexFun.removeClass("z-jiandis");
                         u_CartindexFun.addClass("z-jiadis")
                     } else {
                         q_CartindexFun.removeClass("z-jiandis");
                         u_CartindexFun.removeClass("z-jiadis")
                     }
                 }
             }
         };
         $("input:text[name=num]", a_CartindexFun).each(function(q) {
             var r_CartindexFun = $(this);
             r_CartindexFun.bind("focus", d_CartindexFun).bind("blur", l_CartindexFun);
             r_CartindexFun.prev().bind("click",
                 function() {
                     k_CartindexFun(-1, r_CartindexFun)
                 });
             r_CartindexFun.next().bind("click",
                 function() {
                     k_CartindexFun(1, r_CartindexFun)
                 })
         });
         var f_CartindexFun = function() {
             var q_CartindexFun = $("li", "#cartBody");
             if (q_CartindexFun.length < 1) {
                 a_CartindexFun.parent().remove();
                 c_CartindexFun.show()
             } else {
                 if (q_CartindexFun.length < 4) {
                     h_CartindexFun.remove()
                 }
             }
         };
         $("a[name=delLink]", a_CartindexFun).each(function(q) {
             $(this).bind("click",
                 function() {
                     var r_CartindexFun = $(this);
                     var t_CartindexFun = r_CartindexFun.attr("cid");
                     var s_CartindexFun = function() {
                         var u_CartindexFun = function(v) {
                             //已弃用.下面这个方法调用的
                             if (v.code == 0) {
                                 r_CartindexFun.parent().parent().parent().remove();
                                 m();
                                 f_CartindexFun()
                             } else {
                                 e_CartindexFun("删除失败E113，请重试")
                             }
                         };
                        // GetJPData(Gobal.Webpath, "ajax", "delCartItem/" + t_CartindexFun, u_CartindexFun)
                         //DodelCartItem(t_CartindexFun);
                         var ShopId =t_CartindexFun ;
                         //--------------Start-------
                         var Mcartlist=  localStorage.getItem('Cartlist');
                         if(Mcartlist){
                             Mcartlist = JSON.parse(Mcartlist);
                         }
                         var cart ={};
                         var cartlist= Mcartlist ;
                         if(ShopId==0){
                             cart['code']=1;   //删除失败
                         }else{
                             if(cartlist){
                                 var cartlist_count = 0;
                                 for(var key in cartlist ){
                                     cartlist_count++;
                                 }
                                 Mcartlist ={};
                                 if(cartlist_count==1){
                                     for(var key in cartlist ){
                                         var val = cartlist[key];
                                         if(key==ShopId){
                                             cart['code']=0;
                                             //_setcookie('Cartlist','','');
                                             localStorage.setItem('Cartlist','');
                                         }else{
                                             cart['code']=1;
                                         }
                                     }
                                 }else{

                                     for(var key in cartlist){
                                         var val = cartlist[key];
                                         if(key==ShopId){
                                             cart['code']=0;
                                         }else{
                                             Mcartlist[key] ={};
                                             Mcartlist[key]['num']=val['num'];
                                         }
                                     }
                                     // _setcookie('Cartlist',json_encode($Mcartlist),'');
                                     Mcartlist = JSON.stringify(Mcartlist);
                                     localStorage.setItem('Cartlist',Mcartlist);
                                 }
                             }else{
                                 cart['code']=1;   //删除失败
                             }
                         }
                         //  echo json_encode($cart);

                         if ( cart.code == 0) {
                             r_CartindexFun.parent().parent().parent().remove();
                             m();
                             f_CartindexFun();
                         } else {
                             e_CartindexFun("删除失败E114，请重试");
                         }

                         //----------over -------
                     };
                     n_CartindexFun("您确定要删除吗？", s_CartindexFun)
                 })
         })
     };
     if (a_CartindexFun.length > 0) {
         Base.getScript(Gobal.Skin + "/js/mobile/pageDialog.js", b_CartindexFun)
     } else {
         c_CartindexFun.show()
     }
 });

 // function  DodelCartItem(ShopId) {
 //
 //     var Mcartlist=  localStorage.getItem('Cartlist');
 //     if(Mcartlist){
 //         Mcartlist = JSON.parse(Mcartlist);
 //     }
 //     var cart ={};
 //     var cartlist= Mcartlist ;
 //     if(ShopId==0){
 //         cart['code']=1;   //删除失败
 //     }else{
 //         if(cartlist){
 //             var cartlist_count = 0;
 //             for(var key in cartlist ){
 //                 cartlist_count++;
 //             }
 //
 //             if(cartlist_count==1){
 //                 for(var key in cartlist ){
 //                     var val = cartlist[key];
 //                     if(key==ShopId){
 //                         cart['code']=0;
 //                         //_setcookie('Cartlist','','');
 //                         localStorage.setItem('Cartlist','');
 //                     }else{
 //                         cart['code']=1;
 //                     }
 //                 }
 //             }else{
 //                 for(var key in cartlist){
 //                     var val = cartlist[key];
 //                     if(key==ShopId){
 //                         cart['code']=0;
 //                     }else{
 //                         Mcartlist[key]['num']=val['num'];
 //                     }
 //                 }
 //                // _setcookie('Cartlist',json_encode($Mcartlist),'');
 //                 Mcartlist = JSON.stringify(Mcartlist);
 //                 localStorage.setItem('Cartlist',Mcartlist);
 //             }
 //         }else{
 //             cart['code']=1;   //删除失败
 //         }
 //     }
 //   //  echo json_encode($cart);
 //
 //     if ( cart.code == 0) {
 //         r_CartindexFun.parent().parent().parent().remove();
 //         m();
 //         f_CartindexFun();
 //     } else {
 //         e_CartindexFun("删除失败，请重试");
 //     }
 // }