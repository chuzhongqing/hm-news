import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "../pages/Login.vue"
import register from "../pages/Register.vue"
import user from '../pages/User.vue'
Vue.use(VueRouter)
const router =new VueRouter({
    routes:[
        {path:'/',redirect:'/login'},
        {path:'/login',component:login},
        {path:'/register',component:register},
        {path:'/user',component:user}
    ]
})
export default router