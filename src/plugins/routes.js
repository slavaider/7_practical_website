// Роутер
import VueRouter from 'vue-router'
// Components
import Home from '../components/Home/Home'
import Login from '../components/Auth/Login'
import Registration from '../components/Auth/Registration'
import Orders from '../components/User/Orders'
import AdList from '../components/Ads/AdList'
import NewAdd from '../components/Ads/NewAd'
import Ad from '../components/Ads/Ad'
import auth_guard from './auth_guard'

export default new VueRouter({
    routes: [
        {path: "", component: Home},
        {path: "/login", component: Login},
        {path: "/registration", component: Registration},
        {path: "/orders", component: Orders, beforeEnter: auth_guard},
        {path: "/new", component: NewAdd, beforeEnter: auth_guard},
        {path: "/list", component: AdList, beforeEnter: auth_guard},
        {path: '/ad/:id', props: true, component: Ad},
    ],
    mode: "history",
});
