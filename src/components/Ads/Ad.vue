<template>
    <v-container class="Ad">
        <v-layout row>
            <v-flex xs12>
                <v-card>
                    <v-img height="300px" src='https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'></v-img>
                    <v-card-text>
                        <h1 class="text--primary">lorem</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, vitae!</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="warning" flat>Edit</v-btn>
                        <v-btn color="success">Buy</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Ad"
    }
</script>

<style scoped>

</style>
