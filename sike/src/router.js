import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Myheader from './components/myheader.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {path:'/myheader',component:Myheader}
  ]
})
