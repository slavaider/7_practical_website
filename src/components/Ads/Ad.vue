<template>
    <v-container class="Ad">
        <v-layout row>
            <v-flex xs12>
                <v-card>
                    <!--suppress HtmlUnknownTarget -->
                    <v-img height="300px" :src="ad.src"></v-img>
                    <v-card-text>
                        <h1 class="text--primary">{{ad.title}}</h1>
                        <p>{{ad.description}}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="warning" text>Edit</v-btn>
                        <v-btn color="success">Buy</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        props: ['id'],
        name: "Ad",
        computed: {
            ad() {
                const id = this.id;
                return this.$store.getters.ad_by_id(id)
            }
        }
    }
</script>

<style scoped>

</style>
