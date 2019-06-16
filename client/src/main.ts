import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faTimes,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons'
import {
  faJs
} from '@fortawesome/free-brands-svg-icons'
library.add(
  faBars,
  faTimes,
  faArrowLeft,
  faJs
)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  apolloProvider: createProvider(),
  render: (h) => h(App)
}).$mount('#app')
