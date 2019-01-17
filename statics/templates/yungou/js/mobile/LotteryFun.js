$(function() {
    Gobal.Webpath = localStorage.getItem('baseUrlServer') + "index.php";
    var h_Lottery = null;
    var f_Lottery = 10;
    var a_Lottery = 0;
    var j_Lottery = {
        FIdx: 0,
        EIdx: f_Lottery,
        isCount: 1
    };
    var d_Lottery = $("#divLotteryLoading");
    var l_Lottery = $("#btnLoadMore_lottery");
    var m_Lottery = false;
    var c_Lottery = function(o_Lottery) {
        if (o_Lottery && o_Lottery.stopPropagation) {
            o_Lottery.stopPropagation()
        } else {
            window.event.cancelBubble = true
        }
    };
    var b_Lottery = function() {
        var o_Lottery = function() {
            return "/" + j_Lottery.FIdx + "/" + j_Lottery.EIdx + "/" + j_Lottery.isCount
        };
		 
        var p_Lottery = function() {
            d_Lottery.show();
           // console.log(Gobal.Webpath);
            GetJPData(localStorage.getItem('baseUrlServer')+"index.php", "ajax", "getLotteryList"+o_Lottery(),
            function(s) {			 
                if (s.code == 0) {
                    if (j_Lottery.isCount == 1) {
                        a_Lottery = s.count
                    }
                    var r_Lottery = s.listItems;
                    var t_Lottery = r_Lottery.length;
                    for (var q = 0; q < t_Lottery; q++) {
                        console.log(Gobal.LoadPic);

                        var img_40 =  localStorage.getItem('baseUrlServer')  + "/statics/";//+Gobal.imgpath
                            if(r_Lottery[q].userphoto!='photo/member.jpg') {
                                var v = '<ul id="' + r_Lottery[q].id + '"><li class="revConL">'
                                    + (r_Lottery[q].codeType == 1 ? '<span class="z-limit-tips">限时揭晓</span>': "")
                                    + '<img src="' + Gobal.LoadPic + '" src2="'+ localStorage.getItem('baseUrlServer')  + Gobal.imgpath +'/uploads/'
                                    + r_Lottery[q].thumb + '"></li><li class="revConR"><dl><dd class="touxianga"><img name="uImg" uweb="'
                                    + r_Lottery[q].q_uid + '" src="'+localStorage.getItem('baseUrlServer')  +Gobal.imgpath+'/uploads/'
                                    + r_Lottery[q].userphoto
                                    + '"></dd><dd><span>获得者<strong>：</strong><a_Lottery name="uName" uweb="'
                                    + r_Lottery[q].q_uid + '" class="rUserName blue">' + r_Lottery[q].q_user
                                    + '</a_Lottery></span>本期购买<strong>：</strong><em class="orange arial">'
                                    + r_Lottery[q].gonumber + '</em>人次</dd></dl><dt>幸运码：<em class="orange arial">'
                                    + r_Lottery[q].q_user_code + '</em><br/>揭晓时间：<em class="c9 arial">'
                                    + r_Lottery[q].q_end_time + '</em></dt><b class="fr z-arrow"></b></li></ul>';
                            }else if(r_Lottery[q].userphotow!=''){
                                var v = '<ul id="' + r_Lottery[q].id + '"><li class="revConL">'
                                    + (r_Lottery[q].codeType == 1 ? '<span class="z-limit-tips">限时揭晓</span>': "")
                                    + '<img src="' + Gobal.LoadPic + '" src2="'+ localStorage.getItem('baseUrlServer')  +Gobal.imgpath+'/uploads/'
                                    + r_Lottery[q].thumb + '"></li><li class="revConR"><dl><dd class="touxianga"><img name="uImg" uweb="'
                                    + r_Lottery[q].q_uid + '" src="'+r_Lottery[q].userphotow
                                    +'"></dd><dd><span>获得者<strong>：</strong><a_Lottery name="uName" uweb="'
                                    + r_Lottery[q].q_uid + '" class="rUserName blue">' + r_Lottery[q].q_user
                                    + '</a_Lottery></span>本期购买<strong>：</strong><em class="orange arial">'
                                    + r_Lottery[q].gonumber + '</em>人次</dd></dl><dt>幸运码：<em class="orange arial">'
                                    + r_Lottery[q].q_user_code + '</em><br/>揭晓时间：<em class="c9 arial">'
                                    + r_Lottery[q].q_end_time + '</em></dt><b class="fr z-arrow"></b></li></ul>';
                             
                            }else{
                                var v = '<ul id="' + r_Lottery[q].id + '"><li class="revConL">'
                                    + (r_Lottery[q].codeType == 1 ? '<span class="z-limit-tips">限时揭晓</span>': "")
                                    + '<img src="' + Gobal.LoadPic + '" src2="'+ localStorage.getItem('baseUrlServer')
                                    +Gobal.imgpath+'/uploads/' + r_Lottery[q].thumb + '"></li><li class="revConR"><dl>' +
                                    '<dd class="touxianga"><img name="uImg" uweb="' + r_Lottery[q].q_uid
                                    + '" src="'+localStorage.getItem('baseUrlServer')  +Gobal.imgpath+'/uploads/' + r_Lottery[q].userphoto
                                    + '"></dd><dd><span>获得者<strong>：</strong><a_Lottery name="uName" uweb="'
                                    + r_Lottery[q].q_uid + '" class="rUserName blue">' + r_Lottery[q].q_user
                                    + '</a_Lottery></span>本期购买<strong>：</strong><em class="orange arial">'
                                    + r_Lottery[q].gonumber + '</em>人次</dd></dl><dt>幸运码：<em class="orange arial">'
                                    + r_Lottery[q].q_user_code + '</em><br/>揭晓时间：<em class="c9 arial">'
                                    + r_Lottery[q].q_end_time + '</em></dt><b class="fr z-arrow"></b></li></ul>';
                            }
                        var u_Lottery = $(v);
                        Gobal.Webpath = "../../../index.php";
                        u_Lottery.click(function() {
                            location.href = Gobal.Webpath+"/mobile/mobile/item.html?id=" + $(this).attr("id")
                        }).find('img[name="uImg"]').click(function(w) {
                            location.href = Gobal.Webpath+"/mobile/mobile/userindex.html?uweb=" + $(this).attr("uweb");
                            c_Lottery(w)
                        });
                        u_Lottery.find('a_Lottery[name="uName"]').click(function(w) {
                            location.href = Gobal.Webpath+"/mobile/mobile/userindex.html?uweb=" + $(this).attr("uweb");
                            c_Lottery(w)
                        });
                        d_Lottery.before(u_Lottery)
                    }
                    if (j_Lottery.EIdx < a_Lottery) {
                        m_Lottery = false;
                        l_Lottery.show()
                    }
                    loadImgFun()
                }
                d_Lottery.hide()
            })
        };
        this.getInitPage = function() {
            p_Lottery()
        };
        this.getNextPage = function() {
            j_Lottery.FIdx += f_Lottery;
            j_Lottery.EIdx += f_Lottery;
            p_Lottery()
        }
    };
    l_Lottery.click(function() {
        if (!m_Lottery) {
            m_Lottery = true;
            l_Lottery.hide();
            h_Lottery.getNextPage()
        }
    });
    h_Lottery = new b_Lottery();
    h_Lottery.getInitPage();
    var e_Lottery = ",";
    var n_Lottery = false;
    var g_Lottery = 0;
    var i_Lottery = $("#divLottery");
	
    var k_Lottery = function() {

        console.log("Gobal.Webpath:",Gobal.Webpath);
        // if(Gobal.Webpath.indexOf("http")==-1){
        //     Gobal.Webpath = localStorage.getItem('baseUrlServer') +Gobal.Webpath;
        // }
        var url3213= localStorage.getItem('baseUrlServer') + "/index.php";
        GetJPData(url3213, "ajax", "GetStartRaffleAllList/" + g_Lottery,
        function(p) {
            if (p.errorCode == 0) {
                o_Lottery(p);
            }
            setTimeout(k_Lottery, 5000);
        });
        var o_Lottery = function(q_Lottery) {
            g_Lottery = q_Lottery.maxSeconds;
            var p_Lottery = function(t) {
                for (var r = t.length - 1; r > -1; r--) {
                    var s_Lottery = t[r];
                    if (e_Lottery.indexOf("," + s_Lottery.id + ",") < 0) {
                        e_Lottery += s_Lottery.id + ",";
                        var u = $('<ul class="rNow rFirst" id="' + s_Lottery.id + '"><li class="revConL"><img src="'+localStorage.getItem('baseUrlServer') +Path.path+'/statics/uploads/'+ s_Lottery.thumb + '"></li><li class="revConR"><h4>(第' + s_Lottery.qishu + "期)" + s_Lottery.title + "</h4><h5>价值：￥" + CastMoney(s_Lottery.money) + '</h5><p name="pTime"><s></s>揭晓倒计时 <strong><em>00</em> : <em>00</em> : <em>0</em><em>0</em></strong></p><b class="fr z-arrow"></b></li><div class="rNowTitle">正在揭晓</div></ul>');
                        u.click(function() {
                            Gobal.Webpath = "../../../index.php";
                            location.href =Gobal.Webpath+ "/mobile/mobile/item.html?id=" + $(this).attr("id");
                        });
                        i_Lottery.prepend(u);
                        u.next().removeClass("rFirst");
                        u.StartTimeOut(s_Lottery.id, parseInt(s_Lottery.seconds))
                    }
                }
            };
            if (n_Lottery) {
                p_Lottery(q_Lottery.listItems)
            } else {
                Base.getScript(Gobal.Skin + "/js/mobile/LotteryTimeFun.js",
                function() {
                    n_Lottery = true;
                    p_Lottery(q_Lottery.listItems)
                })
            }
        }
    };
    Base.getScript(Gobal.Skin + "/js/mobile/Comm.js", k_Lottery)
            $(window).scroll(function () {         
            if ($(document).height() - $(this).scrollTop() - $(this).height() < 1
                    && $('#btnLoadMore_lottery').css('display')!='none' ){
                if (!m_Lottery) {
                    m_Lottery = true;
                    l_Lottery.hide();
                    h_Lottery.getNextPage();
                }
            }
        });
});