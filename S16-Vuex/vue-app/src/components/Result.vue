<template>
    <div>
        <h4>Result</h4>
        <p>Counter : {{ counter }}</p>
        <p>Double Counter : {{ doubleCounter }}</p>
        <p>Click Counter : {{ clickedCounter }}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            counter () {
                return this.$store.getters.counter
            },
            doubleCounter () {
                return this.$store.getters.doubleCounter
            },
            clickedCounter () {
                return this.$store.getters.clickedCounter
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>