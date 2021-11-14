import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

import postService from '../postServices';

const jwt = require('jsonwebtoken');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: { checkUser: true }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "Signup" */ '../views/Signup.vue'),
    meta: { checkUser: true }
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'pageNotFound',
    component: () => import(/* webpackChunkName: "Signup" */ '../views/pageNotFound.vue'),
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem("jwt");

      if (token) {
        jwt.verify(token, 'Secret Code', (err, decodedToken) => {
          if (err) {
            store.commit("updateErrorMessage", err.message)
            next()
          } else {
            store.commit("updateCurrentUserId", decodedToken.id);
            next();
          }
        })
      } else {
        next();
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const getUserProfile = async (data) => {
  let profileData = {
    email: data.user.email
  }
  let res = await postService.updateUserProfile(profileData);
  store.commit("updateProfileInfo", res)
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem("jwt");

    if (token) {
      jwt.verify(token, 'Secret Code', (err, decodedToken) => {
        if (err) {
          store.commit("updateErrorMessage", err.message)
          next({
            name: "Login"
          })
        } else {
          getUserProfile(decodedToken);
          store.commit("updateCurrentUserId", decodedToken.user.id);
          next();
        }
      })
    } else {
      next({
        name: "Login"
      });
    }
  }
  else if (to.matched.some(record => record.meta.checkUser)) {
    const token = localStorage.getItem("jwt");

    if (token) {
      jwt.verify(token, 'Secret Code', (err, decodedToken) => {
        if (err) {
          store.commit("updateErrorMessage", err.message)
          next()
        } else {
          store.commit("updateCurrentUserId", decodedToken.user.id);
          next({
            name: "Home"
          });
        }
      })
    } else {
      next();
    }
  }
  else {
    next();
  }
})

export default router
