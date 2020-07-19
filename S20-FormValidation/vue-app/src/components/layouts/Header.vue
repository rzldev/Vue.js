<template>
    <div class="secondary-color">
        <nav class="navbar navbar-expand-md navbar-dark container">
            <router-link to="/" tag="a" class="navbar-brand h1 mb-1">Axios</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <div class="d-flex" v-if="!auth">
                        <router-link to="/signup" tag="li" class="nav-item" active-class="active" v-if="!auth">
                            <a class="nav-link">Sign Up</a>
                        </router-link>
                        <router-link to="/signin" tag="li" class="nav-item" active-class="active" v-if="!auth">
                            <a class="nav-link">Sign In</a>
                        </router-link>
                    </div>
                    <div class="d-flex" v-else>
                        <router-link to="/dashboard" tag="li" class="nav-item" active-class="active" exact v-if="auth">
                            <a class="nav-link">Dashboard</a>
                        </router-link>
                        <li class="nav-item">
                            <a class="nav-link" style="cursor: pointer;" @click="logout">Logout</a>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        computed: {
            auth () {
                return this.$store.getters.isAuthenticated
            }
        },
        methods: {
            logout () {
                this.$store.dispatch('signout')
            }
        }
    }
</script>

<style scoped>
    
</style>