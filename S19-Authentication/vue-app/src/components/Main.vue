<template>
    <div class="primary-color">
        <app-header></app-header>
        <div class="container my-5">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from './layouts/Header.vue'

    export default {
        components: {
            AppHeader: Header
        },
        created () {
            this.$store.dispatch('autoLogin')
        }
    }
</script>

<style scoped>

</style>