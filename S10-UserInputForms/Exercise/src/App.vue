<template>
<div class="container">
  <form>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <!-- Exercise 1 -->
        <!-- Create a Signup Form where you retrieve the following Information -->
        <!-- Full Name (First Name + Last Name) -->
        <!-- Mail -->
        <!-- Password -->
        <!-- Store Data? Yes/No -->

        <!-- Exercise 2 -->
        <!-- Only display the Form if it has NOT been submitted -->
        <!-- Display the Data Summary ONCE the Form HAS been submitted -->

        <!-- Exercise 3 -->
        <!-- Edit the Example from above and create a custom "Full Name" Control -->
        <!-- which still holds the First Name and Last Name Input Field -->
      </div>
    </div>
  </form>
  <hr>
  <div class="row" v-if="isSubmitted">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4>Your Data</h4>
        </div>
        <div class="panel-body">
          <p>Full Name: {{ userData.firstName }} {{ userData.lastName }}</p>
          <p>Mail: {{ userData.email }}</p>
          <p>Password: {{ userData.password }}</p>
          <p>Store in Database?: {{ userData.verification }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="row" v-else>
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <div class="panel panel-default">
        <div class="panel-heading text-center">
          <h3>Signup</h3>
        </div>
        <div class="panel-body">
          <signup-app :userData="userData" :isSubmitted="isSubmitted" @submitted="isSubmitted = $event" @user="userData = $event"></signup-app>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import Signup from './assets/components/Signup.vue'

  export default {
    data() {
      return {
        isSubmitted: false,
        userData: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          verification: 'no'
        }
      }
    },
    components: {
      'signup-app': Signup
    }
  }
</script>

<style>
</style>
