import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import MintUI from "mint-ui"
import 'mint-ui/lib/style.css'

import '../public/css/common.css'
import '../public/css/header.css'
import '../public/css/index.css'
// import '../public/js/jquery-1.11.3'
// import '../public/js/index.js'

Vue.config.productionTip = false
Vue.use(MintUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
