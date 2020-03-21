export const countMixin = {
  computed: {
    countComputedMixin() {
      return this.text + '( ' + this.text.length + ' )';
    }
  }
}
