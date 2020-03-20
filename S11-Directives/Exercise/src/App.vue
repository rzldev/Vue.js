<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Directives Exercise</h1>
      <!-- Exercise -->
      <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
      <button type="button" v-customDirective:click="buttonClicked" class="btn btn-primary">Submit</button>
      <hr>
      <div class="" style="width: 100px; height: 100px; background-color: lightgreen;" v-customDirective:mouseenter="mouseEnter" v-customDirective:mouseleave="mouseLeave">

      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    directives: {
      customDirective: {
        bind(el, binding) {
          // el.onClick = function() {
          //   binding.value;
          // }

          const type = binding.arg;
          const fn = binding.value;
          el.addEventListener(type, fn);
        }
      }
    },
    methods: {
      buttonClicked() {
        alert('Button has been clicked!');
      },
      mouseEnter() {
        console.log('Cursor entered the area!');
      },
      mouseLeave() {
        console.log('Cursor Left the area!');
      }
    }
  }
</script>

<style>

</style>
