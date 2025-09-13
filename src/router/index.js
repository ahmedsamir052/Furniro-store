import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Shop from '@/views/Shop.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Single from '@/views/Single.vue'
import Cart from '@/views/Cart.vue'
import Checkout from '@/views/Checkout.vue'
import Nav_bar from '../components/Nav_bar.vue'

const routes = [
  { path: '/', name: 'HomeDefault', component: Home },
  { path: '/home', name: 'Home', component: Home },
  { path: '/shop', name: 'Shop', component: Shop },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  { path: '/cart', name: 'CartMain', component: Cart },
  { path: '/product/:id', name: 'ProductDetails', component: Single },
  { path: '/cart/:id', name: 'Cart', component: Cart },
  { path: '/Nav_bar/:id', name: 'Nav_bar', component: Nav_bar },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router

