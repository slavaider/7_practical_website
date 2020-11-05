<template>
    <v-app>
        <v-navigation-drawer temporary app v-model="drawer">
            <v-list dark nav color="primary">
                <v-list-item exact active-class="active" v-for="link in links" :key="link.title" link :to="link.url">
                    <v-list-item-icon>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="link.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-if="isUserLoggedIn" exact active-class="active" @click="onLogout">
                    <v-list-item-icon>
                        <v-icon>exit_to_app</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="'Logout'"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar dark color="primary" app>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer">
                    Ad application
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn exact active-class="active" v-for="link in links" :key="link.title" :to="link.url" text>
                    <v-icon left>{{link.icon}}</v-icon>
                    {{link.title}}
                </v-btn>
                <v-btn v-if="isUserLoggedIn" @click="onLogout" text>
                    Logout
                    <v-icon right>exit_to_app</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>

        <v-main style="background-color: #0ee3b0;">
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
        <template v-if="error">
            <v-snackbar
                    color="error"
                    multi-line
                    :timeout="5000"
                    @input="closeError"
                    :value="true"
            >
                {{error}}
                <template v-slot:action="{ attrs }">
                    <v-btn
                            dark
                            text
                            v-bind="attrs"
                            @click="closeError"
                    >
                        Close
                    </v-btn>
                </template>
            </v-snackbar>
        </template>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                drawer: null
            }
        },
        computed: {
            error() {
                return this.$store.getters.error
            },
            isUserLoggedIn () {
                return this.$store.getters.isUserLoggedIn
            },
            links() {
                if (this.isUserLoggedIn) {
                    return [
                        {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
                        {title: 'New ad', icon: 'note_add', url: '/new'},
                        {title: 'My ads', icon: 'list', url: '/list'},
                    ]
                }
                return [
                    {title: 'Login', icon: 'lock', url: '/login'},
                    {title: 'Registration', icon: 'face', url: '/registration'},
                ]

            }
        }
        ,
        methods: {
            closeError() {
                this.$store.dispatch('setError', null)
            }
            ,
            onLogout() {
                this.$store.dispatch('LogoutUser')
                this.$router.push('/')
            }
        }

    }
</script>
