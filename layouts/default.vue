<template>
  <div>

    <AppHeader
      @handleOpenSessionSchedule="handleOpenSessionSchedule"
      @handleOpenPickMovie="handleOpenPickMovie"
      @handleOpenMenu="handleOpenMenu"
      @handleOpenAuth="handleOpenAuth"

    />
    <SessionSchedule @handleCloseSessionSchedule="handleCloseSessionSchedule" :showSessionSchedule="showSessionSchedule"/>
    <PickMovie @handleClosePickMovie="handleClosePickMovie" :pickMovie="pickMovie"/>
    <MainMenu  @handleCloseMenu="handleCloseMenu" :menu="menu"/>
    <Auth @handleAuthClose="handleAuthClose" :auth="auth"/>
    <nuxt />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import SessionSchedule from "@/components/SessionSchedule";
import PickMovie from "@/components/PickMovie";
import MainMenu from "@/components/MainMenu";
import AppTopLine from "~/components/AppTopLine";
import Auth from "@/components/Auth/Auth";
import debounce from 'lodash/debounce';
import { TimelineLite, Back, Power2, Expo } from 'gsap'
export default {
  data: () => ({
    showSessionSchedule: false,
    pickMovie: false,
    menu: false,
    auth: false,
    loading: false,
  }),

  beforeUpdate() {

  },

  mounted() {
    //

    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => this.$nuxt.$loading.finish(), 500)
    // });
  },
  // mounted() {
  //   if (process.browser) {
  //     window.onNuxtReady((app) => {
  //       console.log('Nuxt ready!')
  //     })
  //   }
  // },
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
    handleOpenMenu() {
      this.menu = true;
    },
    handleCloseMenu() {
      this.menu = false;
    },
    handleOpenAuth() {
      this.auth = true;
    },
    handleAuthClose() {
      this.auth = false;

    }

  },
  components: {
    Auth,
    AppHeader,
    SessionSchedule,
    AppTopLine,
    MainMenu,
    PickMovie
  },
};
</script>

