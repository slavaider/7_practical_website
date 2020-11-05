import firebase from 'firebase';

class User {
    constructor(id) {
        this.id = id
    }
}

export default {
    state: {
        user: null,
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    },
    actions: {
        AutoLoginUser({commit}, payload) {
            commit('setUser', new User(payload.uid));
        },
        async registerUser({commit}, {email, password}) {
            commit('clearError')
            commit('setLoading', true)
            try {
                const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
                commit('setUser', new User(user.uid))
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },
        async loginUser({commit, getters}, {email, password}) {
            commit('clearError')
            commit('setLoading', true)
            try {
                const user = await firebase.auth().signInWithEmailAndPassword(email, password)
                commit('setUser', new User(user.uid))
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            } finally {
                console.log(getters.user.id)
            }
        },
        LogoutUser({commit}) {
            firebase.auth().signOut()
            commit('setUser', null)
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        isUserLoggedIn(state) {
            return state.user !== null
        }
    },
}
