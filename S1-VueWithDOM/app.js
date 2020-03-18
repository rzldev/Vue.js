new Vue({
  el: '#App',
  data: {
    title: 'Hello World!',
    link: 'https://www.google.com',
    finishedLink: '<a href="https://www.google.com">Google Link</a>',
    counter: 0,
    x: 0,
    y: 0,
    newCounter: 0,
    name: 'John',
    firstCounter: 0,
    secondCounter: 0,
    attachColor: false,
    color: 'green',
    width: 10
  },
  methods: {
    setTitle: function() {
      this.title = 'Hello';
      return this.title;
    },
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    clickButton: function(step) {
      this.counter++;
      this.newCounter += step;
    },
    updateCoordinate: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function() {
      alert(event.target.value);
    },
    result: function() {
      return this.firstCounter > 5 ? 'Greater than 5' : 'Less than 5';
    }
  },
  computed: {
    output: function() {
      return this.secondCounter > 5 ? 'Greater than 5' : 'Less than 5';
    },
    divClasses: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      }
    },
    myStyle: function() {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  },
  watch: {
    firstCounter: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.firstCounter = 1;
      }, 1000);
    },
    secondCounter: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.secondCounter = 0;
      }, 2000);
    }
  }
});
