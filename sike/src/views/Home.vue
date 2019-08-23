<template>
  <div class="home">
    <myheader></myheader>
    <banner></banner>
    <section class="floor-2 clearF">
      <indexlive></indexlive>
      <indexaside></indexaside> 
      <indexshop></indexshop>
    </section> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Myheader from '../components/myheader'
import IndexLive from '../components/index_live'
import Banner from '../components/banner'
import Aside from '../components/index_aside'
import IndexShop from '../components/index_shop_league'

export default {
  name: 'home',
  components: {
    HelloWorld,
    myheader:Myheader,
    indexlive:IndexLive,
    banner:Banner,
    indexaside:Aside,
    indexshop:IndexShop
  }
}
</script>
