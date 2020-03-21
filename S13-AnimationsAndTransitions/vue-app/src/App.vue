<template>
  <div class="container" style="padding: 30px 100px">
    <h1>Transitions and Animations</h1>
    <hr>
    <select class="form-control" v-model="alertAnimation">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </select>

    <br>

    <button type="button" class="btn btn-primary" @click="show = !show">Show Alert</button>

    <br><br>

    <transition :name="alertAnimation">
      <div class="alert alert-info" v-show="show">
        This is some info
      </div>
    </transition>

    <transition :name="alertAnimation" type="animation">
      <div class="alert alert-info" v-if="show">
        This is some info
      </div>
    </transition>

    <transition name="fade" appear>
      <div class="alert alert-info" v-if="show">
        This is some info
      </div>
    </transition>

    <transition enter-active-class="animated bounce" leave-active-class="animated shake">
      <div class="alert alert-info" v-if="show">
        This is some info
      </div>
    </transition>

    <transition :name="alertAnimation" mode="out-in">
      <div class="alert alert-info" v-if="show" key="info">
        This is some info
      </div>
      <div class="alert alert-warning" v-else key="warning">
        This is some warning
      </div>
    </transition>

    <hr>

    <button type="button" class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
    <br><br>
    <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
    :css="false">
      <div :style="{width: elementWidth + 'px', height: '100px', backgroundColor: 'lightgreen'}" v-if="load"></div>
    </transition>

    <hr>

    <button type="button" class="btn btn-primary" @click="selectedAlert == 'app-success-alert' ? selectedAlert = 'app-danger-alert' : selectedAlert = 'app-success-alert'">Change Alert</button>
    <br><br>
    <transition :name="alertAnimation" mode="out-in">
      <component :is="selectedAlert"></component>
    </transition>

    <hr>

    <button type="button" class="btn btn-primary" @click="addItem">Add</button>
    <br><br>
    <ul class="list-group">
      <transition-group name="slide">
        <li class="list-group-item" style="cursor: pointer" v-for="(number, index) in numbers" :key="index" @click="removeItem(index)">{{ number }}</li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
  import SuccessAlert from './components/SuccessAlert.vue'
  import DangerAlert from './components/DangerAlert.vue'

  export default {
    data() {
      return {
        show: true,
        load: false,
        alertAnimation: 'fade',
        elementWidth: 100,
        selectedAlert: 'app-success-alert',
        numbers: [1, 2, 3, 4, 5, 6]
      }
    },
    methods: {
      beforeEnter() {
        console.log('before enter');
      },
      enter(el, done) {
        console.log('enter');

        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth + round * 10) + 'px';
          round++;

          if (round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20)
      },
      afterEnter() {
        console.log('after enter');
      },
      enterCancelled() {
        console.log('enter cancelled');
      },
      beforeLeave() {
        console.log('before leave');
      },
      leave(el, done) {
        console.log('leave');

        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth - round * 10) + 'px';
          round++;

          if (round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20)
      },
      afterLeave() {
        console.log('after leave');
      },
      leaveCancelled() {
        console.log('leave cancelled');
      },
      addItem() {
        this.numbers.push(this.numbers[this.numbers.length - 1] + 1);
      },
      removeItem(index) {
        this.numbers.splice(index, 1);
      }
    },
    components: {
      appSuccessAlert: SuccessAlert,
      appDangerAlert: DangerAlert
    }
  }
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    /* opacity: 0; */
    transition: opacity 1s;
  }

  .fade-leave {
    /* opacity: 1; */
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }


  .slide-enter {
    /* transform: translateY(20px); */
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
  }

  .slide-move {
    transition: transform 0.5s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    } to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    } to {
      transform: translateY(20px);
    }
  }
</style>
