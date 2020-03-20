<template>
  <div>
    <form>
      <div class="form-group">
        <label>First Name</label>
        <input class="form-control" type="text" v-model="userData.firstName">
      </div>

      <div class="form-group">
        <label>Last Name</label>
        <input class="form-control" type="text" v-model="userData.lastName">
      </div>

      <div class="form-group">
        <label>Email</label>
        <input class="form-control" type="text" v-model="userData.email">
      </div>

      <div class="form-group">
        <label>Password</label>
        <input class="form-control" type="password" v-model="userData.password">
      </div>

      <div class="form-group">
        <label for="yes">
          <input type="radio" value="Yes" v-model="userData.verification"> Yes
        </label>
        <label for="no">
          <input type="radio" value="No" v-model="userData.verification"> No
        </label>
      </div>

      <div class="form-group">
        <button class="btn btn-primary" type="button" name="button" @click="submitUser">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    props: ['userData', 'isSubmitted'],
    methods: {
      submitUser() {
        this.isSubmitted = true;
        this.$emit('submitted', this.isSubmitted);
        this.$emit('user', this.userData);
      },
      verify(condition) {

      }
    }
  }
</script>

<style scoped>

</style>
