<template>
    <div>
        <app-header></app-header>
        <div class="container p-3">
            <transition name="slide" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>
<script>
    import Header from './layouts/Header.vue'

    export default {
        components: {
            AppHeader: Header
        },
        created() {
            this.$store.dispatch('initStocks')
        },
    }
</script>

<style scoped>
    .slide-leave-active {
        opacity: 1;
        animation: slide-out 0.3s ease-out forwards;
    }

    .slide-leave {
        opacity: 1;
        transform: translateX(0);
    }

    .slide-enter-active {
        animation: slide-in 0.5s ease-out forwards;
    }

    @keyframes slide-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-30px);
        }
    }

    @keyframes slide-in {
        0% {
            transform: translateY(-30px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>