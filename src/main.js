import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
import Vue from 'vue'
import App from './App.vue'
import store from "./config/store/store"
import router from "./config/router"
new Vue({
  router,store,
  render: h => h(App),
}).$mount('#app')
