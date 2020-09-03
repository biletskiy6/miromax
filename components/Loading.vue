<template>
  <div class="loading-page" v-if="loading">
    <div ref="overlay1" id="overlay-1">
      <h1>Loading...</h1>
    </div>
    <div ref="overlay2" id="overlay-2">
    </div>
  </div>
</template>

<script>
import {Expo, Power2, TimelineLite} from "gsap";

export default {
  name: "Loading",
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {

      const {overlay1, overlay2} = this.$refs
      const timeline = new TimelineLite();
      timeline
        .fromTo(
          overlay1,
          2,
          {left: 0, ease: Power2.easeInOut},
          {left: '110%', ease: Expo.easeInOut},
          // '-=0.5',
        )
        .fromTo(
          overlay2,
          2,
          {left: 0, ease: Power2.easeInOut},
          {left: '110%', ease: Expo.easeInOut},
          '-=1.9',
        );
      // this.loading = false
    }
  }

}


</script>


<style>
#overlay-1, #overlay-2 {
  /*transform: translateX(100%);*/
  opacity: 0.89;
}

#overlay-1 {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #1b1b1b;
  overflow: hidden;
  color: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transition-timing-function: cubic-bezier(.19, 1, .22, 1);
  -o-transition-timing-function: cubic-bezier(.19, 1, .22, 1);
  transition-timing-function: cubic-bezier(.19, 1, .22, 1);
  z-index: 100;
}

#overlay-2 {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #52badb;
  overflow: hidden;
  color: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transition-timing-function: cubic-bezier(.19, 1, .22, 1);
  -o-transition-timing-function: cubic-bezier(.19, 1, .22, 1);
  transition-timing-function: cubic-bezier(.19, 1, .22, 1);
  z-index: 50;
}
</style>
