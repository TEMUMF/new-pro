$(function(){
  
  // 搜索框
  var $txt=$("input:text");
  $txt.focus(function(){
    $(this).addClass("focus");
  })
  .blur(function(){$(this).removeClass("focus")})

  // 随机颜色
  $(".list>a").each(function(i,elem){
    $elem=$(elem);
    $elem.css("color",`rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`)
  })
  
  /*  var lists=document.querySelectorAll(".list>a");
  for(var a of lists){
    a.style.color=`rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`;
  } */

  //tag类的选择与替换
  $("div.tag div.list").on("click","a",function(){
    var $tag=$(this);
    var $txt=$tag.html();
    var $color=$tag.css("color");
    if($tag.parent().is(".tag1")){
      changeTag("tag1");   
    }
    function changeTag(which){
      var $sA=$(`a.${which}`);
      $sA.html(`${$txt} \u2715`)
      .css("color",$color)
      .removeClass("d-none");  
    }
    if($tag.parent().is(".tag2")){
      changeTag("tag2");
    }
  })
  $("p.tag>b>a").click(function(){
    $(this).addClass("d-none");
  })

  // 点击更换排序title
  $("div.head-title>p.order").on("click","a",function(){
    $a=$(this);
    if($a.index()==0){
        $a.addClass("active");
      }else if($a.is(".active")){
        /*如果点击的不是第一个
          判断是否存在active
          如果已存在,换图片
          如果不存在active,添加class
          清除其余active
        */
       var $img=$a.find("img");
       var $src=$img.attr("src");
       var $next=$img.attr("data-next");
       if($img.is('[alt=down]')){
        $img.attr({'src':$next,'data-next':$src});
        $img.attr('alt','up');
      }else{
        $img.attr({'src':$next,'data-next':$src});
        $img.attr('alt','down');
      }
      }else{
        $a.addClass("active");
      }
      $a.siblings().removeClass("active");
  })
  
  // 放大镜效果
  



  // to-top
  var $toTop=$("div.toTop");
  $(window).scroll(
    function(){
    if($(window).scrollTop()>100){
      $toTop.css("opacity",1);
    }else{
      $toTop.css("opacity",0);
    }
  });
  $toTop.click(function(){
    $("html,body").animate({scrollTop:0},200)
  })
  
})