<template>
    <v-container class="Orders">
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card
                        class="mx-auto"
                        max-width="400"
                >
                    <h1 class="text-secondary mb-3 ml-3">Orders</h1>
                    <v-list>
                        <v-list-item-group>
                            <v-list-item v-for="order in orders" :key="order.id">
                                <v-list-item-action>
                                    <v-checkbox
                                            color="success"
                                            :input-value="order.done"
                                            :disabled="order.done"
                                            @change="markDone(order)"></v-checkbox>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title>{{order.name}}</v-list-item-title>
                                    <v-list-item-subtitle>{{order.phone}}
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn class="primary" :to="'/ad/'+order.adId">Open</v-btn>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        name: "Orders",
        data() {
            return {
                orders: [
                    {
                        id: '1',
                        name: 'Lol1',
                        phone: '7900000000',
                        adId: '1',
                        done: false
                    },
                    {
                        id: '2',
                        name: 'Lol2',
                        phone: '7900000001',
                        adId: '2',
                        done: false
                    },
                    {
                        id: '3',
                        name: 'Lol2',
                        phone: '7900000002',
                        adId: '3',
                        done: false
                    }
                ]
            }
        },
        methods: {
            markDone(order) {
                order.done = true
            }
        }
    }
</script>

<style scoped>

</style>
