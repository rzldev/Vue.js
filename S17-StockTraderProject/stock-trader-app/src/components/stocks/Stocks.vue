<template>
    <div>
        <div class="row">
            <div class="col-md-6 col-sm-12" v-for="stock in stocks" :key="stock.id">
                <app-stock :stock="stock"></app-stock>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
    import Stock from './Stock.vue'

    export default {
        components: {
            AppStock: Stock
        },
        computed: {
            stocks () {
                return this.$store.getters.stocks
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>