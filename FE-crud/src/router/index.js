import { createRouter, createWebHistory } from 'vue-router'
import admin from './admin.js';
import user from './user.js'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...admin,...user
  ]
})

export default router
