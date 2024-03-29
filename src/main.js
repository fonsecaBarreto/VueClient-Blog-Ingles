import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook ,faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebook,faYoutube,faInstagram)
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
import VueSwal from 'vue-swal'
Vue.use(VueSwal)
import Vue from 'vue'
import App from './App.vue'
import store from "./config/store/store"
import router from "./config/router"
/* import VuePageTransition from 'vue-page-transition'
Vue.use(VuePageTransition) */

import VueFacebookPixel from 'vue-analytics-facebook-pixel'
Vue.use(VueFacebookPixel);
Vue.analytics.fbq.init('3041038032616860');



new Vue({
  router,store,
  render: h => h(App),
}).$mount('#app')

Vue.filter("dateformat",
    (dataInput)=>{
      const data = new Date(dataInput);
      const dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
      return dataFormatada
    }
  )