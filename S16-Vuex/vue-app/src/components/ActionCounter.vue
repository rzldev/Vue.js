<template>
    <div>
        <button class="btn btn-success mb-2" @click="asyncIncrement({ by: 100, duration: 500 })">Mutation Increment</button>
        <button class="btn btn-danger" @click="asyncDecrement({ by:50, duration: 500 })">Mutation Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ])
        }
    }
</script>

<style lang="stylus" scoped>

</style>