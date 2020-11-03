<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Registration form</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <v-card-text>
                        <v-form
                                @submit.prevent="Submit"
                                ref="form"
                                v-model="valid"
                        >
                            <v-text-field
                                    v-model.trim="email"
                                    prepend-icon="person"
                                    name="Email"
                                    label="Email"
                                    type="email"
                                    :rules="emailRules"
                                    autocomplete="username"
                                    required
                            >
                            </v-text-field>
                            <v-text-field
                                    v-model="password"
                                    prepend-icon="lock"
                                    name="Password"
                                    label="Password"
                                    type="password"
                                    :rules="passwordRules"
                                    :counter="6"
                                    required
                                    autocomplete="password"
                            >
                            </v-text-field>
                            <v-text-field
                                    v-model="Confirm_Password"
                                    prepend-icon="lock"
                                    name="Confirm_Password"
                                    label="Confirm Password"
                                    type="password"
                                    :rules="Confirm_Password_Rules"
                                    required
                                    autocomplete="password"
                            >
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn :disabled="!valid"
                               type="submit"
                               @click="Submit"
                               :loading="loading"
                               color="primary"
                        >Create Account
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
                password: '',
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 6) || 'Password must be more than 6 characters',
                ],
                Confirm_Password: '',
                Confirm_Password_Rules: [
                    v => !!v || 'Confirm Password is required',
                    v => v === this.password || 'Passwords not the same'
                ]

            }
        },
        computed: {
            loading() {
                return this.$store.getters.loading
            }
        },
        methods: {
            Submit() {
                if (this.$refs.form.validate()) {
                    const user = {
                        email: this.email,
                        password: this.password
                    }
                    this.$store.dispatch('registerUser', user).then(() => {
                            this.$router.push('/')
                        }
                    ).catch(() => {
                    })
                    this.$refs.form.reset()
                }
            }
        }
    }
</script>

<style scoped>

</style>
