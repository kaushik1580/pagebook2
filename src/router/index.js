import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: () => import('../views/Start.vue'),
    children: [
      {
        path: '/home',
       
        component: () => import('../views/children/Home.vue')

      },
      {
        path: '/profile',
       
        component: () => import('../views/children/Profile.vue')

      },
      {
        path: '/notification',
       
        component: () => import('../views/children/Notification.vue')

      },
      {
        path: '/request',
       
        component: () => import('../views/children/Request.vue')

      },
      {
        path: '/search/:id',
        name: 'Search',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/children/Search.vue')
      },
      {
        path: '/reaction',
        name: 'Reaction',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/children/Reaction.vue')
      },
      {
        path: '/searchmoderator',
        name: 'SearchModerator',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/children/SearchModerator.vue')
      },
      {
        path: '/np',
        name: 'NP',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/children/chain/NP.vue')
      },
      {
        path: '/editp',
       
        component: () => import('../views/children/chain/EditP.vue')

      },
      {
        path: '/friends',
       
        component: () => import('../views/children/chain/Friends.vue')

      },
      {
        path: '/followings',
       
        component: () => import('../views/children/chain/Followings.vue')

      },
      {
        path: '/comdetail',
       
        component: () => import('../views/children/chain/ComDetail.vue')

      },
      {
        path: '/busp',
       
        component: () => import('../views/children/chain/BusP.vue')

      },
      {
        path: '/searchmod',
       
        component: () => import('../views/children/chain/SearchMod.vue')

      },
      {
        path: '/business',
       
        component: () => import('../views/children/Business.vue')

      },
      {
        path: '/moderator',
       
        component: () => import('../views/children/Moderator.vue')

      },

    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/reg',
    name: 'Registration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Registration.vue')
  },
  {
    path: '/comment',
    name: 'Comment',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Comment.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
