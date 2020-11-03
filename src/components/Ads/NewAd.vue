<template>
    <v-container class="NewAd">
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3 class="mt-3 py-3 px-3 elevation-9">
                <h1 class="text--secondary">Create new ad</h1>
                <v-form class="mt-3" @submit.prevent="Submit"
                        ref="form"
                        v-model="valid">
                    <v-text-field
                            v-model.trim="title"
                            name="title"
                            label="Ad Title"
                            type="text"
                            :rules="[v=>!!v || 'Title is required']"
                            required
                    >
                    </v-text-field>
                    <v-textarea
                            class="mb-3"
                            v-model="description"
                            name="description"
                            label="Ad Description"
                            type="text"
                            :rules="[v=>!!v || 'Description is required']"
                            required
                    >
                    </v-textarea>
                </v-form>
                <v-layout row>
                    <v-flex xs12 class="py-3 px-3">
                        <v-btn color="warning"
                        >Upload
                            <v-icon right dark>mdi-cloud-upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 class="py-3 px-3">

                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 class="py-3 px-3">
                        <v-switch
                                color="primary"
                                label="Add to promo?"
                                v-model="promo">
                        </v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 class="py-3 px-3">
                        <v-spacer></v-spacer>
                        <v-btn
                                :loading="loading"
                                :disabled="!valid"
                                color="success"
                                @click="createAdd"
                        >Create ad
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "NewAd",
        data() {
            return {
                valid: false,
                title: '',
                description: '',
                promo: false,
            }
        },
        methods: {
            createAdd() {
                if (this.$refs.form.validate()) {
                    const ad = {
                        title: this.title,
                        description: this.description,
                        promo: this.promo,
                        src: 'https://picsum.photos/500/300?image=1'
                    }
                    this.$store.dispatch('createAd', ad).then(() => {
                        this.$router.push('/list')
                    }).catch(error => console.log(error))
                }
            }
        },
        computed: {
            loading() {
                return this.$store.getters.loading
            }
        }
    }
</script>

<style scoped>

</style>
