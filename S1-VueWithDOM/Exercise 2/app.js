new Vue({
  el: '#exercise',
  data: {
    value1: '',
    value2: ''
  },
  methods: {
    alertMe: function() {
      alert('Button clicked!');
    },
    keyDown: function(event) {
      this.value1 = event.target.value;
    },
    enterKeyDown: function(event) {
      this.value2 = event.target.value
    }
  }
});
