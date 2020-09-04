<template>
  <div>
    <Movies />
  </div>
</template>

<script>



// import AppHeader2 from "@/components/AppHeader2";
import AppTopLine from "@/components/AppTopLine";
import Movies from "@/components/Movies";

export default {
  data: () => ({
    showSessionSchedule: false,
    pickMovie: false,
  }),
  beforeMount() {
    document.body.classList.add('homepage');
  },
  beforeDestroy() {
    document.body.classList.remove('homepage');
  },
  methods: {
    handleOpenSessionSchedule() {
     this.showSessionSchedule = true;
    },
    handleCloseSessionSchedule() {
      this.showSessionSchedule = false;
    },
    handleOpenPickMovie() {
      this.pickMovie = true;
    },
    handleClosePickMovie() {
      this.pickMovie = false;
    },
  },
  components: {

    Movies,

  },
};
</script>
