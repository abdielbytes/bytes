import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import UnderConstruction from '@/components/UnderConstruction.vue'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/projects',
      name: 'History',
      component: UnderConstruction
    },
    {
      path: '/stuffs',
      name: 'Stuffs',
      component: UnderConstruction
    },
    {
      path: '/findme',
      name: 'FindMe',
      component: UnderConstruction
    }
  ]
})
