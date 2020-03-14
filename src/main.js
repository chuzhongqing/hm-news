import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'

import './style/base.less'
import 'lib-flexible'
import './style/iconfont.less'
import axios from 'axios'
// axios再发送请求的时候会自动把这段地址拼接到请求的url前面
axios.defaults.baseURL='http://localhost:3000'
//把axios绑定到vue的原型上
Vue.prototype.$axios=axios
Vue.config.productionTip = false

import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
import HmBtn from './components/HmBtn.vue'
import HmInput from './components/HmInput.vue'
Vue.component('HmHeader',HmHeader)
Vue.component('HmLogo',HmLogo)
Vue.component('HmBtn',HmBtn)
Vue.component('HmInput',HmInput)
new Vue({
  el:'#app',
  router,
  render: h => h(App)
})
