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

export default new VueRouter({
    routes: [
        {path: "", component: Home},
        {path: "/login", component: Login},
        {path: "/registration", component: Registration},
        {path: "/orders", component: Orders},
        {path: "/new", component: NewAdd},
        {path: "/list", component: AdList},
        {path: 'ad/:id', component: Ad}
    ],
    mode: "history",
});
