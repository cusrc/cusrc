
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

/**
 * 时间戳格式化函数
 * @param  {string} format    格式
 * @param  {int}    timestamp 要格式化的时间 默认为当前时间
 * @return {string}           格式化的时间字符串
 */


/**************************************时间格式化处理************************************/
function DateFormat( date,fmt)
{ //author: meizz
    date = date * 1000;
    date = parseInt(date);
    date = new Date(date-0);
    if(fmt==undefined){
        fmt ="yyyy-MM-dd hh:mm:ss";
    }
    var o = {
        "M+" : date.getMonth()+1,                 //月份
        "d+" : date.getDate(),                    //日
        "h+" : date.getHours(),                   //小时
        "m+" : date.getMinutes(),                 //分
        "s+" : date.getSeconds(),                 //秒
        "q+" : Math.floor((date.getMonth()+3)/3), //季度
        "S"  : date.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}

String.prototype.Rep=function(f,e){//吧f替换成e
    var reg=new RegExp(f,"g"); //创建正则RegExp对象
    return this.replace(reg,e);
}


function AddShopCart (ShopId,ShopNum,cartbs) {
    //alert(ShopId);
    //添加到购物车
        if(ShopNum==undefined)ShopNum=1;
      //  var cartbs='cart';//标识从哪里加的购物车
        var shopis=0;          //0表示不存在  1表示存在
        var Mcartlist=  localStorage.getItem('Cartlist');
        console.log("Mcartlist",Mcartlist);
        if(Mcartlist){
            Mcartlist = JSON.parse(Mcartlist);
        }
        if(ShopId==0 || ShopNum==0){
            //  $cart['code']=1;   //表示添加失败
           // addsuccess('添加失败!');
           //layer.msg("添加失败");
            $.PageDialog.fail("添加失败"  );
        }else{
            if(Mcartlist){
                for(var key in Mcartlist ){
                    var val = Mcartlist[key];
                    if(key==ShopId){
                        if(cartbs&& cartbs=='cart'){
                            Mcartlist[ShopId]={};
                            Mcartlist[ShopId]['num']=ShopNum;
                        }else{
                            Mcartlist[ShopId]={};
                            Mcartlist[ShopId]['num']=val['num']+ShopNum;
                        }
                        shopis=1;
                    }else{
                        Mcartlist[key]['num']=val['num'];
                    }
                }
            }else{
                Mcartlist ={};
                Mcartlist[ShopId]={};
                Mcartlist[ShopId]['num']=ShopNum;
            }
            if(shopis==0){
                Mcartlist[ShopId]={};

                Mcartlist[ShopId]['num']=ShopNum;
            }
            // _setcookie('Cartlist',json_encode($Mcartlist),'');
            console.log(Mcartlist);
            Mcartlist = JSON.stringify(Mcartlist);
            localStorage.setItem('Cartlist',Mcartlist);
            //$cart['code']=0;   //表示添加成功
           // addsuccess('添加成功!');
           $.PageDialog.ok("<s></s>添加成功"  );
          //  layer.msg("添加成功");
        }
        //$cart['num']=count($Mcartlist);    //表示现在购物车有多少条记录
        //var_dump($Mcartlist);
        // echo json_encode($cart);




        // $.getJSON(localStorage.getItem('baseUrlServer')+'/index.php/mobile/ajax/addShopCart/'+codeid+'/1',function(data){
        // 	if(data.code==1){
        // 		addsuccess('添加失败');
        // 	}else if(data.code==0){
        // 		addsuccess('添加成功');
        // 	}return false;
        // });


}


function  ClearShopCart() {

    localStorage.removeItem('Cartlist');
}

function  IsExitShopCartList() {
    var Mcartlist =  localStorage.getItem('Cartlist');
    if(Mcartlist) return true;
    return false;
}

function LoginOut() {
    localStorage.removeItem('uid');
    localStorage.removeItem('ushell');
}

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

function  NumToBCode(Number) {
    var BCode = "123456789ABCDEFGHIJKLMNPQRSTUVWXYZ";
    var JinZhi = BCode.length;
    var Code ="";
    var TempCode = [];
    var mi = 0;
    while (Number>0){
        var TempNum =Number % JinZhi ;
        Code +=BCode[TempNum];
        Number = (Number - TempNum) / JinZhi ;
    }
    Code = Code. split('').reverse().join("");
    switch (Code.length) {
        case 1: Code = "OOO" + Code;break;
        case 2: Code = "OO" + Code;break;
        case 3: Code = "O" + Code;break;
    }
    return Code ;
}
function  BCodeToNum(Code) {
    Code =Code.toUpperCase();
    // var val = "这是一个变量，这是一个变量".replace(eval("/变量/g"),"替换");
    Code = Code.replace(eval("/0/g"),"");
    Code = Code.replace(eval("/O/g"),"");
    var BCode = "123456789ABCDEFGHIJKLMNPQRSTUVWXYZ";
    var JinZhi = BCode.length;
    var TempCode = [];
    var Number = 0;
    Code =   Code. split(''). reverse(). join("");
    for(var i=0;i<Code.length;i++){
        var CuurrNum = BCode.indexOf(Code[i]);
        TempCode.push({num:CuurrNum,mi:i});
    }
    for(var i=0;i<TempCode.length;i++){
        Number+= TempCode[i].num *  Math.pow(JinZhi,TempCode[i].mi );
    }
    return Number;
}
function CheckNUMCode(num){
    var Code =  NumToBCode(num);
    var Num2 =  BCodeToNum(Code);
    var Success = Num2 == num? "Success":"fail";
    console.log(Success,Num2,Code);
}
function CheckDataStart(){
    var CheckData =[1000,1,45,2134,999999];
    for(var i=0;i<CheckData.length;i++){
        CheckNUMCode(CheckData[i]);
    }
}
