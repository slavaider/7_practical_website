<template>
    <v-container class="Ad">
        <v-layout row>
            <v-flex xs12>
                <v-card v-if="!loading">
                    <!--suppress HtmlUnknownTarget -->
                    <v-img height="300px" :src="ad.src"></v-img>
                    <v-card-text>
                        <h1 class="text--primary">{{ad.title}}</h1>
                        <p>{{ad.description}}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <app-edit-modal :ad="ad" v-if="owner"></app-edit-modal>
                        <app-buy-model :ad="ad"></app-buy-model>
                    </v-card-actions>
                </v-card>
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
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import editAd from './EditAd'

    export default {
        props: ['id'],
        name: "Ad",
        components: {
            'app-edit-modal': editAd
        },
        computed: {
            ad() {
                const id = this.id;
                return this.$store.getters.ad_by_id(id)
            },
            loading() {
                return this.$store.getters.loading
            },
            owner() {
                if (this.$store.getters.user === null) {
                    return false
                } else {
                    return this.ad.owner_id === this.$store.getters.user.id
                }
            }
        }
    }
</script>

<style scoped>

</style>
