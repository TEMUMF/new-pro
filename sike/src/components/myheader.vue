<template>
  <div>
    <header>
        <a href="#" class="logo"> <img src="../image/max_logo3.png" alt="logo"> </a>
        <nav class="d-inline-block">
            <ul>
                <li><a href="index.html" class="active" target="blank">首页</a></li>
                <li class="select">
                    <a href="#">数据</a>
                    <div class="sel-box">
                        <a href="hero.html" target="blank">英雄</a>
                        <a href="#">物品</a>
                    </div>
                </li>
                <li><a href="#">职业</a></li>
                <li><a href="#">玩家</a></li>
                <li><a href="#">天梯</a></li>
                <li><a href="#">直播</a></li>
                <li><a href="app.html" target="blank">APP</a></li>
                <li><a href="#">商城</a></li>
            </ul>
        </nav>
        <div class="select">
            <div class="header-right clearM">
                <p></p>
                <div class="clearM"> 用户名sjfkjs  </div>
                <div>
                    <img src="../image/icon/arrow-down.png" alt="">
                </div>
                <!-- <div>
                    <b class="arrow"><b></b></b> 
                </div> -->
            </div>
            <!-- 隐藏选项 -->
            <div class="disvisible">
                <div>
                    <a href="#">数据主页</a>
                    <a href="#">竞猜主页</a>
                    <a href="#">帐号设置</a>   
                    <a href="#">注销帐号</a> 
                </div>
            </div>
        </div>
    </header>
    <div class="banner">
        <section>    
            <div class="clearF">
                <div class="QRcode fr clearF">
                    <div class="fl">
                        <img src="../image/qr.png" alt="二维码">
                    </div>
                    <div class="fr">
                        <p>DotaMax移动端</p>
                        <p><img src="../image/icon/android_gray.png" class="icon">&nbsp;<span>IOS下载</span> </p>
                        <p><img src="../image/icon/IOS_gray.png" class="icon">&nbsp;<span>安卓下载</span> </p>
                    </div>
                </div>
            </div>
            <div class="prize-pool fr text--info">
              <a href="#">TI9奖金池:
                <span>$23,802,882</span>
                <span color="#2E8B57">93.2%</span>
            </a>
            </div>
        </section>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  props:{

  },
  methods:{

  }

}
</script>

<style>

</style>
