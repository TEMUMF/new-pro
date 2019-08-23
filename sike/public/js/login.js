// 登录方式选择
(function(){
var phone=document.querySelector("div.top-box>[data-target=phone]");
var uname=document.querySelector("div.top-box>[data-target=uname]");
phone.onclick=function(){
  var id=this.getAttribute("data-target");
  var div=document.getElementById(id);
  this.className="active";
  this.nextElementSibling.className="";
  div.className="";
  div.nextElementSibling.className="hide";
}
uname.onclick=function(){
  var id=this.getAttribute("data-target");
  var div=document.getElementById(id);
  this.className="active";
  this.previousElementSibling.className="";
  div.className="";
  div.previousElementSibling.className="hide";
}
})();

// 输入验证
var txtPhone=document.getElementById("phone").firstElementChild; 
var txtName=document.querySelector("div#uname>[name=uname]");
var txtPwd=document.querySelector("[name=upwd]");
// 获取焦点
function txtFocus(){
  var show=this.nextElementSibling;
  show.className="";
  show.innerHTML=show.getAttribute("data_focus");
}
txtPhone.onfocus=txtName.onfocus=txtPwd.onfocus=txtFocus;
// 验证
function txtBlur(txt,reg){
  console.log(reg);
  var show=txt.nextElementSibling;
  if(reg.test(txt.value)){
    show.className="vali_success";
    show.textContent="";
  }else{
    show.className="vali_fail";
    show.textContent=show.getAttribute("data_fail");
  }
}
txtPhone.onblur=function(){txtBlur(this,/^1[3-9]\d{9}$/);}
txtName.onblur=function(){txtBlur(this,/^\w{1,10}$/)}
txtPwd.onblur=function(){txtBlur(this,/^[0-9a-zA-Z]\w{6,}$/)}