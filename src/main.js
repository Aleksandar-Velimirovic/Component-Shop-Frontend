import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMq from 'vue-mq'
import store from './store'
import ProgressBar from 'vuejs-progress-bar'

Vue.use(ProgressBar)

Vue.use(BootstrapVue)

Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 992,
    lg: Infinity,
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
