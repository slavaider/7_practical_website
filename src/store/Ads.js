import firebase from "firebase";

class Ad {
    constructor(title, description, owner_id, src, promo = false, id = null) {
        this.title = title;
        this.description = description;
        this.owner_id = owner_id;
        this.src = src;
        this.promo = promo;
        this.id = id;
    }
}

export default {
    state: {
        ads: [
            {
                title: 'First Ad',
                description: 'First Ad',
                src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                promo: false,
                id: '1'
            },
            {
                title: 'Second Ad',
                description: 'Second Ad',
                src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                promo: true,
                id: '2'
            },
            {
                title: 'Third Ad',
                description: 'Third Ad',
                src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                promo: true,
                id: '3'
            }
        ],
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload);
        }
    },
    actions: {
        async createAd({commit, getters}, payload) {
            commit('clearError')
            commit('setLoading', true)
            try {
                const newAd = new Ad(
                    payload.title,
                    payload.description,
                    getters.user.id,
                    payload.src,
                    payload.promo);
                const ad = await firebase.database.call('itc-ads-b1138').ref('ads').push(newAd)
                commit('setLoading', false)
                commit('createAd', {...newAd, id: ad.key});
            } catch (error) {
                commit('setError', error)
                commit('setLoading', false)
                throw error
            }
        }
    },
    getters: {
        get_ads(state) {
            return state.ads;
        },
        promo_ads(state) {
            return state.ads.filter((ad) => ad.promo);
        },
        my_ads(state) {
            return state.ads;
        },
        ad_by_id(state) {
            return adId => {
                return state.ads.find(ad => ad.id === adId);
            }
        }
    }
}
