import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
// import axios from 'axios'

// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// // 引入swiper
// import Swiper from 'swiper'
// import 'swiper/css/swiper.min.css'
// Vue.use(Swiper)

Vue.prototype.$MintUI = MintUI
Vue.config.productionTip = false
Vue.use(MintUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
