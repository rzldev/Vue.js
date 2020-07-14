<template>
    <div>
        <h4>Two way binding</h4>
        <input type="text" class="form-control" v-model="value">
        <p>{{ $store.state.value }}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            value: {
                get () {
                    return this.$store.getters.value
                },
                set (value) {
                    this.$store.dispatch('updateValue', value)
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>