<template>
  <div>
    <AppHeader
      @handleOpenSessionSchedule="handleOpenSessionSchedule"
      @handleOpenPickMovie="handleOpenPickMovie"
      @handleOpenMenu="handleOpenMenu"

    />
    <SessionSchedule @handleCloseSessionSchedule="handleCloseSessionSchedule" :showSessionSchedule="showSessionSchedule"/>
    <PickMovie @handleClosePickMovie="handleClosePickMovie" :pickMovie="pickMovie"/>
    <MainMenu  @handleCloseMenu="handleCloseMenu" :menu="menu"/>
    <Auth/>
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
export default {
  data: () => ({
    showSessionSchedule: false,
    pickMovie: false,
    menu: false,

  }),
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
