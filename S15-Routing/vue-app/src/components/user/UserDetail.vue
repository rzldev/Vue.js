<template>
    <div>
        <h2>User Detail</h2>
        <p>Loaded ID : {{ this.$route.params.id }}</p>
        <router-link tag="button" class="btn btn-success" :to="{ name: 'UserEdit', params: { id: $route.params.id }, query: { locale: 'en', q: 100 }, hash: '#data' }">Edit</router-link>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                id: this.$route.params.id
            }
        },
        watch: {
            '$route'(to) {
                this.id = to.params.id
            }
        },
    }
</script>

<style scoped>

</style>