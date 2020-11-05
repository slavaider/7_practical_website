<template>
    <v-container class="Orders">
        <v-layout row>
            <v-flex v-if="!loading && orders.length !== 0" xs12 sm6 offset-sm3>
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
            <v-flex v-else-if="!loading && orders.length === 0" xs12 class="text-center">
                <h1 class="text--primary">You dont have orders</h1>
            </v-flex>
            <v-flex v-else xs12 class="text-center">
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
        name: "Orders",
        methods: {
            markDone(order) {
                this.$store.dispatch('markOrder', order.id).then(() => {
                    order.done = true
                }).catch(() => {
                })
            }
        },
        computed: {
            loading() {
                return this.$store.getters.loading
            },
            orders() {
                return this.$store.getters.orders
            }
        },
        created() {
            return this.$store.dispatch('fetchOrders')
        }
    }
</script>

<style scoped>

</style>
