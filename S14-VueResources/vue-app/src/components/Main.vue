<template>
    <div>
        <h1>Http</h1>
        <div class="form-group">
            <label>Username</label>
            <input class="form-control" type="text" v-model="user.username">
        </div>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="user.email">
        </div>
        <div class="form-group">
            <label>Node</label>
            <input type="text" class="form-control" v-model="node">
        </div>
        <div>
            <button class="btn btn-primary mr-2" @click="submitData">Submit</button>
            <button class="btn btn-success" @click="fetchData">Get Data</button>
        </div>
        <br>
        <table class="table" v-if="users.length > 0">
            <tr>
                <th>Username</th>
                <th>Email</th>
            </tr>
            <tr v-for="(user, index) in users" :key="index">
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
            </tr>
        </table>
    </div>    
</template>

<script>
    export default {
        data () {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: [],
                resource: {},
                node: 'user'
            }
        },
        methods: {
            submitData () {
                // console.log('username : ' + this.username)
                // console.log('email : ' + this.email)

                // this.$http.post('user.json', this.user)
                //     .then((response) => {
                //         console.log(response)
                //     }).catch((err) => {
                //         console.log(err)
                //     })

                this.resource.saveData({node: this.node}, this.user)
            },
            fetchData () {
                // this.$http.get('user.json')
                //     .then(response => {
                //         return response.json()
                //     })
                //     .then(data => {
                //         // console.log(data)

                //         const result = []
                //         for (let key in data) {
                //             result.push(data[key])
                //         }
                //         this.users = result
                //     })

                this.resource.getData()
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        // console.log(data)

                        const result = []
                        for (let key in data) {
                            result.push(data[key])
                        }
                        this.users = result
                    })
            }
        },
        created() {
            const customActions = {
                getData: {method: 'GET', url: 'user.json'},
                saveData: {method: 'POST'}
            }

            this.resource = this.$resource('{node}.json', {}, customActions)
        },
    }
</script>

<style scoped>

</style>