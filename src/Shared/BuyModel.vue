<template>
    <div>
        <v-dialog

                v-model="dialog"
                persistent
                width="400px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" class="ml-3" dark v-bind="attrs" v-on="on">Buy</v-btn>
            </template>
            <v-card>
                <v-container>
                    <v-layout row>
                        <v-flex x12>
                            <v-card-title class="headline">
                                Do you want to buy it?
                            </v-card-title>
                        </v-flex>
                    </v-layout>
                    <v-divider></v-divider>
                    <v-layout row>
                        <v-flex x12>
                            <v-card-text>
                                <v-text-field
                                        v-model.trim="name"
                                        name="Name"
                                        label="Your name"
                                        type="text"
                                >
                                </v-text-field>
                                <v-text-field
                                        v-model.trim="phone"
                                        name="phone"
                                        label="Your phone"
                                        type="phone"
                                >
                                </v-text-field>
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex x12>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        @click="onCancel"
                                        :disabled="localLoading"
                                >
                                    Close
                                </v-btn>
                                <v-btn
                                        :disabled="localLoading"
                                        color="success"
                                        @click="onSave"
                                        :loading="localLoading"
                                >
                                    Buy It!
                                </v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>


<script>
    export default {
        props: ['ad'],
        name: "EditAd",
        data() {
            return {
                dialog: false,
                name: '',
                phone: '',
                localLoading: false
            }
        },
        methods: {
            onCancel() {
                this.name = ''
                this.phone = ''
                this.dialog = false
            },
            onSave() {
                if (this.name !== '' && this.phone !== '') {
                    this.localLoading = true
                    this.$store.dispatch('createOrder',
                        {
                            name: this.name,
                            phone: this.phone,
                            adId: this.ad.id,
                            owner_id: this.ad.owner_id
                        }).finally(() => {
                        this.name = ''
                        this.phone = ''
                        this.dialog = false
                        this.localLoading = false
                    })
                }
            }

        },
    }

</script>

<style scoped>

</style>
