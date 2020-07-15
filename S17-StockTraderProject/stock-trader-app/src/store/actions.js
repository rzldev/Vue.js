import Vue from 'vue'

export const loadData = ({ commit }) => {
    Vue.http.get('stock-trader.json')
        .then(response => {
            return response.json()
        }, err => {
            console.log(err)
        })
        .then(data => {
            if (data) {
                const stocks = data.stocks
                const funds = data.funds
                const stockPortfolio = data.stockPortfolio

                const portfolio = {
                    stockPortfolio,
                    funds
                }

                commit('SET_STOCKS', stocks)
                commit('SET_PORTFOLIO', portfolio)
            }
        })
}