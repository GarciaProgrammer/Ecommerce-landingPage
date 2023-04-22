import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from '../components/aboutUsView.vue'
import ClothesView from '../components/ClothesView.vue'
import AccessoriesView from '../components/AccessoriesView.vue'
import ContactView from '../components/ContactView.vue'
import ProfileView from '../components/ProfileView.vue'
import ShoppingCartView from '../components/ShoppingCartView.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sobre-nos',
      name: 'about-us',
      component: AboutUsView
    },
    {
      path: '/clothes',
      name: 'clothes',
      component: ClothesView
    },
    {
      path: '/accessories',
      name: 'accessories',
      component: AccessoriesView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/shopping-cart',
      name: 'shopping-cart',
      component: ShoppingCartView,
    }
  ]
})

export default router
