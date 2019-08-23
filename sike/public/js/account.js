$(function(){

  $menu=$("ul.menu");
  $block=$(".block");
  $acountTitle=$("div.acount-title span")
  $menu.on("click","li",function(){
    $li=$(this);
    $liC=$li.attr("dataTarget");
    // count-title内容的修改
    $acountTitle.html($li.html());
    
    // 点击修改当前类
    $menu.children().removeClass("active");
    $li.addClass("active");
    // 定点跳转
    $block.each(function(i,elem){
      $elem=$(elem);
      if($elem.hasClass($liC)){
        $elem.show();
      }else{
        $elem.hide();
      }
    });
  })

  // 两个游戏之间的跳转
  $match=$("div.match-game");
  $match.on("click","a",function(){
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  })

  // 库存点击选中
  $stock=$(".block-2 #stock");
  $stock.on("click","div",function(){
    $(this).toggleClass("choose");
  })

})