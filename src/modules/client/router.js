import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
import login from './Login/login'
const routes = [
    {
        path:'/',
        component:login
    }
];

export default new VueRouter({
    routes:routes
})