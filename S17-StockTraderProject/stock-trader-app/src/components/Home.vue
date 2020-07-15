<template>
    <div>
        <h1>Trade or View your Portfolio</h1>
        <p>You may Save & Load your Data</p>
        <p>Click on 'End Day' to begin a New Day!</p>
        <hr>
        <p>YOUR FUNDS : {{ funds | currency }}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            funds () {
                return this.$store.getters.funds
            }
        },
    }
</script>

<style lang="stylus" scoped>

</style>