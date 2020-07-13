<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark" style="background-color: #e3f2fd;">
            <router-link to="/"><a class="navbar-brand">Routing</a></router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <router-link class="nav-item" to="/" tag="li" active-class="active" exact>
                        <a class="nav-link">Home</a>
                    </router-link>
                    <router-link class="nav-item" to="/user" tag="li" active-class="active">
                        <a class="nav-link">User</a>
                    </router-link>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>