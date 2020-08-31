<template>
  <div>
    <AppHeader />
    <!-- <AppTopLine /> -->
    <Movies />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

// import AppHeader2 from "@/components/AppHeader2";
import AppTopLine from "@/components/AppTopLine";
import Movies from "@/components/Movies";

export default {
  components: {
    AppHeader,
    AppTopLine,
    Movies,
  },
};
</script>