import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Marketing from '../components/Marketing.vue'
import Carousel from '../components/Carousel.vue'
import Verification from '../views/Verification.vue'
import SearchedComponents from '../views/SearchedComponents.vue'
import ProductCategory from '../views/ProductCategory.vue'
import SingleProduct from '../views/SingleProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/marketing',
    name: 'Marketing',
    component: Marketing
  },
  {
    path: '/carousel',
    name: 'Carousel',
    component: Carousel
  },

  {
    path: '/verification/:token',
    name: 'Verification',
    component: Verification
  },
  {
    path: '/search/:searchTerm',
    name: 'SearchedComponents',
    component: SearchedComponents
  },
  {
    path: '/products/category/:categoryId',
    name: 'ProductCategory',
    component: ProductCategory
  },
  {
    path: '/products/single/:id',
    name: 'SingleProduct',
    component: SingleProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
