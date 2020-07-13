<template>
    <div class="container">
        <div>
            <button class="btn btn-primary mt-3" @click="backToHome">Back to Home</button>
            <br><br>
            <h2>This is user page</h2>
            <br>
            <router-link class="btn btn-primary mr-2" v-for="x in 3" :key="x" :to="'/user/' + x">User {{ x }}</router-link>
            <router-view name="user-detail"></router-view>
            <transition name="slide" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                confirmed: false,
            }
        },
        methods: {
            backToHome () {
                this.confirmed = true
                this.$router.push({ path: '/' })
            }
        },
        beforeRouteLeave (to, from, next) {
            if (this.confirmed) {
                next()
            } else {
                if (confirm('Are you sure?')) {
                    next()
                } else {
                    next(false)
                }
            }
        }
    }
</script>

<style scoped>
    /* .slide-leave-active {
        transition: opacity 1s ease;
        opacity: 1;
        animation: slide-out 1s ease-out forwards;
    } */

    /* .slide-leave {
        opacity: 1;
        transform: translateX(0);
    } */

    /* .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
    } */

    /* @keyframes slide-out {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-30px);
        }
    } */

    @keyframes slide-in {
        0% {
            transform: translateY(-30px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>