import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
import HmBtn from './components/HmBtn.vue'
import './style/iconfont.less'
import './style/base.less'
import 'lib-flexible'
Vue.config.productionTip = false
Vue.component('HmHeader',HmHeader)
Vue.component('HmLogo',HmLogo)
Vue.component('HmBtn',HmBtn)
new Vue({
  el:'#app',
  router,
  render: h => h(App)
})
