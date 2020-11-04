<template>
    <div>
        <v-dialog
                v-model="dialog"
                persistent
                width="400px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="warning" dark v-bind="attrs" v-on="on">Edit</v-btn>
            </template>
            <v-card>
                <v-container>
                    <v-layout row>
                        <v-flex x12>
                            <v-card-title class="headline">
                                Edit ad
                            </v-card-title>
                        </v-flex>
                    </v-layout>
                    <v-divider></v-divider>
                    <v-layout row>
                        <v-flex x12>
                            <v-card-text>
                                <v-text-field
                                        v-model.trim="edited_title"
                                        name="Title"
                                        label="Title"
                                        type="text"
                                >
                                </v-text-field>
                                <v-textarea
                                        v-model.trim="edited_description"
                                        name="Description"
                                        label="Description"
                                        type="text"
                                >
                                </v-textarea>
                            </v-card-text>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex x12>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        @click="onCancel"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                        color="success"
                                        @click="onSave"
                                >
                                    Save
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
                edited_title: this.ad.title,
                edited_description: this.ad.description,
            }
        },
        methods: {
            onCancel() {
                this.edited_title = this.ad.title
                this.edited_description = this.ad.description
                this.dialog = false
            },
            onSave() {
                if (this.edited_description && this.edited_title) {
                    this.$store.dispatch('updateAd', {
                        title: this.edited_title,
                        description: this.edited_description,
                        id: this.ad.id
                    })
                    this.dialog = false
                }

            },
        }
    }
</script>

<style scoped>

</style>
