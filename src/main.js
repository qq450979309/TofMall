// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './publicAPI/routes'
import './assets/style/reset.css'

import config from './publicAPI/config'
import './../node_modules/vue/dist/vue.js'

Vue.config.productionTip = false

Vue.use(VueRouter)


const router = new VueRouter({
	routes
})

new Vue({
  router
}).$mount('#app')
