import Vue from 'vue'
import Vuex from 'vuex'
// Modules
import ads from './Ads'
import user from './User'
import shared from './Shared'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {ads, user, shared}
})
