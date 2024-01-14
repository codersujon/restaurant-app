import HomePage from '@/components/HomePage.vue'
import SignUp from '@/components/SignUp.vue'
import LoginPage from '@/components/LoginPage.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: "HomePage",
        component: HomePage,
        path: '/'
    },
    {
        name: "SignUp",
        component: SignUp,
        path: '/SignUp'
    },
    {
        name: "LoginPage",
        component: LoginPage,
        path: '/login'
    }
]

const router = createRouter({ 
    history:createWebHistory(),
    routes
 })

 export default router