<template>
    <div>
        <div class="card border-success text-success">
            <div class="card-header">
                <h5 class="card-title">{{ stock.name }} <small>Price : {{ stock.price }}</small></h5>
            </div>
            <div class="card-body">
                <div class="d-flex flex-row">
                    <div class="p-2 flex-grow-1 bd-highlight">
                        <input type="text" class="border-success form-control" :class="insufficientFunds ? 'border-danger text-danger' : ''" placeholder="Quantity" v-model="quantity">
                    </div>
                    <div class="p-2 flex-fill bd-highlight">
                        <button class="btn btn-success form-control" @click="buyStock" :disabled="quantity < 1 || isNaN(quantity) || insufficientFunds">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [ 'stock' ],
        data () {
            return {
                quantity: null
            }
        },
        computed: {
            funds () {
                return this.$store.getters.funds
            },
            insufficientFunds () {
                return this.quantity * this.stock.price > this.funds
            }
        },
        methods: {
            buyStock () {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: parseInt(this.quantity)
                }

                this.$store.dispatch('buyStock', order)

                this.quantity = null
            }
        },
    }
</script>

<style scoped>
    
</style>