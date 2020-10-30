<template>
    <v-app>
        <v-navigation-drawer temporary app v-model="drawer">
            <v-list dark nav color="primary">
                <v-list-item v-for="link in links" :key="link.title" link :to="link.url">
                    <v-list-item-icon>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="link.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar dark color="primary" app>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Ad application</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="link in links" :key="link.title" :to="link.url" text>
                    <v-icon left>{{link.icon}}</v-icon>
                    {{link.title}}
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                drawer: null,
                links: [
                    {title: 'Login', icon: 'lock', url: '/login'},
                    {title: 'Registration', icon: 'face', url: '/registration'},
                    {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
                    {title: 'New ad', icon: 'note_add', url: '/new'},
                    {title: 'My ads', icon: 'list', url: '/list'},
                ]
            }
        }
    }
</script>
