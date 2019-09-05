import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/app.scss'
import FirebaseVue from './firebase'

Vue.config.productionTip = false

Vue.use(FirebaseVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
