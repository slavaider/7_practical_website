<template>
    <v-container class="AddList">
        <v-layout row v-if="!loading && my_ads.length !== 0">
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My ads</h1>
                <v-card class="elevation-10 mb-3" v-for="ad in my_ads" :key="ad.id">
                    <v-layout rpw>
                        <v-flex xs4>
                            <!--suppress HtmlUnknownTarget -->
                            <v-img :src="ad.src" height="160px"></v-img>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2>{{ad.title}}</h2>
                                <p>{{ad.description}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn :to="'/ad/' + ad.id" color="primary">Open</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row v-else-if="!loading && my_ads.length === 0">
            <v-flex xs12 class="text-center">
                <h1 class="text--primary">You have no ads</h1>
            </v-flex>
        </v-layout>
        <v-layout row v-else>
            <v-flex xs12 class="text-center">
                <v-progress-circular
                        :size="100"
                        :width="4"
                        indeterminate
                        color="purple"
                ></v-progress-circular>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "AddList",
        computed: {
            my_ads() {
                return this.$store.getters.my_ads
            },
            loading() {
                return this.$store.getters.loading
            }
        }
    }
</script>

<style scoped>

</style>
