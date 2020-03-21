export const fruitMixin = {
  data() {
    return {
      fruits: ['Apple', 'Orange', 'Mango', 'Avocado', 'Banana', 'Melon'],
      inputFruits: ''
    }
  },
  computed: {
    filteredFruit() {
      return this.fruits.filter((fruit) => {
        return fruit.match(this.inputFruits);
      });
    }
  }
}
