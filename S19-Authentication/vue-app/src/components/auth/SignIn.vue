<template>
    <div class="row position-absolute" style="left: 0; right: 0; top: 0; bottom: 0; z-index: -1;">
        <div class="col-lg-4 col-md-3 col-sm-1 col-1"></div>
        <div class="grey-border p-4 col-lg-4 col-md-6 col-sm-10 col-10 align-self-center">
            <div class="form-group">
                <label class="text-secondary">Email :</label>
                <input type="text" class="form-control" v-model="email">
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
    export default {
        data () {
            return {
                email: 'amrizalrf@gmail.com',
                password: 'amrizal01'
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