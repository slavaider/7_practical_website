<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form @submit.prevent="Submit"
                                ref="form"
                                v-model="valid">
                            <v-text-field
                                    v-model.trim="email"
                                    prepend-icon="person"
                                    name="Email"
                                    label="Email"
                                    type="email"
                                    autocomplete="username"
                                    :rules="emailRules"
                                    required
                            >
                            </v-text-field>
                            <v-text-field
                                    v-model="password"
                                    id="password"
                                    prepend-icon="lock"
                                    name="Password"
                                    label="Password"
                                    type="password"
                                    :rules="passwordRules"
                                    :counter="6"
                                    autocomplete="current-password"
                                    required
                            >
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn :disabled="!valid" :loading="loading" type="submit" @click="Submit" color="primary">
                            Login
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
    export default {
        data() {
            return {
                valid: false,
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 6) || 'Password must be more than 6 characters',
                ],
                password: ''
            }
        },
        methods: {
            Submit() {
                if (this.$refs.form.validate()) {
                    const user = {
                        email: this.email,
                        password: this.password
                    }

                    this.$store.dispatch('loginUser', user)
                        .then(() => {
                            this.$router.push('/')
                        }).catch(() => {
                    })

                    this.$refs.form.reset()
                }
            }
        },
        created() {
            if (this.$route.query['loginError']) {
                this.$store.dispatch('setError', 'Please log in to access this page')
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
