<template>
    <div>
        <div class="card border-success text-success">
            <div class="card-header">
                <h5 class="card-title">{{ stock.name }} <small>Price : {{ stock.price }} | Qty : {{ stock.quantity }}</small></h5>
            </div>
            <div class="card-body">
                <div class="d-flex flex-row">
                    <div class="p-2 flex-grow-1 bd-highlight">
                        <input type="text" class="border-success form-control" :class="insufficientQuantity ? 'border-danger text-danger' : ''" placeholder="Quantity" v-model="quantity">
                    </div>
                    <div class="p-2 flex-fill bd-highlight">
                        <button class="btn btn-success form-control" @click="sellStock" :disabled="quantity < 1 || isNaN(quantity) || insufficientQuantity">Sell</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        props: [ 'stock' ],
        data () {
            return {
                quantity: null
            }
        },
        computed: {
            insufficientQuantity () {
                return this.quantity > this.stock.quantity
            }
        },
        methods: {
            ...mapActions({
               sellStockOrder: 'sellStock' 
            }),
            sellStock () {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: parseInt(this.quantity)
                }

                this.sellStockOrder(order)

                this.quantity = null
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>