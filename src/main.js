import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import LoadScript from "vue-plugin-load-script";


Vue.use(BootstrapVue)

// 외부 스크립트 import
Vue.use(LoadScript);
Vue.loadScript()
Vue.loadScript("/assets/js/main.js")
Vue.loadScript("/assets/js/skel.min.js")
Vue.loadScript("/assets/js/jquery.min.js")
Vue.loadScript("/assets/js/util.js")

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
