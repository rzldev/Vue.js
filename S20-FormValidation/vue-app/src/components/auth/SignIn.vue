<template>
    <div class="row position-absolute" style="left: 0; right: 0; top: 0; bottom: 0; z-index: -1;">
        <div class="col-lg-4 col-md-3 col-sm-1 col-1"></div>
        <div class="grey-border p-4 col-lg-4 col-md-6 col-sm-10 col-10 align-self-center">
            <div class="form-group" :class="{ 'invalid-input': $v.email.$error }">
                <label>Email :</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="email"
                    v-model="email"
                    @blur="$v.email.$touch()">
                <p v-if="!$v.email.email">Please provide a valid email address.</p>
                <p v-else-if="!$v.email.required">This field must not be empty.</p>
            </div>
            <div class="form-group">
                <label class="text-secondary">Password :</label>
                <input type="password" class="form-control" v-model="password">
            </div>
            <div class="form-group">
                <button class="btn text-light form-control mt-2" style="background-color: #00adb5;" @click="login"><strong>LOGIN</strong></button>
            </div>
        </div>
    </div>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators'

    export default {
        data () {
            return {
                email: '',
                password: ''
            }
        },
        validations: {
            email: {
                required,
                email
            }
        },
        methods: {
            login () {
                const formData = {
                    email: this.email,
                    password: this.password
                }

                this.$store.dispatch('signin', formData)

                this.password = ''
                this.confirmPassword = ''
            }
        },
    }
</script>

<style scoped>

</style>