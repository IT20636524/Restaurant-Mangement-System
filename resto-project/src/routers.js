import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login'
import Add from './components/Add'
import Update from './components/Update'
import AdminDash from './components/AdminDash'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'Add',
        component:Add,
        path:'/add'
    },
    {
        name:'Update',
        component:Update,
        path:'/update/:id'
    },
    {
        name:'AdminDash',
        component:AdminDash,
        path:'/dash'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;