<!--suppress ALL -->
<template>
    <div v-if="!loading">
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel
                            cycle
                            show-arrows-on-hover
                    >
                        <v-carousel-item
                                v-for="ad in promo_ads"
                                :key="ad.i"
                                :src="ad.src"
                        >
                            <div class="car-link">
                                <v-btn class="error" :to="'ad/'+ad.id">{{ad.title}}</v-btn>
                            </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container>
            <v-layout row wrap>
                <v-flex
                        v-for="ad in ads"
                        :key="ad.id"
                        md4
                        sm6
                        xs12
                >
                    <v-card
                            class="mx-3 my-3 py-3 px-3 elevation-12"
                    >
                        <v-img
                                height="200px"
                                :src="ad.src"
                        ></v-img>

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0"> {{ad.title}}</h3>
                                <div>{{ad.description}}</div>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text :to="'ad/'+ad.id">Open</v-btn>
                            <app-buy-model :ad="ad"></app-buy-model>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
    <div v-else>
        <v-container>
            <v-layout row>
                <v-flex xs class="text-center pt-5">
                    <v-progress-circular
                            :size="100"
                            :width="4"
                            indeterminate
                            color="purple"
                    ></v-progress-circular>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        computed: {
            promo_ads() {
                return this.$store.getters.promo_ads
            },
            ads() {
                return this.$store.getters.get_ads
            },
            loading() {
                return this.$store.getters.loading
            }
        }
    };
</script>

<style scoped>
    .car-link {
        position: absolute;
        bottom: 50px;
        left: 50%;
        background: rgba(0, 0, 0, 0.3);
        transform: translate(-50%, 0);
        padding: 5px 15px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
</style>
