import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film.vue'
import Cinema from '@/views/Cinema.vue'
import Center from '@/views/Center.vue'
import Nowplaying from '@/views/filmchild/nowplaying.vue'
import Comingsoon from '@/views/filmchild/comingsoon.vue'
import Login from '@/views/Login.vue'
import Detail from '@/components/Detail.vue'

Vue.use(VueRouter)

// const auth = {
//   Logins () {
//     return false
//   }
// }

const routes = [
  {
    path: '/film',
    // name: 'Home',
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
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '*',
    redirect: '/film'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === '/center') {
//     console.log('盘查')
//     if (auth.Logins()) {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

export default router
