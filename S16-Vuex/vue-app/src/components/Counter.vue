<template>
    <div>
        <button class="btn btn-success mr-2" @click="increment">Increment</button>
        <button class="btn btn-danger" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment () {
                this.$store.commit('increment')
            },
            decrement () {
                this.$store.commit('decrement')
            },
        }
    }
</script>

<style lang="stylus" scoped>

</style>