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
        createAd({commit}, payload) {
            payload.id = '123'
            commit('createAd', payload)
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
