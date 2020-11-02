import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import vuelidate from 'vuelidate'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import firebase from 'firebase'
// My router
import router from './plugins/routes'
//Store
import store from './store/index'

Vue.config.productionTip = false

// Use
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(vuelidate)


new Vue({
    render: h => h(App),
    router,
    vuetify,
    store,
    created() {
        firebase.initializeApp({
            apiKey: "AIzaSyB0VbG9aQGVttu8Xi5fMEGL7iQVwY-LfkM",
            authDomain: "itc-ads-b1138.firebaseapp.com",
            databaseURL: "https://itc-ads-b1138.firebaseio.com",
            projectId: "itc-ads-b1138",
            storageBucket: "itc-ads-b1138.appspot.com",
            messagingSenderId: "32393797502",
            appId: "1:32393797502:web:784ac5a4ea9779af1fdd2f",
            measurementId: "G-SXZQBNXYW0"
        })
    }
}).$mount('#app')
