<template>
    <v-container class="AddList">
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My ads</h1>
                <v-card class="elevation-10 mb-3" v-for="ad in ads" :key="ad.id">
                    <v-layout rpw>
                        <v-flex xs4>
                            <v-img :src="ad.srcImg" height="160px"></v-img>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2>{{ad.title}}</h2>
                                <p>{{ad.description}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn :to="'/ad/' + ad.id" color="info">Open</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "AddList",
        data() {
            return {
                ads: [
                    {
                        title: 'First Ad',
                        description: 'First Ad',
                        srcImg: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                        promo: false,
                        id: '1'
                    }, {
                        title: 'First Ad',
                        description: 'First Ad',
                        srcImg: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                        promo: false,
                        id: '2'
                    }]
            }
        }
    }
</script>

<style scoped>

</style>
