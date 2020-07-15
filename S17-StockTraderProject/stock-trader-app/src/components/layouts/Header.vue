<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-light container py-3">
            <router-link to="/" tag="a" class="navbar-brand h1 mb-1">Stock Trader</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <router-link to="/portfolio" tag="li" class="nav-item" active-class="active">
                        <a class="nav-link">Portfolio</a>
                    </router-link>
                    <router-link to="/stocks" tag="li" class="nav-item" active-class="active">
                        <a class="nav-link">Stocks</a>
                    </router-link>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link btn" @click="endDay">End Day</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Save & Load
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item btn" @click="saveData">Save Stock</a>
                            <a class="dropdown-item btn" @click="loadData">Load Stock</a>
                        </div>
                    </li>
                    <li class="navbar-text">Funds : {{ funds | currency }}</li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        computed: {
            funds () {
                return this.$store.getters.funds
            },
        },
        methods: {
            ...mapActions({
                radomizeStock: 'randomizeStocks',
                fetchData: 'loadData'
            }),
            endDay () {
                this.radomizeStock()
            },
            saveData () {
                const data = {
                    funds: this.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                }

                this.$http.put('stock-trader.json', data)
            },
            loadData () {
                this.fetchData()
            }
        },
    }
</script>

<style scoped>
    .active {
        background-color: #DCDCDC;
    }
</style>