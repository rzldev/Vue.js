<template>
    <div class="row">
        <div class="col-lg-3 col-md-2 col-sm-1 col-1"></div>
        <div class="grey-border p-4 col-lg-6 col-md-8 col-sm-10 col-10">
            <div class="form-group">
                <label class="text-secondary">Email :</label>
                <input type="text" class="form-control" v-model="email">
            </div>
            <div class="form-group">
                <label class="text-secondary">Your Age :</label>
                <input type="email" class="form-control" v-model="age">
            </div>
            <div class="form-group">
                <label class="text-secondary">Password :</label>
                <input type="password" class="form-control" v-model="password">
            </div>
            <div class="form-group">
                <label class="text-secondary">Corfirm Password :</label>
                <input type="password" class="form-control" v-model="confirmPassword">
            </div>
            <div class="form-group">
                <label class="text-secondary">Country :</label>
                <select class="form-control" v-model="country">
                    <option disabled selected>Choose Country</option>
                    <option>Germany</option>
                    <option>Mexico</option>
                    <option>Turkey</option>
                    <option>Italy</option>
                    <option>China</option>
                    <option>United States</option>
                    <option>Spain</option>
                    <option>France</option>
                </select>
            </div>
            <h4 class="my-3">Add some hobbies</h4>
            <div class="form-group d-flex" v-for="(hobby, index) in hobbies" :key="index">
                <input type="text" class="form-control" placeholder="Hobby" v-model="hobbies[index]">
                <button class="btn btn-danger" @click="hobbies.splice(index, 1)">X</button>
            </div>
            <div class="form-group">
                <button class="btn" style="border-color: #00adb5; color: #00adb5;" @click="hobbies.push('')"><strong>Add Hobby</strong></button>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" v-model="termAccepted">
                <label class="form-check-label" for="exampleCheck1">Accept Terms of Use</label>
            </div>
            <div class="form-group">
                <button class="btn text-light" style="background-color: #00adb5;" @click="submitData"><strong>Submit</strong></button>
            </div>
        </div>
    </div>
</template>

<script>
    import AxiosAuth from '../../../axios-auth.js'

    export default {
        data () {
            return {
                email: '',
                age: null,
                password: '',
                confirmPassword: '',
                country: '',
                hobbies: [],
                termAccepted: false
            }
        },
        methods: {
            submitData () {
                const formData = {
                    email: this.email,
                    age: this.age,
                    password: this.password,
                    country: this.country,
                    hobbies: this.hobbies,
                }

                AxiosAuth.put('/axios/user.json', formData)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
            }
        },
    }
</script>

<style scoped>

</style>