<template>
    <div>
        <h4>Getters Result</h4>
        <p>Counter : {{ counter }}</p>
        <p>Double Counter : {{ doubleCounter }}</p>
        <p>Click Counter : {{ clickedCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters ([
                'counter',
                'doubleCounter',
                'clickedCounter'
            ])
        }
    }
</script>

<style lang="stylus" scoped>

</style>