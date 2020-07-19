<template>
    <div class="row">
        <div class="col-lg-3 col-md-2 col-sm-1 col-1"></div>
        <div class="grey-border p-4 col-lg-6 col-md-8 col-sm-10 col-10">
            <div class="form-group" :class="{ 'invalid-input': $v.email.$error }">
                <label>Email :</label>
                <input 
                    type="text" 
                    id="email"
                    class="form-control" 
                    v-model="email"
                    @blur="$v.email.$touch()">
                <p class="error" v-if="!$v.email.email">Please provide a valid email address.</p>
                <p v-else-if="!$v.email.required">This field must not be empty.</p>
            </div>
            <div class="form-group" :class="{ 'invalid-input': $v.age.$error }">
                <label>Your Age :</label>
                <input 
                    type="text" 
                    id="age"
                    class="form-control" 
                    v-model="age"
                    @blur="$v.age.$touch()">
                <p v-if="!$v.age.required || !$v.age.numeric">Please provide a valid age.</p>
                <p v-else-if="!$v.age.minVal">You have to be at least {{ $v.age.$params.minVal.min }}</p>
            </div>
            <div class="form-group" :class="{ 'invalid-input': $v.password.$error }">
                <label>Password :</label>
                <input 
                    type="password" 
                    id="password"
                    class="form-control" 
                    v-model="password"
                    @blur="$v.password.$touch()">
                <p v-if="!$v.password.required">Please provide a valid password.</p>
                <p v-else-if="!$v.password.minLength">Your password length have to be at least {{ $v.password.$params.minLength.min }}</p>
            </div>
            <div class="form-group" :class="{ 'invalid-input': $v.confirmPassword.$error }">
                <label>Corfirm Password :</label>
                <input 
                    type="password" 
                    id="confirmPassword"
                    class="form-control" 
                    v-model="confirmPassword"
                    @blur="$v.confirmPassword.$touch()">
                <p v-if="!$v.confirmPassword.required">Please provide a valid confirmation password.</p>
                <p v-else-if="!$v.confirmPassword.sameAs">Your password do not match</p>
            </div>
            <div class="form-group">
                <label class="text-secondary">Country :</label>
                <select class="form-control" v-model="country">
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
                <input 
                    type="text" 
                    class="form-control"
                    :id="hobby.index" 
                    placeholder="Hobby" 
                    v-model="hobbies[index]">
                <button class="btn btn-danger" @click="hobbies.splice(index, 1)">X</button>
            </div>
            <!-- <p v-if="!$v.hobbies.required">Please provide a valid hobbies.</p>
            <p v-if="!$v.hobbies.minLength">You have to at least have {{ $v.hobbies.$params.minLength.min }} hobbies</p> -->
            <div class="form-group">
                <button class="btn" style="border-color: #00adb5; color: #00adb5;" @click="hobbies.push('')"><strong>Add Hobby</strong></button>
            </div>
            <div class="form-group form-check" :class="{ 'invalid-input': $v.terms.$error }">
                <input 
                    type="checkbox" 
                    id="terms"
                    class="form-check-input" 
                    @change="$v.terms.$touch()"
                    v-model="termAccepted">
                <label for="exampleCheck1">Accept Terms of Use</label>
            </div>
            <div class="form-group">
                <button class="btn text-light" style="background-color: #00adb5;" @click="submitData" :disabled="$v.$invalid"><strong>Submit</strong></button>
            </div>
        </div>
    </div>
</template>

<script>
    import { required, email, numeric, minValue, minLength, sameAs, requiredUnless } from 'vuelidate/lib/validators'

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
        validations: {
            email: {
                required,
                email
            },
            age: {
                required,
                numeric,
                minVal: minValue(10)
            },
            password: {
                required,
                minLength: minLength(6)
            },
            confirmPassword: {
                required,
                sameAs: sameAs(vm => {
                    return vm.password
                })
            },
            terms: {
                required: requiredUnless(vm => {
                    return vm.country === 'Germany'
                })
            },
            // hobbies: {
            //     required,
            //     minLength: minLength(2),
            //     $each: {
            //         value: {
            //             required
            //         }
            //     }
            // }
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

                // console.log('state : ' + this.$store.state.userId)

                this.$store.dispatch('signup', formData)

                // this.email = ''
                // this.age = null
                // this.country = ''
                // this.hobbies = []
                // this.termAccepted = false
                // this.password = ''
                // this.confirmPassword = ''
            }
        },
    }
</script>

<style scoped>

</style>