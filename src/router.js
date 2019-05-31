import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
// import register from './views/register.vue'

Vue.use(Router)

export default new Router({
  // linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './views/register.vue')
    },
    {
      path: '/news',
      // name: 'news',
      component: () => import(/* webpackChunkName: "news" */ './views/News.vue'),
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import(/* webpackChunkName: "detail" */ './views/List.vue'),
          meta: {
            requiresAuth: true,
            active: '/news'
          }
        },
        {
          path: 'detail',
          name: 'detail',
          component: () => import(/* webpackChunkName: "detail" */ './views/Detail.vue'),
          meta: {
            requiresAuth: true,
            active: '/news'
          }
        },
        {
          path: 'add',
          name: 'add',
          component: () => import(/* webpackChunkName: "add" */ './views/Add.vue'),
          meta: {
            requiresAuth: true,
            active: '/news'
          }
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: () => import(/* webpackChunkName: "user" */ './views/User.vue'),
      meta: {
        requiresAuth: true,
        active: 'user'
      }
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
