$(function() {    var a = function() {        $("#divPeriod").touchslider();        Base.getScript(Gobal.Skin + "/js/mobile/GoodsPicSlider.js",        function() {            $("#sliderBox").picslider()        });        $("div.pOngoing").click(function() {            // Gobal.Webpath+ /mobile/mobile/        location.href = "item.html?id=" + $(this).attr("codeid")          //AddShopCart($(this).attr("codeid"));        })    };    Base.getScript(Gobal.Skin + "/js/mobile/PeriodSlider.js", a)});