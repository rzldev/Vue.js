<template>
    <div>
        <h2>Edit User {{ $route.params.id }}</h2>
        <div>
            <p>Locale : {{ $route.query.locale }}</p>
            <p>Analytics: {{ $route.query.p }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        beforeRouteEnter (to, from, next) {
            console.log('beforeRouteEnter inside component')
            let condition = true

            if (condition) {
                next()
            } else {
                next(false)
            }
        }
    }
</script>

<style scoped>

</style>