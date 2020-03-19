<template>
<div class="component">
  <h1>The User Component</h1>
  <p>I'm an awesome User!</p>
  <p>User Name: {{ name }}</p>
  <p>User Age: {{ age }}</p>
  <button type="button" @click="changeName">Change Name</button>
  <hr>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <app-user-detail :name="name" :age="age" @nameWasReset="name = $event" :resetFn="resetName"></app-user-detail>
    </div>
    <div class="col-xs-12 col-sm-6">
      <app-user-edit :age="age" @ageWasChanged="age = $event"></app-user-edit>
    </div>
  </div>
</div>
</template>

<script>
  import UserDetail from './UserDetail.vue';
  import UserEdit from './UserEdit.vue';

  export default {
    data: function() {
      return {
        name: 'Bruce Wayne',
        age: 25
      }
    },
    methods: {
      changeName: function() {
        this.name = 'Clark Kent';
      },
      resetName: function() {
        this.name = 'Billy Batson';
      }
    },
    components: {
      appUserDetail: UserDetail,
      appUserEdit: UserEdit
    }
}
</script>

<style scoped>
/* div {
        background-color: lightblue;
    } */
</style>
