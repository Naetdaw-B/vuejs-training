import VueRouter from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Form  from './views/Form'
import Photo from './views/Photo'
import Users from './views/Users'
import UserProfile from './views/UserProfile'
import TestPost from './views/TestPost'
const routes = [
    {
        path: '/home', component:Home 
    },
    {
        path: '/about', component:About 
    },
    {
        path: '/contact', component:Contact 
    },
    {
        path: '/form', component:Form 
    },
    {
        path: '/photo', component:Photo 
    },
    {
        path: '/users', component:Users
    },
    {
        path: '/users/:id', component:UserProfile
    },
    {
        path: '/TestPost', component:TestPost
    }
]
const router = new VueRouter({
routes:routes,
mode:'history'
})
export default router