const state = {
    counter: 0
}

const getters = {
    counter: state => {
        return state.counter
    },
    doubleCounter: state => {
        return state.counter * 2
    },
    clickedCounter: state => {
        return state.counter + ' Clicks'
    }
}

const mutations = {
    increment: state => {
        state.counter++
    },
    decrement: state => {
        state.counter--
    },
    asyncIncrement: (state, payload) => {
        state.counter += payload
    },
    asyncDecrement: (state, payload) => {
        state.counter -= payload
    }
}

const actions = {
    increment: ({ commit }, payload) => {
        commit('increment', payload)
    },
    decrement: ({ commit }, payload) => {
        commit('decrement', payload)
    },
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('asyncIncrement', payload.by)
        }, payload.duration)
    },
    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('asyncDecrement', payload.by)
        }, payload.duration)
    }
}

export default { state, getters, mutations, actions }