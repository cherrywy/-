// JScript File
function DoWinOpen(OpenUrl)
{
Hour=new Date().getHours();
Minutes=new Date().getMinutes();
Seconds=new Date().getSeconds();
PageHandle=Hour+Minutes+Seconds;
window.open(OpenUrl,PageHandle,'status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=no,menubar=no,status=no,directories=no,left=0,top=0,width=750,height=520');
}

function DoOpenBlank(OpenUrl)
{
Hour=new Date().getHours();
Minutes=new Date().getMinutes();
Seconds=new Date().getSeconds();
PageHandle=Hour+Minutes+Seconds;
window.open(OpenUrl,PageHandle,'status=yes,toolbar=yes,menubar=yes,location=yes,resizable=yes,scrollbars=yes,menubar=yes,status=yes,directories=yes,left=0,top=0,width=750,height=520');
}
function DoClose()
{
  window.opener=null;
  window.parent.close();
}
 /*表单输入时校验专用*/
 function regInput(obj, reg, inputStr)
 {
  var docSel = document.selection.createRange()
  if (docSel.parentElement().tagName != "INPUT") return false
  oSel = docSel.duplicate()
  oSel.text = ""
  var srcRange = obj.createTextRange()
  oSel.setEndPoint("StartToStart", srcRange)
  var str = oSel.text + inputStr + srcRange.text.substr(oSel.text.length)
  return reg.test(str)
 }
/*检查是否是为空*/
 function isEmpty (str) {
    if ((str==null)||(str.length==0)) return true;
    else return(false);
}
/*检查是否是密码*/
function isPasswd(s)
{
 var patrn=/^[a-zA-Z0-9]{6,20}$/;
 if (!patrn.exec(s)) return false
 return true
}

function checkMobile(mobile)
{
    var reg1 = /^1[358]\d{9}$/;
    if(reg1.test(mobile)){
        return true;
    }
    return false;
}

/*检查是否是Float*/
function isFloat(s)
{
 var patrn=/^[+|-]?\d*\.?\d*$/;
 if (!patrn.exec(s)) return false
 return true
}

/*检查是否是手机号码*/
function isMobile(s)
{
    if(/^13\d{9}$/.test(s)||(/^15\d{9}$/.test(s))||(/^18[8,9]\d{8}$/.test(s)))
    {
        return true;
    }
    else
    {
        return false;
    }
}
/*检查是否是Email*/
function isEmail(s)
{
 var patrn=/^\w+([-+.]\w+)*@\w+([-.]\\w+)*\.\w+([-.]\w+)*$/;
 if (!patrn.exec(s)) return false
 return true
}
/*检查是否是身份证号*/
function isIDCard(s)
{
 var patrn=/^\d{15}(\d{2}[A-Za-z0-9])?$/;
 if (!patrn.exec(s)) return false
 return true
}
/*检查是否是邮政编码*/
function isZip(s)
{
 var patrn=/^[1-9]\d{5}$/;
 if (!patrn.exec(s)) return false
 return true
}
/*检查是否是QQ*/
function isQQ(s)
{
 var patrn=/^[1-9]\d{4,8}$/;
 if (!patrn.exec(s)) return false
 return true
}
/*检查是否是Currency（金额）*/
function isCurrency(s)
{
 var patrn=/^\d+(\.\d+)?$/;
 if (!patrn.exec(s)) return false
 return true
}
/*检查是否是电话号码*/
function isPhone(s)
{
 //? 或 {0,1}代码可有可无
 var patrn = /^((\(\d{3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(-(\d{3,4}))?$/;
 if (!patrn.exec(s)) return false
 return true
}
/*检查是否是URL*/
function isUrl(s)
{
 var patrn=/^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\’:+!]*([^<>\"\"])*$/;
 if (!patrn.exec(s)) return false
 return true
}
/*检查是否是English*/
function isEnglish(s)
{
 var patrn=/^[A-Za-z]+$/;
 if (!patrn.exec(s)) return false
 return true
}
/*检查是否是Int*/
function isInt(s)
{
 var patrn=/^[-\+]?\d+$/;
 if (!patrn.exec(s)) return false
 return true
}
/*检查是否是Date*/
function isDate(s)
{
 var patrn=/^\d{1,4}([-\/](\d{1,2}([-\/](\d{1,2})?)?)?)?$/;
 if (!patrn.exec(s)) return false
 return true
}
function isDateTime(str)
{
  var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/; 
  var r = str.match(reg); 
  if(r==null)return false; 
  var d= new Date(r[1], r[3]-1,r[4],r[5],r[6],r[7]); 
  return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]&&d.getHours()==r[5]&&d.getMinutes()==r[6]&&d.getSeconds()==r[7]);
}
//文本转换成日期
function strToDateTime(strDate){
  var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/; 
  var r = strDate.match(reg); 
  var d= new Date(r[1], r[3]-1,r[4],r[5],r[6],r[7]);
  return d;
}
function strToDate(strDate){
	var arr1 = strDate.split("-");
	var date1 = new Date(arr1[0],parseInt(arr1[1])-1,arr1[2]);
	return date1;
}
//校验是否为ip地址
function isIP(str){
  if(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.test(str)==false)
  {
    //window.alert('错误的IP地址格式');
    return false;
  }
  if(RegExp.$1<1 || RegExp.$1>254||RegExp.$2<0||RegExp.$2>254||RegExp.$3<0||RegExp.$3>254||RegExp.$4<1||RegExp.$4>254)
  {
    //window.alert('错误的IP地址');
    return false;
  }
  return true;
}
//校验登录名：只能输入6-20个以字母开头、可带数字、“_”、“.”的字串
function isRegisterUserName(s)
{
    var patrn=/^[a-zA-Z]{1}([a-zA-Z0-9._]){3,19}$/;
    if (!patrn.exec(s)) return false
    return true
}
//删除字符串两头的空格
function trim(str){
       return str.replace(/^\s+|\s+$/g, "");
}
//字符或者汉字长度
function StringLength(obj,len)
{
    if(obj.replace(/[^\x00-\xff]/g,"**").length>len)
    {
        return true;
    }
    else
    {
        return false;
    }
}
//字符或者汉字长度
function strLen(obj) {
    return obj.replace(/[^\x00-\xff]/g, "**").length;
}

function addCookie(objName,objValue,objHours){//添加cookie
    var str = objName + "=" + escape(objValue);
    if(objHours > 0){//为0时不设定过期时间，浏览器关闭时cookie自动消失
     var date = new Date();
     var ms = objHours*3600*1000;
     date.setTime(date.getTime() + ms);
     str += "; expires=" + date.toGMTString();
    }
    document.cookie = str;
    return true;
   }
  
   function getCookie(objName){//获取指定名称的cookie的值
    var arrStr = document.cookie.split("; ");
    for(var i = 0;i < arrStr.length;i ++){
     var temp = arrStr[i].split("=");
     if(temp[0] == objName) return unescape(temp[1]);
    }
   }
  
   function delCookie(name){//为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = name + "=a; expires=" + date.toGMTString();
   }
  //读取出来所有的cookie字筗串了
   function allCookie(){//读取所有保存的cookie字符串
    var str = document.cookie;
    if(str == ""){
     return false;
    }
    return true;
   }

//设置鼠标经过td的背景样式  
function mouseOver(obj){
	if(obj.className="td_mouse_out")
     obj.className="td_mouse_over";
}

function mouseOut(obj){
  if(obj.className="td_mouse_over")
     obj.className="td_mouse_out";
}   
