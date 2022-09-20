// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
require('@/assets/styles/main.css')
import App from './App'
import router from './router'
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
// Vue.use(options);
Vue.config.productionTip = false
// const options = {
//   name: '_blank',

//   styles: [
//     'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
//     'https://unpkg.com/kidlat-css/css/kidlat.css',

//   ],

// }
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


