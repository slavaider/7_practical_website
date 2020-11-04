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
        ads: []
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload);
        },
        fetchAds(state, payload) {
            state.ads = payload;
        }
    },
    actions: {
        async createAd({commit, getters}, payload) {
            commit('clearError')
            commit('setLoading', true)
            const image = payload.image
            try {
                const newAd = new Ad(
                    payload.title,
                    payload.description,
                    getters.user.id,
                    '',
                    payload.promo);
                const ad = await firebase.database.call('itc-ads-b1138').ref('ads').push(newAd)
                const imageExtension = image.name.slice(image.name.lastIndexOf('.'));
                const fileData = await firebase.storage.call('itc-ads-b1138').ref(`ads/${ad.key}${imageExtension}`).put(image)
                const src = await fileData.ref.getDownloadURL()
                await firebase.database.call('itc-ads-b1138').ref('ads').child(ad.key).update({src})
                commit('setLoading', false)
                commit('createAd', {...newAd, id: ad.key, src});
            } catch (error) {
                commit('setError', error)
                commit('setLoading', false)
                throw error
            }
        },
        async fetchAds({commit}) {
            commit('clearError')
            commit('setLoading', true)
            const result_ads = []
            try {
                const firebase_values = await firebase.database.call('itc-ads-b1138').ref('ads').once('value')
                const ads = firebase_values.val()
                Object.keys(ads).forEach(key => {
                    const ad = ads[key]
                    result_ads.push(new Ad(ad.title, ad.description, ad.owner_id, ad.src, ad.promo, key))
                })
                commit('fetchAds', result_ads)
                commit('setLoading', false)
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
