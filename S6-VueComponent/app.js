// let data = {
//   status: 'Critical'
// }

// Vue.component('my-cmp', {
//   data: function() {
//     // return data;
//     return {
//       status: 'Critical'
//     }
//   },
//   template: '<p>Server status: {{ status }} <button @click="changeStatus">Change</button></p>',
//   methods: {
//     changeStatus: function() {
//       this.status = 'normal';
//     }
//   }
// });

var cmp = {
  data: function() {
    // return data;
    return {
      status: 'Critical'
    }
  },
  template: '<p>Server status: {{ status }} <button @click="changeStatus">Change</button></p>',
  methods: {
    changeStatus: function() {
      this.status = 'normal';
    }
  }
};

new Vue({
  el: '#app',
  components: {
    'my-cmp': cmp
  }
});

new Vue({
  el: '#app2'
});
