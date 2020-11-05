import firebase from 'firebase'

class Order {
    constructor(name, phone, adId, done = false, id = null) {
        this.name = name
        this.phone = phone
        this.adId = adId
        this.done = done
        this.id = id
    }
}

export default {
    state: {
        orders: []
    },
    mutations: {
        loadOrders(state, payload) {
            state.orders = payload
        }
    },
    actions: {
        async createOrder({commit}, {name, phone, adId, owner_id}) {
            const order = new Order(name, phone, adId)
            commit('clearError')
            try {
                await firebase.database.call('itc-ads-b1138').ref(`users/${owner_id}/orders`).push(order)
            } catch (error) {
                commit('setError', error.message)
                throw error
            }
            commit('createOrder', {name, phone, adId, owner_id});
        },
        async fetchOrders({commit, getters}) {
            commit('setLoading', true)
            commit('clearError')
            const result_orders = []
            try {
                const fbval = await firebase.database.call('itc-ads-b1138').ref(`users/${getters.user.id}/orders`).once('value')
                const orders = fbval.val()
                Object.keys(orders).forEach((key) => {
                    const order = orders[key]
                    result_orders.push(new Order(order.name, order.phone, order.adId, order.done, key))
                })
                commit('loadOrders', result_orders)
                commit('setLoading', false)
            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
            }
        },
        async markOrder({commit, getters}, payload) {
            commit('clearError')
            try {
                await firebase.database.call('itc-ads-b1138').ref(`users/${getters.user.id}/orders`).child(payload).update({done: true})
            } catch (error) {
                commit('setError', error.message)
                throw error
            }
        }
    },
    getters: {
        doneOrders(state) {
            return state.orders.filter(order => {
                return order.done === true
            })
        },
        undoneOrders(state) {
            return state.orders.filter(order => {
                return order.done !== true
            })
        },
        orders(state, getters) {
            return getters.undoneOrders.concat(getters.doneOrders)
        }
    }

}
