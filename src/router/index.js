import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film.vue'
import Cinema from '@/views/Cinema.vue'
import Center from '@/views/Center.vue'
import Nowplaying from '@/views/Film/Nowplaying.vue'
import Comingsoon from '@/views/Film/Comingsoon'
import Detail from '@/views/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    component: Film,
    children: [
      {
        path: 'nowplaying',
        component: Nowplaying
      },
      {
        path: 'comingsoon',
        component: Comingsoon
      },
      {
        path: '',

        redirect: '/film/nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/detail',
    component: Detail,
    name: 'Detail'

  }, {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '*',
    redirect: '/film/nowplaying'
  }
]

const router = new VueRouter({
  // mode history表示路径没#
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
