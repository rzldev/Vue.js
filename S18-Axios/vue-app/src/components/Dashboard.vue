<template>
    <div style="text-align: center;">
        <h1>This is the dashboard</h1>
        <p class="text-danger">You should only get here if you're authenticated!</p>
        <p class="text-success">Your email address: {{ user.email }}</p>
    </div>
</template>

<script>
    import AxiosAuth from '../../axios-auth.js'

    export default {
        data () {
            return {
                users: [],
                user: {}
            }
        },
        methods: {
            fetchData () {
                AxiosAuth.get('/axios/user.json')
                .then(response => {
                    // console.log(response);

                    this.users = response.data
                    for (let key in this.users) {
                        this.user = this.users[key]
                        // console.log(this.user);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
            }
        },
        created () {
            this.fetchData()
        }
    }
</script>

<style scoped>

</style>