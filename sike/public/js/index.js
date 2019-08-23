(function(){
  var i=0;
var count=6;
var liWidth=530;
var timeOut=1000;
var interval=3000;
var banner=document.getElementById("banner");

// 创建轮播函数
function moveTo(to){
  // 如果输入为空,自动跳转下一个
  if(to==undefined){
    to=i+1;
  }
  // 如果输入不为空,判断当前位置
  if(i==0){
    if(to>i){
      banner.className="transition";
    }else{
      // 如果为第一张,撤销过渡
      banner.className="";
      banner.style.marginLeft=-liWidth*count+"px";
      //  设定时间后,重新赋予过渡属性
      setTimeout(function(){
        moveTo(count-1);
        i=0;
      },0);
      return;
    }
  }
    // 如果不是第一张,给ML=-i*width
    i=to;
    banner.style.marginLeft=-i*liWidth+"px";
    // 有过渡
    // 回到第一张
    if(i==count){
      i=0;
      setTimeout(()=>{
        banner.className="";
        banner.style.marginLeft=0;
      },timeOut);
    }
}
// // 自动轮播
var timer=setInterval(function(){
  moveTo();
},interval);
banner.onmouseover=function(){
  clearInterval(timer);
}
banner.onmouseout=function(){
  timer=setInterval(function(){
    moveTo();
  },interval);
}
})();
// AJAX
/* (function(){
  ajax({
  url:"http://localhost:3000/index",
  type:"get",
  dataType:"json"
  }).then(function(result){
    console.log(result);
  });
})(); */

