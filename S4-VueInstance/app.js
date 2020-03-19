Vue.component('hello', {
  template: '<h1>Hello!</h1>'
});

const data = {
  title: 'The VueJS Instance',
  showParagraph: false
}

let vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log(this.$refs);
      this.$refs.myButton.innerText = 'Test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app1');

vm1.newProp = 'New!';
console.log(vm1);

console.log(vm1.$data === data);

vm1.$refs.heading.innerText = 'Something else';

const vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second instance'
  },
  methods: {
    changeTitle: function() {
      vm1.title = 'Changed title';
      vm1.show();

      setTimeout(function() {
        vm1.title = 'Changed by timer';
      }, 2000);
    }
  }
});

const vm3 = new Vue({
  template: '<h1>Hello World!</h1>'
});

vm3.$mount('#app3');
