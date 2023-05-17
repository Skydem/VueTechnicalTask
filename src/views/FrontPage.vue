<template>
  <v-app>
    <v-main>
      <v-container fluid class="px-0">
        <IntroductionSheet />
        <MainSheet />
        <FooterSheet />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import IntroductionSheet from "@/components/FrontPage/IntroductionSheet.vue";
import MainSheet from "@/components/FrontPage/MainSheet.vue";
import FooterSheet from "@/components/FrontPage/FooterSheet.vue";

export default {
  name: "FrontPage",
  components: {FooterSheet, MainSheet, IntroductionSheet},
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}
</style>
