<template>
  <div>
    <AppHeader />
    <Movies />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import Movies from "@/components/Movies";

export default {
  components: {
    AppHeader,
    Movies,
  },
};
</script>