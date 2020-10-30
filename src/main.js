import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import vuelidate from 'vuelidate'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
// My router
import router from './plugins/routes'

Vue.config.productionTip = false

// Use
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(vuelidate)


new Vue({
    render: h => h(App),
    router,
    vuetify
}).$mount('#app')
