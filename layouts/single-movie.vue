<template>
  <div>
    <AppHeader
      @handleOpenSessionSchedule="handleOpenSessionSchedule"
      @handleOpenPickMovie="handleOpenPickMovie"
    />
    <SessionSchedule @handleCloseSessionSchedule="handleCloseSessionSchedule" :showSessionSchedule="showSessionSchedule"/>
    <PickMovie @handleClosePickMovie="handleClosePickMovie" :pickMovie="pickMovie"/>
    <MainMenu/>
    <nuxt />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import SessionSchedule from "@/components/SessionSchedule";
import PickMovie from "@/components/PickMovie";
import MainMenu from "@/components/MainMenu";
import AppTopLine from "~/components/AppTopLine";
export default {
  data: () => ({
    showSessionSchedule: false,
    pickMovie: false,
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
  },
  components: {
    AppHeader,
    SessionSchedule,
    AppTopLine,
    MainMenu,
    PickMovie
  },
};
</script>
