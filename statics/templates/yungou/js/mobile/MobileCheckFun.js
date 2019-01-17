$(function() {
   // var b = "../../..";
    var a2 = function() {
        var i78 = $("#inpMobile");
        var o78 = i78.attr("value").trim();
        var l78 = $("#mobileCode");
        var n78 = $("#btnGetCode");
        var f78 = $("#btnPostCode");
        var p78 = function(u) {
            var t78 = /^[0-9a-zA-Z]+$/;
            return t78.test(u)
        };
        var j78 = function(u) {
            var t78 = /^1\d{10}$/;
            return t78.test(u)
        };
        var m78 = function(u) {
            var t = /^[0-9a-zA-Z]{6,}$/;
            return t.test(u)
        };
        var h78 = {
            txtStr: "请输入手机验证码",
            error: "验证码输入不正确",
            outtime: "验证码错误或过期",
            many: "验证码请求次数过多，请稍后再试",
            sucess: "注册成功",
            retry: "验证码发送失败，请重试",
            codeerr: "验证码发送时间没超过120秒"
        };
        var c78 = {
            txtStr: "确认，下一步",
            checkCode: "正在验证"
        };
        var g78 = {
            txtStr: "重新发送",
            sending: "正在发送"
        };
        var e78 = function(t) {
            $.PageDialog.fail(t)
        };
        var d578 = function() {
            if (!isLoaded) {
                return
            }
            var u = l78.val();
            if (u == "" || u == h78.txtStr) {
                e78(h78.txtStr);
                return
            } else {
                if (!m78(u)) {
                    e78(h78.error)
                } else {
                    var t = function(v) {
                        if (v.state == 0) {
						    e78(h78.sucess);
                            layer.confirm('注册成功!', {
                                btn: ['立即登陆', '返回首页'] //可以无限个按钮
                              }, function(index, layero){
                                //按钮【按钮一】的回调
                                location.href = Gobal.Webpath+"/mobile/mobile/";
                              }, function(index){
                                //按钮【按钮二】的回调
                                location.href = Gobal.Webpath+"/mobile/mobile/";
                              });
							//location.href = Gobal.Webpath+"/mobile/mobile/";
                            return
                        } else {
                            e78(h78.outtime);
                            f78.html(c78.txtStr).removeClass("grayBtn").bind("click", d578)
                        }
                        isLoaded = true
                    };
                    isLoaded = false;
                    f78.html(c78.checkCode).addClass("grayBtn").unbind("click");
					GetJPData(Gobal.Webpath, "ajax", "mobileregsn/"+o78+"/"+ u, t)
                }
            }
        };
        var k578 = function() {
            if (!isLoaded) {
                return
            }
            var t = function(u) {
                isLoaded = true;
                if (u.state == 0) {
                    s78();
                    return
                } else {
                    if (u.state == 2) {
                        e78(h78.many, 170)
                    }else if(u.state == 1){
					  e78(h78.codeerr,170)
					} else {
                      e78(h78.retry, 170)
                    }
                }
            };
            isLoaded = false;
			GetJPData(Gobal.Webpath, "ajax", "sendmobile/"+o78, t)
        };
        var s78 = function() {
            var v = n78;
            v.unbind("click").addClass("grayBtn");
            var u = 120;
            var t78 = function() {
                if (u < 2) {
                    v.bind("click", k578).html(g78.txtStr).removeClass("grayBtn");
                    return
                } else {
                    u--;
                    v.html(g78.txtStr + "(" + u + ")")
                }
                setTimeout(t78, 1000)
            };
            t78()
        };
        var q92 = "";
        var r52 = function() {
            var t = l78.val();
            if (q92 != t) {
                if (p78(t) || t == "") {
                    q92 = t
                } else {
                    l78.val(q92).focus()
                }
            }
            if (checkSwitch) {
                setTimeout(r52, 200)
            }
        };
        l78.bind("focus",
        function() {
            $(this).attr("style", "color:#666666");
            checkSwitch = true;
            r52()
        }).bind("blur",
        function() {
            checkSwitch = false
        });
        f78.bind("click", d578);
        n78.bind("click", k578);
        s78();
        isLoaded = true
    };
    Base.getScript(Gobal.Skin + "/js/mobile/pageDialog.js", a2)
});