<template>
    <div style="text-align: center;">
        <h1>This is the dashboard</h1>
        <p class="text-danger" v-if="!auth">You should only get here if you're authenticated!</p>
        <p class="text-success" v-else>Your email address: {{ user.email }}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                
            }
        },
        computed: {
            user () {
                // console.log(this.$store.getters.user);
                return this.$store.getters.user
            },
            auth () {
                return this.$store.getters.isAuthenticated
            }
        },
        created () {
            this.$store.dispatch('fetchData')
            console.log('created');
        }
    }
</script>

<style scoped>

</style>